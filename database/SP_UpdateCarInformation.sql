SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_UpdateCarInformation]
(
    @Id NVARCHAR(36),
    @carName NVARCHAR(250)=NULL,
    @newName NVARCHAR(250)=NULL,
    @Brand NVARCHAR(15)=NULL,
    @licencePlate NVARCHAR(15)=NULL,
    @luggage NVARCHAR(250)=NULL,
    @passenger NVARCHAR(250)=NULL
)
AS
BEGIN
    BEGIN TRY
        UPDATE [dbo].[Cars]
        SET
            [carName]=ISNULL(@newName, carName),
            [Brand]=ISNULL(@Brand, Brand),
            [licencePlate]=ISNULL(@licencePlate, licencePlate),
            [luggage]=ISNULL(@luggage , luggage),
            [passenger]=ISNULL(@passenger, passenger)
        WHERE carName=@carName OR @Id=Id
    END TRY

    BEGIN CATCH
        SELECT ERROR_MESSAGE() AS ErrorMessage
    END CATCH
END
GO
