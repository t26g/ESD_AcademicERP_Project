package com.example.demo.services;

import com.example.demo.bean.Faculty;
import com.example.demo.dao.impl.FacultyDaoImpl;

public class FacultyServices {
    FacultyDaoImpl FacultyDao = new FacultyDaoImpl();

    public Faculty login(Faculty faculty){
        Faculty loggedInFaculty = FacultyDao.login(faculty);

        if (loggedInFaculty == null)
            return null;
        return loggedInFaculty;
    }

    public Faculty details(Integer faculty_id){
        Faculty loggedFaculty = FacultyDao.details(faculty_id);

        if (loggedFaculty == null)
            return null;

        return loggedFaculty;
    }

}
