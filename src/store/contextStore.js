import React, { createContext, useReducer } from "react";
import contextReducer from "./contextReducer";

export const Context = createContext();
const storeData = {
    currentEmployees: [],
    previousEmployees: []
}

const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(contextReducer, storeData)
    
    const addEmployee = (employee) => {
        dispatch({type: "ADD", payload: employee})
    }
    const editEmployee = (employee) => {
        dispatch({type: "EDIT", payload: employee})
    }
    const handleDelete = (id, endDate) => {
        dispatch({type: "REMOVE", payload: {id, endDate}})
    }
    return <Context.Provider value={{ store, addEmployee, handleDelete, editEmployee }}>
        {children}
    </Context.Provider>
}

export default StoreProvider;
