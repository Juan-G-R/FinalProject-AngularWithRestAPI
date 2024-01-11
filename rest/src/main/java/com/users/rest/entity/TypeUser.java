package com.users.rest.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="typeusers")
public class TypeUser {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")	
	private int id;
	
	@Column(name="type_user")
	private String typeUser;

	public TypeUser() {
	}

	public TypeUser(int id, String type_user) {
		this.id = id;
		this.typeUser = type_user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType_user() {
		return typeUser;
	}

	public void setType_user(String type_user) {
		this.typeUser = type_user;
	}

	@Override
	public String toString() {
		return "TypeUser [id=" + id + ", type_user=" + typeUser + "]";
	}
	
	
	
}
