SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_UpdatePartnerInformation]
(
    @Id NVARCHAR(36),
    @name NVARCHAR(250)=NULL,
    @newName NVARCHAR(250)=NULL,
    @phoneNumber NVARCHAR(15)=NULL,
    @transportType NVARCHAR(10)=NULL,
    @email NVARCHAR(320)=NULL,
    @logoUrl NVARCHAR(MAX)=NULL,
    @presenterName NVARCHAR(250)=NULL,
    @presenterEmail NVARCHAR(320)=NULL,
    @presenterPhone NVARCHAR(15)=NULL
)
AS
BEGIN
    BEGIN TRY
        UPDATE [dbo].[Partners]
        SET
            [name]=ISNULL(@newName, name),
            [phoneNumber]=ISNULL(@phoneNumber, phoneNumber),
            [email]=ISNULL(@email, email),
            [logoUrl]=ISNULL(@logoUrl, logoUrl),
            [transportType]=ISNULL(@transportType,transportType),
            [presenterName]=ISNULL(@presenterName, presenterName),
            [presenterEmail]=ISNULL(@presenterEmail, presenterEmail),
            [presenterPhone]=ISNULL(@presenterPhone, presenterPhone)
        WHERE name=@name OR @Id=Id
    END TRY

    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage
    END CATCH
END
GO
