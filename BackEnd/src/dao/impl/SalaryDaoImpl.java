package com.example.demo.dao.impl;

import com.example.demo.bean.Faculty;
import com.example.demo.bean.Salary;
import com.example.demo.dao.SalaryDAO;
import com.example.demo.util.HibernateSessionUtil;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import java.util.ArrayList;
import java.util.List;

public class SalaryDaoImpl implements SalaryDAO {
    public List<Salary> getSalary(Integer f_id) {
        List<Salary> salaryList = new ArrayList<>();

        try (Session session = HibernateSessionUtil.getSession()) {
            for (
                    final Object salary : session
                    .createQuery("FROM Salary WHERE faculty.facultyId=:f_id AND amount > 0")
                    .setParameter("f_id", f_id).list()
            )
                salaryList.add((Salary) salary);
        } catch (HibernateException exception) {
            System.out.println(exception.getLocalizedMessage());
        }

        return salaryList;
    }

    public Salary salary(Integer f_id, String Month) {

        try (Session session = HibernateSessionUtil.getSession();) {

            List<Object> facultyList = new ArrayList<Object>(
                    session.createQuery(
                                    "FROM Salary WHERE faculty.facultyId=:f_id and Month=:Month"
                            )
                            .setParameter("f_id", f_id)
                            .setParameter("Month",Month)
                            .list()
            );

            // If no valid Student found, return null so that login failure is understood
            if (facultyList.size() == 0)
                return null;
            else
                return (Salary) facultyList.get(0);
        } catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
        }

        return null;
    }

//    public List<Salary> getMonth(Integer f_id) {
//        List<Month> monthList = new ArrayList<>();
//
//        try (Session session = HibernateSessionUtil.getSession()) {
//            for (
//                    final Object salary : session
//                    .createQuery("FROM Salary WHERE faculty.facultyId=:f_id AND amount > 0")
//                    .setParameter("f_id", f_id).list()
//            )
//                salaryList.add((Salary) salary);
//        } catch (HibernateException exception) {
//            System.out.println(exception.getLocalizedMessage());
//        }
//
//        return salaryList;
//    }

}
