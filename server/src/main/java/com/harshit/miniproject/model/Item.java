package com.harshit.miniproject.model;

public class Item {
    private int itemID = (int) Math.random();
    private String itemName;
    protected int quantity;
    private double price;
    private int quality1;
    private int quality2;
    private int quality3;

    public Item() {
        itemName = null;
        quantity = 0;
        price = 0.0;
        quality1 = 0;
        quality2 = 0;
        quality3 = 0;
    }

    public Item(String itemName, int quantity, double price, int quality1, int quality2, int quality3) {
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

    public int getQuality1() {
        return quality1;
    }

    public void setQuality1(int quality1) {
        this.quality1 = quality1;
    }

    public int getQuality2() {
        return quality2;
    }

    public void setQuality2(int quality2) {
        this.quality2 = quality2;
    }

    public int getQuality3() {
        return quality3;
    }

    public void setQuality3(int quality3) {
        this.quality3 = quality3;
    }
    
    /*public void decQuantity(int count) {
        quantity -= count;
    }*/
}
