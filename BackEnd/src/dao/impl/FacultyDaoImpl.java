package com.example.demo.dao.impl;
import com.example.demo.bean.Salary;
import com.example.demo.util.HibernateSessionUtil;

import com.example.demo.dao.FacultyDAO;
import com.example.demo.bean.Faculty;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.ArrayList;
import java.util.List;

public class FacultyDaoImpl implements FacultyDAO{
    public Faculty login(Faculty faculty) {
        try (Session session = HibernateSessionUtil.getSession();){
            String facultyEmail = faculty.getEmail();
            String facultyPassword = faculty.getPassword();

            List<Object> result = new ArrayList<Object>(
                    session.createQuery(
                                    "FROM Faculty WHERE email = :facultyEmail and password = :facultyPassword"
                            )
                            .setParameter("facultyEmail", facultyEmail)
                            .setParameter("facultyPassword", facultyPassword)
                            .list()
            );

            // If no valid faculty found, return null so that login failure is understood
            if (result.size() == 0)
                return null;
            else
                return (Faculty) result.get(0);
        }
        catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
        }

        return null;
    }


    public Faculty details(Integer faculty_id){
        try (Session session = HibernateSessionUtil.getSession();){

            List<Object> facultyList = new ArrayList<Object>(
                    session.createQuery(
                                    "FROM Faculty WHERE facultyId=:faculty_id"
                            )
                            .setParameter("faculty_id", faculty_id).list()
            );

            // If no valid Student found, return null so that login failure is understood
            if (facultyList.size() == 0)
                return null;
            else
                return (Faculty) facultyList.get(0);
        }
        catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
        }

        return null;
    }

}
