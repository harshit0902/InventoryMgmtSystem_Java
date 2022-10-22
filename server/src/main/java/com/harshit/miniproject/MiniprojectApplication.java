package com.harshit.miniproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class MiniprojectApplication implements CommandLineRunner {
    @Autowired
    //private UserAccountRepository repository;
    public static void main(String[] args) {
        SpringApplication.run(MiniprojectApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        System.out.println("start");
        //UserAccount u1 = new UserAccount("1","vishnu","vishnu", UserAccountDesignation.STUDENT);

        //repository.save(u1);
        System.out.println("finished CMD Line Runner");
    }

}
