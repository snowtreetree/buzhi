echo "test 1"
cd build

scp -o stricthostkeychecking=no -P 22 -r ./* latiao@106.14.156.134:/www/buzhi
