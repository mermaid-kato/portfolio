build:
	docker compose build

setup:
	docker compose run --rm backend rails db:create

up:
	docker compose up
