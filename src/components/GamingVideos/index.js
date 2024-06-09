import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'

import {
  GameContainer0,
  GameContainer,
  GameVideosContainer,
  GameIconContainer,
  GamingHeading,
  LoaderContainer,
  FailedContainer,
  FailedImage,
  FailedHeading,
  FailedPara,
  FailedButton,
} from './styledComponents'
import Header from '../Header'
import Navigation from '../Navigation'
import GameVideoCard from '../GameVideoCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const GamingVideos = () => {
  const [apiStatus, setApiStatus] = useState('')
  const [videoData, setVideoData] = useState([])

  // const jwtToken1 = Cookies.get('jwt_token')
  // if (jwtToken1 === undefined) {
  //   return <Redirect to="/login" />
  // }

  const getGameVideosSuccess = fetchedData => {
    const updatedData = fetchedData.videos.map(eachVideoDetails => ({
      id: eachVideoDetails.id,
      title: eachVideoDetails.title,
      thumbnailUrl: eachVideoDetails.thumbnail_url,
      viewCount: eachVideoDetails.view_count,
    }))
    setVideoData(updatedData)
  }

  const getGamingVideos = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const gameApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(gameApiUrl, options)
      if (response.ok) {
        const fetchedData = await response.json()
        setApiStatus(apiStatusConstants.success)
        getGameVideosSuccess(fetchedData)
      } else {
        setApiStatus(apiStatusConstants.failure)
        // Handle potential errors here (e.g., display error message)
      }
    } catch (error) {
      console.error('Error fetching game videos:', error)
      setApiStatus(apiStatusConstants.failure)
      // Handle network or other errors here (e.g., display error message)
    }
  }

  const themeContextGame = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GameContainer0 isDarkTheme={isDarkTheme} data-tesid="gaming">
            <Header />
            <Navigation />
            <GameContainer>
              <GameIconContainer isDarkTheme={isDarkTheme}>
                <SiYoutubegaming size="30" color="red" />
                <GamingHeading isDarkTheme={isDarkTheme}>Gaming</GamingHeading>
              </GameIconContainer>
              <GameVideosContainer isDarkTheme={isDarkTheme}>
                {videoData.map(eachVideo => (
                  <GameVideoCard eachVideo={eachVideo} key={eachVideo.id} />
                ))}
              </GameVideosContainer>
            </GameContainer>
          </GameContainer0>
        )
      }}
    </ThemeContext.Consumer>
  )

  const loaderFunction = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const loaderColor = isDarkTheme ? 'white' : 'black'

        return (
          <GameContainer0 isDarkTheme={isDarkTheme} data-tesid="game">
            <Header />
            <Navigation />
            <GameContainer>
              <LoaderContainer data-testid="loader" isDarkTheme={isDarkTheme}>
                <Loader
                  type="ThreeDots"
                  color={loaderColor}
                  height="50"
                  width="50"
                />
              </LoaderContainer>
            </GameContainer>
          </GameContainer0>
        )
      }}
    </ThemeContext.Consumer>
  )

  const retryButtonClicked = () => themeContextGame()

  const failedGame = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failedImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <GameContainer0 isDarkTheme={isDarkTheme} data-tesid="game">
            <Header />
            <Navigation />
            <GameContainer>
              <FailedContainer isDarkTheme={isDarkTheme}>
                <FailedImage src={failedImgUrl} alt="failure view" />
                <FailedHeading isDarkTheme={isDarkTheme}>
                  Oops! Something Went Wrong
                </FailedHeading>
                <FailedPara isDarkTheme={isDarkTheme}>
                  We are having some trouble to complete your request. <br />
                  Please try again.
                </FailedPara>
                <FailedButton
                  onClick={retryButtonClicked}
                  isDarkTheme={isDarkTheme}
                >
                  Retry
                </FailedButton>
              </FailedContainer>
            </GameContainer>
          </GameContainer0>
        )
      }}
    </ThemeContext.Consumer>
  )

  const finalContainer = () => {
    switch (apiStatus) {
      case 'SUCCESS':
        return themeContextGame()
      case 'FAILURE':
        return failedGame()
      case 'IN_PROGRESS':
        return loaderFunction()
      default:
        return null
    }
  }

  useEffect(() => {
    getGamingVideos()
  }, [])

  return finalContainer()
}

export default GamingVideos
