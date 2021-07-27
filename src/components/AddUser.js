import React, { Component } from 'react'

export default class AddUser extends Component {
    // ========================== 2 nut khac component=====================

    constructor(props) {
        super(props);
        this.state = {
           
            id:"",
            name:"",
            tel:"",
            Permission:"",
            
           
            
            

        }
    }
    isChange = (e) => {
        const ten = e.target.name;
        const giatri = e.target.value;
        
        this.setState({[ten]:giatri});

       
        

    }

    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="card border-primary mb-3 mt-2" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Thêm người dùng</div>
                    <div className="card-body text-primary">
                        <form>
                        <div className="form-group">
                            <input name="name" onChange={(e) => { this.isChange(e) }} type="text" className="form-control" placeholder="Tên" />
                        </div>
                        <div className="form-group">
                            <input name="tel"  onChange={(e) => { this.isChange(e) }} type="text" className="form-control" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                            <select name="Permission" onChange={(e) => { this.isChange(e) }} className="custom-select" required>
                                <option value>Chọn quyền</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Morderator</option>
                                <option value={3}>Normal</option>
                            </select>
                            <div className="invalid-feedback">Example invalid custom select feedback</div>
                        </div>
                        <div className="form-group">
                            <input type="reset" value="Thêm" onClick={(name,tel,Permission)=>this.props.add(this.state.name, this.state.tel, this.state.Permission)} className="btn btn-block btn-primary"/>
                        </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
    render() {
        

        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>
        )

    }





    // ========================== 2 nut chung component=====================


    //     constructor(props){
    //         super(props);
    //         this.state={
    //             trangThai:false
    //         }
    //     }
    //     thayDoiTrangThai=()=>{
    //         this.setState({
    //             trangThai: ! this.state.trangThai
    //         });
    //     }

    //     hienThiNut = () =>{
    //         if(this.state.trangThai=== true){
    //             return   <div className="btn btn-block btn-outline-secondary" onClick={ () => this.thayDoiTrangThai()}>Đóng lại</div>
    //         }
    //         else{
    //             return   <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()} >Thêm mới </div>
    //         }
    //     }

    //  hienThiForm = () =>{
    //         if(this.state.trangThai=== true){
    //             return   (
    //                 <div className="card border-primary mb-3 mt-2" style={{ maxWidth: '18rem' }}>
    //                         <div className="card-header">Thêm người dùng</div>
    //                         <div className="card-body text-primary">
    //                             <div className="form-group">
    //                                 <input type="text" className="form-control" placeholder="Tên" />
    //                             </div>
    //                             <div className="form-group">
    //                                 <input type="text" className="form-control" placeholder="Điện thoại" />
    //                             </div>
    //                             <div className="form-group">
    //                                 <select className="custom-select" required>
    //                                     <option value>Chọn quyền</option>
    //                                     <option value={1}>Admin</option>
    //                                     <option value={2}>Morderator</option>
    //                                     <option value={3}>Normal</option>
    //                                 </select>
    //                                 <div className="invalid-feedback">Example invalid custom select feedback</div>
    //                             </div>
    //                             <div className="form-group">
    //                                 <div className="btn btn-block btn-primary">Thêm mới</div>
    //                             </div>
    //                         </div>
    //                     </div>
    //             )
    //         }

    //     }

    //     render() {
    //         return (




    //                 <div className="col-3">
    //                     {this.hienThiNut()}
    //                     {this.hienThiForm()}


    //                 </div>


    //         )
    //     }
}
