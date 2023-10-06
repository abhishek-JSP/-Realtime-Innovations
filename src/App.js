// import './App.css';
import AddEmployee from './components/add_employee/add-employee';
import EditEmployee from './components/edit_employee/EditEmployee';
import EmployeeList from './components/employesList/EmployeeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<EmployeeList />} />
        {/* <Route exact path='/employee-list' element={<EmployeeList />} /> */}
        <Route exact path='/add-employee' element={<AddEmployee />} />
        <Route exact path='/edit-employee/:id' element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <AddEmployee/>
    // </div>
  );
}

export default App;
