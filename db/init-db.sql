CREATE TABLE IF NOT EXISTS `Cities` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`city` VARCHAR(50) NOT NULL,
	`country` VARCHAR(50) NOT NULL,
	`code` VARCHAR(50),
	`time_zone` VARCHAR(50),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `Cities` (`city`, `country`, `code`, `time_zone`) VALUES
('Mariestad', 'Sweden', 'SE', 'Europe/Stockholm'),
('Reggio Calabria', 'Italy', 'IT', 'Europe/Rome'),
('Forshaga', 'Sweden', 'SE', 'Europe/Stockholm'),
('Ljungbyholm', 'Sweden', 'SE', 'Europe/Stockholm'),
('Stockholm', 'Sweden', 'SE', 'Europe/Stockholm'),
('Helsingborg', 'Sweden', 'SE', 'Europe/Stockholm'),
('Roma', 'Italy', 'IT', 'Europe/Rome'),
('Hashimoto', 'Japan', 'JP', 'Asia/Tokyo'),
('Shizuoka-shi', 'Japan', 'JP', 'Asia/Tokyo'),
('Upsala', 'Sweden', 'SE', 'Europe/Stockholm'),
('Hino', 'Japan', 'JP', 'Asia/Tokyo'),
('Tampere', 'Finland', 'FI', 'Europe/Helsinki'),
('Okunoya', 'Japan', 'JP', 'Asia/Tokyo'),
('Knivsta', 'Sweden', 'SE', 'Europe/Stockholm'),
('Honolulu', 'United States', 'US', 'Pacific/Honolulu'),
('Lysekil', 'Sweden', 'SE', 'Europe/Stockholm'),
('Kimito', 'Finland', 'FI', 'Europe/Helsinki'),
('Marietta', 'United States', 'US', 'America/New_York'),
('Tokyo', 'Japan', 'JP', 'Asia/Tokyo'),
('Gamleby', 'Sweden', 'SE', 'Europe/Stockholm'),
('Orange', 'United States', 'US', 'America/Los_Angeles'),
('Nagareyama', 'Japan', 'JP', 'Asia/Tokyo'),
('Helsinki', 'Finland', 'FI', 'Europe/Helsinki'),
('Charlotte', 'United States', 'US', 'America/New_York'),
('Uumaja', 'Sweden', 'SE', 'Europe/Stockholm'),
('Washington', 'United States', 'US', 'America/New_York'),
('Osaka', 'Japan', 'JP', 'Asia/Tokyo'),
('Storvik', 'Sweden', 'SE', 'Europe/Stockholm'),
('Norsborg', 'Sweden', 'SE', 'Europe/Stockholm'),
('Marumori', 'Japan', 'JP', 'Asia/Tokyo');


asd