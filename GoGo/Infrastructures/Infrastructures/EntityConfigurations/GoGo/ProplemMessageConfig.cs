using Domains.GoGo.Entities;
using Groove.AspNetCore.EntityFramework;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructures.EntityConfigurations.GoGo
{
	class ProplemMessageConfig : EntityConfiguration<ProblemMessage>
	{
		public override void OnConfigure(EntityTypeBuilder<ProblemMessage> builder)
		{
			builder.HasKey(p => p.Id);
			builder.Property(p => p.Id).ValueGeneratedOnAdd();

			builder.HasOne(p => p.Shipment);
		}
	}
}
