#!/bin/sh

echo `date` > 1
echo `date` > 2
echo `date` > 3
echo `date` > 4
echo `date` > 5
echo `date` > 6
echo `date` > 7
echo `date` > 8
echo `date` > 9
echo `date` > 10
echo `date` > 11

(BROWSER=firefox SITE=oit URL=https://oit.boisestate.edu/ ../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js >> 1) &
(BROWSER=firefox SITE=oit URL=https://oit.boisestate.edu/software/internet-browsers/ ../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js >> 2) &
(BROWSER=firefox SITE=oit URL=https://oit.boisestate.edu/services/ ../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js >> 3) &
(BROWSER=firefox SITE=oit URL=https://oit.boisestate.edu/quick-links/ ../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js >> 4) &
(BROWSER=firefox SITE=oit URL=https://oit.boisestate.edu/printing/broncoprint/ ../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js >> 5 && echo `date` >> 5) &
(BROWSER=firefox SITE=oit URL=https://oit.boisestate.edu/software/ ../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js >> 6 && echo `date` >> 6) &
(BROWSER=firefox SITE=aasc URL=https://aasc.boisestate.edu/find-advisor/aasc-advising/ ../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js >> 7 && echo `date` >> 7) &
(BROWSER=firefox SITE=aasc URL=https://aasc.boisestate.edu/aasc-academic-advisors/ ../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js >> 8 && echo `date` >> 8) &
(BROWSER=firefox SITE=aasc URL=https://aasc.boisestate.edu/events/ ../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js >> 9 && echo `date` >> 9) &
(BROWSER=firefox SITE=aasc URL=https://aasc.boisestate.edu/aasc-mission/ ../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js >> 10 && echo `date` >> 10) &
(BROWSER=firefox SITE=aasc URL=https://aasc.boisestate.edu/aasc-newsletter/ ../../20171020/migrationtest/git_repos/migrationtest/node_modules/webdriverio/bin/wdio wdio.conf.js >> 11 && echo `date` >> 11) &

