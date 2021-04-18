SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Create the stored procedure in the specified schema
CREATE OR ALTER PROCEDURE [dbo].[SP_RegisterCar]
    @name NVARCHAR(250),
    @luggagePayload INT,
    @guestQuantity INT,
    @photoUrl NVARCHAR(MAX),
    @standardPricePerKm DECIMAL,
    @partnerId NVARCHAR(36)
AS
BEGIN
     BEGIN TRY
        INSERT INTO [dbo].[Cars]
        (
            [name], [luggagePayload], [standardPricePerKm],
            [guestQuantity], [partnerId], [photoUrl]
        )
        OUTPUT inserted.*
        VALUES
        (
            @name, @luggagePayload, @standardPricePerKm,
            @guestQuantity, @partnerId, @photoUrl
        )
    END TRY

    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage
    END CATCH
END
GO