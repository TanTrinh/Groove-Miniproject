using AutoMapper;
using Domains.GoGo.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Models.Transportation
{
    public class RequestDetailModel
    {
        public int PackageQuantity { get; set; }
        public string Code { set; get; }
        public string ReceiverName { set; get; }
        public string ReceiverPhoneNumber { set; get; }

    }
    public class RequestDetaiModelMapper : Profile
    {
        public RequestDetaiModelMapper()
        {
            CreateMap<RequestDetailModel, Request>();
        }
    }
}
