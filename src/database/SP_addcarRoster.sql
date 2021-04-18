SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER PROCEDURE [dbo].[SP_AddJourney]
    
    @placeId NVARCHAR(50),
    @district NVARCHAR(250),
    @city NVARCHAR(250),
    @country NVARCHAR(250),
    @carId NVARCHAR(36)
AS
BEGIN
      BEGIN TRY
        INSERT INTO [dbo].[Journeys]
        (
            [placeId], [district],[city], [country], 
            [carId]
        )
        VALUES
        (
            @placeId, @district, @city, @country, 
            @carId
        )
    END TRY

    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage
    END CATCH
END
GO