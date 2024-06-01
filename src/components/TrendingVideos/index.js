import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import Header from '../Header'
import Navigation from '../Navigation'

const TrendingVideos = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  const homeApi = 'https://apis.ccbp.in/videos/all?search='
  return (
    <>
      <Header />
      <Navigation />
    </>
  )
}

export default TrendingVideos
