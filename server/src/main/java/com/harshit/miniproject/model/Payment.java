package com.harshit.miniproject.model;

public class Payment {
    private Boolean transactionStatus;
    private double totalCost;

    public Payment() {
        transactionStatus = null;
        totalCost = 0.0;
    }

    public Payment(Boolean transactionStatus, double totalCost) {
        this.transactionStatus = transactionStatus;
        this.totalCost = totalCost;
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
