#!/bin/bash

docker-compose pull

export CURRENT_UID=$(id -u):$(id -g)

docker-compose up
