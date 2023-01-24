package com.harshit.miniproject.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Shipping")
public class Shipping {
    private String custEmail;
    private int billID;

    public Shipping() {
        custEmail = "";
        billID = 0;
    }

    public Shipping(String custEmail, int billID) {
        this.custEmail = custEmail;
        this.billID = billID;
    }

    public String getCustEmail() {
        return custEmail;
    }

    public void setCustEmail(String custEmail) {
        this.custEmail = custEmail;
    }

    public int getBillID() {
        return billID;
    }

    public void setBillID(int billID) {
        this.billID = billID;
    }
}
