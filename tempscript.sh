#!/bin/sh
while read -r line; do
    wget -q $line
    header=`cat index.html | grep entry-title | sed 's/\<h1 \(.*\)entry-title"\>\([^<]*\)\<\/h1\(.*\)/\2/' | tr '[:lower:]' '[:upper:]'`
    headerclean=`echo $header | sed 's/\s+\(.*\)/\1/'`
    echo $header
    title=`cat index.html | grep '<title>' | sed 's/\<title\>\(.*\)\<\/title\>/\1/'`
    echo "$line|$title|$headerclean" >> career
    sleep 2
    rm index.html
done < URLs
