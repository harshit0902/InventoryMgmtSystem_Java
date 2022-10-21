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

    public SellerInvoice() {
        suppID = 0;
        billNo = 0;
        itemSold = null;
        issueDate = null;
        totalQty = 0;
        totalAmt = 0.0;
    }

    public SellerInvoice(int suppID, int billNo, ArrayList<Item> itemSold, Date issueDate, int totalQty, double totalAmt) {
        this.suppID = suppID;
        this.billNo = billNo;
        this.itemSold = itemSold;
        this.issueDate = issueDate;
        this.totalQty = totalQty;
        this.totalAmt = totalAmt;
    }

    public int getSuppID() {
        return suppID;
    }

    public void setSuppID(int suppID) {
        this.suppID = suppID;
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

    public Date getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(Date issueDate) {
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
