package com.harshit.miniproject.controller;

import com.harshit.miniproject.repository.CredentialsJpaRepository;
import com.harshit.miniproject.service.CredentialsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("api/credentials")
public class CredentialsController {

    @Autowired
    MongoOperations mongoOperations;
    Date date = new Date();

    // getting the object of the Timestamp class
    Timestamp instant = new Timestamp(date.getTime());
    @Autowired
    private final CredentialsService credentialsService;

    private final CredentialsJpaRepository credentialsJpaRepository;

    @Autowired
    public CredentialsController(CredentialsService credentialsService, CredentialsJpaRepository credentialsJpaRepository) {
        this.credentialsService = credentialsService;
        this.credentialsJpaRepository = credentialsJpaRepository;
    }

    /*@GetMapping("/signup")
    public @ResponseBody List<DiscussionIndex> discussionList(){

        return discussionIndexService.listAllDiscussion();
    }

    @GetMapping("/count")
    public ResponseEntity<Long> printCount(){
        Long siz = discussionIndexService.getCountofUsersUnique();
        System.out.println(siz);
        return ResponseEntity.ok(siz);
    }

    @PostMapping("/signup")
    public void insertUser(@RequestParam String username, @RequestParam String email, @RequestParam String password, @RequestParam, String mobNo, @RequestParam String address, @RequestParam String typeOfAcc){
        Credentials user = new Credentials(username, email, password, mobNo, address, typeOfAcc);
        int res = credentialsService.checkIfEmailExists(user);

        if(res == 1)
            CredentialsService.insertIntoCredentials(user);

        //DiscussionText obj = new DiscussionText(Text,dissID,userID);
        //discussionIndexService.insertIntoDiscussionText(obj);
    }

    //    @GetMapping("/tester")
//    public void tester(@Re){
//
//    }
    @GetMapping("/alltext")
    public List<DiscussionText> getAllDiscussionText(){
        return discussionIndexService.getAllDiscussionText();
    }

    @GetMapping("/alldisstext")
    public List<DiscussionText> getAllDiscussionText(@RequestParam Long disscussionID){

        return discussionIndexService.getUserDiscussionText(disscussionID);
    }

    @PostMapping("/insertDiscusssion")
    public void insertDiscussion(@RequestParam Long userid ,@RequestParam Long discussionId,@RequestParam String discussionName,@RequestParam String description){
        discussionIndexService.insertDiscussion(discussionId,userid,discussionName,description, UserAccountDesignation.PROFESSOR);
    }*/
}

