package com.tech.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

	@GetMapping(value="/get")
	public String welcome() {
		return "Welcome to STS project";
	}
}
