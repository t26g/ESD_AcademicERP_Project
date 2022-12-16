package com.example.demo.services;
import com.example.demo.bean.Salary;
import com.example.demo.dao.impl.SalaryDaoImpl;

import java.util.List;

public class SalaryServices {
    static SalaryDaoImpl salaryDao = new SalaryDaoImpl();

    public List<Salary> getSalary(Integer f_id){
        List<Salary> salaryList = salaryDao.getSalary(f_id);

        for (Salary salary: salaryList)
            salary.setFaculty(null);

        return salaryList;
    }

    public Salary salary(Integer f_id, String Month){
        Salary salaryList = salaryDao.salary(f_id, Month);

        if (salaryList == null)
            return null;

        return salaryList;
    }

}
