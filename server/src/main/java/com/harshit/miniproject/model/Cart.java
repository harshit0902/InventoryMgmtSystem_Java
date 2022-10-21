package com.harshit.miniproject.model;

import java.util.ArrayList;

public class Cart extends Item {
    private int totalQty;
    private double totalPrice;
    private ArrayList<Item> it = new ArrayList<Item>();

    public Cart() {
        totalQty = 0;
        totalPrice = 0.0;
    }

    public Cart(int totalQty, double totalPrice) {
        this.totalQty = totalQty;
        this.totalPrice = totalPrice;
    }

    public int getTotalQty() {
        return totalQty;
    }

    public void setTotalQty(int totalQty) {
        this.totalQty = totalQty;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public void addItem(Item i) {
        it.add(i);
    }

    public void removeItem(Item i) {
        it.remove(i);
    }

    public void changeQuantity(int count) {
        quantity -= count;
    }
}