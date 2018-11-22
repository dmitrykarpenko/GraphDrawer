using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphDrawer.Domain.Common.Models;
using Microsoft.AspNetCore.Mvc;

namespace GraphDrawer.Controllers
{
    [Route("api/[controller]")]
    public class GraphsController : Controller
    {
        // GET api/graphs/default
        [HttpGet]
        [Route("default")]
        public GraphNode GetDefault()
        {
            return new GraphNode
            {
                Name = "First",
                ChildNodes = new[]
                {
                    new GraphNode { Name = "F1" },
                    new GraphNode { Name = "F2" },
                }
            };
        }
    }
}
