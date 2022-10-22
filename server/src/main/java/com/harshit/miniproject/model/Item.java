package com.harshit.miniproject.model;

public class Item {
    private int itemID;
    private String itemName;
    protected int quantity;
    private double price;
    private Quality quality1;
    private Quality quality2;
    private Quality quality3;

    public Item() {
        itemID = 0;
        itemName = null;
        quantity = 0;
        price = 0.0;
        quality1 = null;
        quality2 = null;
        quality3 = null;
    }

    public Item(int itemID, String itemName, int quantity, double price, Quality quality1, Quality quality2, Quality quality3) {
        this.itemID = itemID;
        this.itemName = itemName;
        this.quantity = quantity;
        this.price = price;
        this.quality1 = quality1;
        this.quality2 = quality2;
        this.quality3 = quality3;
    }

    public int getItemID() {
        return itemID;
    }

    public void setItemID(int itemID) {
        this.itemID = itemID;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Quality getQuality1() {
        return quality1;
    }

    public void setQuality1(Quality quality1) {
        this.quality1 = quality1;
    }

    public Quality getQuality2() {
        return quality2;
    }

    public void setQuality2(Quality quality2) {
        this.quality2 = quality2;
    }

    public Quality getQuality3() {
        return quality3;
    }

    public void setQuality3(Quality quality3) {
        this.quality3 = quality3;
    }
    
    /*public void decQuantity(int count) {
        quantity -= count;
    }*/
}
