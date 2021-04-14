    -- Create a new stored procedure called 'SP_GetCarByStation' in schema 'dbo'
    -- Drop the stored procedure if it already exists
    IF EXISTS (
    SELECT *
        FROM INFORMATION_SCHEMA.ROUTINES
    WHERE SPECIFIC_SCHEMA = N'dbo'
        AND SPECIFIC_NAME = N'SP_GetCarByStation'
        AND ROUTINE_TYPE = N'PROCEDURE'
    )
    DROP PROCEDURE dbo.SP_GetCarByStation
    GO
    -- Create the stored procedure in the specified schema
    CREATE PROCEDURE dbo.SP_GetCarByStation
        @district NVARCHAR(250),
        @city NVARCHAR(250),
        @country NVARCHAR(250)
    AS
    BEGIN
        -- body of the stored procedure
        SELECT CarRoster.Id as 'rosterId',CarRoster.cars as 'carId',Cars.carName,Cars.photoUrl,Cars.luggage,Cars.passenger,Cars.Brand,CarRoster.standardPrice
        FROM Cars,CarRoster
        WHERE CarRoster.cars=Cars.Id
        AND @district=CarRoster.district
        AND @city=CarRoster.city
        AND @country=CarRoster.country

    END
    GO

    SP_GetCarByStation "Quan 4", "HCM", "Viet Nam"

