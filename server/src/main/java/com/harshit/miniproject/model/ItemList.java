package com.harshit.miniproject.model;

import lombok.NoArgsConstructor;

import java.util.ArrayList;
@NoArgsConstructor
public class ItemList {
    private String email;
    private ArrayList<Item> it;

    public ItemList(String email, ArrayList<Item> it) {
        this.email = email;
        this.it = it;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ArrayList<Item> getIt() {
        return it;
    }

    public void setIt(ArrayList<Item> it) {
        this.it = it;
    }
}
