package com.accendero.pharmaBase;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
	
	@Autowired
	ProductRepository productrepo;
	
	@Autowired
	CustomUserDetailsService customUserDetailsService;

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
		/*String result= customUserDetailsService.loadUserByUsername(user.getEmail(),user.getPassword());
		
		if(result.equals("Found"))
		return new ResponseEntity<>(
			      "login successful ", 
			      HttpStatus.OK);
		else
			return new ResponseEntity<>(
				      "invalid username password ", 
				      HttpStatus.BAD_REQUEST);*/

	}


	@PostMapping("/register_process")
	public String successfulRegister(@RequestBody User u) {
		System.out.println("in here");
		System.out.println(u.toString());
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	    String encodedPassword = passwordEncoder.encode(u.getPassword());
	    u.setPassword(encodedPassword);
		userRepository.save(u);
		return "registration_success";

	}
	
	
	@PostMapping("/addproduct")
	public ResponseEntity<String> addProduct(@RequestBody ProductFormData product) {
		System.out.println("in addaproduct form");
		System.out.println(product.toString());
		productrepo.save(product);
		 return new ResponseEntity<>(
			      "adding successful ", 
			      HttpStatus.OK);

	}
	
	@GetMapping("/listproduct")
	public List<ProductFormData> getAllProducts()
    {
        return productrepo.findAll();
    }

}
