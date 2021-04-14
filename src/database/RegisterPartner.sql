SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_RegisterPartner]
(
    @name NVARCHAR(250),
    @phoneNumber NVARCHAR(15),
    @transportType NVARCHAR(10),
    @email NVARCHAR(320), 	
    @logoUrl NVARCHAR(MAX),
    @presenterName NVARCHAR(250),
    @presenterEmail NVARCHAR(320),
    @presenterPhone NVARCHAR(15)
)
AS
BEGIN
    BEGIN TRY
        INSERT INTO [dbo].[Partners]
        (
            [name], [phoneNumber], [email], [logoUrl],[transportType],
            [presenterName], [presenterEmail], [presenterPhone]
        )
        VALUES
        (
            @name, @phoneNumber, @email, @logoUrl, @presenterName,@transportType,
            @presenterEmail, @presenterPhone
        )
    END TRY

    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage
    END CATCH
END
GO
