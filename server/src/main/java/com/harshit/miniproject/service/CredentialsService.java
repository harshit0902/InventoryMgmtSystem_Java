package com.harshit.miniproject.service;

import com.harshit.miniproject.model.Credentials;
import com.harshit.miniproject.repository.CredentialsJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

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

    /*public int checkIfEmailExists(Credentials user) {
        if(mongoTemplate.getCollection("Credentials").equals(user))
            return 0;
        else
            return 1;
    }*/

    public void insertIntoCredentials(Credentials user) {
        mongoOperations.insert(user, "Credentials");
    }

    public int getUserLogin(String email, String password) {
        /*Criteria c1 = new Criteria();
        c1 = c1.where("email").is(email);
        Query q1 = new Query(c1);*/
        Query q1 = new Query();
        q1.addCriteria(Criteria.where("email").is("abcd@gmail.com"));
        System.out.println(q1);
        List<Credentials> em = mongoOperations.find(q1, Credentials.class);
        System.out.println(em);

        /*Criteria c2 = new Criteria();
        c2 = c2.where("password").is(password);
        Query q2 = new Query(c2);*/
        Query q2 = new Query();
        q2.addCriteria(Criteria.where("password").is("abc"));
        System.out.println(q2);
        List<Credentials> pass = mongoOperations.find(q2, Credentials.class);
        System.out.println(pass);

        if(em.isEmpty())
            return 0;
        else
            return 1;
    }

    /*public int getUserEmail(String email) {
        Criteria c1 = new Criteria();
        c1 = c1.and("email").is(email);
        Query qry = new Query(c1);
        List<Credentials> em = mongoOperations.find(qry, Credentials.class);

        if(em.isEmpty())
            return 0;
        else
            return 1;
    }

    public int getUserPassword(String password) {
        Criteria c2 = new Criteria();
        c2 = c2.and("password").is(password);
        Query qry = new Query(c2);
        List<Credentials> pass = mongoOperations.find(qry, Credentials.class);

        if(pass.isEmpty())
            return 0;
        else
            return 1;
    }*/

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
