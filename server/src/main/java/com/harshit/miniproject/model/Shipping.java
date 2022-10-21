package com.harshit.miniproject.model;

public class Shipping {
    private int custID;
    private int billID;

    public Shipping() {
        custID = 0;
        billID = 0;
    }

    public Shipping(int custID, int billID) {
        this.custID = custID;
        this.billID = billID;
    }

    public int getCustID() {
        return custID;
    }

    public void setCustID(int custID) {
        this.custID = custID;
    }

    public int getBillID() {
        return billID;
    }

    public void setBillID(int billID) {
        this.billID = billID;
    }

    public String shipConfirmed() {
        String status = null;
        return status;
    }
}
