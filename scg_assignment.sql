/*
 Navicat Premium Data Transfer

 Source Server         : SCG_assignment
 Source Server Type    : MySQL
 Source Server Version : 50733
 Source Host           : 127.0.0.1:3306
 Source Schema         : scg_assignment

 Target Server Type    : MySQL
 Target Server Version : 50733
 File Encoding         : 65001

 Date: 12/03/2021 11:50:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for locations
-- ----------------------------
DROP TABLE IF EXISTS `locations`;
CREATE TABLE `locations` (
  `location_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `location_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `location_lat` double NOT NULL,
  `location_lng` double NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`location_id`),
  UNIQUE KEY `UQ_582bb9b1865f02814bd7c2c9650` (`location_id`),
  UNIQUE KEY `UQ_3dc8da2eaa0dd5719e59974bc40` (`location_name`),
  UNIQUE KEY `UQ_867f00800d048a48581e023f657` (`location_lat`),
  UNIQUE KEY `UQ_972814a56564c8b8540b0eb9b2a` (`location_lng`),
  KEY `idx_location_id` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of locations
-- ----------------------------
BEGIN;
INSERT INTO `locations` VALUES (1, 'คณะวิทยาศาสตร์ประยุกต์', 13.827460516456306, 100.51518095160624, '2021-03-11 07:54:51.873596', '2021-03-11 07:54:58.048825');
INSERT INTO `locations` VALUES (2, 'คณะวิศวกรรมศาสตร์', 13.8217405430339, 100.51350186308787, '2021-03-11 07:55:50.992454', '2021-03-11 07:55:50.992454');
INSERT INTO `locations` VALUES (3, 'สำนักหอสมุดกลาง', 13.819932983742094, 100.5141241355174, '2021-03-11 07:56:59.598208', '2021-03-11 07:56:59.598208');
COMMIT;

-- ----------------------------
-- Table structure for machines
-- ----------------------------
DROP TABLE IF EXISTS `machines`;
CREATE TABLE `machines` (
  `machine_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `machine_location_id` int(11) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`machine_id`),
  UNIQUE KEY `UQ_1fdfd66684266b6724129eeb292` (`machine_id`),
  KEY `idx_machine_id` (`machine_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of machines
-- ----------------------------
BEGIN;
INSERT INTO `machines` VALUES (1, 1, '2021-03-11 07:57:14.271211', '2021-03-11 07:57:14.271211');
INSERT INTO `machines` VALUES (2, 2, '2021-03-11 07:57:21.991635', '2021-03-11 07:57:21.991635');
INSERT INTO `machines` VALUES (3, 3, '2021-03-11 07:57:24.550333', '2021-03-11 07:57:24.550333');
COMMIT;

-- ----------------------------
-- Table structure for mainproducts
-- ----------------------------
DROP TABLE IF EXISTS `mainproducts`;
CREATE TABLE `mainproducts` (
  `mainproduct_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `mainproduct_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `mainproduct_image` varchar(255) COLLATE utf8_bin NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`mainproduct_id`),
  UNIQUE KEY `UQ_573e08204b043ac9ed25d952497` (`mainproduct_id`),
  UNIQUE KEY `UQ_81da09c37f94592e85931daa66b` (`mainproduct_name`),
  KEY `idx_mainproduct_id` (`mainproduct_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of mainproducts
-- ----------------------------
BEGIN;
INSERT INTO `mainproducts` VALUES (1, 'Raspberry juice', 'https://www.flaticon.com/svg/vstatic/svg/2738/2738804.svg?token=exp=1615463085~hmac=497c0d427ffe64cc793d4ba1bf49a951', '2021-03-11 07:58:51.761517', '2021-03-11 11:30:37.391847');
INSERT INTO `mainproducts` VALUES (2, 'Lemon juice', 'https://www.flaticon.com/svg/vstatic/svg/648/648677.svg?token=exp=1615463085~hmac=6c55ed220cdc5ad87da65530ac1dd283', '2021-03-11 07:59:13.886662', '2021-03-11 11:32:29.259535');
INSERT INTO `mainproducts` VALUES (3, 'Grape huice', 'https://www.flaticon.com/svg/vstatic/svg/765/765560.svg?token=exp=1615463262~hmac=b5f8b889de2f25b240cffe2fc7f379aa', '2021-03-11 07:59:42.641923', '2021-03-11 11:32:55.180429');
INSERT INTO `mainproducts` VALUES (4, 'Coffee', 'https://www.flaticon.com/svg/vstatic/svg/2935/2935413.svg?token=exp=1615463204~hmac=13c85fbf9092251c567c467571f1d862', '2021-03-11 08:00:09.474219', '2021-03-11 11:32:00.206968');
INSERT INTO `mainproducts` VALUES (5, 'Orange juice', 'https://www.flaticon.com/svg/vstatic/svg/2442/2442019.svg?token=exp=1615463227~hmac=2105a7c1837dcaea577034b399f7c069', '2021-03-11 08:00:29.969034', '2021-03-11 11:32:30.863890');
INSERT INTO `mainproducts` VALUES (6, 'Milk', 'https://www.flaticon.com/svg/vstatic/svg/2935/2935394.svg?token=exp=1615463176~hmac=078cface19b5bf1131afe40c78f3c8ec', '2021-03-11 08:01:00.601918', '2021-03-11 11:31:34.861492');
COMMIT;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_quantity` int(11) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `mainproduct_id` int(11) NOT NULL,
  `machine_id` int(11) NOT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `UQ_a8940a4bf3b90bd7ac15c8f4dd9` (`product_id`),
  KEY `idx_product_id` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of products
-- ----------------------------
BEGIN;
INSERT INTO `products` VALUES (1, 9, '2021-03-11 08:01:15.970752', '2021-03-11 11:38:30.323125', 1, 1);
INSERT INTO `products` VALUES (2, 29, '2021-03-11 08:01:24.522250', '2021-03-11 15:21:27.000000', 2, 1);
INSERT INTO `products` VALUES (3, 29, '2021-03-11 08:01:30.531653', '2021-03-12 03:46:25.000000', 3, 1);
INSERT INTO `products` VALUES (4, 30, '2021-03-11 08:01:36.721999', '2021-03-11 08:01:36.721999', 4, 1);
INSERT INTO `products` VALUES (5, 30, '2021-03-11 08:01:42.521756', '2021-03-11 08:01:42.521756', 5, 1);
INSERT INTO `products` VALUES (6, 30, '2021-03-11 08:01:48.954175', '2021-03-11 08:01:48.954175', 6, 1);
INSERT INTO `products` VALUES (7, 30, '2021-03-11 08:01:59.986425', '2021-03-11 08:01:59.986425', 1, 2);
INSERT INTO `products` VALUES (8, 29, '2021-03-11 08:02:05.586135', '2021-03-11 09:59:00.000000', 2, 2);
INSERT INTO `products` VALUES (9, 30, '2021-03-11 08:02:11.339257', '2021-03-11 08:02:11.339257', 3, 2);
INSERT INTO `products` VALUES (10, 30, '2021-03-11 08:02:16.564801', '2021-03-11 08:02:16.564801', 4, 2);
INSERT INTO `products` VALUES (11, 30, '2021-03-11 08:02:24.475596', '2021-03-11 08:02:24.475596', 5, 2);
INSERT INTO `products` VALUES (12, 30, '2021-03-11 08:02:30.044523', '2021-03-11 08:02:30.044523', 6, 2);
INSERT INTO `products` VALUES (13, 30, '2021-03-11 08:02:35.906944', '2021-03-11 08:02:35.906944', 1, 3);
INSERT INTO `products` VALUES (14, 30, '2021-03-11 08:02:40.507413', '2021-03-11 08:02:40.507413', 2, 3);
INSERT INTO `products` VALUES (15, 30, '2021-03-11 08:02:45.269368', '2021-03-11 08:02:45.269368', 3, 3);
INSERT INTO `products` VALUES (16, 30, '2021-03-11 08:02:51.138676', '2021-03-11 08:02:51.138676', 4, 3);
INSERT INTO `products` VALUES (17, 30, '2021-03-11 08:02:57.492755', '2021-03-11 11:53:18.220233', 5, 3);
INSERT INTO `products` VALUES (18, 9, '2021-03-11 08:03:04.036297', '2021-03-11 11:38:33.438208', 6, 3);
COMMIT;

-- ----------------------------
-- Table structure for scg_assignment_migrations
-- ----------------------------
DROP TABLE IF EXISTS `scg_assignment_migrations`;
CREATE TABLE `scg_assignment_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of scg_assignment_migrations
-- ----------------------------
BEGIN;
INSERT INTO `scg_assignment_migrations` VALUES (1, 1615444071729, 'createScgAssignment1615444071729');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
