SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE [dbo].[SP_GetCarByPartnerId]
   @partners NVARCHAR(36) =NULL
AS
BEGIN
    SELECT [Cars].Id,[carName],[Brand],[licencePlate],[luggage],[passenger],[partners] FROM [dbo].[Cars],[dbo].[Partners]
    WHERE @partners =Cars.partners AND @partners=Partners.Id  
END
GO
