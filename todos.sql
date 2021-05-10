-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2021 at 10:36 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aah55`
--

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(65) NOT NULL,
  `owneremail` varchar(60) DEFAULT NULL,
  `ownerid` int(11) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `duedate` datetime DEFAULT NULL,
  `message` text DEFAULT NULL,
  `isdone` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `title`, `owneremail`, `ownerid`, `createddate`, `duedate`, `message`, `isdone`) VALUES
(1, '', 'janedoe@njit.edu', 2, '2017-01-01 00:00:00', '2017-05-03 00:00:00', 'This is test #B', 0),
(2, '', 'mjlee@njit.edu', 1, '2017-05-03 00:00:00', '2017-05-27 00:00:00', 'new name 2', 0),
(3, '', 'janedoe@njit.edu', 2, '2017-01-01 00:00:00', '2017-05-01 00:00:00', 'This is test #A', 0),
(4, '', 'mjlee@njit.edu', 1, '2017-05-03 00:00:00', '2017-05-26 00:00:00', 'test again', 0),
(19, '', 'person@gmail.com', 13, '2020-12-06 23:56:49', '2020-12-10 00:00:00', 'IS 218 Magic', 0),
(128, '', 'hanna@gmail.com', 22, '2020-12-11 00:00:00', '2021-01-13 00:00:00', 'Magic 2 Homework', 0),
(130, '', 'hanna@gmail.com', 22, '2020-12-11 10:18:42', '2020-12-23 00:00:00', 'Homework', 1),
(131, '', 'hanna@gmail.com', 22, '2020-12-10 00:00:00', '2020-12-25 00:00:00', 'IS 218 Homework', 0),
(133, '', 'tc422@njit.edu', 24, '2020-12-12 18:09:43', '2020-12-18 00:00:00', 'Jazzercise', 1),
(134, '', 'mimi456@njit.edu', 25, '2020-12-12 18:12:44', '2020-11-23 00:00:00', 'Finish HWK', 0),
(137, '', 'person@gmail.com', 13, '2020-12-13 11:52:50', '2020-12-25 00:00:00', 'Math Homework', 0),
(163, 'Math Test', 'abakir@gmail.com', 27, '2020-12-08 17:05:00', '2020-12-02 12:08:00', 'Study for your test', 0),
(164, 'Workout', 'abakir@gmail.com', 27, '2020-12-14 17:05:00', '2020-12-24 12:30:00', 'Run for 30 mins.\r\nDo some weight training for 30 mins', 1),
(165, 'IS218 Project', 'test@gmail.com', 27, '2020-12-14 18:45:00', '2020-12-16 13:49:00', 'Create a task website', 0),
(168, 'asdasd', 'test@gmail.com', 27, '2020-12-15 19:25:07', '2020-12-31 13:28:00', 'asdasd', 1),
(169, 'dsa', 'test@gmail.com', 21, '2020-12-15 19:26:47', '2020-12-23 13:29:00', 'asd', 1),
(170, 'sad', 'aba@gmail.com', 21, '2020-12-15 19:27:04', '2020-12-18 13:29:00', 'asd', 0),
(171, '', NULL, NULL, NULL, NULL, NULL, 0),
(181, 'Test1', 'test@gmail.com', 1, '2021-05-10 08:01:19', '2021-05-04 08:04:00', '67das', 0),
(182, 'test 6', 'test@gmail.com', 1, '2021-05-10 08:01:40', '2021-05-20 12:05:00', 'asdasd', 0),
(183, 'test3ads', 'test@gmail.com', 1, '2021-05-10 08:02:07', '2021-05-14 11:05:00', 'asd', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=184;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
