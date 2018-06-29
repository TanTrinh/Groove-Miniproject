using AutoMapper;
using Domains.GoGo.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Models.Transportation
{
    public class CreateShipmentModel
    {
		public int Id { get; set; }
		public int Code { get; set; }
		public List<int> RequestIdList { get; set; }

		public int RequestQuantity { get; set; }

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
			CreateMap<CreateShipmentModel, Shipment>();
		}
	}

	
}
