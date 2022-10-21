package com.harshit.miniproject.model;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;

public class BuyerInvoice {
    private int custID;
    private int billNo;
    private ArrayList<Item> it = new ArrayList<Item>();
    private Date issueDate;
    private double totalAmt;
    private String status;

    public void generateInvoice() {

    }
}
