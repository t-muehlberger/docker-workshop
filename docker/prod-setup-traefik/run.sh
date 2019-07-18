#!/bin/bash

docker-compose pull

docker-compose build --pull --no-cache

docker-compose down

# keep in mind there will be short down time

docker-compose up -d
