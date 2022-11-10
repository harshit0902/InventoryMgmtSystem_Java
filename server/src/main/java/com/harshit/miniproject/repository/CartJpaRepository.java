package com.harshit.miniproject.repository;

import com.harshit.miniproject.model.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartJpaRepository extends MongoRepository<Cart,String> {

}
