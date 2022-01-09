package controller

import (
	"context"
	"github.com/erfidev/file-uploader/config"
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

	return &protobuf.Res{} , nil
}
func (FileUploader) Edit(ctx context.Context, req *protobuf.Req) (*protobuf.Res, error) {

	return &protobuf.Res{} , nil
}
func (FileUploader) Delete(ctx context.Context, req *protobuf.DeleteReq) (*protobuf.Res, error) {

	return &protobuf.Res{} , nil
}
