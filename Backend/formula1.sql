-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2024 at 03:59 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `formula1`
--

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(200) NOT NULL,
  `country_flag` varchar(200) NOT NULL,
  `team` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `date_of_birth` date NOT NULL,
  `driver_number` int(50) NOT NULL,
  `wins` int(11) DEFAULT 0,
  `color` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `drivers`
--

INSERT INTO `drivers` (`id`, `name`, `img`, `country_flag`, `team`, `country`, `date_of_birth`, `driver_number`, `wins`, `color`) VALUES
(1, 'Alexander Albon', 'http://localhost/Backend/drivers/albon.jpg\n', 'http://localhost/Backend/flags/thailand.svg\n', 'Williams', 'Thailand', '1996-03-23', 23, 0, '#64C4FF'),
(2, 'Fernando Alonso', 'http://localhost/Backend/drivers/alonso.jpg\n', 'http://localhost/Backend/flags/spain.png\n', 'Aston Martin', 'Spain', '1981-07-29', 14, 32, '#229971'),
(3, 'Valtteri Bottas', 'http://localhost/Backend/drivers/bottas.jpg\n', 'http://localhost/Backend/flags/finland.png\n', 'Alfa Romeo', 'Finland', '1989-08-28', 77, 10, '#52E252'),
(4, 'Pierre Gasly', 'http://localhost/Backend/drivers/gasly.jpg\n', 'http://localhost/Backend/flags/france.png\n', 'Alpine', 'France', '1996-02-07', 10, 1, '#0093CC'),
(5, 'Lewis Hamilton', 'http://localhost/Backend/drivers/hamilton.jpg\n', 'http://localhost/Backend/flags/uk.png\n', 'Mercedes', 'United Kingdom', '1985-01-07', 44, 103, '#27F4D2'),
(6, 'Nico Hulkenberg', 'http://localhost/Backend/drivers/hulkenberg.jpg\n', 'http://localhost/Backend/flags/germany.png\n', 'Haas', 'Germany', '1987-08-19', 27, 0, '#B6BABD'),
(7, 'Charles Leclerc', 'http://localhost/Backend/drivers/leclerc.jpg\n', 'http://localhost/Backend/flags/monaco.png\n', 'Ferrari', 'Monaco', '1997-10-16', 16, 5, '#E80020'),
(8, 'Kevin Magnussen', 'http://localhost/Backend/drivers/magnussen.jpg\n', 'http://localhost/Backend/flags/denmark.png\n', 'Haas', 'Denmark', '1992-10-05', 20, 1, '#B6BABD'),
(9, 'Lando Norris', 'http://localhost/Backend/drivers/norris.jpg\n', 'http://localhost/Backend/flags/uk.png\n', 'McLaren', 'United Kingdom', '1999-11-13', 4, 1, '#FF8000'),
(10, 'Esteban Ocon', 'http://localhost/Backend/drivers/ocon.jpg\n', 'http://localhost/Backend/flags/france.png\n', 'Alpine', 'France', '1996-09-17', 31, 1, '#0093CC'),
(11, 'Sergio Perez', 'http://localhost/Backend/drivers/perez.jpg\n', 'http://localhost/Backend/flags/mexico.png\n', 'Red Bull Racing', 'Mexico', '1990-01-26', 11, 6, '#3671C6'),
(12, 'Oscar Piastri', 'http://localhost/Backend/drivers/piastri.jpg\n', 'http://localhost/Backend/flags/australia.png\n', 'McLaren', 'Australia', '2001-04-06', 3, 0, '#FF8000'),
(13, 'Daniel Ricciardo', 'http://localhost/Backend/drivers/ricciardo.jpg\n', 'http://localhost/Backend/flags/australia.png\n', 'AlphaTauri', 'Australia', '1989-07-01', 3, 8, '#6692FF'),
(14, 'George Russell', 'http://localhost/Backend/drivers/russell.jpg\n', 'http://localhost/Backend/flags/uk.png\n', 'Mercedes', 'United Kingdom', '1998-02-15', 63, 1, '#27F4D2'),
(15, 'Carlos Sainz', 'http://localhost/Backend/drivers/sainz.jpg\n', 'http://localhost/Backend/flags/spain.png\n', 'Ferrari', 'Spain', '1994-09-01', 55, 1, '#E80020'),
(16, 'Logan Sargeant', 'http://localhost/Backend/drivers/sargeant.jpg\n', 'http://localhost/Backend/flags/usa.png\n', 'Williams', 'United States', '2000-12-31', 2, 0, '#64C4FF'),
(17, 'Lance Stroll', 'http://localhost/Backend/drivers/stroll.jpg\n', 'http://localhost/Backend/flags/canada.png\n', 'Aston Martin', 'Canada', '1998-10-29', 18, 0, '#229971'),
(18, 'Yuki Tsunoda', 'http://localhost/Backend/drivers/tsunoda.jpg\n', 'http://localhost/Backend/flags/japan.png\n', 'AlphaTauri', 'Japan', '2000-05-11', 22, 0, '#6692FF'),
(19, 'Max Verstappen', 'http://localhost/Backend/drivers/verstappen.jpg\n', 'http://localhost/Backend/flags/netherlands.png\n', 'Red Bull Racing', 'Netherlands', '1997-09-30', 33, 41, '#3671C6'),
(20, 'Zhou Guanyu', 'http://localhost/Backend/drivers/zhou.jpg\n', 'http://localhost/Backend/flags/china.png\n', 'Alfa Romeo', 'China', '1999-05-30', 24, 0, '#52E252');

-- --------------------------------------------------------

--
-- Table structure for table `drivers_vote`
--

CREATE TABLE `drivers_vote` (
  `vote_id` int(11) NOT NULL,
  `driver_id` int(11) DEFAULT NULL,
  `vote_count` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `drivers_vote`
--

INSERT INTO `drivers_vote` (`vote_id`, `driver_id`, `vote_count`) VALUES
(1, 1, 0),
(2, 2, 0),
(3, 3, 0),
(4, 4, 1),
(5, 5, 54),
(6, 6, 0),
(7, 7, 34),
(8, 8, 1),
(9, 9, 0),
(10, 10, 0),
(11, 11, 0),
(12, 12, 0),
(13, 13, 1),
(14, 14, 1),
(15, 15, 0),
(16, 16, 0),
(17, 17, 1),
(18, 18, 0),
(19, 19, 55),
(20, 20, 0);

-- --------------------------------------------------------

--
-- Table structure for table `race_results`
--

CREATE TABLE `race_results` (
  `id` int(3) UNSIGNED NOT NULL,
  `grand_prix` varchar(100) NOT NULL,
  `race_date` date NOT NULL,
  `winner` varchar(100) NOT NULL,
  `car` varchar(100) NOT NULL,
  `laps` int(3) NOT NULL,
  `race_time` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `race_results`
--

INSERT INTO `race_results` (`id`, `grand_prix`, `race_date`, `winner`, `car`, `laps`, `race_time`) VALUES
(1, 'Bahrain', '2024-03-02', 'Max Verstappen', 'RED BULL RACING HONDA RBPT', 57, '1:31:44.742'),
(2, 'Saudi Arabia', '2024-03-09', 'Max Verstappen', 'RED BULL RACING HONDA RBPT', 50, '1:20:43.273'),
(3, 'Australia', '2024-03-24', 'Carlos Sainz', 'FERRARI', 58, '1:20:26.843'),
(4, 'Japan', '2024-04-07', 'Max Verstappen', 'RED BULL RACING HONDA RBPT', 53, '1:54:23.566'),
(5, 'China', '2024-04-21', 'Max Verstappen', 'RED BULL RACING HONDA RBPT', 56, '1:40:52.554'),
(6, 'Miami', '2024-05-05', 'Lando Norris', 'MCLAREN MERCEDES', 57, '1:30:49.876'),
(7, 'Canada', '2024-06-10', 'Max Verstappen', 'RED BULL RACING HONDA RBPT', 70, '1:40:52.466'),
(9, 'Emilia Romagna', '2024-04-04', 'Max Verstappen', 'RED BULL RACING HONDA RBPT', 63, '1:25:25.252'),
(10, 'Monaco', '2024-05-26', 'Charles Leclerc', 'FERRARI', 78, '2:23:15.554'),
(11, 'Spain', '2024-06-20', 'Max Verstappen', 'RED BULL RACING HONDA RBPT', 53, '1:54:23.568'),
(12, 'Mexico', '2024-05-29', 'Max Verstappen', 'RED BULL RACING HONDA RBPT', 53, '1:54:23.568'),
(13, 'Spain', '2024-06-06', 'Charles Leclerc', 'FERRARI', 53, '1:31:44.742');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` int(3) UNSIGNED NOT NULL,
  `title` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `flag` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `title`, `location`, `date`, `flag`) VALUES
(1, 'Australian Grand Prix', 'Melbourne', 'Feb 29-March 2', 'http://localhost/Backend/flags/australia.png\r\n'),
(2, 'Bahrain Grand Prix', 'Sakhir', 'March 7-9', 'http://localhost/Backend/flags/bahrain.png\r\n'),
(3, 'Saudi Arabia Grand Prix', 'Jeddah', 'March 22-24', 'http://localhost/Backend/flags/saudiArabia.png\r\n'),
(4, 'Japanese Grand Prix', 'Suzuka', 'April 5-7', 'http://localhost/Backend/flags/japan.png\r\n'),
(5, 'Chinese Grand Prix', 'Shanghai', 'April 19-21', 'http://localhost/Backend/flags/china.png\r\n'),
(6, 'Miami Grand Prix', 'Miami', 'May 3-5', 'http://localhost/Backend/flags/usa.png\r\n'),
(7, 'Emilia-Romagna Grand Prix', 'Imola', 'May 17-19', 'http://localhost/Backend/flags/italy.png\r\n'),
(8, 'Monaco Grand Prix', 'Monaco', 'May 24-26', 'http://localhost/Backend/flags/monaco.png\r\n'),
(9, 'Canadian Grand Prix', 'Montreal', 'June 7-9', 'http://localhost/Backend/flags/canada.png\r\n'),
(10, 'Spanish Grand Prix', 'Barcelona', 'June 21-23', 'http://localhost/Backend/flags/spain.png\r\n'),
(11, 'Austrian Grand Prix', 'Spielberg', 'June 28-30', 'http://localhost/Backend/flags/austria.png\r\n'),
(12, 'British Grand Prix', 'Silverstone', 'July 5-7', 'http://localhost/Backend/flags/uk.png\r\n'),
(13, 'Hungarian Grand Prix', 'Budapest', 'July 19-21', 'http://localhost/Backend/flags/hungary.png\r\n'),
(14, 'Belgian Grand Prix', 'Spa', 'July 26-28', 'http://localhost/Backend/flags/belgium.png\r\n'),
(15, 'Dutch Grand Prix', 'Zandvoort', 'August 23-25', 'http://localhost/Backend/flags/netherlands.png\r\n'),
(16, 'Italian Grand Prix', 'Monza', 'Aug 30-Sept 1', 'http://localhost/Backend/flags/italy.png\r\n'),
(17, 'Azerbaijan Grand Prix', 'Baku', 'Sept 13-15', 'http://localhost/Backend/flags/azerbaijan.png\r\n'),
(18, 'Singapore Grand Prix', 'Singapore', 'Sept 22-24', 'http://localhost/Backend/flags/singapore.png'),
(19, 'United States Grand Prix', 'Austin', 'Oct 18-20', 'http://localhost/Backend/flags/usa.png'),
(20, 'Mexican Grand Prix', 'Mexico City', 'Oct 25-27', 'http://localhost/Backend/flags/mexico.png'),
(21, 'Brazilian Grand Prix', 'Sao Paulo', 'Nov 1-3', 'http://localhost/Backend/flags/brazil.png'),
(22, 'Las Vegas Grand Prix', 'Las Vegas', 'Nov 21-23', 'http://localhost/Backend/flags/usa.png'),
(23, 'Qatar Grand Prix', 'Lusail', 'Nov 29-Dec 1', 'http://localhost/Backend/flags/qatar.png'),
(24, 'Abu Dhabi Grand Prix', 'Yas Marina', 'Dec 6-8', 'http://localhost/Backend/flags/uae.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(3) UNSIGNED NOT NULL,
  `name` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `role` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'Duda', 'duda@gmail.com', 'Duda2004!', 1),
(2, 'Luka', 'luka@gmail.com', 'Luka2004!', 0),
(3, 'Nika', 'nika@gmail.com', 'Nika2004!', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drivers_vote`
--
ALTER TABLE `drivers_vote`
  ADD PRIMARY KEY (`vote_id`),
  ADD KEY `driver_id` (`driver_id`);

--
-- Indexes for table `race_results`
--
ALTER TABLE `race_results`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `drivers_vote`
--
ALTER TABLE `drivers_vote`
  MODIFY `vote_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `race_results`
--
ALTER TABLE `race_results`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `drivers_vote`
--
ALTER TABLE `drivers_vote`
  ADD CONSTRAINT `drivers_vote_ibfk_1` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
