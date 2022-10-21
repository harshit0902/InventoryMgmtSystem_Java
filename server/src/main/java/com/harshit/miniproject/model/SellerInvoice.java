package com.harshit.miniproject.model;

import java.util.ArrayList;
import java.util.Date;

public class SellerInvoice {
    private int suppID;
    private int billNo;
    ArrayList<Item> itemSold = new ArrayList<Item>();
    private Date issueDate;
    private int totalQty;
    private double totalAmt;

    public void generateInvoice() {

    }
}
