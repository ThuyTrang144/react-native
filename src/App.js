import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import Intro from './components/Intro.js'
import Number from './components/Number.js'
import Selector from './components/Selector.js'
import TextInput from './components/TextInput.js'
import ListArray from './components/ListArray.js'
import LifeCycle from './components/LifeCycle.js'
import Caculation from './components/Caculation.js'
import Product from './components/Product.js'
import products from './data/product.js'
// import listProduct from './data/product.js';
import Button from './components/Button.js'
import Form from './components/Form.js'

  // import ConvertMoney from './components/ConvertMoney.js'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('constructor');
    this.state = {
      products: products,
      isForm: false, //kiem tra co dang o form k
      search: ''
    }
  }
  renderElement = (yourName) => {
    return <p>{`Welcom to the World ${yourName}`}</p>
  }
  gotoForm = () => {
    this.setState({isForm: true})
  }
  gotoBack = () => {
    this.setState({isForm: false})
  }
  filterProduct = (name) => {
    const number = parseInt(name.split(' ')[1])
    console.log('number ', number);
    let resultFilter = []
    const preProducts = products
    if(!number) {
      resultFilter = preProducts
    } else {
      if(name.includes('=')) {
        resultFilter = products.filter(p => p.price <= number)
      } else {
        resultFilter = products.filter(p => p.price > number)
      }
    }
    this.setState({
      products: resultFilter
    })
  }
  renderButton = () => {
    const buttons = [{
      name: 'all',
      onClick: (name) => this.filterProduct(name)
    }, {
      name: '<= 100000',
      onClick: (name) => this.filterProduct(name)
    }, {
      name: '> 100000',
      onClick: (name) => this.filterProduct(name)
    }, {
      name: '+',
      onClick: () => this.gotoForm()
    }]

    return (
      buttons.map((btn, index) => (
        <Button
          key={index}
          name={btn.name}
          onClick={btn.onClick}
        />
      ))
    )
  }
  filterResultProduct = (event) => {
    const searchList = this.state.products
    searchList = searchList.filter(p => {
      return p.toLowerCase().search(event.target.value.toLowerCase()) !== -1
    })
    this.setState({products: searchList})
  }
  render() {
    let filterResultProduct = products.filter(
      (p) => {
        return p.name.toLowerCase().indexOf(this.state.toLowerCase().search) !== -1;
      }
    )
    return (
      <div className="App">
        <Header header={this.props.name}/>
        {/*<LifeCycle />
        <Intro intro={this.props.author}/>
        <Selector />
        <Number currentNumber={5}/>
        <form>
          <TextInput />
        </form>
        <ListArray />
        <Caculation />*/}
        {
          this.state.isForm ?
          <Form gotoBack={this.gotoBack}/> :
          <div>
            {this.renderButton()}
            <input type='text'
            // value={this.state.search}
            onChange={(event) => this.updateSearch}
            />
            <Product products = {this.state.products} />
          </div>
        }
      </div>
    );
  }
}

export default App
