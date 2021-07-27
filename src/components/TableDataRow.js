import React, { Component } from 'react'

export default class TableDataRow extends Component {
  // getInforEdit = (info) => {
  //   this.props.getInforEdit(info)
  //   if (this.props.Permission === 1 || info.Permission === 1) {
  //     return "Admin"
  //   }
  //   else if (this.props.Permission === 2 || info.Permission === 2) {
  //     return "Moderator"

  //   }
  //   else {
  //     return "Normal"
  //   }

  // }




  showPermission = () => {

    if (this.props.Permission == 1) {
      return "Admin"
    }
    else if (this.props.Permission == 2) {
      return "Moderator"

    }
    else if  (this.props.Permission ==3) {
      return "Normal"
    }

  }
  editClick = (user) => {
    this.props.changeEditStatus()
    this.props.editUser(user)


  }

  render() {


    return (
      <tr>
        <td >{this.props.STT + 1}</td>
        <td>{this.props.name}</td>
        <td>{this.props.tel}</td>
        <td>{this.showPermission()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning sua" onClick={(user) => { this.editClick(user) }}  >
              <i className="fa fa-edit    ">Sửa</i>
            </div>
            <div className="btn btn-danger xoa" 
              onClick={(id)=> this.props.deleteButton(this.props.id)}
            >
              <i className="fa fa-delete   ">Xóa</i>
            </div>
          </div>
        </td>
      </tr>
    )
  }
}
