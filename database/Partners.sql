SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Partners](
	[Id] [nvarchar](36) NOT NULL,
	[name] [nvarchar](250) NOT NULL,
	[email] [nvarchar](320) NOT NULL,
	[phoneNumber] [nvarchar](15) NOT NULL,
	[logoUrl] [nvarchar](max) NOT NULL,
	[isActive] [bit] NOT NULL,
	[isRegisterd] [bit] NOT NULL,
	[presenterName] [nvarchar](250) NOT NULL,
	[transportType] [nvarchar](10) NOT NULL,
	[createdAt] [datetime] NULL,
	[updatedAt] [datetime] NULL,
	[presenterEmail] [nvarchar](320) NOT NULL,
	[presenterPhone] [nvarchar](15) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
ALTER TABLE [dbo].[Partners] ADD PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
ALTER TABLE [dbo].[Partners] ADD UNIQUE NONCLUSTERED 
(
	[name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Partners] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[Partners] ADD  DEFAULT ((0)) FOR [isActive]
GO
ALTER TABLE [dbo].[Partners] ADD  DEFAULT ((1)) FOR [isRegisterd]
GO
