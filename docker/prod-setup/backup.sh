#!/bin/bash

now=$(date +%Y_%m_%d_%H_%M_%S)

docker-compose exec mariadb /bin/bash -c "cd /backup && mkdir -p $now && mysqldump --user=mysqluser --password=mysqlpwd mysqldb > $now/dump.sql" \
    && echo "Backup successfull" || echo "Backup failed"