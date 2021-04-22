package com.accendero.pharmaBase;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
	
	
    public User findByEmail(String email);
	
}
