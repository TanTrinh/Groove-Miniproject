using AutoMapper;
using Domains.GoGo.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Models.Transportation
{
    public class CreateShipmentModel
    {
		public List<int> RequestIdLIst { get; set; }

		public string Code { set; get; }

		public int RequestQuantity { get; set; }

		public DateTime CreatedDate { set; get; }
		public DateTime StartDate { get; set; }
		public DateTime EndDate { get; set; }

		public int VehicleId { get; set; }
		public long DriverId { get; set; }
		public long CoordinatorId { get; set; }
	}

	public class CreateShipmentModelMapper : Profile
	{
		public CreateShipmentModelMapper()
		{
			CreateMap<Shipment, CreateShipmentModel>();
		}
	}
}
