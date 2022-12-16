package com.example.demo.bean;

import jakarta.persistence.*;

@Entity
@Table
public class Salary {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer salaryId;

//Mapping
    @ManyToOne
    @JoinColumn(name = "facultyId")
    private Faculty faculty;

    @Column(nullable = false)
    private String payment_Date;

    @Column(nullable = false)
    private Integer amount;

    @Column
    private String description;

    @Column(nullable = false)
    private String Month;

    public String getMonth() {
        return Month;
    }

    public void setMonth(String month) {
        Month = month;
    }

    public Salary(){}

    public Salary(String payment_Date,Integer amount, String description, String Month){
        this.payment_Date=payment_Date;
        this.amount=amount;
        this.description=description;
        this.Month=Month;
    }

    public Integer getSalaryId() {
        return salaryId;
    }

    public com.example.demo.bean.Faculty getFaculty() {
        return faculty;
    }

    public String getPayment_Date() {
        return payment_Date;
    }

    public Integer getAmount() {
        return amount;
    }

    public String getDescription() {
        return description;
    }

    public void setSalaryId(Integer salaryId) {
        this.salaryId = salaryId;
    }


    public void setFaculty(com.example.demo.bean.Faculty faculty) {
        this.faculty = faculty;
    }

    public void setPayment_Date(String payment_Date) {
        this.payment_Date = payment_Date;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
