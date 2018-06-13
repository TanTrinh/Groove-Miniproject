using Domains.GoGo.Entities.Fleet;
using Groove.AspNetCore.EntityFramework;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructures.EntityConfigurations.GoGo.Fleet_management
{
	class VehicleFeatureRequestConfig : EntityConfiguration<VehicleFeatureRequest>
	{
		public override void OnConfigure(EntityTypeBuilder<VehicleFeatureRequest> builder)
		{
			builder.HasKey(p => p.Id);
			builder.Property(p => p.Id).ValueGeneratedOnAdd();

			builder.HasOne(p => p.Request).WithOne().OnDelete(Microsoft.EntityFrameworkCore.DeleteBehavior.Restrict);
			builder.HasOne(p => p.VehicleFeature).WithOne().OnDelete(Microsoft.EntityFrameworkCore.DeleteBehavior.Restrict);

			builder.Property(p => p.RequestId).IsRequired();
			builder.Property(p => p.VehicleFeatureId).IsRequired();

		}
	}
}
