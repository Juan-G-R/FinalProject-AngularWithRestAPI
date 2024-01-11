package com.users.rest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.users.rest.entity.User;

import jakarta.transaction.Transactional;

public interface UserRepository extends JpaRepository<User, Integer>{

	
	@Query(value = "SELECT Users.id, Users.first_name, Users.last_name, Users.email, TypeUsers.type_user " +
            "FROM Users " +
            "INNER JOIN TypeUsers ON Users.type_user = TypeUsers.id ", nativeQuery = true)
	List<User> findAllParsed();
	
	@Query(value = "SELECT Users.id, Users.first_name, Users.last_name, Users.email, TypeUsers.type_user " +
            "FROM Users " +
            "INNER JOIN TypeUsers ON Users.type_user = TypeUsers.id ", nativeQuery = true)
	List<User> findParsed(); //Find user with parsed type_user
		
	@Modifying
	@Transactional	
	@Query(value = "INSERT INTO Users (first_name, last_name, email, type_user) VALUES (?1, ?2, ?3, ?4);" , nativeQuery = true)
	void addParsedUser(String name, String last_name, String email, int type_user); //Send the user to the db with the right format
	
	@Modifying
	@Transactional	
	@Query(value = "UPDATE users "
			+ "SET first_name = ?1, last_name = ?2, email = ?3, type_user = ?4 "
			+ "WHERE id = ?5" , nativeQuery = true)
	void updateParsedUser(String name, String last_name, String email, int type_user, int id); //Update the user to the db with the right format
	
	@Query(value = "SELECT typeusers.id FROM typeusers WHERE typeusers.type_user = ? ;", nativeQuery = true)
	List<Integer> getTypeUserId(String type_user); //Pass from type_user name to de id to send it to the db

}	
