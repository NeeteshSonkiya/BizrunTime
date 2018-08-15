using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQpROJECT
{
    class LinqEx20
    {
        static void Main(string[] args)
        {
            List<string> words = new List<string>() { "apple", "banana", "cat", "day", "Eyes" };

            var query = from word in words select word.Substring(0, 1);

            foreach (string s in query)
                Console.WriteLine(s);
            Console.ReadLine();
        }
    }
}
