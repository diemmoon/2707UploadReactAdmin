import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: "",

     
    }
  }
  hienThiButton = () => {
    if (this.props.hienThiForm === true) {
      return (<div className="btn btn-outline-secondary " onClick={this.props.ketNoi} style={{ marginLeft: '80px' }}>Đóng lại</div>)

    }
    else {
      return (<div className="btn  btn-outline-info" onClick={this.props.ketNoi} style={{ marginLeft: '80px' }}>Thêm mới </div>)
    }
  }
  isChange = (e) => {
    this.setState({ x: e.target.value })
    this.props.timkiem(this.state.x)
  }
  

  isShowEdit = () => {
    if (this.props.editStatus === true) {
      return (
        <EditUser changeEditStatus={()=>{ this.props.changeEditStatus()}} 
        user={ this.props.user}
        getInforEdit ={  (info)=>this.props.getInforEdit(info)}
        />
      )
    }
  }


  render() {

    return (
      <div className="col-12">
        {this.isShowEdit()}
        <br /><br />
        <div className="form-group">
          <div className="btn-group">
            <input onChange={(e) => { this.isChange(e) }} type="text" className="form-control" placeholder="Nhập từ khóa tìm kiếm" style={{ width: '820px' }} />
            <div className="btn btn-info" onClick={(dl) => { this.props.timkiem(this.state.x) }}>Tìm</div>
            {this.hienThiButton()}
          </div>

        </div>



        <br />

      </div>


    )
  }
}
