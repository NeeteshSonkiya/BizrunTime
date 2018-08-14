using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQpROJECT
{
    public class Student
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public int age { get; set; }
    }
    class LinqEx1
    {
        static void Main(string[] args)
        {

            Student[] sArray = {
                    new Student() { StudentId = 1, StudentName = "John", age = 18 },
                    new Student() { StudentId = 2, StudentName = "Steve", age = 21 },
                    new Student() { StudentId = 3, StudentName = "Bill", age = 25 },
                    new Student() { StudentId = 4, StudentName = "Ram", age = 20 },
                    new Student() { StudentId = 5, StudentName = "Ron", age = 31 },
                    new Student() { StudentId = 6, StudentName = "Chris", age = 17 },
                    new Student() { StudentId = 7, StudentName = "Rob", age = 19 },
                    };

            // Use LINQ to find teenager students
            Student[] teenagerStudents = sArray.Where(s => s.age > 12 && s.age < 20).ToArray();
            foreach (Student s in teenagerStudents)
            {
                Console.WriteLine(s.StudentId + "  " + s.StudentName);
            }

            // Use LINQ to find first student whose name is Bill 
            Student bill = sArray.Where(s => s.StudentName == "Bill").FirstOrDefault();
            Console.WriteLine(bill.StudentId + "  " + bill.StudentName + " " + bill.age);

            // Use LINQ to find student whose StudentID is 5
            Student student5 = sArray.Where(s => s.StudentId == 5).FirstOrDefault();
            Console.WriteLine(student5.StudentName);

            //use Func method
            Func<Student, bool> isStudentTeenAger = s => s.age > 12 && s.age < 20;

            var teenAgerStudent = sArray.Where(isStudentTeenAger);

            Console.WriteLine("Teen age Students:");

            foreach (Student std in teenAgerStudent)
            {
                Console.WriteLine(std.StudentName);
            }
            Console.ReadLine();
        }
    }
}
