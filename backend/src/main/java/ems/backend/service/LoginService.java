package ems.backend.service;

import ems.backend.entity.Login;
import ems.backend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;

    public boolean authenticate(String username,String password){
        Login user=loginRepository.findByUsernameAndPassword(username,password);
        return user!=null;
    }
}
