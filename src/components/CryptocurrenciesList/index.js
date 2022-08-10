import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {currencyList} = this.props
    return (
      <div className="currencyTracker">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />
        <div className="container">
          <div className="list-header">
            <p className="descriptions">Coin Type</p>
            <div className="usd-euro">
              <p className="descriptions">USD</p>
              <p className="descriptions">EURO</p>
            </div>
          </div>
          <ul className="tracker-container">
            {currencyList.map(eachItem => (
              <CryptocurrencyItem
                key={eachItem.id}
                currencyDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
