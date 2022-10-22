package com.harshit.miniproject.repository;

import com.harshit.miniproject.model.Credentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CredentialsJpaRepository extends MongoRepository<Credentials,String> {

    //List<DiscussionIndex> findAllByDiscussionId(Long discussionID);
}
