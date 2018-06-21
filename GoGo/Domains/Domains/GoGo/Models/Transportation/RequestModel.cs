using AutoMapper;
using Domains.GoGo.Entities;
using Domains.Identity.Entities;
using FluentValidation;
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
    public class RequestModel
    {
        public int Id { get; set; }

        public DateTime CreatedDate { get; set; }
        //Customer add 
        public DateTime PickingDate { get; set; }
        public DateTime ExpectedDate { set; get; }



        public double DeliveryLatitude { get; set; }
        public double DeliveryLongitude { get; set; }
        public string Address { set; get; }

        public int PackageQuantity { get; set; }

        public string Code { set; get; }
        public string Status { get; set; }

        public string ReceiverName { set; get; }
        public string ReceiverPhoneNumber { set; get; }

        public long IssuerId { get; set; }
        public int WareHouseId { get; set; }
        public long CustomerId { set; get; }

        public User Customer { set; get; }
        public User Issuer { get; set; }
        public WareHouse WareHouse { get; set; }
    }

    public class RequestMapper : Profile
    {
        public RequestMapper()
        {
            CreateMap<RequestModel, Request>();
        }
    }

    public class RequestModelValidator : AbstractValidator<RequestModel>
    {
        public RequestModelValidator()
        {
            RuleFor(p => p.PackageQuantity).NotEmpty().IsInEnum();
            RuleFor(p => p.Code).NotEmpty();
            RuleFor(p => p.Status).NotEmpty();
            RuleFor(p => p.IssuerId).NotEmpty();
            RuleFor(p => p.WareHouseId).NotEmpty();
        }
    }
}
