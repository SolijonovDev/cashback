import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import * as React from "react";
import { FC } from "react";
import { useHistory } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // [`&.${tableCellClasses.head}`]: {
  //   backgroundColor: theme.palette.common.black,
  //   color: theme.palette.common.white,
  // },
  // [`&.${tableCellClasses.body}`]: {
  //   fontSize: 14,
  // },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const CustomizedTables: FC<{ items: any[] }> = ({ items }) => {
  const history=useHistory()
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Id</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">created at</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((v) => (
            <StyledTableRow onClick={()=>history.push(`/company/${v.id}`)} key={v.id}>
              <StyledTableCell align="left" component="th" scope="row">
                {v.id}
              </StyledTableCell>
              <StyledTableCell align="left" component="th" scope="row">
                {v.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {v.short_description}
              </StyledTableCell>
              <StyledTableCell align="right">{v.created_at}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
