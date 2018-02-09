#!/bin/bash

while read -r site; do
	cp data/${site} data/${site}_orig
	cat data/${site}_orig | sed 's/^https:\/\/\(.*\).boisestate.edu\/\(.*\)$/https:\/\/wwwnew.boisestate.edu\/\1\/\2/' > data/${site}

done < sites
