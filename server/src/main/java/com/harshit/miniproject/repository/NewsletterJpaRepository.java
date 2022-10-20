package com.harshit.miniproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsletterJpaRepository extends JpaRepository<Newsletter,Long> {
    List<Newsletter> findAllByid(Long id);
}
