-- Create a new database called 'Car_Service_DB'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
	SELECT [name]
		FROM sys.databases
		WHERE [name] = N'Car_Service_DB'
)
CREATE DATABASE Car_Service_DB
GO

-- Create a new table called '[Cars]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Cars]', 'U') IS NOT NULL
DROP TABLE [dbo].[Cars]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Cars]
(
	[id] [nvarchar](36) DEFAULT newId() NOT NULL PRIMARY KEY, -- Primary Key column
	[name] [nvarchar](250) NOT NULL,
	[luggagePayload] [int] NOT NULL,
	[guestQuantity] [int] NOT NULL,
	[partnerId] [nvarchar](36) NOT NULL,
	[photoUrl] [nvarchar](MAX) NOT NULL,
	[standardPricePerKm] [decimal](18, 0) NOT NULL,
	[isRegisterd] [bit] DEFAULT 1 NOT NULL
);
GO

-- Create a new table called '[Journeys]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Journeys]', 'U') IS NOT NULL
DROP TABLE [dbo].[Journeys]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Journeys]
(
	[id] [nvarchar](36) DEFAULT newId() NOT NULL PRIMARY KEY, -- Primary Key column
	[placeId] [nvarchar](50) NOT NULL,
	[district] [nvarchar](250) NOT NULL,
	[city] [nvarchar](250) NOT NULL,
	[country] [nvarchar](250) NOT NULL,
	[carId] [nvarchar](36) NOT NULL,
	[isActive] [bit] DEFAULT 1 NOT NULL,
	[createdAt] [datetime2](7) DEFAULT GETDATE() NOT NULL,
	-- Specify more columns here
	CONSTRAINT [FK_Cars_Journeys] FOREIGN KEY([carId]) REFERENCES [dbo].[Cars] ([id])
);
GO
