package com.harshit.miniproject.service;

import com.harshit.miniproject.newsletterEnums.Type;
import com.harshit.miniproject.repository.NewsletterJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

@Service
public class NewsletterService {
    @Autowired
    MongoOperations mongoOperations;
    @Autowired
    MongoTemplate mongoTemplate;

    Timestamp instant= Timestamp.from(Instant.now());
    private final NewsletterJpaRepository newsletterJpaRepository;

    @Autowired
    public NewsletterService(NewsletterJpaRepository newsletterJpaRepository) {
        this.newsletterJpaRepository = newsletterJpaRepository;
    }

    public List<Newsletter> listAllNewsletter(){
        return newsletterJpaRepository.findAll();
    }

    public void insertNewsletter(Long id , String text, Type type, String moreInfo, String link){
        Newsletter val = new Newsletter(id, text, type, moreInfo, link, instant);
        newsletterJpaRepository.save(val);
    }
}
