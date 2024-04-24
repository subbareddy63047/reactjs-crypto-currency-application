// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {list} = props
  console.log(list)
  return (
    <div className="inner-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
        alt="cryptocurrency"
        className="money-img"
      />
      <div className="money-list-container">
        <div className="header-container">
          <p className="first-para">Coin Type</p>
          <div className="last-container">
            <p>USD</p>
            <p>EURO</p>
          </div>
        </div>
        <ul className="money-main-list">
          {list.map(each => (
            <CryptocurrencyItem each={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CryptocurrenciesList
