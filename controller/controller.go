package controller

import (
	"context"
	"github.com/erfidev/file-uploader/config"
	"github.com/erfidev/file-uploader/db/models"
	"github.com/erfidev/file-uploader/protobuf"
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
	tx := App.DB.Take(&user)
	if tx.RowsAffected == 0 {
		newUser := models.Users{
			Name: req.GetName(),
		}

		result := App.DB.Create(&newUser)
		if result.RowsAffected == 1 {
			file := models.Files{
				UserId: int(newUser.ID),
				Addr: req.GetAddr(),
			}

			resFile := App.DB.Create(&file)
			if resFile.RowsAffected == 1 {
				return &protobuf.Res{
					Status: 201,
					Msg:    "added!",
				} , nil
			}
		}
		return &protobuf.Res{
			Status: 500,
			Msg:    "error on creating!",
		} , nil
	}

	file := models.Files{
		UserId: int(user.ID),
		Addr: req.GetAddr(),
	}

	result := App.DB.Create(&file)
	if result.RowsAffected != 0 {
		return &protobuf.Res{
			Status: 500,
			Msg:    "error on creating!",
		} , nil
	}


	return &protobuf.Res{
		Status: 201,
		Msg:    "created!",
	} , nil
}
func (FileUploader) Edit(ctx context.Context, req *protobuf.Req) (*protobuf.Res, error) {

	return &protobuf.Res{} , nil
}
func (FileUploader) Delete(ctx context.Context, req *protobuf.DeleteReq) (*protobuf.Res, error) {

	return &protobuf.Res{} , nil
}
