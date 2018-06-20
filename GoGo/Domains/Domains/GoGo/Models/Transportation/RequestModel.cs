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

		public string DeliveryAddress { get; set; }
		public string WereHouseAddress { get; set; }

		public string CustomerName { get; set; }

		public string Email { get; set; }
		public int PackageQuantity { get; set; }

		public string Code { set; get; }
		public string Status { get; set; }
	}

	public class WaitingRequestModelMaper : Profile
	{
		public WaitingRequestModelMaper()
		{
			var mapper = CreateMap<WaitingRequestModel, Request>();

			var mappers = CreateMap<Request, WaitingRequestModel>();

			mappers.ForMember(p => p.WereHouseAddress, opt => opt.MapFrom(s => s.WareHouse.Address));
			mappers.ForMember(p => p.DeliveryAddress, opt => opt.MapFrom(s => s.Address));
			mappers.ForMember(p => p.CustomerName, opt => opt.MapFrom(s => s.Customer.UserName));
		}
	}
}
