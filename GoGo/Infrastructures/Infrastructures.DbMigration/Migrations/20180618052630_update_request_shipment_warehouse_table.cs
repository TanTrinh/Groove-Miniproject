using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructures.DbMigration.Migrations
{
    public partial class update_request_shipment_warehouse_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "width",
                table: "Vehicle",
                newName: "Width");

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "WareHouse",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Request",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReceiverName",
                table: "Request",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReceiverPhoneNumber",
                table: "Request",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "WareHouse");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Request");

            migrationBuilder.DropColumn(
                name: "ReceiverName",
                table: "Request");

            migrationBuilder.DropColumn(
                name: "ReceiverPhoneNumber",
                table: "Request");

            migrationBuilder.RenameColumn(
                name: "Width",
                table: "Vehicle",
                newName: "width");
        }
    }
}
