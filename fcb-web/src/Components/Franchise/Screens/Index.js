import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MUIDatatable from 'mui-datatables';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Tooltip from "@material-ui/core/Tooltip";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Edit, DeleteForever, AddShoppingCart, Streetview } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import stylesBrambang from '../../../../public/themes/stylesBrambang';
import FormFranchise from './Form';
import { getFranchiseList, getFranchiseDetail, simpanDataFranchise, updateFranchise, simpanDataFranchiseDetails, getFranchiseDetailList } from "../Services/Franchise";

function TabContainer(props) {
  return (
    <div component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const getData = []
class Franchise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openDel: false,
            notify: false,
            value: null,
            getReady : false,
            formData : {},
            message : "",
            message_header : "",
            message_status : "",
            updatedAt: 0,
            updatedBy: "",
            notify_stat: false,
            idDeleted: "",
            id: "",
            username: "",
            email: "",
            fullname: "",
            identityNo: "",
            city: "",
            mobile: "",
            statusMobile: "",
            bank_name: "",
            bankAccountNo: "",
            bankAccountName: "",
            createdAt: "",
            status: 1,
            roleId: "",
            owner: "",
            provinceId : "",
            regencyId : "",
            districtId : "",
            postalId : "",
            address: "",
            contactNo: ""
        };
    };

    componentDidMount() {
        let getdata = getFranchiseList();
        getdata.then(response => {
            return response.json();
        }).then(result => {
            let rows =[];
            result.franchises.map(item => {
                rows = [
                  item.email,
                  item.fullname,
                  item.identityNo,
                  item.status,
                  item.id
                ];

                getData.push(rows);
                this.setState({
                    getReady : true
                });
                return "Success";
            });
        });

    }

    modalFormOpen = (value) => {
        let datadetail = getFranchiseDetail(value);
        datadetail.then(response => {
            return response.json();
        }).then(result => {
            if (result.franchise.id) {
                let datafDetail = getFranchiseDetailList(result.franchise.id);
                datafDetail.then(resp => {
                    return resp.json();
                }).then(resfDetail => {
                    this.setState({
                        open: true,
                        formData: {
                            id: result.franchise.id,
                            username: result.franchise.username,
                            email: result.franchise.email,
                            fullname: result.franchise.fullname,
                            identityNo: result.franchise.identityNo,
                            city: result.franchise.city,
                            mobile: result.franchise.mobile,
                            bank_name: result.franchise.bank_name,
                            bankAccountNo: result.franchise.bankAccountNo,
                            bankAccountName: result.franchise.bankAccountName,
                            status: result.franchise.status,
                            roleId: result.franchise.roleId,
                            userType: result.franchise.userType,
                            contactNo: result.franchise.contactNo,
                            provinceId: resfDetail.franchiseDetails.provinceId,
                            regencyId: resfDetail.franchiseDetails.regencyId,
                            districtId: resfDetail.franchiseDetails.districtId,
                            postalId: resfDetail.franchiseDetails.postalId,
                            owner: resfDetail.franchiseDetails.owner,
                            address: resfDetail.franchiseDetails.address
                        }
                    });
                })
            } else {
                this.setState({
                    open: true,
                    formData: {
                        id: "",
                        username: "",
                        email: "",
                        fullname: "",
                        identityNo: "",
                        city: "",
                        mobile: "",
                        bank_name: "",
                        bankAccountNo: "",
                        bankAccountName: "",
                        status: "",
                        roleId: "",
                        provinceId: "",
                        regencyId: "",
                        districtId: "",
                        postalId: "",
                        userType: "",
                        owner: "",
                        address: "",
                        contactNo: ""
                    }
                });
            }
        });
    };

    modalFormClose = () => {
        console.log('Harusnya Notif Tereksekusi');
        this.setState({
            open: false,
        });
    };

    submitForm = () => {
        console.log("load submit" + this.state.id);
        let dataSimpan =  {
          id: this.state.id,
          username: this.state.email,
          email: this.state.email,
          fullname: this.state.fullname,
          identityNo: this.state.identityNo,
          mobile: this.state.mobile,
          bank_name: this.state.bank_name,
          bankAccountNo: this.state.bankAccountNo,
          bankAccountName: this.state.bankAccountName,
          status: 1,
          rolesId: 19,
          provinceId : this.state.provinceId,
          regencyId : this.state.regencyId,
          districtId : this.state.districtId,
          postalId : this.state.postalId,
          userType: this.state.userType,
          owner: this.state.owner,
          address: this.state.address,
          contactNo: this.state.contactNo
        }
        let simpanData = simpanDataFranchise(dataSimpan);
        simpanData.then(response => {
            return response.json();
        }).then(result => {

            dataSimpan.franchiseId = result.franchise.id;
            let simpanDetail = simpanDataFranchiseDetails(dataSimpan);
            console.log(dataSimpan);
            simpanDetail.then(resDetails => {
                return resDetails.json();
            }).then(rDetails => {
                let header_m = "";
                let m = "";
                let status_m = "";
                if (rDetails) {
                    status_m = "success";
                    if (this.state.id && (this.state.id !== null || this.state.id !== "")) {
                        header_m = "Pembaharuan Data Franchise";
                        m = "Sukses memperbaharui Franchise ... "
                    } else {
                        header_m = "Menambah Data Franchise";
                        m = "Sukses menambahkan Franchise ..."
                    }
                } else {
                    status_m = "failed";
                    header_m = "Error Dalam Menyimpan";
                    m = "Gagal menyimpan data ..."
                }
                this.setState({
                    open: false,
                    message_status: status_m,
                    message_header: header_m,
                    message: m,
                    notify_stat: true
                });
            })
        });
    };

    showNotif = state => () => {
        if(this.state.notify_stat) {
            this.setState({
                notify: true,
                ...state
            })
        } else {
            this.setState({
                notify:false
            })
        }
    };

    hideNotif = () => {
        this.setState({
            notify:false
        })
        // window.location.reload();
    };

    handleChange = (value) => {
        console.log(value)
        this.setState(value);
    }

    confirmDeleteOpen = (value) => {
        let datadetail = getFranchiseDetail(value);
        datadetail.then(response => {
            return response.json();
        }).then(result => {
            console.log(result);
            this.setState({
                openDel: true,
                idDeleted: result.gerobak.id
            });
        });
    };

    submitDelete = () => {
        let setDelGerobak = setDeleteGerobak(this.state.idDeleted);
        setDelGerobak.then(response => {
            return response.json()
        }).then(result => {
            console.log(result);
            this.setState({
                openDel: false,
                message_status: "delete",
                message_header: "Berhasil Menonaktifkan Data Gerobak",
                message: "Gerobak Dinonaktifkan !",
                notify_stat: true,
                idDeleted: ""
            });
        })
    }

    confirmDeleteClose = () => {
        this.setState({
            openDel: false,
            idDeleted: ""
        });
    }


    onChildChange = (value) => {
      console.log(value);
      this.setState(value);
    };

    render() {
        const { classes } = this.props;
        const columns = [
            {
                name: "Kode Gerobak",
                options: {
                    filter: false
                }
            },
            {
                name: "Tipe Gerobak",
                options: {
                    filter: true
                }
            },
            {
                name: "No. Identitas",
                options: {
                    filter: true,
                }
            },
            {
                name: "Status Aktif",
                options: {
                    filter: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        console.log(value);
                        let dataDeleted = (value === 1 ? "Aktif" : "Tidak Aktif");
                        let colorStat = (value === 1 ? "primary" : "secondary");
                        return (
                            <div>
                                <Button variant="outlined" size="small" color={colorStat} className={classes.margin}>
                                    {dataDeleted}
                                </Button>
                            </div>
                        );
                    }
                }
            },
            {
                name: "Action",
                options: {
                    filter: false,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return (
                            <ToggleButtonGroup>
                                <Tooltip title={"Edit Franchise"}>
                                    <ToggleButton className={classes.btnSuccess} onClick={() => this.modalFormOpen(value)}>
                                        <Edit />
                                    </ToggleButton>
                                </Tooltip>
                                <Tooltip title={"Edit Alamat Pengiriman"}>
                                    <ToggleButton className={classes.btnInfo} onClick={() => this.modalFormOpen(value)}>
                                        <Streetview />
                                    </ToggleButton>
                                </Tooltip>
                                <Tooltip title={"Edit Data Gerobak"}>
                                    <ToggleButton className={classes.btnDefault} onClick={() => this.modalFormOpen(value)}>
                                        <AddShoppingCart />
                                    </ToggleButton>
                                </Tooltip>
                            </ToggleButtonGroup>
                        );
                    }

                }
            }
        ];

        const data = getData;

        const options = {
            filterType: 'dropdown',
            customToolbar: () => {
                return (
                    <Tooltip title={"Tambah Gerobak"} style={{marginLeft:20}}>
                        <Fab size="small" color="secondary" aria-label="Add" className={classes.btnInfo} onClick={() => this.modalFormOpen()}>
                        <AddIcon />
                        </Fab>
                    </Tooltip>
                );
            }
        };

        console.log(this.state.id);
        return (
            <div>
                <div className={classes.headerComponentWrapper}>
                    <Paper className={classes.headerComponentInner}r>
                        <Typography variant="h6" gutterBottom>
                            Informasi Data Franchise
                        </Typography>
                    </Paper>
                </div>
                <div className={classes.mainComponentWrapper}>
                    <Paper>
                        <MUIDatatable
                            title={"List Data Franchise"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                        <Dialog
                            open={this.state.open}
                            disableBackdropClick={true}
                            onClose={this.modalFormClose}
                            onExited={this.showNotif()}
                            aria-labelledby="form-dialog-title"
                            fullWidth={true}
                            maxWidth = 'lg'
                            scroll = 'body'
                        >
                            <form className={classes.form} action="/" method="POST" onSubmit={(e) => { e.preventDefault(); this.submitForm();}}>
                                <DialogTitle id="form-dialog-title">Form Data Franchise</DialogTitle>
                                <DialogContent className={classes.noPaddingDialogContent}>
                                    <div component="div" style={{ padding: 8 * 3 }}>
                                        <FormFranchise vd = {this.state.formData} onChildChange = {(value) => this.onChildChange(value)} />
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.modalFormClose} color="Secondary">
                                        Batal
                                    </Button>
                                    <Button type="submit" color="primary" className={classes.btnInfo}>
                                        Simpan
                                    </Button>
                                </DialogActions>
                            </form>
                        </Dialog>
                        <Dialog
                            open={this.state.openDel}
                            disableBackdropClick={true}
                            onClose={this.confirmDeleteClose}
                            onExited={this.showNotif()}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                        <form className={classes.form} action="/" method="POST" onSubmit={(e) => { e.preventDefault(); this.submitDelete();}}>
                            <DialogTitle id="alert-dialog-title">Konfirmasi Hapus Data Franchise</DialogTitle>
                            <DialogContent bacgroundColor="primary">
                                <DialogContentText id="alert-dialog-description">
                                    Data Gerobak Franchise Akan Dihapus Dari List. Dan Tidak Akan tampil Diwaktu Berikutnya.
                                    Apakah Anda Yakin Ingin Menghapus Data Gerobak Franchise ?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.confirmDeleteClose} color="primary">
                                    Batal
                                </Button>
                                <Button type="submit" color="primary" autoFocus>
                                    Ya, Hapus
                                </Button>
                            </DialogActions>
                        </form>
                        </Dialog>
                    </Paper>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                    open={this.state.notify}
                    autoHideDuration={1500}
                    onClose={this.hideNotif}
                >
                    <SnackbarContent
                        className={ this.state.message_status && this.state.message_status === "success" ? classes.btnSuccess : classes.btnDanger }
                        aria-describedby="client-snackbar"
                        message={
                                    <div>
                                        <h4>{ this.state.message_header }</h4>
                                        <span id="message-id">{this.state.message}</span>
                                    </div>
                                }
                    />
                </Snackbar>
            </div>

        );
  }
}

Franchise.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(stylesBrambang, { withTheme: true })(Franchise);
