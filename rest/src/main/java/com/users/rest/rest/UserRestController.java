package com.users.rest.rest;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.users.rest.entity.TypeUser;
import com.users.rest.entity.User;
import com.users.rest.service.UserService;

@RestController
@RequestMapping("/usersAPI")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE})
public class UserRestController {

	private UserService userService;
	
	
	public UserRestController(UserService userService) {
		this.userService = userService;
	}


	//---------------------User--------------------------

	@GetMapping("/user/{userId}")
	public User findUserById(@PathVariable Integer userId) {
		return userService.findById(userId);
	}
	
	@GetMapping("/allUsers")
	public List<User> getAll() {
		return userService.getAllParsed();
	}
	
	@GetMapping("/allUsersRaw")
	public List<User> getAllRaw() {
		return userService.getAllRaw();
	}
	
	
	@DeleteMapping("/deleteUser/{userId}")
	public void deleteUser(@PathVariable Integer userId) {
		userService.deleteUser(userId);
	}
	
	@PostMapping("/addUser")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
	
	//---------------------Type User--------------------------
	
	
	@GetMapping("/allTypeUsers")
	public List<TypeUser> listAllTypeUsers() {
		return userService.listAllTypeUsers();
	}
	
	@PostMapping("/addTypeUser")
	public TypeUser addTypeUser(@RequestBody TypeUser typeUser) {
		return userService.addTypeUser(typeUser);
	}
	
	@DeleteMapping("/deleteTypeUser/{TypeUseId}")
	public void deleteTypeUser(@PathVariable Integer TypeUseId) {
		userService.deleteTypeUser(TypeUseId);
	}
	

}
