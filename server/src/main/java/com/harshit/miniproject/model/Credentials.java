package com.harshit.miniproject.model;

public class Credentials {
    private String username;
    private String password;
    private String typeOfAcc;

    public Credentials() {
        username = null;
        password = null;
        typeOfAcc = null;
    }

    public Credentials(String username, String password, String typeOfAcc) {
        this.username = username;
        this.password = password;
        this.typeOfAcc = typeOfAcc;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTypeOfAcc() {
        return typeOfAcc;
    }

    public void setTypeOfAcc(String typeOfAcc) {
        this.typeOfAcc = typeOfAcc;
    }
}
