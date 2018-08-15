using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQpROJECT
{
    class LinqEx21
    {
        static void Main(string[] args)
        {
            List<string> phrases = new List<string>() { "The operator projects values on basis of a transform function",
                "The operator project the sequences of values which are based on a transform function as well as flattens them into a single sequence" };

            var query = from phrase in phrases
                        from word in phrase.Split(' ')
                        select word;

            foreach (string s in query)
                Console.WriteLine(s);
            Console.ReadLine();
        }
    }
}
