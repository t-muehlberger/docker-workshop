#!/bin/bash

# this script creates a snapshot of the local docker dev db

docker-compose exec mariadb /bin/bash -c "mysqldump --user=mysqluser --password=mysqlpwd mysqldb > /docker-entrypoint-initdb.d/snapshot.sql" \
    && echo "Snapshot successfull" || echo "Snapshot failed"
