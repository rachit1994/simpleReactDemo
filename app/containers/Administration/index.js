import React from 'react';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getTable } from './selector';
import { getUser } from 'containers/signedInUser/selector';

class Administration extends React.PureComponent {
  render() {
    const { user, table } = this.props;
    if(user && user.email && user.email.length > 0) {
      return (
        <div>
          <Helmet
            title="Administration"
          >
            <meta name="description" content="Administration page" />
          </Helmet>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First name</TableCell>
                  <TableCell>Last name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Telephone</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Zip</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Comments</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                { table && table.length > 0 && table.map((n, i) => (
                  <TableRow key={i}>
                    <TableCell>{n.fName}</TableCell>
                    <TableCell>{n.lName}</TableCell>
                    <TableCell>{n.email}</TableCell>
                    <TableCell>{n.phone}</TableCell>
                    <TableCell>{n.address}</TableCell>
                    <TableCell>{n.city}</TableCell>
                    <TableCell>{n.state}</TableCell>
                    <TableCell>{n.zip}</TableCell>
                    <TableCell>{n.country}</TableCell>
                    <TableCell>{n.comments}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      );
    } else {
      return (
        <div>
          <Helmet
            title="Administration"
          >
            <meta name="description" content="Administration page" />
          </Helmet>
          <Link to="/sign-in">Please Login to view this page</Link>
        </div>
      );
    }
  }
}

const mapStateToProps = createStructuredSelector({
  table: getTable(),
  user: getUser()
});

export default connect(mapStateToProps)(Administration);
