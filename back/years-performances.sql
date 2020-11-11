-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 11, 2020 at 04:26 PM
-- Server version: 5.7.19
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `years-performances`
--

-- --------------------------------------------------------

--
-- Table structure for table `years_performances`
--

DROP TABLE IF EXISTS `years_performances`;
CREATE TABLE IF NOT EXISTS `years_performances` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Year` int(11) NOT NULL,
  `Performace_type` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Performace_percent` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `years_performances`
--

INSERT INTO `years_performances` (`id`, `Year`, `Performace_type`, `Performace_percent`) VALUES
(1, 2015, 'data', 45),
(2, 2015, 'it', 43),
(3, 2015, 'regulation', 6),
(4, 2015, 'cyber', 78),
(5, 2015, 'programing', 89),
(6, 2015, 'communications', 90),
(7, 2015, 'innovation', 98),
(8, 2015, 'coreSystems', 90),
(9, 2015, 'cpe', 56),
(10, 2015, 'personalProject', 97),
(11, 2016, 'data', 76),
(12, 2016, 'it', 56),
(13, 2016, 'regulation', 98),
(14, 2016, 'cyber', 45),
(15, 2016, 'programing', 55),
(16, 2016, 'communications', 34),
(17, 2016, 'innovation', 57),
(18, 2016, 'coreSystems', 97),
(19, 2016, 'cpe', 4),
(20, 2016, 'personalProject', 97),
(21, 2017, 'data', 67),
(22, 2017, 'it', 56),
(23, 2017, 'regulation', 45),
(24, 2017, 'cyber', 45),
(25, 2017, 'programing', 35),
(26, 2017, 'communications', 85),
(27, 2017, 'innovation', 24),
(28, 2017, 'coreSystems', 57),
(29, 2017, 'cpe', 38),
(30, 2017, 'personalProject', 46),
(31, 2018, 'data', 56),
(32, 2018, 'it', 98),
(33, 2018, 'regulation', 6),
(34, 2018, 'cyber', 12),
(35, 2018, 'programing', 34),
(36, 2018, 'communications', 57),
(37, 2018, 'innovation', 56),
(38, 2018, 'coreSystems', 90),
(39, 2018, 'cpe', 19),
(40, 2018, 'personalProject', 45),
(41, 2019, 'data', 98),
(42, 2019, 'it', 98),
(43, 2019, 'regulation', 5),
(44, 2019, 'cyber', 89),
(45, 2019, 'programing', 90),
(46, 2019, 'communications', 58),
(47, 2019, 'innovation', 12),
(48, 2019, 'coreSystems', 15),
(49, 2019, 'cpe', 47),
(50, 2019, 'personalProject', 89);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
