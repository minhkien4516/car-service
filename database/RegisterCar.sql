SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE [dbo].[RegisterCar]
    @carName NVARCHAR(250),
    @Brand NVARCHAR(15),
    @licencePlate NVARCHAR(15), 	
    @luggage NVARCHAR(250),
    @passenger NVARCHAR(250),
    @partners NVARCHAR(36)
AS
BEGIN
     BEGIN TRY
        INSERT INTO [dbo].[Cars]
        (
            [carName], [Brand], [licencePlate], [luggage], 
            [passenger], [partners]
        )
        VALUES
        (
            @carName, @Brand, @licencePlate, @luggage, @passenger,
            @partners
        )
    END TRY

    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage
    END CATCH
END
GO
