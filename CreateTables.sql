CREATE TABLE [dbo].[Recipe] (
 [Id] int IDENTITY(1,1) NOT NULL,
 [Title] nvarchar(max) NOT NULL,
 [Servings] nvarchar(max) NOT NULL,
 [TotalTime] nvarchar(max) NOT NULL,
 [Ingredient] nvarchar(max) NOT NULL,
 [Carbohydrate] nvarchar(max) NOT NULL,
 [Protien] nvarchar(max) NOT NULL,
 [Fat] nvarchar(max) NOT NULL,
 [Calories] nvarchar(max) NOT NULL,
 [Steps] nvarchar(max) NOT NULL,  
PRIMARY KEY (Id)
);
GO