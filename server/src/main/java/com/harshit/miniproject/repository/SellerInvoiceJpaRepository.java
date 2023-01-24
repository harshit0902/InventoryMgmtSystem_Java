package com.harshit.miniproject.repository;

import com.harshit.miniproject.model.SellerInvoice;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerInvoiceJpaRepository extends MongoRepository<SellerInvoice,String> {

}
