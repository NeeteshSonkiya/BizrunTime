using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQpROJECT
{
    class LinqEx
    {
        static void Main(string[] args)
        {
            int[] arr = { 10, 20, 31, 23, 45, 32, 65, 86, 78, 89, 90, 96, 84, 68, 95, 85, 45 };
            var brr = from i in arr where i > 40 orderby i descending select i;
            foreach (int x in brr)
            {
                Console.Write(x + " ");
            }
            Console.ReadLine();
        }
    }
}
