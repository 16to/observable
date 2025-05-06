.PHONY: build run test clean

build:
	go build -o bin/webservice ./cmd/webservice

run: build
	./bin/webservice

test:
	go test ./...

clean:
	rm -rf bin/