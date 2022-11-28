package com.harshit.miniproject.service;

import com.harshit.miniproject.model.BuyerInvoice;
import com.harshit.miniproject.model.Credentials;
import com.harshit.miniproject.model.Item;
import com.harshit.miniproject.model.ItemList;
import com.harshit.miniproject.repository.AdminItemJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Service
public class AdminItemService {
    @Autowired
    MongoOperations mongoOperations;
    @Autowired
    MongoTemplate mongoTemplate;

    Timestamp instant= Timestamp.from(Instant.now());
    private final AdminItemJpaRepository adminItemJpaRepository;

    @Autowired
    public AdminItemService(AdminItemJpaRepository adminItemJpaRepository) {
        this.adminItemJpaRepository = adminItemJpaRepository;
    }

    public int insertIntoItem(Item special) {
        Item result = mongoOperations.insert(special, "Item");

        if(result == null)
            return 0;
        else
            return 1;
    }

    public int updateIntoItem(Item special) {
        Query q1 = new Query();
        q1.addCriteria(Criteria.where("itemID").is(special.getItemID()));
        Item item = mongoOperations.findOne(q1, Item.class);

        if(item != null)
        {
            Update update1 = new Update();
            update1.set("itemName", special.getItemName());
            update1.set("quantity", special.getQuantity());
            update1.set("price", special.getPrice());
            update1.set("quality1", special.getQuality1());
            update1.set("quality2", special.getQuality2());
            update1.set("quality3", special.getQuality3());
            mongoOperations.updateFirst(q1, update1, Item.class);
            return 1;
        }

        else
            return 0;
    }

    public int deleteIntoItem(int num) {
        Query q2 = new Query();
        q2.addCriteria(Criteria.where("itemID").is(num));
        Item item = mongoOperations.findOne(q2, Item.class);

        if(item != null)
        {
            System.out.println(item);
            mongoOperations.remove(item);
            return 1;
        }

        else
            return 0;
    }

    public List<Item> findData() {
        Query q4 = new Query();
        List<Item> data = mongoOperations.find(q4, Item.class);
        System.out.println(data);
        if(data != null)
            return data;
        else
            return null;
    }

    public List<Credentials> findCustomers() {
        Query q5 = new Query();
        q5.addCriteria(Criteria.where("typeOfAcc").is("buyer"));
        List<Credentials> data = mongoOperations.find(q5, Credentials.class);
        System.out.println(data);
        if(data != null)
            return data;
        else
            return null;
    }

    public List<Credentials> findSuppliers() {
        Query q6 = new Query();
        q6.addCriteria(Criteria.where("typeOfAcc").is("seller"));
        List<Credentials> data = mongoOperations.find(q6, Credentials.class);
        if(data != null)
            return data;
        else
            return null;
    }

    /*public double findPrice(int itemNo) {
        Query q1 = new Query();
        q1.addCriteria(Criteria.where("itemID").is(itemNo));
        Item item = mongoOperations.findOne(q1, Item.class);
        System.out.println(item);
        if(item != null)
        {
            System.out.println(item.getPrice());
            return item.getPrice();
        }
        else
            return 0.0;
    }

    public List<BuyerInvoice> findData(String email) {
        Query q2 = new Query();
        q2.addCriteria(Criteria.where("custEmail").is(email));
        List<BuyerInvoice> data = mongoOperations.find(q2, BuyerInvoice.class);
        System.out.println(data);
        if(data != null)
            return data;
        else
            return null;
    }

    public void updateItem(int itemNo, int quantity) {
        //System.out.println("Hi");
        Query q3 = new Query();
        q3.addCriteria(Criteria.where("itemID").is(itemNo));
        Item item = mongoOperations.findOne(q3, Item.class);
        //System.out.println(item);
        Update update1 = new Update();
        System.out.println(item.getQuantity());
        System.out.println(quantity);
        int qty = item.getQuantity();
        int q = qty - quantity;
        update1.set("quantity", q);
        mongoOperations.updateFirst(q3, update1, Item.class);
        if(item != null)
        {
            System.out.println(item.getQuantity());
        }
        else
            System.out.println("null");
    }*/

    /*public int checkIfEmailExists(Credentials user) {
        if(mongoTemplate.getCollection("Credentials").equals(user))
            return 0;
        else
            return 1;
    }*/

    /*public int insertIntoCredentials(Credentials user) {
        Credentials result = mongoOperations.insert(user, "Credentials");

        if(result == null)
            return 0;
        else
            return 1;
    }

    public int getUserLogin(String email, String password) {
        Query q1 = new Query();
        q1.addCriteria(Criteria.where("email").is(email));
        //System.out.println(q1);
        Credentials em = mongoOperations.findOne(q1, Credentials.class);
        //System.out.println(em.getPassword());
        //System.out.println(password);

        if(em == null)
            return 0;

        else {
            if(em.getPassword().equals(password))
                return 1;
            else
                return 0;
        }*/

        /*Criteria c2 = new Criteria();
        c2 = c2.where("password").is(password);
        Query q2 = new Query(c2);*/
        /*Query q2 = new Query();
        q2.addCriteria(Criteria.where("password").is("abc"));
        System.out.println(q2);
        List<Credentials> pass = mongoOperations.findAll(Credentials.class);
        System.out.println(pass);*/


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
