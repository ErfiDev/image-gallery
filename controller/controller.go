package controller

import (
	"context"
	"fmt"
	"github.com/erfidev/image-gallery/config"
	"github.com/erfidev/image-gallery/db/models"
	"github.com/erfidev/image-gallery/protobuf"
)

var App *config.App

func SetApp(a *config.App) {
	App = a
}

type FileUploader struct {
	protobuf.UnimplementedFileUploaderServer
}

func (FileUploader) Upload(ctx context.Context, req *protobuf.Req) (*protobuf.Res, error) {
	// finding user by name
	user := models.Users{
		Name: req.GetName(),
	}
	tx := App.DB.First(models.Users{} , fmt.Sprintf("name = %s" , req.GetName()))
	if tx.RowsAffected == 0 {
		newUser := models.Users{
			Name: req.GetName(),
		}

		result := App.DB.Create(&newUser)
		if result.RowsAffected == 1 {
			file := models.Files{
				UserId: int(newUser.ID),
				Addr:   req.GetAddr(),
			}

			resFile := App.DB.Create(&file)
			if resFile.RowsAffected == 1 {
				return &protobuf.Res{
					Status: 201,
					Msg:    "added!",
				}, nil
			}
		}
		return &protobuf.Res{
			Status: 500,
			Msg:    "error on creating!",
		}, nil
	}
	file := models.Files{
		UserId: int(user.ID),
		Addr:   req.GetAddr(),
	}

	result := App.DB.Create(&file)
	if result.RowsAffected != 0 {
		return &protobuf.Res{
			Status: 500,
			Msg:    "error on creating!",
		}, nil
	}

	return &protobuf.Res{
		Status: 201,
		Msg:    "created!",
	}, nil
}

func (FileUploader) Edit(ctx context.Context, req *protobuf.EditReq) (*protobuf.Res, error) {
	file := models.Files{}

	tx := App.DB.First(&file, "id = ?", req.GetId())
	if tx.RowsAffected == 1 {
		file.Addr = req.GetFields().GetAddr()

		tx := App.DB.Save(&file)
		if tx.RowsAffected == 0 {
			return &protobuf.Res{
				Status: 500,
				Msg:    "error on saving updated file!",
			}, nil
		}

		return &protobuf.Res{
			Status: 200,
			Msg:    "file updated!",
		}, nil
	}

	return &protobuf.Res{
		Status: 404,
		Msg:    "can't find file!",
	}, nil
}

func (FileUploader) Delete(ctx context.Context, req *protobuf.DeleteReq) (*protobuf.Res, error) {
	tx := App.DB.Where("id = ?", req.GetId()).Delete(&models.Files{})
	if tx.RowsAffected == 1 {
		return &protobuf.Res{
			Status: 200,
			Msg:    "file deleted!",
		}, nil
	}
		return &protobuf.Res{
			Status: 500,
			Msg:    "error on finding file!",
		}, nil

}

func (FileUploader) Get(ctx context.Context, req *protobuf.GetReq) (*protobuf.Responses, error) {
	result := App.DB.Model(&models.Files{}).Select("users.name, files.addr, files.id").Joins("left join users on files.user_id = users.id")
	rows, err := result.Rows()
	if err != nil {
		App.Logger.Fatalf("error on finding files: %s", err)
	}

	var resSlice []*protobuf.GetRes

	for rows.Next() {
		var fileX protobuf.GetRes
		err := rows.Scan(
			&fileX.Name,
			&fileX.Addr,
			&fileX.Id,
		)
		if err != nil {
			App.Logger.Fatalf("error on scanning: %s", err)
		}

		resSlice = append(resSlice, &fileX)
	}

	return &protobuf.Responses{
		Res: resSlice,
	} , nil
}

func (FileUploader) GetOne(ctx context.Context, req *protobuf.GetSpecificFile) (*protobuf.GetRes, error) {
	id := req.GetId()
	var fileX protobuf.GetRes

	App.DB.Model(&models.Files{}).Where("files.id = ?", id).Select("users.name, files.addr, files.id").Joins("left join users on files.user_id = users.id").Scan(&fileX)

	return &fileX, nil
}