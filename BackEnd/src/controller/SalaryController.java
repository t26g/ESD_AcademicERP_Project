package com.example.demo.controller;
import com.example.demo.bean.Faculty;
import com.example.demo.bean.Salary;
import com.example.demo.services.SalaryServices;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/salary")
public class SalaryController {
    SalaryServices salaryService = new SalaryServices();

    @GET
    @Path("/salaryDetails")
//    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response getSalary(@QueryParam("facultyId") int facultyId) {
        List<Salary> facultyList = salaryService.getSalary(facultyId);
        if (facultyList == null) {
            return Response.status(400).entity("Failure while fetching employee details").build();
        }
        return Response.ok().entity(facultyList).build();
    }

    @GET
    @Path("/download")
    // @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response details(@QueryParam("facultyId") int facultyId,@QueryParam("Month") String Month) {
        Salary loggedFaculty = salaryService.salary(facultyId, Month);
        if (loggedFaculty == null) {
            return Response.status(400).entity("Failure while fetching employee details").build();
        }
        return Response.ok().entity(loggedFaculty).build();
    }

}
