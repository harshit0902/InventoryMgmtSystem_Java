package com.harshit.miniproject.authentication;

import com.harshit.miniproject.exception.UserAlreadyExistsException;
import com.harshit.miniproject.relational.UserAccount;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserAccountDetails extends UserDetailsService {

    UserAccount saveUser(UserAccount user) throws UserAlreadyExistsException;
}
