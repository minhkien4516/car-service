SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Create the stored procedure in the specified schema
CREATE OR ALTER PROCEDURE [dbo].[SP_GetJourneysByCar]
   @carId NVARCHAR(36)
AS
BEGIN
    SELECT *
    FROM [dbo].[Journeys]
    WHERE Journeys.carId = @carId
END
GO

