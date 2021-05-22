SHELL := /bin/bash

new:
	docker run --rm -it -v $(shell pwd):/app -v /app/node_modules/ -w /app node:16.1 npm -y init svelte@next
	docker run --rm -v $(shell pwd):/app -v /app/node_modules/ -w /app node:16.1 npm -y i -D @sveltejs/adapter-static
	docker run --rm -v $(shell pwd):/app -v /app/node_modules/ -w /app node:16.1 npx -y svelte-add tailwindcss  --jit
	docker run --rm -v $(shell pwd):/app -v /app/node_modules/ -w /app node:16.1 npm install

fix-layout:
	$(shell shopt -s globstar; for file in docs/**/*; do mv "$$file" "$${file/__/}";done;)

build:
	rm -rf docs/*
	npm run build
	mv docs/_app docs/app
	find docs -type f \( -iname "*.html" -or -iname "*.*s" \) -exec sed -i 's|/./_app|/_app|g'  {} +
	find docs -type f \( -iname "*.html" -or -iname "*.*s" \) -exec sed -i 's/_app/app/g' {} +
	find docs -type f \( -iname "*.html" -or -iname "*.*s" \) -exec sed -i 's/__layout/layout/g' {} +

github-build: build fix-layout