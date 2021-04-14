SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_addcarRoster]
    @description NTEXT,
    @placeId NVARCHAR(50),
    @district NVARCHAR(250),
    @city NVARCHAR(250),
    @country NVARCHAR(250),
    @cars NVARCHAR(36),
    @driverName NVARCHAR(250),  
    @workDate DATE,
    @standardPrice DECIMAL
AS
BEGIN
      BEGIN TRY
        INSERT INTO [dbo].[CarRoster]
        (
            [description], [placeId], [district],[city],
            [country], [cars], [driverName],[workDate],[standardPrice]
        )
        VALUES
        (
            @description, @placeId, @district, @city, @country,@cars,
            @driverName,@workDate, @standardPrice
        )
    END TRY

    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage
    END CATCH
END
GO
