using System;
using System.Collections.Generic;
using System.Text;

namespace Groove.AspNetCore.UnitOfWork
{
    public interface IUnitOfWorkContext
    {
        object GetUnitOfWorkContext();
    }
}
