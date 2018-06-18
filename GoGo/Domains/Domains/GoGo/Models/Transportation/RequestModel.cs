using AutoMapper;
using Domains.GoGo.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Models.Transportation
{
    public class WaitingRequestModel
    {
		public int Id { get; set; }

		//public DateTime CreatedDate { get; set; }
		public DateTime PickingDate { get; set; }
		public DateTime DeliveryDate { get; set; }

		public double DeliveryLatitude { get; set; }
		public double DeliveryLongitude { get; set; }

		public int PackageQuantity { get; set; }

		public string Code { set; get; }
		public string Status { get; set; }
	}

	public class WaitingRequestModelMaper : Profile
	{
		public WaitingRequestModelMaper()
		{
			CreateMap<WaitingRequestModel, Request>();
		}
	}
}
