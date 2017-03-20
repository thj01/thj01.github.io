-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Vært: 127.0.0.1
-- Genereringstid: 18. 11 2016 kl. 09:29:07
-- Serverversion: 10.1.16-MariaDB
-- PHP-version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mentor`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `klasser_og_mentorer`
--

CREATE TABLE `klasser_og_mentorer` (
  `Klasse` varchar(3) COLLATE utf8_danish_ci NOT NULL,
  `Mentor` varchar(3) COLLATE utf8_danish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_danish_ci;

--
-- Data dump for tabellen `klasser_og_mentorer`
--

INSERT INTO `klasser_og_mentorer` (`Klasse`, `Mentor`) VALUES
('1a', 'tj'),
('1b', 'ba'),
('1x', 'cc'),
('2a', 'tj'),
('2b', 'ba'),
('2x', 'cc'),
('3a', 'tj'),
('3b', 'ba');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `klasse_og_elever`
--

CREATE TABLE `klasse_og_elever` (
  `Klasse` varchar(3) COLLATE utf8_danish_ci NOT NULL,
  `Antal Elever` tinyint(2) NOT NULL,
  `Piger` tinyint(2) NOT NULL,
  `Drenge` tinyint(2) NOT NULL,
  `Startår` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_danish_ci;

--
-- Data dump for tabellen `klasse_og_elever`
--

INSERT INTO `klasse_og_elever` (`Klasse`, `Antal Elever`, `Piger`, `Drenge`, `Startår`) VALUES
('1a', 17, 9, 8, 2016),
('1b', 16, 8, 8, 2016),
('1x', 28, 13, 15, 2016),
('2a', 22, 10, 12, 2015),
('2b', 24, 13, 11, 2015),
('2x', 31, 17, 14, 2015),
('3a', 21, 8, 13, 2015),
('3b', 22, 9, 13, 2015);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `lærere`
--

CREATE TABLE `lærere` (
  `Lærer` varchar(3) COLLATE utf8_danish_ci NOT NULL,
  `Navn` varchar(50) COLLATE utf8_danish_ci NOT NULL,
  `Lokale` varchar(4) COLLATE utf8_danish_ci NOT NULL,
  `Mobil` int(8) NOT NULL,
  `Mail` varchar(50) COLLATE utf8_danish_ci NOT NULL,
  `fag1` varchar(10) COLLATE utf8_danish_ci NOT NULL,
  `fag2` varchar(10) COLLATE utf8_danish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_danish_ci;

--
-- Data dump for tabellen `lærere`
--

INSERT INTO `lærere` (`Lærere`, `Navn`, `Lokale`, `Mobil`, `Mail`, `fag1`, `fag2`) VALUES
('ba', 'Bent Andersen', '18', 23344518, 'ba@fakemail.dk', '', ''),
('cc', 'Christina Carlsen', '19', 23344519, 'cc@fakemail.dk', '', ''),
('dd', 'Dennis Dahl', '20', 23344520, 'dd@fakemail.dk', '', ''),
('tj', 'Thomas Jensen', '17', 23344517, 'tj@fakemail.dk', '', '');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `klasser_og_mentorer`
--
ALTER TABLE `klasser_og_mentorer`
  ADD PRIMARY KEY (`Klasse`);

--
-- Indeks for tabel `klasse_og_elever`
--
ALTER TABLE `klasse_og_elever`
  ADD PRIMARY KEY (`Klasse`);

--
-- Indeks for tabel `lærere`
--
ALTER TABLE `lærere`
  ADD PRIMARY KEY (`Lærere`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
