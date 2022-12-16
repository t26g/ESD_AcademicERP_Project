package com.example.demo.controller;
import com.example.demo.bean.Faculty;
import com.example.demo.bean.Salary;
import com.example.demo.services.FacultyServices;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/faculty")
public class FacultyController {
    FacultyServices facultyServices = new FacultyServices();

    @POST
    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response login(Faculty faculty) {
        Faculty loggedInFaculty = facultyServices.login(faculty);

        if (loggedInFaculty == null)
            return Response.status(401).build();
        else
            return Response.ok().entity(loggedInFaculty).build();
    }

    @GET
    @Path("/details")
   // @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response details(@QueryParam("facultyId") int facultyId) {
        Faculty loggedFaculty = facultyServices.details(facultyId);
        if (loggedFaculty == null) {
            return Response.status(400).entity("Failure while fetching employee details").build();
        }
        return Response.ok().entity(loggedFaculty).build();
    }

}
