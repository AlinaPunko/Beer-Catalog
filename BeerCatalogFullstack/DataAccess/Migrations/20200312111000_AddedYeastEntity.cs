using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccess.Migrations
{
    public partial class AddedYeastEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "YeastId",
                table: "Brew",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Yeast",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BrewId = table.Column<int>(nullable: false),
                    BeerId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Yeast", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Brew_YeastId",
                table: "Brew",
                column: "YeastId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Brew_Yeast_YeastId",
                table: "Brew",
                column: "YeastId",
                principalTable: "Yeast",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Brew_Yeast_YeastId",
                table: "Brew");

            migrationBuilder.DropTable(
                name: "Yeast");

            migrationBuilder.DropIndex(
                name: "IX_Brew_YeastId",
                table: "Brew");

            migrationBuilder.DropColumn(
                name: "YeastId",
                table: "Brew");
        }
    }
}
