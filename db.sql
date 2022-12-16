///////Creating Database//////

create database IIITB;

///////creating faculty table//////

create table faculty(facultyId int, firstName varchar(20) NOT NULL, lastName varchar(20),email varchar(35), department varchar(20), password varchar(20) NOT NULL,Monthly_Salary int NOT NULL);

//////creating Salary table///////

create table Salary(salaryId int,facultyId int,payment_Date varchar(10),amount int, description varchar(50), Month varchar(10));

//////adding facultyId as primary key///////

alter table faculty add constraint pk_facultyID primary key (facultyId);

////////adding salaryId as primary key///////

alter table Salary add constraint pk_salaryID primary key (salaryId);

///////adding facultyid as foreign key in Salary table which refer facultyId in faculty table///////

alter table Salary ADD constraint fk_facultyId foreign key(facultyId) REFERENCES faculty(facultyId);

///////insert data into faculty table////////

insert into faculty values(1,"Tushar","Gunware","tushar@gmail.com","Algo","tushar",125000),(2,"Venkatesh","Boppana","venkatesh@gmail.com","SS","venkatesh",100000),(3,"Soham","Pawar","soham@gmail.com","MML","soham",100000),(4,"Abhishek","Fatale","abhishek@gmail.com","ML","abhishek",120000),(5,"Pranjal","Sharma","pranjal@gmail.com","Algo","pranjal",150000);

/////////insert data into Salary table////////

insert into Salary values(51,1,"10/01/2022",12500,"Salary","January"),(52,2,"15/01/2022",100000,"Salary","January"),(53,3,"15/01/2022",100000,"Salary","January"),(54,4,"15/01/2022",120000,"Salary","January"),(55,5,"15/01/2022",150000,"Salary","January");

insert into Salary values(62,1,"10/02/2022",12500,"Salary","February"),(61,2,"15/02/2022",100000,"Salary","February"),(60,3,"15/02/2022",100000,"Salary","February"),(59,4,"15/02/2022",120000,"Salary","February"),(58,5,"15/02/2022",150000,"Salary","February");

insert into Salary values(66,1,"10/3/2022",12500,"Salary","March"),(67,2,"15/03/2022",150000,"Salary","March"),(63,3,"15/03/2022",150000,"Salary","March"),(69,4,"15/03/2022",170000,"Salary","March"),(64,5,"15/03/2022",200000,"Salary","March");

insert into Salary values(166,1,"10/04/2022",12500,"Salary","April"),(167,2,"15/04/2022",150000,"Salary","April"),(163,3,"15/04/2022",150000,"Salary","April"),(169,4,"15/04/2022",170000,"Salary","April"),(164,5,"15/04/2022",200000,"Salary","April"),(266,1,"10/05/2022",12500,"Salary","May"),(267,2,"15/05/2022",150000,"Salary","May"),(263,3,"15/05/2022",150000,"Salary","May"),(269,4,"15/05/2022",170000,"Salary","May"),(264,5,"15/05/2022",200000,"Salary","May"),(366,1,"10/06/2022",12500,"Salary","June"),(367,2,"15/06/2022",150000,"Salary","June"),(363,3,"15/06/2022",150000,"Salary","June"),(369,4,"15/06/2022",170000,"Salary","June"),(364,5,"15/06/2022",200000,"Salary","June"),(466,1,"10/07/2022",12500,"Salary","July"),(467,2,"15/07/2022",150000,"Salary","July"),(463,3,"15/07/2022",150000,"Salary","July"),(469,4,"15/07/2022",170000,"Salary","July"),(464,5,"15/07/2022",200000,"Salary","July"),(566,1,"10/08/2022",12500,"Salary","August"),(567,2,"15/08/2022",150000,"Salary","August"),(663,3,"15/08/2022",150000,"Salary","August"),(669,4,"15/08/2022",170000,"Salary","August"),(664,5,"15/08/2022",200000,"Salary","August"),(766,1,"10/09/2022",12500,"Salary","September"),(767,2,"15/09/2022",150000,"Salary","September"),(763,3,"15/09/2022",150000,"Salary","September"),(769,4,"15/09/2022",170000,"Salary","September"),(764,5,"15/09/2022",200000,"Salary","September"),(866,1,"10/10/2022",12500,"Stiphand","October"),(867,2,"15/10/2022",150000,"Salary","October"),(863,3,"15/10/2022",150000,"Salary","October"),(869,4,"15/10/2022",170000,"Salary","October"),(864,5,"15/10/2022",200000,"Salary","October"),(966,1,"10/11/2022",12500,"Salary  plus Diwali Bonus","November"),(967,2,"15/11/2022",150000,"Salary plus Diwali Bonus","November"),(963,3,"15/11/2022",150000,"Salary  plus Diwali Bonus","November"),(969,4,"15/11/2022",170000,"Salary  plus Diwali Bonus","November"),(964,5,"15/11/2022",200000,"Salary  plus Diwali Bonus","November"),(1066,1,"10/12/2022",12500,"Salary ","December"),(1067,2,"15/12/2022",150000,"Salary","December"),(1063,3,"15/12/2022",150000,"Salary","December"),(1069,4,"15/12/2022",170000,"Salary","December"),(1064,5,"15/12/2022",200000,"Salary","December");
