<?php
/**
 * Created by PhpStorm.
 * User: ymz
 * Date: 17/3/1
 * Time: 上午11:56
 */
require_once('db.php');
if($link){
    //执行成功的过程
    if(@$_GET['newstype']){
        $newstype = $_GET['newstype'];
        $sql = "SELECT * FROM news WHERE `newstype` = '{$newstype}' and status = '1'";
        mysqli_query($link,"SET NAMES utf8");
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

        }
        echo json_encode($senddata);
    }else{
        $sql = "SELECT * FROM news WHERE status = '1'";
        mysqli_query($link,"SET NAMES utf8");
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

        }
        echo json_encode($senddata);
    }

}else{
    echo json_encode(array('success'=>'none'));
}
mysqli_close($link);
?>