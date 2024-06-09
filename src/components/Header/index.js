import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiLogOut} from 'react-icons/fi'
import {
  HeaderContainer,
  CompanyLogoHeader,
  LogoutButton,
  ProfilePhoto,
  ProfileOtherContainer,
  StyledMoon,
  StyledBrightness,
  LogoutConfirmationContainer,
  LogoutConfirmationPara,
  ButtonsContainer,
  LogoutButtonCancelButton,
  LogoutButtonConfimationButton,
  LogoutIcon,
  Hamburger,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const Header = props => {
  const logoutButtonClicked = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value
        const logoCompany = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const color = isDarkTheme ? '#ffffff' : '#0f0f0f'
        const MoonorBright = isDarkTheme ? (
          <StyledBrightness onClick={changeTheme} data-testid="theme" />
        ) : (
          <StyledMoon onClick={changeTheme} data-testid="theme" />
        )
        return (
          <HeaderContainer isDarkTheme={isDarkTheme}>
            <Link to="/">
              <CompanyLogoHeader src={logoCompany} alt="website logo" />
            </Link>
            <ProfileOtherContainer>
              {MoonorBright}
              <ProfilePhoto
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Hamburger color={color} />
              <Popup
                modal
                trigger={
                  <LogoutButton
                    onClick={logoutButtonClicked}
                    isDarkTheme={isDarkTheme}
                  >
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <>
                    <LogoutConfirmationContainer isDarkTheme={isDarkTheme}>
                      <LogoutConfirmationPara>
                        Are you sure, you want to logout?
                      </LogoutConfirmationPara>
                      <ButtonsContainer>
                        <LogoutButtonCancelButton onClick={() => close()}>
                          Cancel
                        </LogoutButtonCancelButton>
                        <LogoutButtonConfimationButton
                          onClick={() => logoutButtonClicked()}
                        >
                          Confirm
                        </LogoutButtonConfimationButton>
                      </ButtonsContainer>
                    </LogoutConfirmationContainer>
                  </>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutIcon
                    onClick={logoutButtonClicked}
                    isDarkTheme={isDarkTheme}
                  >
                    <FiLogOut size="30" />
                  </LogoutIcon>
                }
              >
                {close => (
                  <>
                    <LogoutConfirmationContainer isDarkTheme={isDarkTheme}>
                      <LogoutConfirmationPara>
                        Are you sure, you want to logout?
                      </LogoutConfirmationPara>
                      <ButtonsContainer>
                        <LogoutButtonCancelButton onClick={() => close()}>
                          Cancel
                        </LogoutButtonCancelButton>
                        <LogoutButtonConfimationButton
                          onClick={() => logoutButtonClicked()}
                        >
                          Confirm
                        </LogoutButtonConfimationButton>
                      </ButtonsContainer>
                    </LogoutConfirmationContainer>
                  </>
                )}
              </Popup>
            </ProfileOtherContainer>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
