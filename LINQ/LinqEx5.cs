using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQpROJECT
{
    class LinqEx5
    {
        static void Main(string[] args)
        {
            IList mixedList = new ArrayList();
            mixedList.Add(0);
            mixedList.Add("on1");
            mixedList.Add("Two");
            mixedList.Add(3);
            mixedList.Add(new Student() { StudentId = 1, StudentName = "Bhagat", age = 34 });

            var stringResult = from s in mixedList.OfType<string>() select s;
            var intResult = from s in mixedList.OfType<int>() select s;
            var stdResult = from s in mixedList.OfType<Student>() select s;
                            
            foreach ( var str in stringResult)
            {
                Console.WriteLine(str);
            }
            Console.WriteLine();

            foreach(var integer in intResult)
            {
                Console.WriteLine(integer);
            }
            Console.WriteLine();

            foreach(var std in stdResult)
            {
                Console.WriteLine(std.StudentId + " " + std.StudentName);
            }
            Console.ReadLine();
        }
    }
}
