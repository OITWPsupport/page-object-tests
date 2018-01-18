#!/bin/sh

export BROWSER=firefox

count=0
rm -rf results_all
mkdir results_all

for site in $(ls data_all)
do
	count=$((count+1))
	export SITE=$site
	cmd="head -n1 data_all/$site"
	url=$(${cmd})
	#echo $site
	#echo $url
        export URL=$url
        (./node_modules/.bin/wdio wdio.conf.js > results_all/$site) &
        sleep 3

done 

echo "When tests are done, use this command to see if any of them have failed:"
echo "egrep -l 'failing|ERROR' `pwd`/results_all/*"
