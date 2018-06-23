import React, {Component} from 'react'
import data from './../data/Data.js'

class ConvertMoney extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currenciesMoney: data.currenciesMoney,
      currentVn: data.currenciesMoney[0],
      currentUs: data.currenciesMoney[1],
      currentVnValue: data.currenciesMoney[0].sellRate,
      currentUsValue: data.currenciesMoney[1].sellRate
  }
}
  onChangeHandler(event, current) {
    const current = this.target.value
    if(current === 'Vn') {
      const newValueVn = event.target.value
      this.setState({
        currentVnValue: newValueVn,
        currentUsValue: newValueVn / currentVn.sellRate
      })
    } else if(current === 'Us') {
      const newValueUs = event.target.value
      this.setState({
        currentVnValue: newValueUs * currentVn.sellRate,
        currentUsValue: newValueUs
      })
    }
  }
  render() {
    const {currenciesMoney, currentVn, currentUs, currentVnValue, currentUsValue} = this.state
    return (
      <div className="Convert-Money">
        <h1>Currency Converter</h1>
        <input type="number" value={this.state.currentVnValue}/>
        <input type="number" value={this.state.currentUsValue}/>
        <p>
          Exchange Rate {`${currentVn.sign} ${currentVn.sellRate} ${currentVn.code}`} = {`${currentUs.sign} ${currentUs.sellRate} ${currentUs.code}`}
        </p>
        <div className="row">
          <div className="col-sm-6 currency-from-input">
            <h3 className={`currency-flag ${currentVn.code}`}>{currentVn.name}</h3>
            <div className="input-group">
              <span className="input-group-addon">{currentVn.sign}</span>
              <input type="number" value={currentVnValue} className="form-control" aria-describedby="basic-addon2" step="1" pattern="\d\.\d{2}" onChange={(e) => {
                    this.onChangeHandler(e, 'Vn');
              }} />
               <span className="input-group-addon" id="basic-addon2">{currentVn.code}</span>
            </div>
          </div>
          <div className="col-sm-6 currency-to-input">
            <h3 className={`currency-flag ${currentUs.code}`}>{currentUs.name}</h3>
            <div className="input-group">
              <span className="input-group-addon">{currentUs.sign}</span>
              <input type="number" value={currentUsValue} className="form-control" aria-describedby="basic-addon3" step="1" pattern="\d\.\d{2}"  onChange={(e) => {
                this.onChangeHandler(e, 'Us');
              }}/>
              <span className="input-group-addon" id="basic-addon3">{currentUs.code}</span>
            </div>
          </div>
      </div>
      </div>

      )
  }
}

export default ConvertMoney
