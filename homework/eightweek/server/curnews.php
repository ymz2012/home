<?php
/**
 * Created by PhpStorm.
 * User: ymz
 * Date: 17/3/2
 * Time: 下午6:37
 */
header("Content-type:application/json;charset=utf-8");
require_once('db.php');


if($link){

    $newsid = $_POST['newsid'];
    mysqli_query($link,"SET NAMES uft8");
    $sql = "SELECT FROM `news` WHERE `id` = {$newsid}";
    $result = mysqli_query($link,$sql);
    $senddata = array();
    while ($row = mysqli_fetch_assoc($result)){
        array_push($senddata,array(
            'id'=>$row['id'],
            'newstype'=>$row['newstype'],
            'newstitle'=>$row['newstitle'],
            'newsimg'=>$row['newsimg'],
            'newstime'=>$row['newstime'],
            'newssrc'=>$row['newssrc']
        ));
        echo json_encode($senddata);
    }


}
mysqli_close();


?>