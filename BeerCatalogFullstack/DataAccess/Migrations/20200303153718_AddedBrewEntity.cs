using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccess.Migrations
{
    public partial class AddedBrewEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "AspNetUsers",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateTable(
                name: "Fermentations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BrewId = table.Column<int>(nullable: false),
                    TemperatureValue = table.Column<int>(nullable: false),
                    TemperatureUnit = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fermentations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Brews",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BeerId = table.Column<int>(nullable: false),
                    DateTime = table.Column<DateTime>(nullable: false),
                    Location = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    FermentationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Brews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Brews_Beers_BeerId",
                        column: x => x.BeerId,
                        principalTable: "Beers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Brews_Fermentations_FermentationId",
                        column: x => x.FermentationId,
                        principalTable: "Fermentations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Hops",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BeerId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    AmountValue = table.Column<double>(nullable: false),
                    AmountUnit = table.Column<string>(nullable: true),
                    Add = table.Column<string>(nullable: true),
                    Attribute = table.Column<string>(nullable: true),
                    BrewId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hops", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Hops_Brew_BrewId",
                        column: x => x.BrewId,
                        principalTable: "Brews",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Impressions",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true),
                    BrewId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Impressions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Impressions_Brews_BrewId",
                        column: x => x.BrewId,
                        principalTable: "Brews",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Impressions_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Malts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BeerId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    AmountValue = table.Column<double>(nullable: false),
                    AmountUnit = table.Column<string>(nullable: true),
                    BrewId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Malts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Malts_Brews_BrewId",
                        column: x => x.BrewId,
                        principalTable: "Brews",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MashTemperature",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BeerId = table.Column<int>(nullable: false),
                    TemperatureValue = table.Column<int>(nullable: false),
                    TemperatureUnit = table.Column<string>(nullable: true),
                    Duration = table.Column<int>(nullable: false),
                    BrewId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MashTemperature", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MashTemperature_Brews_BrewId",
                        column: x => x.BrewId,
                        principalTable: "Brews",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BrewId = table.Column<int>(nullable: false),
                    EncodedPhoto = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Photos_Brews_BrewId",
                        column: x => x.BrewId,
                        principalTable: "Brews",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Brews_BeerId",
                table: "Brews",
                column: "BeerId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Brews_FermentationId",
                table: "Brews",
                column: "FermentationId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Hops_BrewId",
                table: "Hops",
                column: "BrewId");

            migrationBuilder.CreateIndex(
                name: "IX_Impressions_BrewId",
                table: "Impressions",
                column: "BrewId");

            migrationBuilder.CreateIndex(
                name: "IX_Impressions_UserId",
                table: "Impressions",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Malts_BrewId",
                table: "Malts",
                column: "BrewId");

            migrationBuilder.CreateIndex(
                name: "IX_MashTemperature_BrewId",
                table: "MashTemperature",
                column: "BrewId");

            migrationBuilder.CreateIndex(
                name: "IX_Photos_BrewId",
                table: "Photos",
                column: "BrewId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Hops");

            migrationBuilder.DropTable(
                name: "Impressions");

            migrationBuilder.DropTable(
                name: "Malts");

            migrationBuilder.DropTable(
                name: "MashTemperature");

            migrationBuilder.DropTable(
                name: "Photos");

            migrationBuilder.DropTable(
                name: "Brews");

            migrationBuilder.DropTable(
                name: "Fermentations");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
