import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    const updatedCurrencyList = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({currencyList: updatedCurrencyList, isLoading: false})
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" width={80} height={80} />
    </div>
  )

  renderCryptoCurrencyList = () => {
    const {currencyList} = this.state

    return <CryptocurrenciesList currencyList={currencyList} />
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="Cryptocurrency-container">
        {isLoading ? this.renderLoader() : this.renderCryptoCurrencyList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
