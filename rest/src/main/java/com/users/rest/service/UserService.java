package com.users.rest.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.users.rest.entity.TypeUser;
import com.users.rest.entity.User;

public interface UserService {

	User findById (Integer id);
	
	List<User> getAllParsed();
	
	List<User> getAllRaw();
	
	void deleteUser(Integer id);
	
	User addUser(User user);
	
	List<TypeUser> listAllTypeUsers();
	
	void deleteTypeUser(Integer id);
	
	TypeUser addTypeUser(TypeUser typeUser);
		

}
