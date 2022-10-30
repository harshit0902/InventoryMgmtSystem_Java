package com.harshit.miniproject.model;

public class Payment {
    private int billNo;
    private Boolean transactionStatus;
    private double totalCost;

    public Payment() {
        billNo = 0;
        transactionStatus = null;
        totalCost = 0.0;
    }

    public Payment(int billNo, Boolean transactionStatus, double totalCost) {
        this.billNo = billNo;
        this.transactionStatus = transactionStatus;
        this.totalCost = totalCost;
    }

    public int getBillNo() {
        return billNo;
    }

    public void setBillNo(int billNo) {
        this.billNo = billNo;
    }

    public Boolean getTransactionStatus() {
        return transactionStatus;
    }

    public void setTransactionStatus(Boolean transactionStatus) {
        this.transactionStatus = transactionStatus;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public Boolean setTransactionStatus() {
        return transactionStatus;
    }
}
