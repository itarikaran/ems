package ems.backend.controller;

import ems.backend.entity.Employee;
import ems.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @PostMapping
    public Employee createEmployee(
            @RequestBody Employee employee) {
        return service.save(employee);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return service.getAll();
    }
}
