package com.example.help;

import org.springframework.data.repository.CrudRepository;

import com.example.help.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
