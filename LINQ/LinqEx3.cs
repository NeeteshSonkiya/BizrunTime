using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQpROJECT
{
    class LinqEx3
    {
        public static void Main()
        {
            // Student collection
            IList<Student> studentList = new List<Student>() {
                new Student() { StudentId = 1, StudentName = "John", age = 13} ,
                new Student() { StudentId = 2, StudentName = "Moin",  age = 21 } ,
                new Student() { StudentId = 3, StudentName = "Bill",  age = 18 } ,
                new Student() { StudentId = 4, StudentName = "Ram" , age = 20} ,
                new Student() { StudentId = 5, StudentName = "Ron" , age = 15 }
            };

            Func<Student, bool> isStudentTeenAger = s => s.age > 12 && s.age < 20;

            var teenAgerStudents = from s in studentList
                                   where isStudentTeenAger(s)
                                   select s;

            Console.WriteLine("Teen age Students:");

            foreach (Student std in teenAgerStudents)
            {
                Console.WriteLine(std.StudentName);
            }
            Console.ReadLine();
        }
    }
}

