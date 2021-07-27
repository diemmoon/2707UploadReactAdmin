import Header from "./components/Header";
import Search from "./components/Search";
import TableData from "./components/TableData";
import AddUser from "./components/AddUser";
import React, { Component } from 'react'
import DataUser from './data.json'
const { v4: uuidv4 } = require('uuid');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser,
      textSearch: '',
      editStatus: false,
      userEdit:{}
    }
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }
  timkiem = (dl) => {
    this.setState({ textSearch: dl })

  }



  addNewUser = (name, tel, Permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;


    var items = this.state.data;
    items.push(item);
    this.setState({ data: items })
    // console.log(items)
  }



  editUser = (user) => {

    this.setState({
      userEdit: user
    })


  }
  changeEditStatus = () => {
    this.setState({
      editStatus: !this.state.editStatus
    })
  }
 
  getInforEdit= (info)=>{
    console.log(info.Permission+"info")
    this.state.data.forEach((value)=>{
      if(value.id === info.id){
        value.Permission= info.Permission
        value.name= info.name
        value.tel= info.tel
        
      }
    })
  } 
  deleteButton=(id)=>{
    var tempData= this.state.data.filter(item=> item.id !== id )
    this.setState({
      data: tempData
    })
  }
  
  render() {
    var kq = [];
    this.state.data.forEach((item) => {

      if (item.name.indexOf(this.state.textSearch) !== -1)
        kq.push(item)
    })

    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search timkiem={(dl) => { this.timkiem(dl) }}
                ketNoi={this.doiTrangThai}
                hienThiForm={this.state.hienThiForm}

                editStatus={this.state.editStatus}
                changeEditStatus={() => { this.changeEditStatus() }}
                user={this.state.userEdit}
               
                getInforEdit= {(info)=>{this.getInforEdit(info)}}
              />
              <TableData editUser={(user) => { this.editUser(user) }} dataUserProps={kq}
                changeEditStatus={() => { this.changeEditStatus() }}
                getInforEdit= {(info)=>{this.getInforEdit(info)}}
                deleteButton ={(id)=> this.deleteButton(id)  }
              />
              <AddUser add={(name, tel, Permission) => { this.addNewUser(name, tel, Permission) }} hienThiForm={this.state.hienThiForm} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}



