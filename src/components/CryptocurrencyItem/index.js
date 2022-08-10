import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails

  return (
    <li className="list-container">
      <div className="logo-name">
        <img src={currencyLogo} alt={currencyName} className="currencyLogo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="values">
        <p className="name">{usdValue}</p>
        <p className="name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
