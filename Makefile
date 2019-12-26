help: ## Show this help message.
	@echo 'usage: make [target] ...'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

install:
	composer install
	yarn install
	gulp styles
	gulp bundle

start:
	php -S localhost:3000 -t public

.PHONY: install start help
