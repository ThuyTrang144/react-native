import React, {Component} from 'react'

class ListArray extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const arr = [{
      day: 'Sunday',
      month: 'Jun',
    }, {
      day: 'Monday',
      month: 'July'
    }, {
      day: 'Tue',
      month: 'Sept'
    }
  ]
  const listArr = arr.map((d, i) =>
     <p key={ i+1 + d.day + d.month }>{ i+1 + ' ' + d.day + ' ' + d.month }</p>)
    return (
      <div className="ListArray">
        {listArr}
      </div>
    )
  }
}
export default ListArray
