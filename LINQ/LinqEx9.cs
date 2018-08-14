using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQpROJECT
{
    class LinqEx9
    {
        public static void Main()
        {
            IList<string> strList = new List<string>() { "One", "Two", "Three", "Four", "Five" };

            var result = strList.Skip(2);

            foreach (var str in result)
                Console.WriteLine(str);
            Console.ReadLine();
        }
    }
}
