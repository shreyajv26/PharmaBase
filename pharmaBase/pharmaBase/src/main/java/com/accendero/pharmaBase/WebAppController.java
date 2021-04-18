package com.accendero.pharmaBase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class WebAppController {
	User u;

	@Autowired
	private UserRepository userRepository;

	@GetMapping("")
	public String showWelcomeScreen() {
		return "welcomeScreen";
	}

	@GetMapping("/register")
	public String showSignUpPage(Model model) {
		u = new User();
		model.addAttribute("user", u);
		return "signup_form";
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody LoginForm user) {
		System.out.println("in login form");
		System.out.println(user.toString());
		 return new ResponseEntity<>(
			      "login successful ", 
			      HttpStatus.OK);

	}


	@PostMapping("/register_process")
	public String successfulRegister(@RequestBody User u) {
		System.out.println("in here");
		System.out.println(u.toString());
		userRepository.save(u);
		return "registration_success";

	}

}
