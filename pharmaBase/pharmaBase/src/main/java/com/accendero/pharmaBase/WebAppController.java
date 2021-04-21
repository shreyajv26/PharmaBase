package com.accendero.pharmaBase;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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


	@GetMapping("/register")
	public String showSignUpPage(Model model) {
		u = new User();
		model.addAttribute("user", u);
		return "signup_form";
	}
	
	@PostMapping("/")
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
	
	@PostMapping("/updateproduct/{item_id}")
	public ProductFormData updateProduct(@PathVariable  String item_id ,@RequestBody ProductFormData product) {
		System.out.println("in update product form old data " + product.toString());
		
		//Optional<ProductFormData> p =  productrepo.findById(item_id);
		
		ProductFormData editP=new ProductFormData();
		Optional<ProductFormData> p  = productrepo.findById(Long.parseLong(item_id));
	            
		editP.setItemId(Long.parseLong(item_id));
		editP.setProductNo(product.getProductNo());
		editP.setDrugName(product.getDrugName());
		editP.setMedCount(product.getMedCount());
		editP.setRackNo(product.getRackNo());

		ProductFormData updatedProduct = productrepo.save(editP);
	    return updatedProduct;
		
		
		
	}
	
	@GetMapping("/editproduct/{item_id}")
	public Optional<ProductFormData> editProduct(@PathVariable  String item_id) {
		System.out.println("in edit product form  item id "+item_id);
		
		Optional<ProductFormData> p =  productrepo.findById(Long.parseLong(item_id));
		System.out.println("Date retreived from"+p.toString());
		return p;
		
	}
	
	@DeleteMapping("/deleteproduct/{item_id}")
	public String deleteProduct(@PathVariable  String item_id) {
		System.out.println("in edit product form  item id "+item_id);
		
		 productrepo.deleteById(Long.parseLong(item_id));
		System.out.println("Product deleted successfully");
		return "Success";
		
	}
	
	@GetMapping("/listproduct")
	public List<ProductFormData> getAllProducts()
    {
        return productrepo.findAll();
    }
	
	
	
	@PostMapping("/success")
	public ResponseEntity<String> success(@RequestBody LoginForm user) {
		System.out.println("in login form");
		System.out.println(user.toString());
		return new ResponseEntity<>(
			      "login successful ", 
			      HttpStatus.OK);

	}

}
