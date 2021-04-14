SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE [dbo].[GetCar]
    @Id NVARCHAR(36)=NULL,
    @licencePlate NVARCHAR(15)=NULL
AS
BEGIN
   BEGIN TRY
        IF(@Id IS NOT NULL)
        BEGIN
            SELECT * FROM [dbo].[Cars]
            WHERE Cars.Id=@Id
        END
        IF(@licencePlate IS NOT NULL)
        BEGIN
            SELECT * FROM [dbo].[Cars]
            WHERE Cars.licencePlate=@licencePlate
        END
        RAISERROR('Car id or licence-plate is required!', 16, 1)
    END TRY
    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage         
    END CATCH
END
GO
