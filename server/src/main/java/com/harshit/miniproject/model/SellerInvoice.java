package com.harshit.miniproject.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;

@Document(collection = "SellerInvoice")
public class SellerInvoice {
    private String sellEmail;
    private int billNo = (int)(Math.random()*(1000-1+1)+1);
    private ArrayList<Item> itemSold;
    private String issueDate;
    private int totalQty;
    private double totalAmt;

    public SellerInvoice() {
        sellEmail = null;
        billNo = 0;
        itemSold = null;
        issueDate = null;
        totalQty = 0;
        totalAmt = 0.0;
    }

    public SellerInvoice(String sellEmail) {
        this.sellEmail = sellEmail;
    }

    public SellerInvoice(String sellEmail, int billNo, ArrayList<Item> itemSold, String issueDate, int totalQty, double totalAmt) {
        this.sellEmail = sellEmail;
        this.billNo = billNo;
        this.itemSold = itemSold;
        this.issueDate = issueDate;
        this.totalQty = totalQty;
        this.totalAmt = totalAmt;
    }

    public SellerInvoice(String sellEmail, ArrayList<Item> itemSold, String issueDate, int totalQty, double totalAmt) {
        this.sellEmail = sellEmail;
        this.itemSold = itemSold;
        this.issueDate = issueDate;
        this.totalQty = totalQty;
        this.totalAmt = totalAmt;
    }

    public String getSellEmail() {
        return sellEmail;
    }

    public void setSuppID(String sellEmail) {
        this.sellEmail = sellEmail;
    }

    public int getBillNo() {
        return billNo;
    }

    public void setBillNo(int billNo) {
        this.billNo = billNo;
    }

    public ArrayList<Item> getItemSold() {
        return itemSold;
    }

    public void setItemSold(ArrayList<Item> itemSold) {
        this.itemSold = itemSold;
    }

    public String getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(String issueDate) {
        this.issueDate = issueDate;
    }

    public int getTotalQty() {
        return totalQty;
    }

    public void setTotalQty(int totalQty) {
        this.totalQty = totalQty;
    }

    public double getTotalAmt() {
        return totalAmt;
    }

    public void setTotalAmt(double totalAmt) {
        this.totalAmt = totalAmt;
    }

    public void generateInvoice() {

    }
}
