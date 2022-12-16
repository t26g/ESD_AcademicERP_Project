package com.example.demo.dao;
import com.example.demo.bean.Salary;
import java.util.List;

public interface SalaryDAO {
    List<Salary> getSalary(Integer faculty_id);

    Salary salary(Integer faculty_id, String Month);
}
