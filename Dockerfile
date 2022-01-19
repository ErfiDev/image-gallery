FROM golang:latest

WORKDIR ./app

COPY . .

RUN go install

EXPOSE 5000

CMD ["go", "run", "server/server.go"]