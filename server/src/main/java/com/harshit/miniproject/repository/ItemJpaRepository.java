package com.harshit.miniproject.repository;

import com.harshit.miniproject.model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemJpaRepository extends MongoRepository<Item,String> {

}
