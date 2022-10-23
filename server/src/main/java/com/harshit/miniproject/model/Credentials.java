package com.harshit.miniproject.model;

import org.springframework.data.annotation.Id;

public class Credentials {
    @Id
    private String username;
    private String email;
    private String password;
    private String mobNo;
    private String address;
    private String typeOfAcc;

    public Credentials() {
        username = null;
        email = null;
        password = null;
        mobNo = null;
        address = null;
        typeOfAcc = null;
    }

    public Credentials(String username, String email, String password, String mobNo, String address, String typeOfAcc) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.mobNo = mobNo;
        this.address = address;
        this.typeOfAcc = typeOfAcc;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobNo() {
        return mobNo;
    }

    public void setMobNo(String mobNo) {
        this.mobNo = mobNo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTypeOfAcc() {
        return typeOfAcc;
    }

    public void setTypeOfAcc(String typeOfAcc) {
        this.typeOfAcc = typeOfAcc;
    }
}
