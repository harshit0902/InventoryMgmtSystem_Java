package com.harshit.miniproject.model;
import java.util.Date;

public class Customer {
    private String custID;
    private String custName;
    private String custPhoneNum;
    private String custAddress;
    private int tot_order;

    public Customer() {
        custID = null;
        custName = null;
        custPhoneNum= null;
        custAddress = null;
        tot_order = 0;
    }

    public Customer(String custID, String custName, String custPhoneNum, String custAddress, int tot_order) {
        this.custID = custID;
        this.custName = custName;
        this.custPhoneNum = custPhoneNum;
        this.custAddress = custAddress;
        this.tot_order = tot_order;
    }

    public String getCustID() {
        return custID;
    }

    public void setCustID(String custID) {
        this.custID = custID;
    }

    public String getCustName() {
        return custName;
    }

    public void setCustName(String custName) {
        this.custName = custName;
    }

    public String getCustPhoneNum() {
        return custPhoneNum;
    }

    public void setCustPhoneNum(String custPhoneNum) {
        this.custPhoneNum = custPhoneNum;
    }

    public String getCustAddress() {
        return custAddress;
    }

    public void setCustAddress(String custAddress) {
        this.custAddress = custAddress;
    }

    public int getTot_order() {
        return tot_order;
    }

    public void setTot_order(int tot_order) {
        this.tot_order = tot_order;
    }

    public Customer displayCustomerDetails() {
        return null;
    }
}


