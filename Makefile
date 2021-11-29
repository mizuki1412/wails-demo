BINARY=wails-demo
VERSION=1.0.0
DATE=`date +%FT%T%z`
.PHONY: build deploy tidy

default:
	@echo ${BINARY}
	@echo ${VERSION}
	@echo ${DATE}

tidy:
	@go mod tidy -compat=1.17

build:
	@wails build -s -clean -platform windows
	@echo "[ok] build ${BINARY}"

upgrade:
	@wails update

deploy: build
	@mv build/bin/${BINARY}.exe ~/Downloads/${BINARY}.exe
	@echo "[ok] deploy ${BINARY}.exe"