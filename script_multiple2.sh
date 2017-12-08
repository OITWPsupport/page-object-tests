#!/bin/sh

export SITE=$1
export BROWSER=firefox
#result=`npm test`
#echo $result

count=0
rm -rf results/$1
mkdir results/$1

sort -R data/$SITE | head -n5 > data/temp

while IFS='|' read -r url title header
do
	count=$((count+1))
        export URL=$url
        export TITLE=$title
        export HEADER=$header
	(../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js > results/$1/$count) &

done < data/temp
