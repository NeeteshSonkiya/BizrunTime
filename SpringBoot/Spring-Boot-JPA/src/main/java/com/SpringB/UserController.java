package com.SpringB;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping("/")
	public List<UserRecord> getAllUser(){
	
		return userService.getAllUsers();
	}
	
	@RequestMapping(value="/add-user", method = RequestMethod.POST)
	public void addUser(@RequestBody UserRecord userRecord) {
		userService.addUser(userRecord);
	}
	
	@RequestMapping(value="/user/{id}", method = RequestMethod.GET)
	public Optional<UserRecord> getUser(@PathVariable int id){
		return userService.getUser(id);
	}
	
	@RequestMapping(value="/user/{id}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable int id)
	{
		userService.delete(id);
	}
	
	@RequestMapping(value="/user/{id}", method = RequestMethod.PUT)
	public void updateUser(@PathVariable int id,@RequestBody UserRecord userRecord)
	{
		userService.update(id, userRecord);
	}
}
