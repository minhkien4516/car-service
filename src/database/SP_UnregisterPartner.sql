SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_UnregisterPartner]
(
    @Id NVARCHAR(36)
)
AS
BEGIN
    BEGIN TRY
        UPDATE [dbo].[Partners]
        SET
            [isRegisterd]=0
        WHERE Partners.Id=@Id
    END TRY

    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage
    END CATCH
END
GO
