-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.1.45-community - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for sundaybiz
CREATE DATABASE IF NOT EXISTS `sundaybiz` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `sundaybiz`;


-- Dumping structure for table sundaybiz.asset_tracking_setup_asset_categories
CREATE TABLE IF NOT EXISTS `asset_tracking_setup_asset_categories` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `asset_category` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.asset_tracking_setup_departments
CREATE TABLE IF NOT EXISTS `asset_tracking_setup_departments` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `dept_name` varchar(100) DEFAULT '0',
  `dept_number` varchar(5000) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.asset_tracking_setup_dispositions
CREATE TABLE IF NOT EXISTS `asset_tracking_setup_dispositions` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `disposition` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `sort_order` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.asset_tracking_setup_manufacturers
CREATE TABLE IF NOT EXISTS `asset_tracking_setup_manufacturers` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT '0',
  `address` varchar(5000) DEFAULT '0',
  `city` varchar(100) DEFAULT '0',
  `state` varchar(100) DEFAULT '0',
  `postal` varchar(100) DEFAULT '0',
  `country` varchar(100) DEFAULT '0',
  `fn` varchar(100) DEFAULT '0',
  `ln` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.asset_tracking_setup_models
CREATE TABLE IF NOT EXISTS `asset_tracking_setup_models` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `model_number` varchar(100) DEFAULT '0',
  `manufacturer` varchar(100) DEFAULT '0',
  `asset_desc` varchar(5000) DEFAULT '0',
  `warranty_period` varchar(100) DEFAULT '0',
  `callibration_cost` varchar(100) DEFAULT '0',
  `warning` varchar(5000) DEFAULT '0',
  `notes` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.asset_tracking_setup_options
CREATE TABLE IF NOT EXISTS `asset_tracking_setup_options` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `parameter` varchar(100) DEFAULT '0',
  `parameter_value` varchar(100) DEFAULT '0',
  `explanation` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.asset_tracking_setup_pm_frequency
CREATE TABLE IF NOT EXISTS `asset_tracking_setup_pm_frequency` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) DEFAULT '0',
  `frequency` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `default_counter` varchar(20) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.asset_tracking_setup_unschedule_maint_priority
CREATE TABLE IF NOT EXISTS `asset_tracking_setup_unschedule_maint_priority` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `priority` varchar(100) DEFAULT '0',
  `sort_order` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.asset_tracking_setup_vendors
CREATE TABLE IF NOT EXISTS `asset_tracking_setup_vendors` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT '0',
  `address` varchar(5000) DEFAULT '0',
  `city` varchar(100) DEFAULT '0',
  `state` varchar(100) DEFAULT '0',
  `postal` varchar(100) DEFAULT '0',
  `country` varchar(100) DEFAULT '0',
  `fn` varchar(100) DEFAULT '0',
  `ln` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.fmea_setup
CREATE TABLE IF NOT EXISTS `fmea_setup` (
  `sno` int(11) NOT NULL,
  `severity_rating` text NOT NULL,
  `occurence_rating` text NOT NULL,
  `detection_rating` text NOT NULL,
  `classification` text NOT NULL,
  `company_info` text NOT NULL,
  `sites` text NOT NULL,
  `departments` text NOT NULL,
  `customers` text NOT NULL,
  `parts` text NOT NULL,
  `fmeatypes` text NOT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.fmea_setup_classification
CREATE TABLE IF NOT EXISTS `fmea_setup_classification` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `classification` varchar(100) DEFAULT '0',
  `short_description` varchar(1000) DEFAULT '0',
  `full_description` text,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.fmea_setup_customers
CREATE TABLE IF NOT EXISTS `fmea_setup_customers` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `cust_code` varchar(100) DEFAULT '0',
  `company_name` varchar(100) DEFAULT '0',
  `billing_address` varchar(1000) DEFAULT '0',
  `city` varchar(100) DEFAULT '0',
  `state` varchar(100) DEFAULT '0',
  `pincode` varchar(100) DEFAULT '0',
  `country` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.fmea_setup_departments
CREATE TABLE IF NOT EXISTS `fmea_setup_departments` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `dept_code` varchar(100) DEFAULT '0',
  `dept_name` varchar(100) DEFAULT '0',
  `manager_name` varchar(100) DEFAULT '0',
  `dept_active` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.fmea_setup_detection_rating
CREATE TABLE IF NOT EXISTS `fmea_setup_detection_rating` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `detection_value` varchar(100) DEFAULT '0',
  `short_description` varchar(1000) DEFAULT '0',
  `full_description` text,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.fmea_setup_fmeatypes
CREATE TABLE IF NOT EXISTS `fmea_setup_fmeatypes` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `fmea_type` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.fmea_setup_occurence_rating
CREATE TABLE IF NOT EXISTS `fmea_setup_occurence_rating` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `occurence_value` varchar(100) DEFAULT '0',
  `short_description` varchar(1000) DEFAULT '0',
  `full_description` text,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.fmea_setup_parts
CREATE TABLE IF NOT EXISTS `fmea_setup_parts` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `part_no` varchar(100) DEFAULT '0',
  `description` varchar(10000) DEFAULT '0',
  `revision` varchar(100) DEFAULT '0',
  `alias` varchar(100) DEFAULT '0',
  `active` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.fmea_setup_severity_rating
CREATE TABLE IF NOT EXISTS `fmea_setup_severity_rating` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `severity_value` varchar(100) DEFAULT '0',
  `short_description` varchar(1000) DEFAULT '0',
  `full_description` text,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.fmea_setup_sites
CREATE TABLE IF NOT EXISTS `fmea_setup_sites` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `description` text,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.ground_control_setup_class_types
CREATE TABLE IF NOT EXISTS `ground_control_setup_class_types` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `class_type` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.ground_control_setup_criticality
CREATE TABLE IF NOT EXISTS `ground_control_setup_criticality` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `criticality` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `sort_order` varchar(100) DEFAULT '0',
  `t_criticality` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.ground_control_setup_departments
CREATE TABLE IF NOT EXISTS `ground_control_setup_departments` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `dept_number` varchar(100) DEFAULT '0',
  `dept_name` varchar(100) DEFAULT '0',
  `manager_name` varchar(100) DEFAULT '0',
  `active` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.ground_control_setup_document_categories
CREATE TABLE IF NOT EXISTS `ground_control_setup_document_categories` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `document_category` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.ground_control_setup_employee_types
CREATE TABLE IF NOT EXISTS `ground_control_setup_employee_types` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `employee_type` varchar(100) DEFAULT '0',
  `class` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.ground_control_setup_locations
CREATE TABLE IF NOT EXISTS `ground_control_setup_locations` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `document_location` varchar(100) DEFAULT '0',
  `location_description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.ground_control_setup_training_class_categories
CREATE TABLE IF NOT EXISTS `ground_control_setup_training_class_categories` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.quality_setup_audit_types
CREATE TABLE IF NOT EXISTS `quality_setup_audit_types` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `audit_type` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `sort_order` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.quality_setup_car_types
CREATE TABLE IF NOT EXISTS `quality_setup_car_types` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `car_type` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.quality_setup_categories
CREATE TABLE IF NOT EXISTS `quality_setup_categories` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.quality_setup_criticality
CREATE TABLE IF NOT EXISTS `quality_setup_criticality` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `criticality` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `sort_order` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.quality_setup_customers
CREATE TABLE IF NOT EXISTS `quality_setup_customers` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `customer_code` varchar(100) DEFAULT '0',
  `company_name` varchar(100) DEFAULT '0',
  `billing_address` varchar(5000) DEFAULT '0',
  `city` varchar(100) DEFAULT '0',
  `state` varchar(100) DEFAULT '0',
  `postal` varchar(100) DEFAULT '0',
  `country` varchar(100) DEFAULT '0',
  `phone` varchar(100) DEFAULT '0',
  `fax` varchar(100) DEFAULT '0',
  `fn` varchar(100) DEFAULT '0',
  `ln` varchar(100) DEFAULT '0',
  `title` varchar(100) DEFAULT '0',
  `email` varchar(100) DEFAULT '0',
  `notes` varchar(100) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.quality_setup_defects
CREATE TABLE IF NOT EXISTS `quality_setup_defects` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `defect_type` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.quality_setup_departments
CREATE TABLE IF NOT EXISTS `quality_setup_departments` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `dept_code` varchar(100) DEFAULT '0',
  `dept_name` varchar(100) DEFAULT '0',
  `manager_name` varchar(100) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.quality_setup_meeting_type
CREATE TABLE IF NOT EXISTS `quality_setup_meeting_type` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `meeting_type` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.quality_setup_parts
CREATE TABLE IF NOT EXISTS `quality_setup_parts` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `part_no` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `revision` varchar(100) DEFAULT '0',
  `alias` varchar(100) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.quality_setup_root_causes
CREATE TABLE IF NOT EXISTS `quality_setup_root_causes` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.quality_setup_sites
CREATE TABLE IF NOT EXISTS `quality_setup_sites` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `site` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.quality_setup_suppliers
CREATE TABLE IF NOT EXISTS `quality_setup_suppliers` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `code_name` varchar(100) DEFAULT '0',
  `company_name` varchar(100) DEFAULT '0',
  `billing_address` varchar(5000) DEFAULT '0',
  `city` varchar(100) DEFAULT '0',
  `state` varchar(100) DEFAULT '0',
  `postal` varchar(100) DEFAULT '0',
  `country` varchar(100) DEFAULT '0',
  `phone` varchar(100) DEFAULT '0',
  `fax` varchar(100) DEFAULT '0',
  `fn` varchar(10) DEFAULT '0',
  `ln` varchar(100) DEFAULT '0',
  `title` varchar(100) DEFAULT '0',
  `email` varchar(100) DEFAULT '0',
  `notes` varchar(100) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.q_med_setup_audit_types
CREATE TABLE IF NOT EXISTS `q_med_setup_audit_types` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `audit_type` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `sort_order` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.q_med_setup_car_types
CREATE TABLE IF NOT EXISTS `q_med_setup_car_types` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `car_type` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.q_med_setup_categories
CREATE TABLE IF NOT EXISTS `q_med_setup_categories` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.q_med_setup_customers
CREATE TABLE IF NOT EXISTS `q_med_setup_customers` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `customer_code` varchar(100) DEFAULT '0',
  `company_name` varchar(100) DEFAULT '0',
  `billing_address` varchar(5000) DEFAULT '0',
  `city` varchar(100) DEFAULT '0',
  `state` varchar(100) DEFAULT '0',
  `pin` varchar(100) DEFAULT '0',
  `country` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.q_med_setup_defects
CREATE TABLE IF NOT EXISTS `q_med_setup_defects` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `defect_type` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.q_med_setup_departments
CREATE TABLE IF NOT EXISTS `q_med_setup_departments` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `dept_code` varchar(100) DEFAULT '0',
  `dept_name` varchar(100) DEFAULT '0',
  `manager_name` varchar(100) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.q_med_setup_disposition
CREATE TABLE IF NOT EXISTS `q_med_setup_disposition` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `disposition` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `sort_order` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.q_med_setup_parts
CREATE TABLE IF NOT EXISTS `q_med_setup_parts` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `part_no` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `revision` varchar(100) DEFAULT '0',
  `alias` varchar(100) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.q_med_setup_root_causes
CREATE TABLE IF NOT EXISTS `q_med_setup_root_causes` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.q_med_setup_sites
CREATE TABLE IF NOT EXISTS `q_med_setup_sites` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `site` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.q_med_setup_suppliers
CREATE TABLE IF NOT EXISTS `q_med_setup_suppliers` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `code_name` varchar(100) DEFAULT '0',
  `company_name` varchar(100) DEFAULT '0',
  `billing_address` varchar(5000) DEFAULT '0',
  `city` varchar(100) DEFAULT '0',
  `state` varchar(100) DEFAULT '0',
  `postal` varchar(100) DEFAULT '0',
  `country` varchar(100) DEFAULT '0',
  `phone` varchar(20) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.training_setup_class_categories
CREATE TABLE IF NOT EXISTS `training_setup_class_categories` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.training_setup_class_types
CREATE TABLE IF NOT EXISTS `training_setup_class_types` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `class_type` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.training_setup_criticality
CREATE TABLE IF NOT EXISTS `training_setup_criticality` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `criticality` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `sort_order` varchar(10) DEFAULT '0',
  `t_criticality` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.training_setup_departments
CREATE TABLE IF NOT EXISTS `training_setup_departments` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `dept_code` varchar(100) DEFAULT '0',
  `dept_name` varchar(100) DEFAULT '0',
  `manager_name` varchar(100) DEFAULT '0',
  `active` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.training_setup_document_categories
CREATE TABLE IF NOT EXISTS `training_setup_document_categories` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `document_category` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.training_setup_employee_types
CREATE TABLE IF NOT EXISTS `training_setup_employee_types` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `employee_type` varchar(100) DEFAULT '0',
  `class` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.vendor_mgmt_setup_carriers
CREATE TABLE IF NOT EXISTS `vendor_mgmt_setup_carriers` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `carrier_name` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.vendor_mgmt_setup_categories
CREATE TABLE IF NOT EXISTS `vendor_mgmt_setup_categories` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.vendor_mgmt_setup_grades
CREATE TABLE IF NOT EXISTS `vendor_mgmt_setup_grades` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_grade` varchar(100) DEFAULT '0',
  `min_score` varchar(10) DEFAULT '0',
  `max_score` varchar(10) DEFAULT '0',
  `sort_order` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.vendor_mgmt_setup_status
CREATE TABLE IF NOT EXISTS `vendor_mgmt_setup_status` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_status` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `allow_po` varchar(10) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table sundaybiz.vendor_mgmt_setup_types
CREATE TABLE IF NOT EXISTS `vendor_mgmt_setup_types` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_type` varchar(100) DEFAULT '0',
  `description` varchar(5000) DEFAULT '0',
  `special` varchar(100) DEFAULT '0',
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
