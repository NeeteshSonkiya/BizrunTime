using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQpROJECT
{
    class LinqEx4
    {
        public static void Main()
        {
            // Student collection
            IList<Student1> studentList = new List<Student1>() {
                new Student1() { StudentID = 1, SName = "John", Age = 13} ,
                new Student1() { StudentID = 2, SName = "Moin",  Age = 21 } ,
                new Student1() { StudentID = 3, SName = "Bill",  Age = 18 } ,
                new Student1() { StudentID = 4, SName = "Ram" , Age = 20} ,
                new Student1() { StudentID = 5, SName = "Ron" , Age = 15 }
            };

            Func<Student1, bool> isTeenAger = delegate (Student1 s) {
                return s.Age > 12 && s.Age < 20;
            };

            var filteredResult = from s in studentList
                                 where isTeenAger(s)
                                 select s;

            foreach (var std in filteredResult)
                Console.WriteLine(std.SName);


            //using extenstion method  where
            var filteredResult1 = studentList.Where((s, i) => {
                if (i % 2 == 0) // if it is even element
                    return true;

                return false;
            });

            foreach (var std in filteredResult1)
                Console.WriteLine(std.SName);

        Console.ReadLine();
        }
    }

    public class Student1
    {

        public int StudentID { get; set; }
        public string SName { get; set; }
        public int Age { get; set; }

    }
}
