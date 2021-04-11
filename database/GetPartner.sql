SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_GetPartner]
(
    @Id NVARCHAR(36)=NULL
)
AS
BEGIN
    BEGIN TRY
        IF (@Id IS NOT NULL)
        BEGIN
            SELECT * FROM [dbo].[Partners]
            WHERE @Id=Id
            RETURN
        END
        RAISERROR('ERROR ID OR NAME!', 16, 1)
    END TRY
    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage
    END CATCH
END
GO
