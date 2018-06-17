using AutoMapper;
using Domains.Core;
using Domains.Identity.Entities;
using Groove.AspNetCore.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Entities
{
    public class Request : IEntity<string>
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

		public User Issuer { get; set; }
		public WareHouse WareHouse { get; set; }
        string IEntity<string>.Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        //string IEntity<string>.Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }

    public class RequestModel : Profile
    {
        public RequestModel()
        {
            CreateMap<Request, Request>();
        }
    }
}
