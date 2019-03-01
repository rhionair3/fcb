import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import stylesBrambang from '../../../../public/themes/stylesBrambang';
import MUIDatatable from 'mui-datatables';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
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

class ListDataKoki extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          openListAlamat  : this.props.statusOpen,
          listAlamat      : this.props.listAlamat,
          getReady        : false,
          openFormKoki    : false
        }
    }

    modalFormKokiOpen() {
      this.setState({
        openFormKoki : true
      })
    }

    modalFormKokiClose() {
      this.setState({
        openFormKoki : false
      })
    }

    render() {
        const { classes } = this.props;
        const { selectedDate } = this.state;
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
                        <Fab size="small" color="secondary" aria-label="Add" className={classes.btnInfo} onClick={() => this.modalFormKokiOpen()}>
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
                    title={"List Data Koki"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </Dialog>
            <Dialog
                open={this.state.openFormKoki}
                disableBackdropClick={true}
                onClose={null}
                onExited={null}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth = 'lg'
                scroll = 'body'
            >
                <form className={classes.form} action="/" method="POST" onSubmit={(e) => { e.preventDefault();}}>
                    <DialogTitle id="alert-dialog-title">Form Data Koki</DialogTitle>
                    <DialogContent bacgroundColor="primary">
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={12}>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            value={this.state.ftype}
                                            onChange={this.handleChange}
                                            select
                                            inputProps={{
                                            name: 'ftype',
                                            }}
                                            margin = "dense"
                                            variant = "outlined"
                                            fullWidth
                                            label = "Disediakan Untuk pemilik"
                                        >
                                            <MenuItem value="">
                                            <em>Tidak memilih</em>
                                            </MenuItem>
                                            <MenuItem value={20}>Sung Ha Jung</MenuItem>
                                            <MenuItem value={30}>Anonymous</MenuItem>
                                            <MenuItem value={40}>David Becham</MenuItem>
                                            <MenuItem value={50}>Sianturi</MenuItem>
                                            <MenuItem value={60}>Borneo</MenuItem>
                                            <MenuItem value={70}>Bajigur</MenuItem>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField required id="price" label="Nama Koki" fullWidth margin="dense" variant="outlined"/>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField required id="cardNumber" label="No. Identitas Koki ( KTP / SIM / PASPOR )" fullWidth  margin="dense" variant="outlined"/>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        < MuiPickersUtilsProvider utils={MomentUtils} moment={moment} locale='id'>
                                            <DatePicker
                                                value={selectedDate}
                                                format={'YYYY-MM-DD'}
                                                onChange={this.handleDateChange}
                                                required
                                                id="tglPengambilan"
                                                label="Tanggal Pengambilan"
                                                fullWidth
                                                margin = "dense"
                                                variant = "outlined"
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.modalFormKokiClose()} color="primary">
                            Batal
                        </Button>
                        <Button type="submit" color="primary" autoFocus>
                            Ya, Hapus
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
          </div>
          </React.Fragment>
      );
    }
}
ListDataKoki.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(stylesBrambang, { withTheme: true })(ListDataKoki);
