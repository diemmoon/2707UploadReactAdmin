import React, { Component } from 'react'
import TableDataRow from './TableDataRow'

export default class TableData extends Component {
  mappingDataUser =() =>(
    
    this.props.dataUserProps.map((value, key)=>(
      
        <TableDataRow editUser={(user)=> this.props.editUser(value)} 
          Permission={value.Permission} tel={value.tel} name={value.name} 
          id={value.id} STT={key}
          changeEditStatus={  ()=>{this.props.changeEditStatus()}}
          getInforEdit={(info)=>{this.props.getInforEdit(info)}}
          deleteButton ={(id)=> this.props.deleteButton(id)  }
          
          />
    ))
    
  )
    render() {
     
        return (
            <div className="col">
            <table className="table table-striped table-hover ">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Điện thoại</th>
                  <th>Quyền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {this.mappingDataUser()}
              </tbody>
            </table>
          </div>
          
        )
    }
}
