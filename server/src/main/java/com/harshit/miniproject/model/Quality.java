package com.harshit.miniproject.model;

public class Quality {
    private String name;
    private int value;

    public Quality() {
        name = null;
        value = 0;
    }

    public Quality(String name, int value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
