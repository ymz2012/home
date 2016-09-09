#!/bin/sh
if [ "$#" -lt 1 ] #判断一下参数的个数对不对
 then
       echo '没有javaWeb路径参数'
       echo '例子: sh commit.sh ../javaWeb'
       exit
fi
echo '删除build'
rm -rf build &&
echo 'done'
echo '正在gulp'
gulp default &&
echo 'done'
echo '正在更新java svn'
svn up $1 &&
echo 'done'
echo '开始复制'
cp ./build/*.html $1/WEB-INF/template &&
cp -r ./build/minsrc/src/css $1/resources &&
cp -r ./build/minsrc/src/js $1/resources &&
cp -r ./minsrc/src/js/ga $1/resources/js &&
cp -r ./build/minsrc/src/image $1/resources &&
cp -r ./build/minsrc/src/iconfont $1/resources &&
echo 'done'
echo 'svn 状态'
svn st $1