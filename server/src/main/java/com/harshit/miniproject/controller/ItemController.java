/*package com.harshit.miniproject.controller;

import com.harshit.miniproject.model.BuyerInvoice;
import com.harshit.miniproject.model.Item;
import com.harshit.miniproject.repository.BuyerInvoiceJpaRepository;
import com.harshit.miniproject.repository.ItemJpaRepository;
import com.harshit.miniproject.service.BuyerInvoiceService;
import com.harshit.miniproject.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("api/buy")
public class ItemController {

    @Autowired
    MongoOperations mongoOperations;
    Date date = new Date();

    // getting the object of the Timestamp class
    Timestamp instant = new Timestamp(date.getTime());
    @Autowired
    private final ItemService itemService;

    private final ItemJpaRepository itemJpaRepository;

    @Autowired
    public ItemController(ItemService itemService, ItemJpaRepository itemJpaRepository) {
        this.itemService = itemService;
        this.itemJpaRepository = itemJpaRepository;
    }

    @PostMapping("/special")
    public String specialOrder(@RequestBody Item item){
        int ans = itemService.insertIntoItem(item);
        if(ans == 1)
            return "success";
        else
            return "failure";
    }*/

    /*@PostMapping("/signup")
    public String insertUser(@RequestBody Credentials user){
        //Credentials user = new Credentials(username, email, password, mobNo, address, typeOfAcc);
        //int res = credentialsService.checkIfEmailExists(user);

        //if(res == 1)
        int ans = credentialsService.insertIntoCredentials(user);

        if(ans == 1)
            return "success";
        else
            return "failure";

        //DiscussionText obj = new DiscussionText(Text,dissID,userID);
        //discussionIndexService.insertIntoDiscussionText(obj);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody Credentials user) {
        System.out.println(user.getEmail());
        System.out.println(user.getPassword());
        //System.out.println(getType(email));
        //System.out.println(getType(password));
        if(credentialsService.getUserLogin(user.getEmail(), user.getPassword()) == 1)
            return "Success";
        else
            return "Failure";
    }*/

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
//}
