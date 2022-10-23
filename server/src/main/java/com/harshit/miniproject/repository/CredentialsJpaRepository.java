package com.harshit.miniproject.repository;

import com.harshit.miniproject.model.Credentials;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CredentialsJpaRepository extends MongoRepository<Credentials,String> {

}
