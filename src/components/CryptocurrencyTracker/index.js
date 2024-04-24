// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, list: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    try {
      const response = await fetch(
        'https://apis.ccbp.in/crypto-currency-converter',
      )
      const data = await response.json()
      console.log(data)
      const updatedList = data.map(each => ({
        currencyName: each.currency_name,
        usdValue: each.usd_value,
        euroValue: each.euro_value,
        id: each.id,
        currencyLogo: each.currency_logo,
      }))
      this.setState({isLoading: false, list: updatedList})
    } catch (error) {
      console.log(error.message)
    }
  }

  showLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="Rings" color="#fff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading, list} = this.state
    return (
      <div className="main-container">
        {isLoading ? this.showLoader() : <CryptocurrenciesList list={list} />}
      </div>
    )
  }
}
export default CryptocurrencyTracker
