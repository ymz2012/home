-- MySQL dump 10.13  Distrib 5.7.17, for osx10.11 (x86_64)
--
-- Host: localhost    Database: baidunews
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `newstype` char(200) DEFAULT NULL,
  `newstitle` varchar(200) DEFAULT NULL,
  `newsimg` varchar(200) DEFAULT NULL,
  `newstime` datetime DEFAULT NULL,
  `newssrc` char(100) DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'精选','测试数据库中的第一条数','src/image/img4.jpeg','2017-03-01 00:00:00','极客学院',1),(2,'百家','嘿嘿嘿','src/image/img1.jpeg','2017-03-10 00:00:00','sina',1),(9,'精选','321','src/image/img2.jpg','2017-03-23 00:00:00','src',2),(16,'娱乐','嘿嘿嘿我是娱乐新闻','src/image/img4.jpeg','2017-03-05 00:00:00','娱乐',1),(17,'社会','嘿嘿嘿我是社会新闻1','src/image/img2.jpg','2017-03-01 00:00:00','src',1),(18,NULL,NULL,NULL,NULL,NULL,2),(19,NULL,NULL,NULL,NULL,NULL,2),(20,'精选','1','1','2017-03-01 00:00:00','1',2),(21,'精选','2','2','2017-03-01 00:00:00','2',2),(22,'精选','3','3','2017-03-02 00:00:00','3',2),(23,'本地','嘿嘿嘿我是本地新闻','src/image/img4.jpeg','2017-03-09 00:00:00','src',1),(24,'军事','测试','src/image/img4.jpeg','2017-03-04 00:00:00','badiu',1),(25,'精选','<script>alert(0)</script>','<script>alert(0)</script>','2017-03-02 00:00:00','<script>alert(0)</script>',2),(27,'精选','123','123','2017-03-03 00:00:00','123',1),(28,'精选','345','345','2017-03-04 00:00:00','345',1),(29,'精选','456','345','2017-03-03 00:00:00','456',1),(30,'精选','123','123','2017-03-02 00:00:00','123',1),(31,'精选','34','21','2017-03-02 00:00:00','23',1),(32,'精选','23','34','2017-03-02 00:00:00','56',1),(33,'精选','<script>alert(0)</script>','<script>alert(0)</script>','2017-03-01 00:00:00','<script>alert(0)</script>',2),(34,'精选','&lt;script&gt;alert(0)&lt;/script&gt;','&lt;script&gt;alert(0)&lt;/script&gt;','2017-03-04 00:00:00','&lt;script&gt;alert(0)&lt;/script&gt;',1),(35,'精选','&lt;script&gt;alert(0)&lt;/script&gt;','&lt;script&gt;alert(0)&lt;/script&gt;','2017-03-31 00:00:00','&lt;script&gt;alert(0)&lt;/script&gt;',2);
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-22 15:02:44
