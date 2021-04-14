SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE [dbo].[SP_GetAllCar]
  
AS
BEGIN
    -- body of the stored procedure
    SELECT [Id],[carName],[Brand],[licencePlate],[luggage],[passenger],[partners],[isRegisterd] FROM [dbo].[Cars]
END
GO
