// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {each} = props

  const {currencyName, currencyLogo, usdValue, euroValue} = each
  return (
    <li className="header-container" id="each-list-item">
      <div className=" logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="occurency-name">{currencyName}</p>
      </div>
      <div className="last-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
