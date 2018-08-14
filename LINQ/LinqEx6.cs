using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQpROJECT
{
    class Employee
    {
        public int empId { get; set; }
        public string empName { get; set; }
        public int empAge { get; set; }
    }
    class LinqEx6
    {
        static void Main(string[] args)
        {
            IList<Employee> list = new List<Employee>()
            {
                new Employee (){empId = 1, empName = "Roy", empAge = 34},
                new Employee (){empId = 2, empName = "Rihan", empAge = 23},
                new Employee (){empId = 3, empName = "Naman", empAge = 33},
                new Employee (){empId = 4, empName = "Subh", empAge = 53},
                new Employee (){empId = 5, empName = "Meg", empAge = 52},
                new Employee (){empId = 6, empName = "Stephon", empAge = 25},
            };

            var orderByResult = from e in list orderby e.empName select e;

            var orderByDescResult = from e in list orderby e.empName descending select e;

            Console.WriteLine("Ascending Order : ");
            foreach(var emp in orderByResult)
            {
                Console.WriteLine(emp.empId + " " + emp.empName + " " + emp.empId);
            }
            Console.WriteLine();
            Console.WriteLine("Descending order");
            foreach(var emp in orderByDescResult)
            {
                Console.WriteLine(emp.empId + " " + emp.empName + " " + emp.empAge);
            }
            Console.WriteLine();

            var multipleSort = from e in list orderby e.empName, e.empAge select e;
            foreach(var emp in multipleSort)
            {
                Console.WriteLine(emp.empId + "  " + emp.empName + " " + emp.empAge);
            }
            Console.ReadLine();
            /*
             var empInAscOrder = list.OrderBy(s => s.empName);
		
		var empInDescOrder = list.OrderByDescending(s => s.empName);
		
		
		Console.WriteLine("Ascending Order:");
		
		foreach (var std in empInAscOrder)
        	Console.WriteLine(std.empName);
		
		Console.WriteLine("Descending Order:");
		
		foreach (var std in empInDescOrder)
        	Console.WriteLine(std.empName);
		
             */
        }
    }
}
