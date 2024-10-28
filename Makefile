build:
	docker compose build

up:
	docker compose run --rm backend sh -c "bundle install"
	docker compose up
