package Biz.Management;

import java.util.Arrays;
import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("users")
public class UserResource {
	
	UserDao ud = new UserDao();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getUsers()
	{
		return ud.getUsers();
	}
	
	@GET
	@Path("user/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public User getUser(@PathParam("id")int id)
	{
		return ud.getUser(id);
	}
	
	@POST
	@Path("user")
	public User createUser(User u)
	{
		System.out.println(u);
		ud.create(u);
		return u;
	}
	
	@PUT
	@Path("user/{id}/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> UpdateUser(@PathParam("id")int id, @PathParam("name")String name)
	{
		
		return ud.UpdateUser(id, name);
	}
	
	@DELETE
	@Path("user/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> removeUser(@PathParam("id")int id)
	{
		
		return ud.delUser(id);
	}
}
