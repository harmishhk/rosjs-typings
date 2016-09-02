all: prepare

.PHONY: prepare

prepare:
	@docker run --rm -it -v $(CURDIR)/..:/workspace -w /workspace/ros3d harmish/typescript typings install --save
