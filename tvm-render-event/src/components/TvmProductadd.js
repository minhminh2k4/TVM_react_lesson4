import React, { Component } from 'react'

export default class TvmProductadd extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:0,
            title:'',
            status:0
        }
    }
    tvmHandleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.valure;
        this.setState({
            [name]:value
        })
    }
    //submit form
    tvmHandleSubmit = (ev)=>{
        ev.preventDefaut();
        this.props.onSubmit(this.state);
    }
    
  render() {
    return (
      <div>
        <h2>Thêm mới sản phẩm</h2>
        <form className='col-md-6'>
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
            ID
        </span>
        <input
             type="text"
             className="form-control"
             id='id'
             name='id'
             value={this.state.id}
             onChange={this.tvmHandleChange}
        />
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">
            Title
        </span>
        <input
             type="text"
             className="form-control"
             name='title'
             value={this.state.title}
             onChange={this.tvmHandleChange}
        />
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
            Status
        </span>
        <input
             type="text"
             className="form-control"
             name='status'
             value={this.state.status}
             onChange={this.tvmHandleChange}
        />
        </div>
        <button className='btn btn-success'onClick={this.tvmHandleSubmit}>Ghi lại</button>
        </form>
      </div>
    )
  }
}

