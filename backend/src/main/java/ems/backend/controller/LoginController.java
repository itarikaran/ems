package ems.backend.controller;

import ems.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins="http://localhost:5173/")
@RequestMapping("/api/login")
@RestController
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping
    public String login(@RequestBody Map<String, String> request){
        String username = request.get("username");
        String password = request.get("password");
        boolean valid = loginService.authenticate(username, password);
        if(valid){
            return "Login Success";
        }
        return "Login Fail";
    }

    @GetMapping("/test")
    public String test() {
        return "Working";
    }
}
