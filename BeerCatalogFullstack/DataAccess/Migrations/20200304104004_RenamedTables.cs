using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccess.Migrations
{
    public partial class RenamedTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Brews_Beers_BeerId",
                table: "Brews");

            migrationBuilder.DropForeignKey(
                name: "FK_Brews_Fermentations_FermentationId",
                table: "Brews");

            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Brews_BrewId",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_Comments_AspNetUsers_UserId",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_FavouriteBeer_Beers_BeerId",
                table: "FavoriteBeer");

            migrationBuilder.DropForeignKey(
                name: "FK_Hops_Brew_BrewId",
                table: "Hops");

            migrationBuilder.DropForeignKey(
                name: "FK_Malts_Brews_BrewId",
                table: "Malts");

            migrationBuilder.DropForeignKey(
                name: "FK_MashTemperature_Brews_BrewId",
                table: "MashTemperature");

            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Brews_BrewId",
                table: "Photos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Photos",
                table: "Photos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Malts",
                table: "Malts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Fermentations",
                table: "Fermentations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Comments",
                table: "Comments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Brews",
                table: "Brews");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Beers",
                table: "Beers");

            migrationBuilder.RenameTable(
                name: "Photos",
                newName: "Photo");

            migrationBuilder.RenameTable(
                name: "Malts",
                newName: "Malt");

            migrationBuilder.RenameTable(
                name: "Fermentations",
                newName: "Fermentation");

            migrationBuilder.RenameTable(
                name: "Comments",
                newName: "Comment");

            migrationBuilder.RenameTable(
                name: "Brews",
                newName: "Brew");

            migrationBuilder.RenameTable(
                name: "Beers",
                newName: "Beer");

            migrationBuilder.RenameIndex(
                name: "IX_Photos_BrewId",
                table: "Photo",
                newName: "IX_Photo_BrewId");

            migrationBuilder.RenameIndex(
                name: "IX_Malts_BrewId",
                table: "Malt",
                newName: "IX_Malt_BrewId");

            migrationBuilder.RenameIndex(
                name: "IX_Comments_UserId",
                table: "Comment",
                newName: "IX_Comment_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Comments_BrewId",
                table: "Comment",
                newName: "IX_Comment_BrewId");

            migrationBuilder.RenameIndex(
                name: "IX_Brews_FermentationId",
                table: "Brew",
                newName: "IX_Brew_FermentationId");

            migrationBuilder.RenameIndex(
                name: "IX_Brews_BeerId",
                table: "Brew",
                newName: "IX_Brew_BeerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Photo",
                table: "Photo",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Malt",
                table: "Malt",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Fermentation",
                table: "Fermentation",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Comment",
                table: "Comment",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Brew",
                table: "Brew",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Beer",
                table: "Beer",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Brew_Beer_BeerId",
                table: "Brew",
                column: "BeerId",
                principalTable: "Beer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Brew_Fermentation_FermentationId",
                table: "Brew",
                column: "FermentationId",
                principalTable: "Fermentation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Brew_BrewId",
                table: "Comment",
                column: "BrewId",
                principalTable: "Brew",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_AspNetUsers_UserId",
                table: "Comment",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_FavoriteBeer_Beer_BeerId",
                table: "FavoriteBeer",
                column: "BeerId",
                principalTable: "Beer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Hops_Brew_BrewId",
                table: "Hops",
                column: "BrewId",
                principalTable: "Brew",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Malt_Brew_BrewId",
                table: "Malt",
                column: "BrewId",
                principalTable: "Brew",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_MashTemperature_Brew_BrewId",
                table: "MashTemperature",
                column: "BrewId",
                principalTable: "Brew",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Photo_Brew_BrewId",
                table: "Photo",
                column: "BrewId",
                principalTable: "Brew",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Brew_Beer_BeerId",
                table: "Brew");

            migrationBuilder.DropForeignKey(
                name: "FK_Brew_Fermentation_FermentationId",
                table: "Brew");

            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Brew_BrewId",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Comment_AspNetUsers_UserId",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_FavoriteBeer_Beer_BeerId",
                table: "FavoriteBeer");

            migrationBuilder.DropForeignKey(
                name: "FK_Hops_Brew_BrewId",
                table: "Hops");

            migrationBuilder.DropForeignKey(
                name: "FK_Malt_Brew_BrewId",
                table: "Malt");

            migrationBuilder.DropForeignKey(
                name: "FK_MashTemperature_Brew_BrewId",
                table: "MashTemperature");

            migrationBuilder.DropForeignKey(
                name: "FK_Photo_Brew_BrewId",
                table: "Photo");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Photo",
                table: "Photo");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Malt",
                table: "Malt");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Fermentation",
                table: "Fermentation");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Comment",
                table: "Comment");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Brew",
                table: "Brew");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Beer",
                table: "Beer");

            migrationBuilder.RenameTable(
                name: "Photo",
                newName: "Photos");

            migrationBuilder.RenameTable(
                name: "Malt",
                newName: "Malts");

            migrationBuilder.RenameTable(
                name: "Fermentation",
                newName: "Fermentations");

            migrationBuilder.RenameTable(
                name: "Comment",
                newName: "Comments");

            migrationBuilder.RenameTable(
                name: "Brew",
                newName: "Brews");

            migrationBuilder.RenameTable(
                name: "Beer",
                newName: "Beers");

            migrationBuilder.RenameIndex(
                name: "IX_Photo_BrewId",
                table: "Photos",
                newName: "IX_Photos_BrewId");

            migrationBuilder.RenameIndex(
                name: "IX_Malt_BrewId",
                table: "Malts",
                newName: "IX_Malts_BrewId");

            migrationBuilder.RenameIndex(
                name: "IX_Comment_UserId",
                table: "Comments",
                newName: "IX_Comments_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Comment_BrewId",
                table: "Comments",
                newName: "IX_Comments_BrewId");

            migrationBuilder.RenameIndex(
                name: "IX_Brew_FermentationId",
                table: "Brews",
                newName: "IX_Brews_FermentationId");

            migrationBuilder.RenameIndex(
                name: "IX_Brew_BeerId",
                table: "Brews",
                newName: "IX_Brews_BeerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Photos",
                table: "Photos",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Malts",
                table: "Malts",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Fermentations",
                table: "Fermentations",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Comments",
                table: "Comments",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Brews",
                table: "Brews",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Beers",
                table: "Beers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Brews_Beers_BeerId",
                table: "Brews",
                column: "BeerId",
                principalTable: "Beers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Brews_Fermentations_FermentationId",
                table: "Brew",
                column: "FermentationId",
                principalTable: "Fermentation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Brews_BrewId",
                table: "Comment",
                column: "BrewId",
                principalTable: "Brew",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_AspNetUsers_UserId",
                table: "Comment",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_FavoriteBeers_Beers_BeerId",
                table: "FavoriteBeer",
                column: "BeerId",
                principalTable: "Beer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Hops_Brews_BrewId",
                table: "Hops",
                column: "BrewId",
                principalTable: "Brew",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Malts_Brews_BrewId",
                table: "Malt",
                column: "BrewId",
                principalTable: "Brew",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_MashTemperature_Brews_BrewId",
                table: "MashTemperature",
                column: "BrewId",
                principalTable: "Brew",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Brews_BrewId",
                table: "Photo",
                column: "BrewId",
                principalTable: "Brew",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
