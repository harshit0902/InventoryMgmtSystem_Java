package com.harshit.miniproject.controller;

import com.harshit.miniproject.model.BuyerInvoice;
import com.harshit.miniproject.model.Item;
import com.harshit.miniproject.repository.BuyerInvoiceJpaRepository;
import com.harshit.miniproject.service.BuyerInvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("api/buy")
public class BuyerInvoiceController {

    @Autowired
    MongoOperations mongoOperations;
    Date date = new Date();

    // getting the object of the Timestamp class
    Timestamp instant = new Timestamp(date.getTime());
    @Autowired
    private final BuyerInvoiceService buyerInvoiceService;

    private final BuyerInvoiceJpaRepository buyerInvoiceJpaRepository;

    @Autowired
    public BuyerInvoiceController(BuyerInvoiceService buyerInvoiceService, BuyerInvoiceJpaRepository buyerInvoiceJpaRepository) {
        this.buyerInvoiceService = buyerInvoiceService;
        this.buyerInvoiceJpaRepository = buyerInvoiceJpaRepository;
    }

    @PostMapping("/special")
    public String specialOrder(@RequestBody Item special){
        int itemNo = 0;
        System.out.println(special.getItemName());
        if(special.getItemName().equals("Cotton"))
            itemNo = 1;
        else if(special.getItemName().equals("Jute"))
            itemNo = 2;
        else if(special.getItemName().equals("Coffee"))
            itemNo = 3;
        else if(special.getItemName().equals("Steel"))
            itemNo = 4;
        else if(special.getItemName().equals("Aluminium"))
            itemNo = 5;
        else if(special.getItemName().equals("Copper"))
            itemNo = 6;
        else if(special.getItemName().equals("Wood"))
            itemNo = 7;
        else if(special.getItemName().equals("Wheat"))
            itemNo = 8;
        else if(special.getItemName().equals("Bajra"))
            itemNo = 9;
        else if(special.getItemName().equals("Ragi"))
            itemNo = 10;

        Item it = new Item(itemNo, special.getItemName(), special.getQuantity());
        ArrayList<Item> item = new ArrayList<Item>();
        item.add(it);

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();

        double price = buyerInvoiceService.findPrice(itemNo);
        System.out.println(price);
        BuyerInvoice splorder = new BuyerInvoice("abcd@gmail.com", item, dtf.format(now), price*it.getQuantity(), "Order Processing", true);
        int ans = buyerInvoiceService.insertIntoBuyerInvoice(splorder);
        if(ans == 1)
            return "success";
        else
            return "failure";
    }

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
}

