package com.users.rest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import com.users.rest.dao.TypeUserRepository;
import com.users.rest.dao.UserRepository;
import com.users.rest.entity.TypeUser;
import com.users.rest.entity.User;

@Service
public class UserServiceImpl implements UserService {

	private UserRepository userRepository;
	private TypeUserRepository typeUserRepository;

	@Autowired
	public UserServiceImpl(UserRepository userRepository, TypeUserRepository typeUserRepository) {
		this.userRepository = userRepository;
		this.typeUserRepository = typeUserRepository;
	}

	@Override
	public User findById(Integer id) {

		Optional<User> result = userRepository.findById(id);

		User tempUser;

		if (result.isPresent()) {
			tempUser = result.get();
		} else {
			throw new RuntimeException("Did not find user with id: " + id);
		}

		return tempUser;
	}

	@Override
	public List<User> getAllParsed() {

		return userRepository.findAllParsed();
	}

	@Override
	public List<User> getAllRaw() {
		return userRepository.findAll();
	}

	@Override
	public void deleteUser(Integer id) {
		userRepository.deleteById(id);
	}

	@Override
	public User addUser(User user) {

		System.out.println(user.toString());
		if (typeUserRepository.findByName(user.getType_user()) != null && user.getId() == 0) { //Check if the tpye_user name exists in the db 
			
			userRepository.addParsedUser(user.getFirst_name(), user.getLast_name(), user.getEmail(),userRepository.getTypeUserId(user.getType_user()).get(0)); //Send user info parsed
		
		} else if(userRepository.findById(user.getId()) != null){ //If exist update it with the id
			
			userRepository.updateParsedUser(user.getFirst_name(), user.getLast_name(), user.getEmail(),userRepository.getTypeUserId(user.getType_user()).get(0), user.getId());
		
		}
		
		return user;


	}

	@Override
	public List<TypeUser> listAllTypeUsers() {
		return typeUserRepository.findAll();
	}

	@Override
	public void deleteTypeUser(Integer id) {
		typeUserRepository.deleteById(id);
	}

	@Override
	public TypeUser addTypeUser(TypeUser typeUser) {		
		return typeUserRepository.save(typeUser);
	}



}
