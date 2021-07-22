import React, { useState} from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { Employee } from '../services/employee'
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'
// const employee = new Employee();

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
    minWidth: 700,
  },
});
const tableStyle = {
  padding: "30px 20px",
  width: 1200, margin: "80px auto",
  elevation: 20
}

export const ListEmployees = () => {
  let [employees] = useState([]);
  const classes = useStyles();


  

  return (
    <TableContainer component={Paper} style={tableStyle}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Phone Number</StyledTableCell>
            <StyledTableCell >Department</StyledTableCell>
            <StyledTableCell >Salary</StyledTableCell>
            <StyledTableCell >Company</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
                <Link to='/dashboard/viewEmployee'><VisibilityIcon style={{ fill: '#000000' }} /></Link>&nbsp;&nbsp;&nbsp;
                <Link to={`/dashboard/updateEmployee/${employee._id}`}><EditIcon style={{ fill: '#000000' }} /></Link>&nbsp;&nbsp;&nbsp;
                <Link onClick=''><DeleteIcon style={{ fill: '#000000' }} /></Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}