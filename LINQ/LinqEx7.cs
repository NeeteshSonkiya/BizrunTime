using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQpROJECT
{
    class LinqEx7
    {
        static void Main(string[] args)
        {

            // Customer collection
            IList<Customer> list = new List<Customer>() {
                new Customer() { id = 1, name = "John", Cage = 18 } ,
                new Customer() { id = 2, name = "Steve",  Cage = 21 } ,
                new Customer() { id = 3, name = "Bill",  Cage = 18 } ,
                new Customer() { id = 4, name = "Ram" , Cage = 20 } ,
                new Customer() { id = 5, name = "Ron" , Cage = 21 }
            };

            var groupedResult = from s in list group s by s.Cage;

            //iterate each group        
            foreach (var ageGroup in groupedResult)
            {
                Console.WriteLine("Age Group: {0}", ageGroup.Key); //Each group has a key 

                foreach (Customer s in ageGroup) // Each group has inner collection
                    Console.WriteLine("Customer Name: {0}", s.name);
            }
            Console.WriteLine();
            Console.WriteLine("tolookUp ");

            var lookupResult = list.ToLookup(s => s.Cage);
            foreach (var group in lookupResult)
            {
                Console.WriteLine("Age Group: {0}", group.Key);

                foreach(Customer c in group)
                {
                    Console.WriteLine("Customer Name: {0}", c.name);
                }
            }
            Console.ReadLine();
        }
    }
    public class Customer
    {

        public int id { get; set; }
        public string name { get; set; }
        public int Cage { get; set; }

    }
}