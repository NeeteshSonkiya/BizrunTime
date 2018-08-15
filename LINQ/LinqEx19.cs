using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace LINQpROJECT
{
    class LinqEx19
    {
        static void Main(string[] args)
        {

            string xml = @"<items>
                               <item>
                                <itemID>1</itemID>
                                <isGadget>True</isGadget>
                                <name>Star Wars Figures</name>
                                <text1>LukeSkywalker</text1>
                               </item>
                            </items>";

            XDocument xmlDoc = XDocument.Parse(xml);

            var items = from item in xmlDoc.Descendants("item")
                        where item.Element("itemID").Value == "1"
                        select item;

            foreach (XElement itemElement in items)
            {
                itemElement.SetElementValue("name", "Lord of the Rings Figures");
            }

            

            foreach(XElement i in items)
            {
                Console.WriteLine("item detail -" + i.Value + "\n");
            }

            Console.WriteLine("Press any key to exit");
            Console.ReadKey();
        }
    }
}
