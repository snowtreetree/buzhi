#!/bin/bash
set -e

branch=$TRAVIS_BRANCH

cd build
ls * */* -a

if [ $branch = 'master' ]
then
    scp -o stricthostkeychecking=no  -r ./* root@106.14.156.134:/www/buzhi
else
    echo $branch
    scp -o stricthostkeychecking=no  -r ./* root@106.14.156.134:/www/dev
fi