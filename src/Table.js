import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary
    // marginLeft: theme.spacing.unit * 2.5
  }
});

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      onClose,
      selectedValueAvatar,
      selectedValueEmail,
      selectedValueUserName,
      ...other
    } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}>
        <DialogTitle id="simple-dialog-title">User Details</DialogTitle>
        <IconButton
          aria-label="Close"
          style={{ position: "absolute", right: 20, top: 7 }}
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <div>
          <List>
            <ListItem style={{ justifyContent: "center" }}>
              <ListItemAvatar>
                <Avatar style={{ height: 150, width: 150 }}>
                  <img
                    src={selectedValueAvatar}
                    alt=""
                    style={{ height: 150, width: 150 }}
                  />
                </Avatar>
              </ListItemAvatar>
            </ListItem>
            <ListItem style={{ justifyContent: "center" }}>
              Username: {selectedValueUserName}
            </ListItem>
            <ListItem style={{ justifyContent: "center" }}>
              Email: {selectedValueEmail}
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

const modalStyles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
};
const SimpleDialogWrapped = withStyles(modalStyles)(SimpleDialog);

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page">
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page">
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page">
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page">
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);

const styles = theme => ({
  root: {
    width: "100%"
    // marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class CustomPaginationActionsTable extends React.Component {
  state = {
    users: [],
    page: 0,
    rowsPerPage: 3,
    open: false,
    selectedValueAvatar: null,
    selectedValueUserName: null,
    selectedValueEmail: null,
    filteredUsers: []
  };

  componentDidMount() {
    axios.get(`https://reqres.in/api/users?per_page=20`).then(data => {
      const d = data.data.data.map(user => ({
        first_name: `${user.first_name}`,
        last_name: `${user.last_name}`,
        email: `${user.email}`,
        id: `${user.id}`,
        avatar: `${user.avatar}`
      }));
      this.setState({ users: d, filteredUsers: d });
    });
  }

  filterList = event => {
    let value = event.target.value;
    let users = [...this.state.users];
    let result = [];
    result = users.filter(user => {
      return (
        user.email.toLowerCase().search(value) !== -1 ||
        user.first_name.toLowerCase().search(value) !== -1
      );
    });
    this.setState({ filteredUsers: result });
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };
  handleClickOpen = row => {
    this.setState({
      open: true,
      selectedValueAvatar: row.avatar,
      selectedValueEmail: row.email,
      selectedValueUserName: row.first_name + row.last_name
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { users, rowsPerPage, page, filteredUsers } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <div>
            <h1 style={{ margin: 0 }}>Users</h1>
            <input
              style={{
                padding: 5,
                borderRadius: 2,
                border: "1px solid darkgrey",
                width: 200,
                float: "right",
                marginRight: 10,
                position: "relative",
                bottom: 30
              }}
              type="text"
              placeholder="Search"
              onChange={this.filterList}
            />
          </div>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <TableRow
                    style={{ cursor: "pointer" }}
                    key={row.id}
                    onClick={() => this.handleClickOpen(row)}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {row.first_name}
                    </TableCell>
                    <TableCell align="right">{row.last_name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[3, 6, 9, 12]}
                  colSpan={3}
                  count={users.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>

          <SimpleDialogWrapped
            selectedValueAvatar={this.state.selectedValueAvatar}
            selectedValueEmail={this.state.selectedValueEmail}
            selectedValueUserName={this.state.selectedValueUserName}
            open={this.state.open}
            onClose={this.handleClose}
          />
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(CustomPaginationActionsTable);
