package com.SpringB;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpringBootJdbcController {
	
	@Autowired
	JdbcTemplate jdbc;
	
	@RequestMapping("/insert")
	public String index() {
		
		jdbc.execute("insert into user1(name,email) values('Neetesh', 'neetesh78@gmail.com')");
		return "data inserted Successfully";
	}
}
