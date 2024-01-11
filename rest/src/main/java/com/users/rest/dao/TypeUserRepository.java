package com.users.rest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.users.rest.entity.TypeUser;
import com.users.rest.entity.User;

public interface TypeUserRepository extends JpaRepository<TypeUser, Integer>{

	@Query(value = "SELECT typeusers.id FROM typeusers WHERE typeusers.type_user = ? ", nativeQuery = true)
	List<Integer> findByName(String typeUserName);
	
	TypeUser findBytypeUser(String typeUser);
}

