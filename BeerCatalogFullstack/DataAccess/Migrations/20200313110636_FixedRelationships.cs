using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccess.Migrations
{
    public partial class FixedRelationships : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Hops_Brew_BrewId",
                table: "Hops");

            migrationBuilder.DropForeignKey(
                name: "FK_Malt_Brew_BrewId",
                table: "Malt");

            migrationBuilder.DropForeignKey(
                name: "FK_MashTemperature_Brew_BrewId",
                table: "MashTemperature");

            migrationBuilder.DropIndex(
                name: "IX_MashTemperature_BrewId",
                table: "MashTemperature");

            migrationBuilder.DropIndex(
                name: "IX_Malt_BrewId",
                table: "Malt");

            migrationBuilder.DropIndex(
                name: "IX_Hops_BrewId",
                table: "Hops");

            migrationBuilder.DropIndex(
                name: "IX_Brew_FermentationId",
                table: "Brew");

            migrationBuilder.DropIndex(
                name: "IX_Brew_YeastId",
                table: "Brew");

            migrationBuilder.DropColumn(
                name: "BrewId",
                table: "Yeast");

            migrationBuilder.DropColumn(
                name: "BrewId",
                table: "MashTemperature");

            migrationBuilder.DropColumn(
                name: "BrewId",
                table: "Malt");

            migrationBuilder.DropColumn(
                name: "BrewId",
                table: "Hops");

            migrationBuilder.DropColumn(
                name: "BrewId",
                table: "Fermentation");

            migrationBuilder.CreateTable(
                name: "BrewToHops",
                columns: table => new
                {
                    BrewId = table.Column<int>(nullable: false),
                    HopsId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrewToHops", x => new { x.BrewId, x.HopsId });
                    table.ForeignKey(
                        name: "FK_BrewToHops_Brew_BrewId",
                        column: x => x.BrewId,
                        principalTable: "Brew",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BrewToHops_Hops_HopsId",
                        column: x => x.HopsId,
                        principalTable: "Hops",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BrewToMalt",
                columns: table => new
                {
                    BrewId = table.Column<int>(nullable: false),
                    MaltId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrewToMalt", x => new { x.BrewId, x.MaltId });
                    table.ForeignKey(
                        name: "FK_BrewToMalt_Brew_BrewId",
                        column: x => x.BrewId,
                        principalTable: "Brew",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BrewToMalt_Malt_MaltId",
                        column: x => x.MaltId,
                        principalTable: "Malt",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BrewToMashTemperature",
                columns: table => new
                {
                    BrewId = table.Column<int>(nullable: false),
                    MashTemperatureId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrewToMashTemperature", x => new { x.BrewId, x.MashTemperatureId });
                    table.ForeignKey(
                        name: "FK_BrewToMashTemperature_Brew_BrewId",
                        column: x => x.BrewId,
                        principalTable: "Brew",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BrewToMashTemperature_MashTemperature_MashTemperatureId",
                        column: x => x.MashTemperatureId,
                        principalTable: "MashTemperature",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Brew_FermentationId",
                table: "Brew",
                column: "FermentationId");

            migrationBuilder.CreateIndex(
                name: "IX_Brew_YeastId",
                table: "Brew",
                column: "YeastId");

            migrationBuilder.CreateIndex(
                name: "IX_BrewToHops_HopsId",
                table: "BrewToHops",
                column: "HopsId");

            migrationBuilder.CreateIndex(
                name: "IX_BrewToMalt_MaltId",
                table: "BrewToMalt",
                column: "MaltId");

            migrationBuilder.CreateIndex(
                name: "IX_BrewToMashTemperature_MashTemperatureId",
                table: "BrewToMashTemperature",
                column: "MashTemperatureId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BrewToHops");

            migrationBuilder.DropTable(
                name: "BrewToMalt");

            migrationBuilder.DropTable(
                name: "BrewToMashTemperature");

            migrationBuilder.DropIndex(
                name: "IX_Brew_FermentationId",
                table: "Brew");

            migrationBuilder.DropIndex(
                name: "IX_Brew_YeastId",
                table: "Brew");

            migrationBuilder.AddColumn<int>(
                name: "BrewId",
                table: "Yeast",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "BrewId",
                table: "MashTemperature",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "BrewId",
                table: "Malt",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "BrewId",
                table: "Hops",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "BrewId",
                table: "Fermentation",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_MashTemperature_BrewId",
                table: "MashTemperature",
                column: "BrewId");

            migrationBuilder.CreateIndex(
                name: "IX_Malt_BrewId",
                table: "Malt",
                column: "BrewId");

            migrationBuilder.CreateIndex(
                name: "IX_Hops_BrewId",
                table: "Hops",
                column: "BrewId");

            migrationBuilder.CreateIndex(
                name: "IX_Brew_FermentationId",
                table: "Brew",
                column: "FermentationId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Brew_YeastId",
                table: "Brew",
                column: "YeastId",
                unique: true);

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
        }
    }
}
