import React, { useContext, useEffect, useState } from "react";
import Title from "../title/Title";
import Card from "../card/card";
import { NavLink } from "react-router-dom";

import "./Employeelist.css"
import { Context } from "../../store/contextStore";

const EmployeeList = () => {
    const { store: allEmployees } = useContext(Context);
    return (
        <div className="main_container">
            <div>
                <Title title={"Employee List"} />
            </div>
            <div className="container">
                {allEmployees.currentEmployees &&
                    <div>
                        <h3 className="curEmp">Current Employees</h3>
                        <div className="current_employees">
                            {allEmployees.currentEmployees.map((employee, index) => <Card key={index} employee={employee} />)}
                        </div>
                    </div>
                }
                {allEmployees.previousEmployees &&
                    <div>

                        <h3 className="preEmp">Previous Employees</h3>
                        <div className="previous_employees">
                            {allEmployees.previousEmployees.map((employee, index) => <Card key={index} employee={employee} />)}
                        </div>
                    </div>
                }

            </div>
            <NavLink to={"add-employee"} className="add_employee_btn">+</NavLink>
        </div>


    )
}
export default EmployeeList;