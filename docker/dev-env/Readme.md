# Dockerized DEV DB

The dockerized dev DB allows to track a snapshot of a dev database in git

## Running

Run ```./run.sh``` to start a new instance of the dev DB. 

    DB:       mysqldb
    Host:     localhost:33306
    Username: mysqluser
    Password: mysqlpwd

Running ```./run.sh``` again will reset the database to its original state.

## Changing data

The SQL to create the dev-db is stored in ```sql/snapshot.sql``` and tracked in git. 
If you created a new feature you should add some demo data for it to the dev database. 
To do so first reset the database by running ```./run.sh```. After that you should 
make your changes to the database and run ```./db-snapshot.sh``` it will recreate the 
file ```sql/snapshot.sql```. Finally add and commit the changes to that file.
