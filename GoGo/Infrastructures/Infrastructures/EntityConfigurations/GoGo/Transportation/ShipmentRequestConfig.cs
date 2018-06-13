using Domains.GoGo.Entities;
using Groove.AspNetCore.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructures.EntityConfigurations.GoGo
{
	public class ShipmentRequestConfig : EntityConfiguration<ShipmentRequest>
	{
		public override void OnConfigure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<ShipmentRequest> builder)
		{
			builder.HasKey(p => p.Id);

			builder.HasOne(p => p.Request);
			builder.HasOne(p => p.Shipment);
			builder.HasOne(p => p.Customer);

		}
	}
}
