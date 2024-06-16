import {
  NotFoundContainer0,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Navigation from '../Navigation'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notfoundimg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundContainer0 isDarkTheme={isDarkTheme}>
          <Header />
          <Navigation />
          <NotFoundContainer isDarkTheme={isDarkTheme}>
            <NotFoundImage src={notfoundimg} alt="not found" />
            <NotFoundHeading isDarkTheme={isDarkTheme}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundPara isDarkTheme={isDarkTheme}>
              We are sorry, the page you request could not be found
            </NotFoundPara>
          </NotFoundContainer>
        </NotFoundContainer0>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
