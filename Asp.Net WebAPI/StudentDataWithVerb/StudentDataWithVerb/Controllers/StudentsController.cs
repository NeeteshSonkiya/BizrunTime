using StudentDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace StudentDataWithVerb.Controllers
{
    public class StudentsController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage print(String gender="All")
        {
            using (StudentDBEntities entities = new StudentDBEntities())
            {
                switch (gender.ToLower())
                {
                    case "all":
                        return Request.CreateResponse(HttpStatusCode.OK, entities.Students.ToList());
                    case "male":
                        return Request.CreateResponse(HttpStatusCode.OK,
                            entities.Students.Where(s => s.Gender.ToLower() == "male").ToList());
                    case "female":
                        return Request.CreateResponse(HttpStatusCode.OK,
                            entities.Students.Where(s => s.Gender.ToLower() == "female").ToList());
                    default:
                        return Request.CreateErrorResponse(HttpStatusCode.BadRequest,
                               "value for gender must be All, Male, or Female." + gender + " is invalid.");
                }
            }
        }
        [HttpPost]
        public HttpResponseMessage add([FromBody]Student student)
        {
            try
            {
                using (StudentDBEntities entities = new StudentDBEntities())
                {
                    entities.Students.Add(student);
                    entities.SaveChanges();

                    var message = Request.CreateResponse(HttpStatusCode.Created, student);
                    message.Headers.Location = new Uri(Request.RequestUri + student.ID.ToString());
                    return message;
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
        [HttpDelete]
        public HttpResponseMessage Remove(int id)
        {
            try
            {
                using (StudentDBEntities entities = new StudentDBEntities())
                {
                    var entity = entities.Students.FirstOrDefault(e => e.ID == id);
                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Student with id = " + id.ToString() + "Not Found to delete");
                    }
                    else
                    {
                        entities.Students.Remove(entity);
                        entities.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
        [HttpPut]
        public HttpResponseMessage Update(int id, [FromBody]Student student)
        {
            try
            {
                using (StudentDBEntities entities = new StudentDBEntities())
                {
                    var entity = entities.Students.FirstOrDefault(e => e.ID == id);
                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Student with id = " + id.ToString() + " Not Found");
                    }
                    else
                    {
                        entity.FirstName = student.FirstName;
                        entity.LastName = student.LastName;
                        entity.Gender = student.Gender;
                       
                        entities.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, entity);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
