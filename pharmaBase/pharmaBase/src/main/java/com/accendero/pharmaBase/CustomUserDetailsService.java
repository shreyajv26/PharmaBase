package com.accendero.pharmaBase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
 
@Service
public class CustomUserDetailsService  {
 
    @Autowired
    private UserRepository userRepo;
     
    public String loadUserByUsername(String username , String password) throws UsernameNotFoundException {
        
    	 User user = userRepo.findByEmail(username);
         if(user == null) {
             throw new RuntimeException("User does not exist.");
         }
         if(!user.getPassword().equals(password)){
             throw new RuntimeException("Password mismatch.");
         }
         
        return "found";
    }
    
    
 
}