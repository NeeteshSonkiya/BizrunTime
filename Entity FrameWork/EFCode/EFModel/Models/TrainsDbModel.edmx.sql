
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 08/02/2018 16:30:21
-- Generated from EDMX file: F:\Bizruntime\Workspace\Entity Framework\EFCode\EFModel\Models\TrainsDbModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [TrainsDb];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'tblTrain'
CREATE TABLE [dbo].[tblTrain] (
    [TrainNo] int IDENTITY(1,1) NOT NULL,
    [TrainName] nvarchar(max)  NOT NULL,
    [Departure] nvarchar(max)  NOT NULL,
    [Destination] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [TrainNo] in table 'tblTrain'
ALTER TABLE [dbo].[tblTrain]
ADD CONSTRAINT [PK_tblTrain]
    PRIMARY KEY CLUSTERED ([TrainNo] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------