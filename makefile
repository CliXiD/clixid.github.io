new:
	docker run --rm -it -v $(shell pwd):/app -v /app/node_modules/ -w /app node:16.1 npm -y init svelte@next
	docker run --rm -v $(shell pwd):/app -v /app/node_modules/ -w /app node:16.1 npm -y i -D @sveltejs/adapter-static
	docker run --rm -v $(shell pwd):/app -v /app/node_modules/ -w /app node:16.1 npx -y svelte-add tailwindcss  --jit
	docker run --rm -v $(shell pwd):/app -v /app/node_modules/ -w /app node:16.1 npm install
