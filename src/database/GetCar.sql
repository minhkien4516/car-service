SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE [dbo].[SP_GetCarById]
    @id NVARCHAR(36)=NULL
AS
BEGIN
   BEGIN TRY
        BEGIN
            SELECT * FROM [dbo].[Cars]
            WHERE Cars.id=@id
        END
    END TRY
    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage         
    END CATCH
END
GO
