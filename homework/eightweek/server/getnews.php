<?php
/**
 * Created by PhpStorm.
 * User: ymz
 * Date: 17/3/1
 * Time: 上午11:56
 */
header("Content-type:application/json;charset=utf-8");
/*    $arr = array('newstype' => '百家',
                'newsimg' => './src/image/img4.jpeg',
                'newstime' => '2017-03-01',
                'newssrc' => '极客学院',
                'newstitle' => '测试动态获取的新闻标题'
        );
    echo json_encode($arr);
*/

$link = mysqli_connect('localhost','root','123456','baidunews',3306);
if(!$link){
    echo json_encode(array('连接信息' => '连接失败'));
}else{
    echo json_encode(array('连接信息' => '链接成功'));
}
?>