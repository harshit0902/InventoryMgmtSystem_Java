package com.harshit.miniproject.controller;

import com.harshit.miniproject.authentication.UserAccountService;
import com.harshit.miniproject.exception.UserAlreadyExistsException;
import com.harshit.miniproject.relational.UserAccount;
import com.harshit.miniproject.repository.UserAccountRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserAccountService userAccountService;

    private final UserAccountRepository repository;

    public UserController(UserAccountService userAccountService, UserAccountRepository repository) {
        this.userAccountService = userAccountService;
        this.repository = repository;
    }

    @GetMapping("/{userId}")
    @PreAuthorize("hasAnyRole('ROLE_HOD', 'ROLE_DEAN')")
    public ResponseEntity<UserDetails> getUser(@PathVariable("userId") String userId) {
        try {
            return ResponseEntity.ok(userAccountService.loadUserByUsername(userId));
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<UserAccount>> users() {
        return ResponseEntity.ok(repository.findAll());
    }

    @PostMapping ("/save")
    public ResponseEntity<UserDetails> saveUser(@RequestBody UserAccount userAccount) {
        try {
            UserDetails addedUser = userAccountService.saveUser(userAccount);

            return new ResponseEntity<>(addedUser, HttpStatus.CREATED);
        } catch (UserAlreadyExistsException e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }
}
