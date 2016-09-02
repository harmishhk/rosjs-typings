all: prepare

.PHONY: prepare

prepare:
	@docker run --rm -it -v $(CURDIR)/..:/workspace -w /workspace/roslib harmish/typescript typings install --save
