import React , { Component } from 'react'

class Caculation extends Component {
  // state = {
  //   vnd: 0,
  //   usd: 0
  // }
  onChangeCurrency = (currency, event) => {
    const value = event.target.value
    if(value) {
      this.convertMonney(currency, value)
    } else this.setState({
      vnd: '',
      usd: ''
    })
  }
  convertMonney = (currency, number) => {
    let vnd = this.vnd.value
    let usd = this.usd.value
    if(vnd) {
      this.usd.value = vnd / 22000
    }
    else {
      this.vnd.value = usd * 22000
    }
    // const currencyRevert = (currency === 'vnd') ? 'usd' : 'vnd'
    // const result = (currency=== 'vnd') ? number / 22000 : number * 22000
    // this.setState({
    //   [currency]: number,
    //   [currencyRevert]: result
    // })
  }
  render() {
    return (
      <div>
        <div>
          <input
            type='number'
            defaultValue=''
            // value={this.state.vnd}
            placeholder='VND'
            // onChange={(event) => this.onChangeCurrency('vnd', event)}
            ref={(event) => this.vnd = event}
          />
          <span>VND</span>
        </div>
        <button type='button' onClick={this.convertMonney}>Convert</button>
        <div>
          <input
            type='number'
            defaultValue=''
            // value={this.state.usd}
            placeholder='USD'
            ref={(event) => this.usd = event}
            // onChange={(event) => this.onChangeCurrency('usd', event)}
          />
          <span>USD</span>
        </div>
      </div>
    )
  }
}

export default Caculation
