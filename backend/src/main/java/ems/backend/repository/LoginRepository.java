package ems.backend.repository;

import ems.backend.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository  extends JpaRepository<Login,Long> {
    Login findByUsernameAndPassword(String username,String password);
}
