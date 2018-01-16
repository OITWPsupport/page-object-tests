#!/bin/bash
curl -O http://selenium-release.storage.googleapis.com/3.5/selenium-server-standalone-3.5.3.jar
curl -L https://github.com/mozilla/geckodriver/releases/download/v0.16.0/geckodriver-v0.16.0-macos.tar.gz | tar xz
nohup java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.5.3.jar &
echo "deployscript.sh has executed"
