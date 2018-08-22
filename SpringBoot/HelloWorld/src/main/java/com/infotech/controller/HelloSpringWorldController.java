package com.infotech.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloSpringWorldController {

	@RequestMapping(value="/")
	public String get() {
		return "Hello Spring Boot";
	}
}
