protoc --js_out=import_style=commonjs:./client/src/proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./client/src/proto ./app.proto
protoc --go_out=. --go-grpc_out=. ./app.proto