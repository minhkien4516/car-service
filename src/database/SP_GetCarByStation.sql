    -- Create a new stored procedure called 'SP_GetCarsByStation' in schema 'dbo'
    -- Drop the stored procedure if it already exists
    IF EXISTS (
    SELECT *
        FROM INFORMATION_SCHEMA.ROUTINES
    WHERE SPECIFIC_SCHEMA = N'dbo'
        AND SPECIFIC_NAME = N'SP_GetCarsByStation'
        AND ROUTINE_TYPE = N'PROCEDURE'
    )
    DROP PROCEDURE dbo.SP_GetCarsByStation
    GO
    -- Create the stored procedure in the specified schema
    CREATE PROCEDURE dbo.SP_GetCarsByStation
        @district NVARCHAR(250),
        @city NVARCHAR(250),
        @country NVARCHAR(250)
    AS
    BEGIN
        -- body of the stored procedure
        SELECT CarRosters.id as 'rosterId', Cars.carName, Cars.photoUrl, Cars.luggage, 
            Cars.passenger, CarRosters.standardPricePerKm
        FROM Cars, CarRosters
        WHERE CarRosters.carId=Cars.id
        AND @district=CarRosters.district
        AND @city=CarRosters.city
        AND @country=CarRosters.country

    END
    GO

