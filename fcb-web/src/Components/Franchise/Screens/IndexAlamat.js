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
            contactNo: this.props.vd.contactNo,
            idDetails: this.props.vd.idDetails
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
            <div>
                <Paper className={classes.paddingPaper}>
                    <Typography variant="h6" component="h6"> List Alamat yang Digunakan Franchise </Typography>
                    <Typography component="p"> Penambahan Alamat Hanya Dapat Dilakukan Dihalaman Ini </Typography>
                    <Typography component="p"> Alamat Yang Akan Dan Dapat Digunakan Untuk Pengiriman / Pengantaran Adalah Yang Berstatus Default  </Typography>
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
