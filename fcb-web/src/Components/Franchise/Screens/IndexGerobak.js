import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import stylesBrambang from '../../../../public/themes/stylesBrambang';
import MUIDatatable from 'mui-datatables';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from "@material-ui/core/Tooltip";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    paddingPaper: {
        padding: 5
    }

});

class ListDataGerobak extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          openListAlamat  : this.props.statusOpen,
          listAlamat      : this.props.listAlamat,
          getReady        : false
        }
    }
    render() {
        const { classes } = this.props;
        const columns = [
          {
              name: "Nama Lengkap",
              options: {
                  filter: true
              }
          },{
              name: "Alamat",
              options: {
                  filter: true
              }
          },{
              name: "Nomor Telp",
              options: {
                  filter: true
              }
          },{
              name: "Setting",
              options: {
                  filter: true
              }
          },
        ];
        const data = this.props.listAlamat;
        const options = {
            filterType: 'dropdown',
            customToolbar: () => {
                return (
                    <Tooltip title={"Tambah Gerobak"} style={{marginLeft:20}}>
                        <Fab size="small" color="secondary" aria-label="Add" className={classes.btnInfo}>
                        <AddIcon />
                        </Fab>
                    </Tooltip>
                );
            },
            customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage) => {
              return (
                  <TableFooter>
                    <TableRow>
                      <TableCell>
                        <TablePagination
                          count={count}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onChangePage={(_, page) => changePage(page)}
                          onChangeRowsPerPage={event => changeRowsPerPage(event.target.value)}
                          rowsPerPageOptions={[5, 10, 20, 50, 100]}
                        />
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" color="primary" className={classNames(classes.btnDefault, classes.floatRight)}>
                        Tutup
                      </Button>
                    </TableCell>
                    </TableRow>
                  </TableFooter>
                );
          }
        };
        console.log(data);
        return (
          <React.Fragment>
          <div>
            <Dialog
                open={this.props.statusOpen}
                disableBackdropClick={true}
                onClose={null}
                onExited={null}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth = 'lg'
                scroll = 'body'
            >
                <MUIDatatable
                    title={"List Data Gerobak"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </Dialog>
          </div>
          </React.Fragment>
      );
    }
}
ListDataGerobak.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(stylesBrambang, { withTheme: true })(ListDataGerobak);
