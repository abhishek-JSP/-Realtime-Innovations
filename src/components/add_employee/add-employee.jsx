import React, { useContext } from 'react'
import Title from '../title/Title'
import { BsArrowRight } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa"
import { TbBriefcase2 } from "react-icons/tb"
import { BsCalendar4Event } from "react-icons/bs"

import './add-employee.css'
import { NavLink } from 'react-router-dom'
import { Context } from '../../store/contextStore'

const AddEmployee = () => {
    const {addEmployee} = useContext(Context)
    const [newEmpData, setNewEmpData] = React.useState({
        id: Math.random(),
        name: "",
        position: "",
        startingDate: "",
        endDate: ""
    })

    const changeHandler = (e) => {
        const {name, value} = e.target
        setNewEmpData(prev => ({...prev, [name]: value}))
    }
    console.log("========= add empl",newEmpData);

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className='add_container'>
            <div>
                < Title title={"Add Employee Details"} />
            </div>
            <form onSubmit={submitHandler} className='detail_form'>
                <div className='name'>
                    <div className='icon_name'>
                        <FaRegUser />
                    </div>
                    <input name='name' type="text" placeholder='Employee name' onChange={e => changeHandler(e)} />
                </div>
                <div className='role'>
                    <div className='icon_role'>
                        <TbBriefcase2 />
                    </div>
                    <select type="text" name='position' onChange={e => changeHandler(e)}>
                        <option value="" disabled selected>Select role</option>
                        <option value="flutter">flutter</option>
                        <option value="React">React</option>
                        <option value="Node JS">Node JS</option>
                    </select>
                </div>
                <div className='date_container'>
                    <div className="left_Date">
                    <div className='strt_date_icon'>
                        <BsCalendar4Event />
                    </div>
                    <input name='startingDate' type="date" onChange={e => changeHandler(e)}/>
                    </div>
                     
                    <div className='icon'>
                        <BsArrowRight color='#1DA1F2'/>
                    </div>
                    <div className='right_date'>
                    <div className='end_date_icon'>
                        <BsCalendar4Event />
                    </div>
                    <input name='endDate' type="date" onChange={e => changeHandler(e)}/>
                    </div>
                </div>
                <div className='btn_container'>
                    <NavLink to="/" className='cancel_btn'>Cancel</NavLink>
                    <NavLink to="/" onClick={() =>  addEmployee(newEmpData)} className='save_btn'>Save</NavLink>
                </div>
            </form>
        </div>
    )
}

export default AddEmployee
