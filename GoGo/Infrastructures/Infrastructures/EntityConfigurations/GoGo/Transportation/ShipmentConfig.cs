using Domains.GoGo.Entities;
using Groove.AspNetCore.EntityFramework;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructures.EntityConfigurations.GoGo
{
	public class ShipmentConfig : EntityConfiguration<Shipment>
	{

		public override void OnConfigure(EntityTypeBuilder<Shipment> builder)
		{
			builder.HasKey(p => p.Id);

			builder.HasOne(p => p.Vehicle);
			builder.HasOne(p => p.Driver);
			
		}
	}
}
