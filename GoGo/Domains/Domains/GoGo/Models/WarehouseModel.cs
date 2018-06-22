using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Models
{
    public class WarehouseOfCustomerModel
    {
        public int Id { get; set; }
        public string NameWarehouse { get; set; }
    }

    public class WarehouseOfCustomerModelMaper : Profile
    {
        public WarehouseOfCustomerModelMaper()
        {
            CreateMap<WarehouseOfCustomerModel, WareHouse>();
            CreateMap<WareHouse, WarehouseOfCustomerModel>();
        }
    }
}
