package com.harshit.miniproject.controller;

import com.harshit.miniproject.model.SellerInvoice;
import com.harshit.miniproject.model.Item;
import com.harshit.miniproject.model.ItemList;
import com.harshit.miniproject.repository.SellerInvoiceJpaRepository;
import com.harshit.miniproject.service.SellerInvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.web.bind.annotation.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("api/sell")
public class SellerInvoiceController {

    @Autowired
    MongoOperations mongoOperations;
    Date date = new Date();

    // getting the object of the Timestamp class
    Timestamp instant = new Timestamp(date.getTime());
    }

    @PostMapping("/normal")
    public String normalSell(@RequestBody ItemList normal){
        //JSONObject obj = new JSONObject(normal);
        System.out.println(normal.getIt());
        ArrayList<Item> item = new ArrayList<Item>();
        ArrayList<Item> nor = normal.getIt();
        int totqty = 0;
        double totamt = 0;
        int num = 0;
        for(Item i : nor) {

            System.out.println(i.getItemName());
            if (i.getItemName().equals("Cotton"))
                num = 1;
            else if (i.getItemName().equals("Jute"))
                num = 2;
            else if (i.getItemName().equals("Coffee"))
                num = 3;
            else if (i.getItemName().equals("Steel"))
                num = 4;
            else if (i.getItemName().equals("Aluminium"))
                num = 5;
            else if (i.getItemName().equals("Copper"))
                num = 6;
            else if (i.getItemName().equals("Wood"))
                num = 7;
            else if (i.getItemName().equals("Wheat"))
                num = 8;
            else if (i.getItemName().equals("Bajra"))
                num = 9;
            else if (i.getItemName().equals("Ragi"))
                num = 10;

            Item it = new Item(num, i.getItemName(), i.getQuantity());
            item.add(it);

            double price = sellerInvoiceService.findPrice(num);
            System.out.println(price);
            System.out.println(i.getQuantity());
            totqty += i.getQuantity();
            totamt += price*i.getQuantity();
        }

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();

        SellerInvoice normalorder = new SellerInvoice("abcd@gmail.com", item, dtf.format(now), totqty, totamt);
        int ans = sellerInvoiceService.insertIntoSellerInvoice(normalorder);
        if(ans == 1)
            return "success";
        else
            return "failure";
    }

    @PostMapping("/confirm")
    public List<SellerInvoice> confirmOrder(@RequestBody SellerInvoice user){
        List<SellerInvoice> dataSell = new ArrayList<SellerInvoice>();
        dataSell = sellerInvoiceService.findData(user.getSellEmail());

        if(dataSell != null)
            return dataSell;
        else
            return null;
    }

    /*@PostMapping("/special")
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

    @PostMapping("/normal")
    public String normalOrder(@RequestBody ItemList normal){
        //JSONObject obj = new JSONObject(normal);
        System.out.println(normal.getIt());
        ArrayList<Item> item = new ArrayList<Item>();
        ArrayList<Item> nor = normal.getIt();
        double tot=0;
        int num = 0;
        for(Item i : nor) {

            System.out.println(i.getItemName());
            if (i.getItemName().equals("Cotton"))
                num = 1;
            else if (i.getItemName().equals("Jute"))
                num = 2;
            else if (i.getItemName().equals("Coffee"))
                num = 3;
            else if (i.getItemName().equals("Steel"))
                num = 4;
            else if (i.getItemName().equals("Aluminium"))
                num = 5;
            else if (i.getItemName().equals("Copper"))
                num = 6;
            else if (i.getItemName().equals("Wood"))
                num = 7;
            else if (i.getItemName().equals("Wheat"))
                num = 8;
            else if (i.getItemName().equals("Bajra"))
                num = 9;
            else if (i.getItemName().equals("Ragi"))
                num = 10;

            Item it = new Item(num, i.getItemName(), i.getQuantity());
            item.add(it);

            double price = buyerInvoiceService.findPrice(num);
            System.out.println(price);
            System.out.println(i.getQuantity());
            tot+=price*i.getQuantity();
        }

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();

        BuyerInvoice normalorder = new BuyerInvoice("abcd@gmail.com", item, dtf.format(now), tot, "Order Processing", false);
        int ans = buyerInvoiceService.insertIntoBuyerInvoice(normalorder);
        if(ans == 1)
            return "success";
        else
            return "failure";
    }

    @PostMapping("/confirm")
    public List<BuyerInvoice> confirmOrder(@RequestBody BuyerInvoice user){
        List<BuyerInvoice> data = new ArrayList<BuyerInvoice>();
        data = buyerInvoiceService.findData(user.getcustEmail());

        if(data != null)
            return data;
        else
            return null;
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
}

