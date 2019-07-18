#!/bin/bash

docker network create traefik

docker-compose pull

docker-compose down

# keep in mind there will be short down time

docker-compose up -d
