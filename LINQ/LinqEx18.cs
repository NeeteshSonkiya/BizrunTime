using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace LINQpROJECT
{
    class LinqEx18
    {
        static void Main(string[] args)
        {
            string myXML = @"<Departments>
                       <Department>Account</Department>
                       <Department>Sales</Department>
                       <Department>Pre-Sales</Department>
                       <Department>Marketing</Department>
                       </Departments>";

            XDocument xdoc = new XDocument();
            xdoc = XDocument.Parse(myXML);

            //Delete
            xdoc.Descendants().Where(s => s.Value == "Marketing").Remove();

            var result = xdoc.Element("Deparments").Descendants();

            foreach(XElement item in result)
            {
                Console.WriteLine("Department Name - " + item.Value);
            }
            Console.WriteLine("Press any key to exit");
            Console.ReadKey();
        }
    }
}
