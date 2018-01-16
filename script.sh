#!/bin/sh

export SITE=$1
export BROWSER=firefox

# Test that we got one arg, which should name the site to be tested:
if [ $# -eq 0 ]; then
	echo "Please name a site to be tested. Pass the site name as a script argument, like ${0} [sitename]"
	exit
fi;

# Test that we have a data file for the site to be tested:
if [ ! -e "data/$SITE" ]; then
	echo "We don't have info to test $SITE. The file data/$SITE does not exist."
	exit
fi;

if [ ! -f "data/$SITE" ]; then
        echo "We don't have info to test $SITE. The file data/$SITE isn't a regular file we can read."
        exit
fi;

if [ ! -s "data/$SITE" ]; then
        echo "We don't have info to test $SITE. The file data/$SITE is empty."
        exit
fi;

count=0
rm -rf results/$SITE
mkdir results/$SITE

sort -R data/$SITE | head -n5 > data/temp

while IFS='|' read -r url title header
do
	count=$((count+1))
        export URL=$url
        export TITLE=$title
        export HEADER=$header
	(./node_modules/.bin/wdio wdio.conf.js > results/$1/$count) &
	sleep 2

done < data/temp

echo "Started $count tests against $SITE.boisestate.edu. Results will show up in `pwd`/results/$SITE"
echo "When tests are done, use this command to see if any of them have failed:"
echo "egrep -l 'failing|ERROR' `pwd`/results/$SITE/*"

