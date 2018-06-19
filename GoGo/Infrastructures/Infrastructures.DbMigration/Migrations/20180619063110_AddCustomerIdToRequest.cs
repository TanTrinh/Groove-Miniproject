using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructures.DbMigration.Migrations
{
    public partial class AddCustomerIdToRequest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShipmentRequest_AspNetUsers_CustomerId",
                table: "ShipmentRequest");

            migrationBuilder.DropIndex(
                name: "IX_ShipmentRequest_CustomerId",
                table: "ShipmentRequest");

            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "ShipmentRequest");

            migrationBuilder.AddColumn<long>(
                name: "CustomerId",
                table: "Request",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_Request_CustomerId",
                table: "Request",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Request_AspNetUsers_CustomerId",
                table: "Request",
                column: "CustomerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Request_AspNetUsers_CustomerId",
                table: "Request");

            migrationBuilder.DropIndex(
                name: "IX_Request_CustomerId",
                table: "Request");

            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "Request");

            migrationBuilder.AddColumn<long>(
                name: "CustomerId",
                table: "ShipmentRequest",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_ShipmentRequest_CustomerId",
                table: "ShipmentRequest",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_ShipmentRequest_AspNetUsers_CustomerId",
                table: "ShipmentRequest",
                column: "CustomerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
