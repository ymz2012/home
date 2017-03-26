#!/bin/bash


#获取当前程序进程pid
pid=`ps -e |grep '[0-9].node./'|awk '{print $1}'`
echo "node.js的PID是:"$pid
if [ ! $pid ]
then
    echo "node.js not found"
    echo "将启动nodejs"
    pm2 start ./bin/www
    break
fi
while [ true ]
do

    #获取当前node所占用CPU
    CPURate=`pm2 prettylist |grep memory |cut -d : -f 4 |cut -d } -f 1`
    MEMRate=`pm2 prettylist |grep memory |cut -d : -f 3 |cut -d , -f 1`
    echo "cpu="$CPURate
    echo "mem="$(($MEMRate/1024/1024))M

    #若所占CPU负载超过95%，重启当前进程
    if [ $CPURate -gt 95 ];then
        echo "CPU 占有率超过95%，将重启该服务"
        pm2 restart ./bin/www
    elif [ $(($MEMRate/1024/1024)) -gt 2048 ];then
        echo "内存占有超过2G，将重启该服务"
        pm2 restart ./bin/www
    else
        echo "服务运行正常，5s后重新检测"
    fi
    sleep 5s
done