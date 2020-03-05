using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccess.Migrations
{
    public partial class FixedNaming : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserPreference",
                table: "UserPreference");

            migrationBuilder.DropColumn(
                name: "Preference",
                table: "UserPreference");

            migrationBuilder.AddColumn<string>(
                name: "PreferencedBeerType",
                table: "UserPreference",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserPreference",
                table: "UserPreference",
                columns: new[] { "UserId", "PreferencedBeerType" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserPreference",
                table: "UserPreference");

            migrationBuilder.DropColumn(
                name: "PreferencedBeerType",
                table: "UserPreference");

            migrationBuilder.AddColumn<string>(
                name: "Preference",
                table: "UserPreference",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserPreference",
                table: "UserPreference",
                columns: new[] { "UserId", "Preference" });
        }
    }
}
