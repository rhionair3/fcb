import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { getProvince, getRegency, getDistrict, getPostal } from "../Services/Alamat";

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

let provList = new Array();
let regList = new Array();
let distList = new Array();
let postList = new Array();
class ProfilFranchise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            role_id: "",
            fname : "",
            regList : {},
            getReady : false,
            id: this.props.vd.id,
            username: this.props.vd.username,
            email: this.props.vd.email,
            fullname: this.props.vd.fullname,
            identityNo: this.props.vd.identityNo,
            city: this.props.vd.city,
            mobile: this.props.vd.mobile,
            bank_name: this.props.vd.bank_name,
            bankAccountNo: this.props.vd.bankAccountNo,
            bankAccountName: this.props.vd.bankAccountName,
            status: this.props.vd.status,
            roleId: this.props.vd.roleId,
            provinceId :this.props.vd.provinceId,
            regencyId :this.props.vd.regencyId,
            districtId :this.props.vd.districtId,
            postalId :this.props.vd.postalId,
            userType: this.props.vd.userType,
            owner: this.props.vd.owner,
            address: this.props.vd.address,
            contactNo: this.props.vd.contactNo
        };
        this.updateParentData = this.updateParentData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        if(this.state.provinceId !== "") {
            this.onChangeProvince.bind(this);
        }
      let getProvinceList = getProvince();
      getProvinceList.then(resProv => {
          return resProv.json();
      }).then(resultProv => {
        console.log(resultProv);
          let rows = {};
          resultProv.provincy.map(item => {
            rows = {
                    id : item.id,
                    name : item.name
                  }
            provList.push(rows);
            this.setState({
                getReady : true
            });
            return "Success";
          })
          console.log(this.state.getReady);
      })
    }

    updateParentData() {
      this.props.onChildChange(this.state);
    }

    handleChange = () => event => {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state, this.updateParentData);
    // console.log(event.target.name);
    }

    handleDateChange = date => {
        this.setState({ selectedDate: moment(date, 'YYYY-MM-DD') });
    };

    onChangeProvince = () => event => {
        let getReg = getRegency(event.target.value);
        getReg.then(resReg => {
            return resReg.json();
        }).then(resultReg => {
          let rows = {};
          regList = [];
          resultReg.regency.map(item => {
            rows = {
                    id : item.id,
                    name : item.name
                  }
            regList.push(rows);
            const state = this.state;
            state[event.target.name] = event.target.value;
            this.setState(state, this.updateParentData);
            this.setState({
                getReady : true
            });
            return "regList";
          })
        })
    }

    onChangeRegency = () => event => {
        let getDist = getDistrict(event.target.value);
        getDist.then(resDist => {
            return resDist.json();
        }).then(resultDist => {
            let rows = {};
            distList =[];
            resultDist.district.map(item => {
                rows = {
                        id : item.id,
                        name : item.name
                      }
                distList.push(rows);
                const state = this.state;
                state[event.target.name] = event.target.value;
                this.setState(state, this.updateParentData);
                this.setState({
                    getReady : true
                });
                return "distList";
            })
        })
    }

    onChangeDistrict = () => event => {
        let getPost = getPostal(event.target.value);
        getPost.then(resPost => {
            return resPost.json();
        }).then(resultPost => {
          console.log(resultPost);
            let rows = {};
            postList = [];
            resultPost.postal.map(item => {
                rows = {
                        id : item.id,
                        postal_code : item.postalCode
                      }
                postList.push(rows);
                const state = this.state;
                state[event.target.name] = event.target.value;
                this.setState(state, this.updateParentData);
                this.setState({
                    getReady : true
                });
                return "postList";
            })
        })
    }

    render() {
        
        const { classes } = this.props;
          return (
            <React.Fragment>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <input
                        id="id"
                        name="id"
                        fullWidth
                        value={this.state.id}
                        type="hidden"
                    />
                    <input
                        id="status"
                        name="status"
                        fullWidth
                        value="1"
                        type="hidden"
                    />
                    <TextField
                        id="userType"
                        name = "userType"
                        select
                        label="Pilih Tipe Franchise"
                        value={this.state.userType}
                        onChange = {
                            this.handleChange('userType')
                        }
                        fullWidth
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        margin="dense"
                        variant="outlined"
                    >
                        <MenuItem value="">
                        <em>Pilih</em>
                        </MenuItem>
                        <MenuItem value={1}>Pribadi</MenuItem>
                        <MenuItem value={2}>Perusahaan</MenuItem>
                        <MenuItem value={3}>Internal</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                <TextField
                    required
                    id="owner"
                    label="Nama Pemilik"
                    name="owner"
                    value={this.state.owner}
                    onChange={this.handleChange('owner')}
                    fullWidth
                    margin="dense"
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    id = "fullname"
                    name = "fullname"
                    label="Nama Perusahaan"
                    fullWidth
                    value={this.state.fullname}
                    onChange={this.handleChange('fullname')}
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="identityNo"
                    name="identityNo"
                    label="No. KTP / Identitas Diri"
                    fullWidth
                    value={this.state.identityNo}
                    onChange={this.handleChange('identityNo')}
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="npwp_no"
                    name="npwp_no"
                    label="No. NPWP ( Wajib Diisi Bila Perusahaan )"
                    fullWidth
                    value={this.state.npwp_no}
                    onChange={this.handleChange('npwpNo')}
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address"
                        name="address"
                        label="Alamat Pribadi / Perusahaan"
                        value={this.state.address}
                        onChange={this.handleChange('address')}
                        multiline
                        rows = "4"
                        fullWidth
                        margin = "dense"
                        variant = "outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="provinceId"
                        name="provinceId"
                        select
                        label="Pilih Propinsi"
                        value={this.state.provinceId}
                        onChange={this.onChangeProvince('provinceId')}
                        fullWidth
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        margin="dense"
                        variant="outlined"
                    >
                        <MenuItem value="">
                        <em>Pilih</em>
                        </MenuItem>
                        {this.state.getReady && provList.map((item, i) =>{
                          console.log(item);
                          return [
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          ]
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="regencyId"
                        name="regencyId"
                        select
                        label="Pilih Kota / kabupaten"
                        value={this.state.regencyId}
                        onChange={this.onChangeRegency('regencyId')}
                        fullWidth
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        margin="dense"
                        variant="outlined"
                    >
                        <MenuItem value="">
                        <em>Pilih</em>
                        </MenuItem>
                        {this.state.getReady && regList.map((item, i) =>{
                          console.log(item);
                          return [
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          ]
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="districtId"
                        name="districtId"
                        select
                        label="Pilih Kecamatan"
                        value={this.state.districtId}
                        onChange={this.onChangeDistrict('districtId')}
                        fullWidth
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        margin="dense"
                        variant="outlined"
                    >
                        <MenuItem value="">
                        <em>Pilih</em>
                        </MenuItem>

                        {this.state.getReady && distList.map((item, i) =>{
                          console.log(item);
                          return [
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          ]
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="postalId"
                        name="postalId"
                        select
                        label="Pilih Kode Pos"
                        value={this.state.postalId}
                        onChange={this.handleChange('postalId')}
                        fullWidth
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        margin="dense"
                        variant="outlined"
                    >
                        <MenuItem value="">
                        <em>Pilih</em>
                        </MenuItem>
                        {this.state.getReady && postList.map((item, i) =>{
                          console.log(item);
                          return [
                            <MenuItem value={item.id}>{item.postal_code}</MenuItem>
                          ]
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                    required
                    id="contactNo"
                    name="contactNo"
                    label="No. Telepon"
                    fullWidth
                    value={this.state.contactNo}
                    onChange={this.handleChange('contactNo')}
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                    required
                    id="mobile"
                    name="mobile"
                    label="No. Telepon Seluler"
                    fullWidth
                    value={this.state.mobile}
                    onChange={this.handleChange('mobile')}
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                    required
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    label="Alamat Email ( Untuk Verifikasi Pembuatan Akun )"
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
            </Grid><br/><br/>
            <div>
                <Paper className={classes.paddingPaper}>
                    <Typography variant="h6" component="h6"> Lampiran </Typography>
                    <Typography component="p"> Pribadi : Lampirkan Fotocopy KTP dan NPWP ( Jika Memiliki NPWP ) </Typography>
                    <Typography component="p"> Perusahaan : Lampirkan Fotocopy TDP, SIUP dan NPWP Perusahaan Dan KTP Penangung Jawab </Typography>
                </Paper>
            </div>
            </React.Fragment>
        );
    }

}
ProfilFranchise.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfilFranchise);
