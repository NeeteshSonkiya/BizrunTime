using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQpROJECT
{
    class LinqEx22
    {
        static void Main(string[] args)
        {
            IList<string> strList1 = new List<string>() { "One", "Two", "Three", "Four", "Five" };
            IList<string> strList2 = new List<string>() { "Four", "Five", "Six", "Seven", "Eight" };

            var result = strList1.Intersect(strList2);

            foreach (string str in result)
                Console.WriteLine(str);
        }
    }
}
