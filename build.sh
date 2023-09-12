#!/usr/bin/env bash

# tps 12/9/23 build to test or prod

echo test no old backup file
test -f vite.config.ts.backup && echo First, remove vite.config.ts.backup && exit 1

# if [[ "$#" -eq 0 ] || [[ "$1" != "test" ] && [ "$1" != "prod"]]]; then
if [[ $# -ne 1 || ! $1 =~ ^(test|prod)$ ]] ; then
    echo Missing 'test' or 'prod' argument
    exit 1
fi 

cp vite.config.ts vite.config.ts.backup 
rm -r ./dist
if [ "$1" == "prod" ] ; then
    echo compile for prod so set base folder to '/'
    sed -i s-base:-//base:-g vite.config.ts
fi
npm run build
rm -r ./dist/store
rsync -avz dist/ linode2.netmaster.dk:/home/tps/testspottps/netmaster.dk.vite
mv vite.config.ts.backup vite.config.ts

if [ "$1" == "test" ] ; then 
    echo buiding for test to run from https://testspottps.netmaster.dk/netmaster.dk.vite
elif [ "$1" == "prod" ] ; then 
    echo buiding for prod
    echo Log på server med ssh
    echo Fra linode2 /home/tps udføres:
    echo sudo zip -r /var/www/www.netmaster.dk/`date +%s`.zip /var/www/www.netmaster.dk/htdocs \; \\
    echo sudo rsync -a --exclude=store testspottps/netmaster.dk.vite/ /var/www/www.netmaster.dk/htdocs/  \; \\
    echo sudo chown -R www-data:www-data /var/www/www.netmaster.dk
fi 
