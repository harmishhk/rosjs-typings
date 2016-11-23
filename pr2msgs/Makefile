all: prepare build

.PHONY: prepare build run stop

prepare:
	@docker run --rm -it -v $(CURDIR)/..:/workspace -w /workspace/pr2msgs harmish/typescript typings install --save

build:
	@docker run --rm -v $(CURDIR):/workspace harmish/typescript tsc -p /workspace || true
	@docker build -t harmish/pr2msgs .

run:
	@docker run -d --name=pr2msgs \
     --restart=unless-stopped \
     -p 80:80 \
     harmish/pr2msgs

stop::
	@docker stop pr2msgs >/dev/null 2>&1 || true
	@docker rm pr2msgs >/dev/null 2>&1 || true
