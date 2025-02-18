setup: install
	npx simple-git-hooks

install:
	npm ci

test:
	npm run test

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

test-step:
	node --test --test-name-pattern step$(STEP)
