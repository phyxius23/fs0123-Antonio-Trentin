package com.springboot.services;

import com.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface UsersRepository extends JpaRepository<User, UUID> {
}
