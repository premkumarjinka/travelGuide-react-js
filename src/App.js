import Loader from 'react-loader-spinner'
import {Component} from 'react'
import AppItem from './components/AppItem'

import './App.css'

// Replace your code here
const apiUrl = 'https://apis.ccbp.in/tg/packages'

class App extends Component {
  state = {updateList: [], isLoading: true}

  componentDidMount() {
    this.getUrl()
  }

  getUrl = async () => {
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)

    const updateData = data.packages.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))

    this.setState({updateList: updateData, isLoading: false})
  }

  render() {
    const {updateList, isLoading} = this.state

    return (
      <ul className="container">
        <h1>Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          updateList.map(eachItem => (
            <AppItem details={eachItem} key={eachItem.id} />
          ))
        )}
      </ul>
    )
  }
}
export default App
