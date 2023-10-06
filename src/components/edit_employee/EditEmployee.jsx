import React, { useContext, useEffect } from 'react'
import Title from '../title/Title'
import { BsArrowRight } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa"
import { TbBriefcase2 } from "react-icons/tb"
import { BsCalendar4Event } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai"

import "../add_employee/add-employee.css"
import { NavLink, useParams } from 'react-router-dom'
import { Context } from '../../store/contextStore'
import { getAllByText } from '@testing-library/react'

const EditEmployee = () => {
    const {editEmployee, store, handleDelete} = useContext(Context)
    const {id} = useParams()
    const [newEmpData, setNewEmpData] = React.useState({
        id: Math.random(),
        name: "",
        position: "",
        startingDate: "",
        endDate: ""
    })

    useEffect(() => {
        const arr = [...store.currentEmployees, ...store.previousEmployees]
        const filteredArr = arr.filter(empl => empl.id === +id)
        setNewEmpData(...filteredArr)
    }, [])


    const changeHandler = (e) => {
        const {name, value} = e.target
        setNewEmpData(prev => ({...prev, [name]: value}))
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className='add_container'>
            <div>
                < Title title={"Edit Employee Details"} />
                <NavLink to= {"/"} className='dlt_btn' onClick={ () =>handleDelete(newEmpData.id,newEmpData.endDate)}>
                <AiFillDelete />
                </NavLink>

            </div>
            <form onSubmit={submitHandler} className='detail_form'>
                <div className='name'>
                    <div className='icon_name'>
                        <FaRegUser />
                    </div>
                    <input name='name' type="text" placeholder='Employee name' value={newEmpData?.name} onChange={e => changeHandler(e)} />
                </div>
                <div className='role'>
                    <div className='icon_role'>
                        <TbBriefcase2 />
                    </div>
                    <select value={newEmpData?.position} type="text" name='position' onChange={e => changeHandler(e)}>
                        <option value="" disabled selected>Select role</option>
                        <option value="flutter">flutter</option>
                        <option value="React">React</option>
                        <option value="Node JS">Node JS</option>
                    </select>
                </div>
                <div className='date_container'>
                     <div className='left_Date'>
                     <div className='strt_date_icon'>
                        <BsCalendar4Event />
                    </div>
                    <input value={newEmpData?.startingDate} name='startingDate' type="date" onChange={e => changeHandler(e)}/>
                     </div>
                    <div className='icon'>
                        <BsArrowRight color='#1DA1F2'/>
                    </div>
                    <div className='right_date'>
                    <div className='end_date_icon'>
                        <BsCalendar4Event />
                    </div>
                    <input value={newEmpData?.endDate} name='endDate' type="date" onChange={e => changeHandler(e)}/>
                    </div>
                </div>
                <div className='btn_container'>
                    <NavLink to="/" className='cancel_btn'>Cancel</NavLink>
                    <NavLink to="/" onClick={() =>  editEmployee(newEmpData)} className='save_btn'>Save</NavLink>
                </div>
            </form>
        </div>
    )
}

export default EditEmployee;
