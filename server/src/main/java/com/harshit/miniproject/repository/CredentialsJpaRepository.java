package com.harshit.miniproject.repository;

import com.harshit.miniproject.model.Credentials;
import com.harshit.miniproject.model.DiscussionIndex;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CredentialsJpaRepository extends JpaRepository<Credentials,Long> {

    //List<DiscussionIndex> findAllByDiscussionId(Long discussionID);
}
