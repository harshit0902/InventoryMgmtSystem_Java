package com.harshit.miniproject.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;

@Document(collection = "BuyerInvoice")
public class BuyerInvoice {
    private String custEmail;
    private int billNo = (int)(Math.random()*(1000-1+1)+1);
    private ArrayList<Item> it;
    private String issueDate;
    private double totalAmt;
    private String status;
    private Boolean special;

    public BuyerInvoice() {
        custEmail = null;
        billNo = 0;
        it = null;
        issueDate = null;
        totalAmt = 0;
        status = null;
        special = null;
    }

    public BuyerInvoice(String custEmail, ArrayList<Item> it, String issueDate, double totalAmt, String status, Boolean special) {
        this.custEmail = custEmail;
        this.it = it;
        this.issueDate = issueDate;
        this.totalAmt = totalAmt;
        this.status = status;
        this.special = special;
    }

    public BuyerInvoice(String custEmail) {
        this.custEmail = custEmail;
    }

    public String getcustEmail() {
        return custEmail;
    }

    public void setcustEmail(String custEmail) {
        this.custEmail = custEmail;
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

    public String getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(String issueDate) {
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
