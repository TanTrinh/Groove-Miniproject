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

			builder.HasOne(p => p.Request).WithOne().OnDelete(Microsoft.EntityFrameworkCore.DeleteBehavior.Restrict);
			builder.HasOne(p => p.Shipment).WithOne().OnDelete(Microsoft.EntityFrameworkCore.DeleteBehavior.Restrict);
			builder.HasOne(p => p.Customer).WithOne().OnDelete(Microsoft.EntityFrameworkCore.DeleteBehavior.Restrict);

			builder.Property(p => p.ShipmentId).IsRequired();
			builder.Property(p => p.RequestId).IsRequired();
			builder.Property(p => p.Status).IsRequired();
			builder.Property(p => p.Note).IsRequired();

		}
	}
}
