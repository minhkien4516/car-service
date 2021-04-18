SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE [dbo].[UnregisterCar]
    @id NVARCHAR(36)
AS
BEGIN
    BEGIN TRY
        UPDATE [dbo].[Cars]
        SET
            [isRegisterd]=0
        WHERE Cars.id=@id
    END TRY

    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage
    END CATCH
END
GO
