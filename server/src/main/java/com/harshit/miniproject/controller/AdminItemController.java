package com.harshit.miniproject.controller;

import com.harshit.miniproject.model.*;
import com.harshit.miniproject.repository.AdminItemJpaRepository;
import com.harshit.miniproject.service.AdminItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.web.bind.annotation.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("api/admin")
public class AdminItemController {

    @Autowired
    MongoOperations mongoOperations;
    Date date = new Date();

    // getting the object of the Timestamp class
    Timestamp instant = new Timestamp(date.getTime());
    @Autowired
    private final AdminItemService adminItemService;

    private final AdminItemJpaRepository adminItemJpaRepository;

    static int val=14;

    @Autowired
    public AdminItemController(AdminItemService adminItemService, AdminItemJpaRepository adminItemJpaRepository) {
        this.adminItemService = adminItemService;
        this.adminItemJpaRepository = adminItemJpaRepository;
    }

    @PostMapping("/additem")
    public String addItem(@RequestBody Item special){
        Item it = new Item(val++, special.getItemName(), special.getQuantity(), special.getPrice(), special.getQuality1(), special.getQuality2(), special.getQuality3());

        int ans = adminItemService.insertIntoItem(it);
        if(ans == 1)
            return "success";
        else
            return "failure";
    }

    @PutMapping("/modifyitem")
    public String updateItem(@RequestBody Item special) {
        int ans = adminItemService.updateIntoItem(special);
        if(ans == 1)
            return "success";
        else
            return "failure";
    }

    @DeleteMapping("/deleteitem")
    public String deleteItem(@PathVariable int id){
        int ans = adminItemService.deleteIntoItem(id);
        if(ans == 1)
            return "success";
        else
            return "failure";
    }

    @GetMapping("/displayitem")
    public List<Item> displayItems(){
        List<Item> data = new ArrayList<Item>();
        data = adminItemService.findData();

        if(data != null)
            return data;
        else
            return null;
    }

    @GetMapping("/displaycustomer")
    public List<Credentials> displayCustomers(){
        List<Credentials> data = new ArrayList<Credentials>();
        data = adminItemService.findCustomers();

        if(data != null)
            return data;
        else
            return null;
    }

    @GetMapping("/displaysupplier")
    public List<Credentials> displaySuppliers(){
        List<Credentials> data = new ArrayList<Credentials>();
        data = adminItemService.findSuppliers();

        if(data != null)
            return data;
        else
            return null;
    }

    @PostMapping("/getdata")
    public Item editData(@RequestBody Item name){
        Item ans = adminItemService.getEditData(name);
        if(ans != null)
            return ans;
        else
            return null;
    }

    @GetMapping("/getshipping")
    public List<BuyerInvoice> shippingDetails(){
        List<BuyerInvoice> data = new ArrayList<BuyerInvoice>();
        data = adminItemService.getShipping();

        if(data != null) {
            System.out.println(data);
            return data;
        }

        else
            return null;
    }

    @PutMapping("/updatestatus")
    public void updateStatus(@RequestBody Shipping val){
        int ans = adminItemService.updateShipping(val);
        System.out.println(ans);

        if(ans == 1) {
            try {
                TimeUnit.SECONDS.sleep(20);
                System.out.println("\nHi");
            } catch (InterruptedException ie) {
                Thread.currentThread().interrupt();
            }

            adminItemService.updateDelivery(val);
        }
    }

    /*@PostMapping("/normal")
    public String normalOrder(@RequestBody ItemList normal){
        //JSONObject obj = new JSONObject(normal);
        //System.out.println(normal.getIt());
        ArrayList<Item> item = new ArrayList<Item>();
        ArrayList<Item> nor = normal.getIt();
        double tot=0;
        int num=0, num1=0;
        for(Item i : nor) {

            //System.out.println(i.getItemName());
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
            //System.out.println(price);
            //System.out.println(i.getQuantity());
            tot+=price*i.getQuantity();
        }

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();

        BuyerInvoice normalorder = new BuyerInvoice("abcd@gmail.com", item, dtf.format(now), tot, "Order Processing", false);
        int ans = buyerInvoiceService.insertIntoBuyerInvoice(normalorder);
        if(ans == 1) {
            for(Item i : item) {
                if (i.getItemName().equals("Cotton"))
                    num1 = 1;
                else if (i.getItemName().equals("Jute"))
                    num1 = 2;
                else if (i.getItemName().equals("Coffee"))
                    num1 = 3;
                else if (i.getItemName().equals("Steel"))
                    num1 = 4;
                else if (i.getItemName().equals("Aluminium"))
                    num1 = 5;
                else if (i.getItemName().equals("Copper"))
                    num1 = 6;
                else if (i.getItemName().equals("Wood"))
                    num1 = 7;
                else if (i.getItemName().equals("Wheat"))
                    num1 = 8;
                else if (i.getItemName().equals("Bajra"))
                    num1 = 9;
                else if (i.getItemName().equals("Ragi"))
                    num1 = 10;

                //System.out.println(num1);
                buyerInvoiceService.updateItem(num1, i.getQuantity());
            }
            return "success";
        }
        else
            return "failure";
    }

    @PostMapping("/confirm")
    public List<BuyerInvoice> confirmOrder(@RequestBody BuyerInvoice user){
        List<BuyerInvoice> data = new ArrayList<BuyerInvoice>();
        data = adminItemService.findData(user.getcustEmail());

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

