package Biz.Management;

import java.util.ArrayList;
import java.util.List;

public class UserDao {

	List<User> users;
	
	public UserDao()
	{
		users = new ArrayList<User>();
		
		User u1 = new User();
		u1.setId(101);
		u1.setName("Rakesh");
		u1.setAge(31);
		
		User u2 = new User();
		u2.setId(102);
		u2.setName("Ramesh");
		u2.setAge(45);
		
		User u3 = new User();
		u3.setId(103);
		u3.setName("Arun");
		u3.setAge(25);
		
		users.add(u1);
		users.add(u2);
		users.add(u3);
	}
	
	public List<User> getUsers()
	{
		return users;
	}
	
	public User getUser(int id) {
		
		User u1 = null;
		for (User u : users)
		{
			if (u.getId() == id)
			{
				return u;
			}
		}
		return null;
	}

	public void create(User u) {
		// TODO Auto-generated method stub
		users.add(u);
		
	}

	public List<User> UpdateUser(int id, String name) {
		// TODO Auto-generated method stub
		
		for (User u : users)
		{
			if ( u.getId() == id)
			{
				u.setName(name);
			}
		}
		return users;
	}

	public List<User> delUser(int id) {
		// TODO Auto-generated method stub
		
		for ( User u : users)
		{
			if (u.getId() == id)
			{
				users.remove(u);
			}
		}
		return users;
	}
}
