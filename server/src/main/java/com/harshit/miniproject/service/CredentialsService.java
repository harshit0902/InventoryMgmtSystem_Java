package com.harshit.miniproject.service;

import com.harshit.miniproject.model.Credentials;
import com.harshit.miniproject.repository.CredentialsJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;

@Service
public class CredentialsService {
    @Autowired
    MongoOperations mongoOperations;
    @Autowired
    MongoTemplate mongoTemplate;

    Timestamp instant= Timestamp.from(Instant.now());
    private final CredentialsJpaRepository credentialsJpaRepository;

    @Autowired
    public CredentialsService(CredentialsJpaRepository credentialsJpaRepository) {
        this.credentialsJpaRepository = credentialsJpaRepository;
    }

    public int checkIfEmailExists(Credentials user) {
        if(mongoTemplate.getCollection("Credentials").equals(user))
            return 0;
        else
            return 1;
    }

    public void insertIntoCredentials(Credentials user){
        mongoOperations.insert(user, "Credentials");
    }

    /*public List<DiscussionIndex> listAllDiscussion(){
        return discussionIndexJpaRepository.findAll();
    }

    public Long getCountofUsersUnique(){
        DistinctIterable<Integer> res = mongoTemplate.getCollection("discussionText").distinct("userID", Integer.class);
        Long counter = Long.valueOf(0);
        for (Object i : res) {
            counter++;
        }
        Long len =  counter;
        return len;
    }

    public List<Integer> getListofAllUniqueParticipants(Long discussionID){
        DistinctIterable<DiscussionText> val = mongoTemplate.getCollection("DiscussionText").distinct("userID", DiscussionText.class);
        System.out.println(val);
        Set<Integer> result = new HashSet<>();
        List<Integer> res = new ArrayList<>();
        for(DiscussionText vals : val){
            result.add(vals.getUserID());
        }
        System.out.println(result);
        return res;
    }

    public void insertIntoDiscussionText(DiscussionText discussionText){
        mongoOperations.insert(discussionText);
    }

    public List<DiscussionText> getUserDiscussionText(Long disscussionID) {
        Criteria criteria = new Criteria();
        criteria = criteria.and("discussionID").is(disscussionID);
        Query qry = new Query(criteria);

        List<DiscussionText> res = mongoOperations.find(qry,DiscussionText.class);
        System.out.println(res);
        return res;
    }

    public List<DiscussionText> getAllDiscussionText(){

        List<DiscussionText> res = mongoOperations.findAll(DiscussionText.class);

        return res;
    }

    public void insertDiscussion(Long id,Long discussionId, String discussionName, String text, UserAccountDesignation accessClass){
        DiscussionIndex vals = new DiscussionIndex(id,discussionId,discussionName,text,instant,accessClass);
        discussionIndexJpaRepository.save(vals);
    }*/
}
