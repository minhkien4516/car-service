SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE [dbo].[GetRosterByCarId]
   @cars NVARCHAR(36) =NULL
AS
BEGIN
    SELECT [Cars].carName,[Cars].Brand,[Cars].licencePlate,[Cars].luggage,[Cars].passenger,[CarRoster].Id,[description],[placeId],[district],[city],[country],[cars] as 'CarId',[driverName],[workDate],[isActive],[createdAt],[standardPrice] FROM [dbo].[Cars],[dbo].[CarRoster]
    WHERE @cars =CarRoster.cars AND @cars=Cars.Id  
END
GO
