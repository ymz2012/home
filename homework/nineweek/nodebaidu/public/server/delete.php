<?php
/**
 * Created by PhpStorm.
 * User: ymz
 * Date: 17/3/2
 * Time: 下午6:17
 */

require_once('db.php');


if($link){
    //插入新闻
    $newsid = $_POST['newsid'];
    mysqli_query($link,"SET NAMES utf8");
    /*$sql = "DELETE FROM `news` WHERE `news`.`id`={$newsid}";*/
    $sql = "UPDATE `news` SET status = '2' WHERE `id` = {$newsid}";
    mysqli_query($link,$sql);

    echo json_encode(array('删除状态'=>'成功'));

}
mysqli_close($link);
?>