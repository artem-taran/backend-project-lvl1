dependencies:
	npm ci

link:
	npm link

install: dependencies link

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
