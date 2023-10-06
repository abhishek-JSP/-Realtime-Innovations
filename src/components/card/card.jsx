import React, { useContext } from 'react'
import {AiFillDelete} from "react-icons/ai"
import {BiSolidEditAlt} from "react-icons/bi"

import "./card.css"
import { Context } from '../../store/contextStore'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
    const {handleDelete} = useContext(Context)
    console.log(props);
    const {name, position, startingDate, id, endDate} = props.employee;
    const date = new Date(startingDate);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return (
        <div className="card">
            <div>
            <h3>{name}</h3>
            <p>{position}</p>
            <p>From {day} {month}, {year}</p>
            </div>
            <div className='edit_btn'>
            <NavLink to={`edit-employee/${id}`}>
                <button>
                    <BiSolidEditAlt/>
                </button>
            </NavLink>
            </div>
            <div className='del_btn'>
                <button onClick={() => handleDelete(id, endDate)}>
                    <AiFillDelete />
                </button>
                
            </div>
        </div>
    )
}

export default Card
