package com.harshit.miniproject.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;

@Document(collection = "BuyerInvoice")
public class BuyerInvoice {
    private int custID;
    private int billNo = (int)(Math.random()*(1000-1+1)+1);
    private ArrayList<Item> it = new ArrayList<Item>();
    private Date issueDate;
    private double totalAmt;
    private String status;
    private Boolean special;

    public BuyerInvoice() {
        custID = 0;
        billNo = 0;
        it = null;
        issueDate = null;
        totalAmt = 0;
        status = null;
        special = null;
    }

    public BuyerInvoice(int custID, int billNo, ArrayList<Item> it, Date issueDate, double totalAmt, String status, Boolean special) {
        this.custID = custID;
        this.billNo = billNo;
        this.it = it;
        this.issueDate = issueDate;
        this.totalAmt = totalAmt;
        this.status = status;
        this.special = special;
    }

    public int getCustID() {
        return custID;
    }

    public void setCustID(int custID) {
        this.custID = custID;
    }

    public int getBillNo() {
        return billNo;
    }

    public void setBillNo(int billNo) {
        this.billNo = billNo;
    }

    public ArrayList<Item> getIt() {
        return it;
    }

    public void setIt(ArrayList<Item> it) {
        this.it = it;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(Date issueDate) {
        this.issueDate = issueDate;
    }

    public double getTotalAmt() {
        return totalAmt;
    }

    public void setTotalAmt(double totalAmt) {
        this.totalAmt = totalAmt;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Boolean getSpecial() {
        return special;
    }

    public void setSpecial(Boolean special) {
        this.special = special;
    }

    public void generateInvoice() {

    }
}
