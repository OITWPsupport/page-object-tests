#!/bin/sh

#export SITE=$1
export SITE=oit
export BROWSER=firefox
#result=`npm test`
#echo $result

count=0

while IFS='|' read -r url title header
do
	count=$((count+1))
        export URL=$url
        export TITLE=$title
        export HEADER=$header
	(../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js > $count) &

done < data/$SITE
