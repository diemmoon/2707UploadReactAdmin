import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.user.id,
            name:this.props.user.name,
            tel:this.props.user.tel,
            Permission:this.props.user.Permission
        }
    }
    isChange = (e)=>{
        const name= e.target.name;
        const value= e.target.value;
        this.setState({
            [name]:value
        })
    }

    saveEdit = (info)=>{
        this.props.changeEditStatus()
        info.id= this.state.id
        info.name=this.state.name
        info.tel=this.state.tel
        info.Permission=this.state.Permission
        this.props.getInforEdit(info)

    }
    
    render() {

        return (
            <div class="row">
                <div class="col">
                    <div className="card text-white bg-secondary mb-3 mt-2" >
                        <div className="card-header text-center">Sửa thông tin</div>
                        <div className="card-body text-primary">
                            <form>
                                <div className="form-group">
                                    <input onChange={ (e)=>this.isChange(e)} 
                                    name="name" type="text" className="form-control" 
                                    placeholder="Tên" defaultValue={this.props.user.name} />
                                </div>
                                <div className="form-group">
                                    <input onChange={ (e)=>this.isChange(e)}
                                     name="tel" type="text" className="form-control"
                                      placeholder="Điện thoại" defaultValue={this.props.user.tel} />
                                </div>
                                <div className="form-group">
                                    <select name="Permission"
                                    onChange={ (e)=>this.isChange(e)}
                                     defaultValue={this.props.user.Permission} 
                                     className="custom-select" required>
                                        <option value>Chọn quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Morderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                                </div>
                                <div className="form-group">
                                    <input type="button" value="Lưu"
                                        onClick={(info) => { this.saveEdit(info) }}
                                        className="btn  btn-warning" style={{ width: '300px', marginLeft: '438px' }} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
