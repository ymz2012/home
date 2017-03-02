<?php
/**
 * Created by PhpStorm.
 * User: ymz
 * Date: 17/3/2
 * Time: 下午6:17
 */
header("Content-type:application/json;charset=utf-8");
require_once('db.php');


if($link){
    //插入新闻
    $newsid = $_POST['newsid'];
    mysqli_query($link,"SET NAMES uft8");
    $sql = "DELETE FROM `news` WHERE `news`.`id`={$newsid}";
    mysqli_query($link,$sql);

    echo json_encode(array('删除状态'=>'成功'));

}
mysqli_close();
?>