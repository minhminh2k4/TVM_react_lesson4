import React, { Component } from 'react'
import TvmProductList from './components/TvmProductList';
import TvmProductadd from './components/TvmProductadd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Trần Văn Minh', id: 2210900112, status:1 },
        { title: 'Cabbage', id: 1, status:1 },
        { title: 'Garlic', id: 2 , status:0},
        { title: 'Apple', id: 3, status:0},
        { title: 'Samsung', id: 4, status:1},
      ]
    }
  }
  tvmHandleSubmit = (param)=>{
    console.log("App:",param);
    //thêm vào mảng dữ liệu product
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Trần Văn Minh - Render Data - Event Form</h1>
        <hr/>
        <TvmProductList renderProducts={this.state.products}/>
        <hr/>
        <TvmProductadd onSummit ={this.tvmHandleSubmit}/>
      </div>
    )
  }
}
