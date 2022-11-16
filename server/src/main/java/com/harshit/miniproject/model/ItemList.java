package com.harshit.miniproject.model;

import lombok.NoArgsConstructor;

import java.util.ArrayList;
@NoArgsConstructor
public class ItemList {
    private ArrayList<Item> it;

    public ItemList(ArrayList<Item> it) {
        this.it = it;
    }

    public ArrayList<Item> getIt() {
        return it;
    }

    public void setIt(ArrayList<Item> it) {
        this.it = it;
    }
}
