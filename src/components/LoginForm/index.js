import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  BackgroundContainer,
  LoginContainer,
  CompanyLogo,
  FormContainer,
  LabelandInputContainer,
  LabelItem,
  InputItem,
  InputCheckBox,
  CheckBoxAndPassContainer,
  ShowPassPara,
  LoginButton,
  ErrorPara,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const LoginForm = props => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isCheckBoxClicked, setIsCheckBoxClicked] = useState(false)
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const inputChanged = event => setUserName(event.target.value)
  const passwordChanged = event => setPassword(event.target.value)
  const changeClickBox = () => setIsCheckBoxClicked(!isCheckBoxClicked)

  const passwordInputType = isCheckBoxClicked ? 'text' : 'password'

  const onSubmitSuccess = jwtToken => {
    const {history} = props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  const onSubmitFailure = errorMsg1 => {
    console.log(errorMsg1)
    setShowSubmitError(true)
    setErrorMsg(`* ${errorMsg1}`)
  }

  const loginFormSubmitted = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const logoCompany = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
          return <Redirect to="/" />
        }

        return (
          <BackgroundContainer isDarkTheme={isDarkTheme}>
            <LoginContainer isDarkTheme={isDarkTheme}>
              <CompanyLogo src={logoCompany} alt="company logo" />
              <FormContainer onSubmit={loginFormSubmitted}>
                <LabelandInputContainer>
                  <LabelItem isDarkTheme={isDarkTheme} htmlFor="username">
                    USERNAME
                  </LabelItem>
                  <InputItem
                    type="text"
                    value={username}
                    onChange={inputChanged}
                    id="username"
                    placeholder="User Name"
                    autocomplete="username"
                  />
                </LabelandInputContainer>
                <LabelandInputContainer>
                  <LabelItem isDarkTheme={isDarkTheme} htmlFor="password">
                    PASSWORD
                  </LabelItem>
                  <InputItem
                    type={passwordInputType}
                    value={password}
                    onChange={passwordChanged}
                    isDarkTheme={isDarkTheme}
                    id="password"
                    placeholder="Password"
                    autocomplete="off"
                  />
                </LabelandInputContainer>
                <CheckBoxAndPassContainer>
                  <InputCheckBox
                    type="checkbox"
                    checked={isCheckBoxClicked}
                    onChange={changeClickBox}
                    id="checkbox"
                    isDarkTheme
                  />
                  <ShowPassPara htmlFor="checkbox" isDarkTheme={isDarkTheme}>
                    Show Password
                  </ShowPassPara>
                </CheckBoxAndPassContainer>
                <LoginButton type="submit">Login</LoginButton>
              </FormContainer>
              <ErrorPara>{showSubmitError ? errorMsg : ''}</ErrorPara>
            </LoginContainer>
          </BackgroundContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default LoginForm
