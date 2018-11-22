using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraphDrawer.Domain.Common.Models
{
    public class GraphNode
    {
        public string Name { get; set; }
        public GraphNode[] ChildNodes { get; set; }
    }
}
