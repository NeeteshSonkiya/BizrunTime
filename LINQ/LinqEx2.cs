using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQpROJECT
{
    class LinqEx2
    {
        static void Main(string[] args)
        {
            IList<string> sList = new List<string>()
            {
                "C# Tutorials",
                "VB.NET Tutorials",
                "Learn MVC",
                "Lwarn C++",
                "java Tutorials"
            };

            var result = from s in sList where s.Contains("Tutorials") select s;
            foreach(string str in result)
            {
                Console.WriteLine(str);
            }
            Console.ReadLine();
        }
    }
}
