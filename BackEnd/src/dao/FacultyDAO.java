package com.example.demo.dao;
import com.example.demo.bean.Faculty;
public interface FacultyDAO {
    Faculty login(Faculty faculty);
    Faculty details(Integer faculty_id);

}
