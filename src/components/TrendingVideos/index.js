import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingContainer0,
  TrendingContainer,
  TrendingVideosContainer,
  TrendingIconContainer,
  TrendingHeading,
  LoaderContainer,
  FailedContainer,
  FailedImage,
  FailedHeading,
  FailedPara,
  FailedButton,
} from './styledComponents'
import Header from '../Header'
import Navigation from '../Navigation'
import TrendingVideoCard from '../TrendingVideoCard'

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

  const getTrendingVideosSuccess = fetchedData => {
    const updatedData = fetchedData.videos.map(eachVideoDetails => ({
      id: eachVideoDetails.id,
      title: eachVideoDetails.title,
      thumbnailUrl: eachVideoDetails.thumbnail_url,
      channelName: eachVideoDetails.channel.name,
      channelProfileUrl: eachVideoDetails.channel.profile_image_url,
      viewCount: eachVideoDetails.view_count,
      publishedAt: eachVideoDetails.published_at,
    }))
    setVideoData(updatedData)
  }

  const getTrendingVideos = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const trendingApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(trendingApiUrl, options)
      if (response.ok) {
        const fetchedData = await response.json()
        setApiStatus(apiStatusConstants.success)
        getTrendingVideosSuccess(fetchedData)
      } else {
        setApiStatus(apiStatusConstants.failure)
        // Handle potential errors here (e.g., display error message)
      }
    } catch (error) {
      console.error('Error fetching trending videos:', error)
      setApiStatus(apiStatusConstants.failure)
      // Handle network or other errors here (e.g., display error message)
    }
  }

  const themeContextTrend = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <TrendingContainer0 isDarkTheme={isDarkTheme} data-tesid="trending">
            <Header />
            <Navigation />
            <TrendingContainer>
              <TrendingIconContainer isDarkTheme={isDarkTheme}>
                <HiFire size="30" color="red" />
                <TrendingHeading isDarkTheme={isDarkTheme}>
                  Trending
                </TrendingHeading>
              </TrendingIconContainer>
              <TrendingVideosContainer isDarkTheme={isDarkTheme}>
                {videoData.map(eachVideo => (
                  <TrendingVideoCard eachVideo={eachVideo} key={eachVideo.id} />
                ))}
              </TrendingVideosContainer>
            </TrendingContainer>
          </TrendingContainer0>
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
          <TrendingContainer0 isDarkTheme={isDarkTheme} data-tesid="trend">
            <Header />
            <Navigation />
            <TrendingContainer>
              <LoaderContainer data-testid="loader" isDarkTheme={isDarkTheme}>
                <Loader
                  type="ThreeDots"
                  color={loaderColor}
                  height="50"
                  width="50"
                />
              </LoaderContainer>
            </TrendingContainer>
          </TrendingContainer0>
        )
      }}
    </ThemeContext.Consumer>
  )

  const retryButtonClicked = () => themeContextTrend()

  const failedTrend = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failedImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <TrendingContainer0 isDarkTheme={isDarkTheme} data-tesid="trend">
            <Header />
            <Navigation />
            <TrendingContainer>
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
            </TrendingContainer>
          </TrendingContainer0>
        )
      }}
    </ThemeContext.Consumer>
  )

  const finalContainer = () => {
    switch (apiStatus) {
      case 'SUCCESS':
        return themeContextTrend()
      case 'FAILURE':
        return failedTrend()
      case 'IN_PROGRESS':
        return loaderFunction()
      default:
        return null
    }
  }

  useEffect(() => {
    getTrendingVideos()
  }, [])

  return finalContainer()
}

export default GamingVideos
