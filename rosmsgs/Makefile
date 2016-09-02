all: prepare build

.PHONY: prepare build run stop

prepare:
	@docker run --rm -it -v $(CURDIR)/..:/workspace -w /workspace/rosmsgs harmish/typescript typings install --save

build:
	@docker run --rm -v $(CURDIR):/workspace harmish/typescript tsc -p /workspace || true
	@docker build -t harmish/rosmsgs .

run:
	@docker run -d --name=rosmsgs \
     --restart=unless-stopped \
     -p 80:80 \
     harmish/rosmsgs

stop::
	@docker stop rosmsgs >/dev/null 2>&1 || true
	@docker rm rosmsgs >/dev/null 2>&1 || true
