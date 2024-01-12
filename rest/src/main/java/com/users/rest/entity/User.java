package com.users.rest.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class User {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name = "first_name")
	private String first_name;
	
	@Column(name = "last_name")
	private String last_name;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "type_user")
	private String  type_user; 
	//In the db is a int but here a tring because normally I only used it with the name of the type user and not the id
	//I could create a new object only for this but I thing is unnecessary code and would make it slowe
	
	public User() {
	}
	
	public User(String first_name, String last_name, String email, String type_user) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.type_user = type_user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String  getType_user() {
		return type_user;
	}
	
	
	public void setType_user(String type_user) {
		this.type_user = type_user;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", first_name=" + first_name + ", last_name=" + last_name + ", email=" + email
				+ ", type_user=" + type_user + "]";
	}


	
	
	
}
