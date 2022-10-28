package com.harshit.miniproject.repository;

import com.harshit.miniproject.model.BuyerInvoice;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuyerInvoiceJpaRepository extends MongoRepository<BuyerInvoice,String> {

}
