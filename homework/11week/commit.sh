#!/bin/sh
echo '删除build'
rm -rf build
echo 'done'
echo '正在gulp'
gulp www
echo 'done'