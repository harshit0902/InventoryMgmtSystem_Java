package com.harshit.miniproject.model;

public class Supplier {
    private int suppID;
    private String suppName;
    private String suppPhoneNum;
    private String suppAddress;

    public Supplier() {
        suppID = 0;
        suppName = null;
        suppPhoneNum = null;
        suppAddress = null;
    }

    public Supplier(int suppID, String suppName, String suppPhoneNum, String suppAddress) {
        this.suppID = suppID;
        this.suppName = suppName;
        this.suppPhoneNum = suppPhoneNum;
        this.suppAddress = suppAddress;
    }

    public int getSuppID() {
        return suppID;
    }

    public void setSuppID(int suppID) {
        this.suppID = suppID;
    }

    public String getSuppName() {
        return suppName;
    }

    public void setSuppName(String suppName) {
        this.suppName = suppName;
    }

    public String getSuppPhoneNum() {
        return suppPhoneNum;
    }

    public void setSuppPhoneNum(String suppPhoneNum) {
        this.suppPhoneNum = suppPhoneNum;
    }

    public String getSuppAddress() {
        return suppAddress;
    }

    public void setSuppAddress(String suppAddress) {
        this.suppAddress = suppAddress;
    }

    public Supplier displaySupplierDetails() {
        return null;
    }
}