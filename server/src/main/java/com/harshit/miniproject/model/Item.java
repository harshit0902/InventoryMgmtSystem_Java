package com.harshit.miniproject.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Item")
public class Item {
    @Id
    private int itemID;
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

    public Item(int itemID) {
        this.itemID = itemID;
    }

    public Item(String itemName, int quantity) {
        this.itemName = itemName;
        this.quantity = quantity;
    }

    public Item(int itemID, String itemName, int quantity) {
        this.itemID = itemID;
        this.itemName = itemName;
        this.quantity = quantity;
    }

    public Item(String itemName, int quantity, int quality1, int quality2, int quality3) {
        this.itemName = itemName;
        this.quantity = quantity;
        this.quality1 = quality1;
        this.quality2 = quality2;
        this.quality3 = quality3;
    }

    public Item(String itemName, int quantity, double price, int quality1, int quality2, int quality3) {
        this.itemName = itemName;
        this.quantity = quantity;
        this.price = price;
        this.quality1 = quality1;
        this.quality2 = quality2;
        this.quality3 = quality3;
    }

    public Item(int itemID, String itemName, int quantity, double price, int quality1, int quality2, int quality3) {
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
