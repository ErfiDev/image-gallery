FROM golang:latest

WORKDIR ./app

COPY . .

CMD ["go", "run", "server/server.go"]