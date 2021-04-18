SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE [dbo].[SP_GetCarsByPartner]
   @partnerId NVARCHAR(36) =NULL
AS
BEGIN
    SELECT *
    FROM [dbo].[Cars]
    WHERE Cars.partnerId = @partnerId
END
GO
