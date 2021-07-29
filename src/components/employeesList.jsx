import React, { useState, useEffect} from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'
import { Employee } from '../services/employee'

const employee = new Employee();

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});
const tableStyle = {
  padding: "50px 50px",
  width: 1000, margin: "120px auto",
  elevation: 40
}

/**
   * @description handle List button, when its fetches the Employee data from Backend
   * @returns success or failure message
   */
export const ListEmployees = () => {
  let [employees, setEmployees] = useState([]);
  const classes = useStyles();

  const loadEmployees = () => {
    employee.getAllEmployees().then((res) => {
      if (res.data.success === true) {
        setEmployees(res.data.data);
      }
      else {
        console.log("Some error occurred!");
      }
    }).catch((error) => {
      console.log(error.message);
    });
  };

  useEffect(() => {
    loadEmployees();
  }, []);
  
  /**
   * @description handle deleteEmployee request button, when we want to Delete and Employee data
   * @param empId is passed to delete the Item
   * @returns success or failure message
   */
  const deleteEmployee = (empId) => {
    employee.removeEmployee(empId)
            .then((response)=>{
              console.log(response)
              alert(response.data.message);
            }).catch(error=>{
              console.log(error.message);
            });
    loadEmployees();
  }
  return (
    <TableContainer data-testid='tableContainer' component={Paper} style={tableStyle}>
      <Table data-testid='table' className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow data-testid='tableRowHeader'>
            <StyledTableCell data-testid='name'>Name</StyledTableCell>
            <StyledTableCell data-testid='email'>Email</StyledTableCell>
            <StyledTableCell data-testid='phoneNumber'>Phone Number</StyledTableCell>
            <StyledTableCell data-testid='department'>Department</StyledTableCell>
            <StyledTableCell data-testid='salary'>Salary</StyledTableCell>
            <StyledTableCell data-testid='company'>Company</StyledTableCell>
            <StyledTableCell >Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid='tableBody'>
          {employees.map((employee) => (
            // eslint-disable-next-line react/jsx-key
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">{employee.name}</StyledTableCell>
              <StyledTableCell >{employee.email}</StyledTableCell>
              <StyledTableCell >{employee.phoneNumber}</StyledTableCell>
              <StyledTableCell >{employee.department}</StyledTableCell>
              <StyledTableCell >{employee.salary}</StyledTableCell>
              <StyledTableCell >{employee.company}</StyledTableCell>
              <StyledTableCell >
                <Link to={`/dashboard/updateEmployee/${employee._id}`}><EditIcon style={{ fill: '#000000' }} /></Link>&nbsp;&nbsp;&nbsp;
                <Link onClick={() => { deleteEmployee(employee._id) }}><DeleteIcon style={{ fill: '#000000' }} /></Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
