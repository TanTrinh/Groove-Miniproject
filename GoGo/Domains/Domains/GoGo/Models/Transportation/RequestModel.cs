using AutoMapper;
using Domains.GoGo.Entities;
using System;
using FluentValidation;

namespace Domains.GoGo.Models.Transportation
{
    public class RequestModel
    {
        public int Id { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime PickingDate { get; set; }
		public DateTime DeliveryDate { get; set; }

        public double DeliveryLatitude { get; set; }
        public double DeliveryLongitude{ get; set; }

        public int PackageQuantity { get; set; }

        public string Code { set; get; }
		public string Status { get; set; }

		public long IssuerId { get; set; }
		public int WareHouseId { get; set; }    
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
        //public RequestModelValidator()
        //{
        //    RuleFor(p => p.PackageQuantity).NotEmpty();
        //    RuleFor(p => p.Code).NotEmpty();
        //    RuleFor(p => p.Status).NotEmpty();
        //    RuleFor(p => p.IssuerId).NotEmpty();
        //    RuleFor(p => p.WareHouseId).NotEmpty();
        //}
    }
}
