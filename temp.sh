#!/bin/sh

while IFS='' read -r line;
do
	#cmd="echo '$line' > data2/`echo $line | cut -d'/' -f3 | cut -d'.' -f1`"
	#`$cmd`
	hostname=`echo ${line} | cut -d'/' -f3 | cut -d'.' -f1`
	echo ${line} > data2/$hostname
done < data/all
