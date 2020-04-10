using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccess.Migrations
{
    public partial class AddedBrewUserForeignKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Brew",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Brew_UserId",
                table: "Brew",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Brew_AspNetUsers_UserId",
                table: "Brew",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Brew_AspNetUsers_UserId",
                table: "Brew");

            migrationBuilder.DropIndex(
                name: "IX_Brew_UserId",
                table: "Brew");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Brew");
        }
    }
}
