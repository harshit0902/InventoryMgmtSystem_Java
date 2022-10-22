/*package com.harshit.miniproject.authentication;

import com.harshit.miniproject.exception.UserAlreadyExistsException;
//import com.harshit.miniproject.relational.UserAccount;
import com.harshit.miniproject.repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public class UserAccountDaoService /*implements UserAccountDao {

    private final UserAccountRepository userAccountRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserAccountDaoService(UserAccountRepository userAccountRepository, PasswordEncoder passwordEncoder) {
        this.userAccountRepository = userAccountRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional
    public Optional<UserAccount> getUserById(String id) {
        return userAccountRepository.findById(id);
    }

    @Override
    @Transactional
    public UserAccount addUser(UserAccount user) throws UserAlreadyExistsException {
        Optional<UserAccount> checkUser = userAccountRepository.findById(user.getUsername());

        if (checkUser.isEmpty()) {
            String unencryptedPassword = user.getPassword();
            user.setPassword(passwordEncoder.encode(unencryptedPassword));
            return userAccountRepository.saveAndFlush(user);
        } else {
            throw new UserAlreadyExistsException(String.format("User with id %s already exists", user.getUsername()));
        }
    }
}*/
