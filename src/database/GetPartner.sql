SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_GetPartner]
(
    @id NVARCHAR(36)
)
AS
BEGIN
    BEGIN TRY
        BEGIN
            SELECT * FROM [dbo].[Partners]
            WHERE @id=id
            RETURN
        END
    END TRY
    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage
    END CATCH
END
GO
