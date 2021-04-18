package com.accendero.pharmaBase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class PharmaBaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(PharmaBaseApplication.class, args);
	}

}
