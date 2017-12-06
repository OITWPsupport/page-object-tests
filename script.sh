#!/bin/sh

        unset URL
        unset TITLE
        unset HEADER
	unset SITE

export SITE=$1

while IFS='|' read -r url title header
do
	export URL=$url
	export TITLE=$title
	export HEADER=$header
	echo "RESULT: $url"
	result=`npm test`
	echo $result
	#resultstring=`echo $result | cut -d: -f4-99 | cut -d' ' -f2-99`
	#echo $resultstring
	#echo "................."
	unset URL
	unset TITLE
	unset HEADER
done < data/$SITE
