import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import {IoMdSearch} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer0,
  HomeContainer,
  HomeVideosContainer,
  BannerContainer,
  BannerContainerInside,
  CompanyLogoInBanner,
  BannerPara,
  BannerButton,
  CloseButton,
  SearchContainer,
  InputSearch,
  SearchIcon,
  LoaderContainer,
  FailedContainer,
  FailedImage,
  FailedHeading,
  FailedPara,
  FailedButton,
  NoResultsContainer,
  NoResultsHeading,
  NoResultsImage,
  NoResultsPara,
  NoResultsButton,
} from './styledComponents'
import Header from '../Header'
import Navigation from '../Navigation'
import HomeVideoCard from '../HomeVideoCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Home = () => {
  const [apiStatus, setApiStatus] = useState('')
  const [videoData, setVideoData] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [isBannerClosed, setIsBannerClose] = useState(false)
  const [updatedVideoData, setUpdatedVideoData] = useState(videoData)
  const [videoDataLength, setVideoDataLength] = useState(null)

  const companyLogoUrl =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const searchIconClicked = () => {
    const filteredData = updatedVideoData.filter(
      video => video.title.toLowerCase().includes(searchInput.toLowerCase()), // Case-insensitive search
    )
    setVideoData(filteredData)
    setVideoDataLength(filteredData.length)
  }

  const closeBanner = () => {
    setIsBannerClose(true)
  }

  const getHomeVideosSuccess = fetchedData => {
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
    setVideoDataLength(updatedData.length)
    setUpdatedVideoData(updatedData)
  }

  const getHomeVideos = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const homeApiUrl = 'https://apis.ccbp.in/videos/all?search='
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(homeApiUrl, options)
      if (response.ok) {
        const fetchedData = await response.json()
        setApiStatus(apiStatusConstants.success)
        getHomeVideosSuccess(fetchedData)
      } else {
        setApiStatus(apiStatusConstants.failure)
        // Handle potential errors here (e.g., display error message)
      }
    } catch (error) {
      console.error('Error fetching home videos:', error)
      setApiStatus(apiStatusConstants.failure)
      // Handle network or other errors here (e.g., display error message)
    }
  }

  const bannerImg = () => (
    <BannerContainer isBannerClosed={isBannerClosed} data-testid="banner">
      <BannerContainerInside>
        <CompanyLogoInBanner src={companyLogoUrl} alt="nxt watch logo" />
        <CloseButton onClick={closeBanner} data-testid="close">
          <AiOutlineClose size="20" />
        </CloseButton>
      </BannerContainerInside>
      <BannerPara>Buy Nxt Watch Premium prepaid plans with UPI</BannerPara>
      <BannerButton>GET IT NOW</BannerButton>
    </BannerContainer>
  )

  const retryButtonClicked = () => getHomeVideos()

  const homeVideoCards = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <HomeVideosContainer isDarkTheme={isDarkTheme}>
            {videoData.map(eachVideo => (
              <HomeVideoCard eachVideo={eachVideo} key={eachVideo.id} />
            ))}
          </HomeVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  const noResult = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <NoResultsContainer>
            <NoResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultsHeading isDarkTheme={isDarkTheme}>
              No Search results found
            </NoResultsHeading>
            <NoResultsPara isDarkTheme={isDarkTheme}>
              Try different key words or remove search filter
            </NoResultsPara>
            <NoResultsButton
              isDarkTheme={isDarkTheme}
              onClick={retryButtonClicked}
            >
              Retry
            </NoResultsButton>
          </NoResultsContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  const themeContextHome = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <HomeContainer0 isDarkTheme={isDarkTheme} data-tesid="home">
            <Header />
            <Navigation />
            <HomeContainer>
              {bannerImg()}
              <SearchContainer isDarkTheme={isDarkTheme}>
                <InputSearch
                  type="search"
                  value={searchInput}
                  onChange={onChangeSearchInput}
                  placeholder="Search"
                  isDarkTheme={isDarkTheme}
                  id="search"
                />
                <SearchIcon
                  isDarkTheme={isDarkTheme}
                  data-testid="searchButton"
                >
                  <IoMdSearch size="27" onClick={searchIconClicked} />
                </SearchIcon>
              </SearchContainer>
              {videoDataLength !== 0 ? homeVideoCards() : noResult()}
            </HomeContainer>
          </HomeContainer0>
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
          <HomeContainer0 isDarkTheme={isDarkTheme} data-tesid="home">
            <Header />
            <Navigation />
            <HomeContainer>
              {bannerImg()}
              <SearchContainer isDarkTheme={isDarkTheme}>
                <InputSearch
                  type="text"
                  value={searchInput}
                  onChange={onChangeSearchInput}
                  placeholder="Search"
                  isDarkTheme={isDarkTheme}
                  id="search"
                />
                <SearchIcon isDarkTheme={isDarkTheme}>
                  <IoMdSearch size="27" onClick={searchIconClicked} />
                </SearchIcon>
              </SearchContainer>
              <LoaderContainer data-testid="loader" isDarkTheme={isDarkTheme}>
                <Loader
                  type="ThreeDots"
                  color={loaderColor}
                  height="50"
                  width="50"
                />
              </LoaderContainer>
            </HomeContainer>
          </HomeContainer0>
        )
      }}
    </ThemeContext.Consumer>
  )

  const failedHome = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failedImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <HomeContainer0 isDarkTheme={isDarkTheme} data-tesid="home">
            <Header />
            <Navigation />
            <HomeContainer>
              {bannerImg()}
              <SearchContainer isDarkTheme={isDarkTheme}>
                <InputSearch
                  type="text"
                  value={searchInput}
                  onChange={onChangeSearchInput}
                  placeholder="Search"
                  isDarkTheme={isDarkTheme}
                  id="search"
                />
                <SearchIcon isDarkTheme={isDarkTheme}>
                  <IoMdSearch size="27" onClick={searchIconClicked} />
                </SearchIcon>
              </SearchContainer>
              <FailedContainer isDarkTheme={isDarkTheme}>
                <FailedImage src={failedImgUrl} alt="failure view" />
                <FailedHeading isDarkTheme={isDarkTheme}>
                  Oops! Something Went Wrong
                </FailedHeading>
                <FailedPara isDarkTheme={isDarkTheme}>
                  We are having trouble to complete your request <br /> Please
                  try again.
                </FailedPara>
                <FailedButton isDarkTheme={isDarkTheme}>Retry</FailedButton>
              </FailedContainer>
            </HomeContainer>
          </HomeContainer0>
        )
      }}
    </ThemeContext.Consumer>
  )

  const finalContainer = () => {
    switch (apiStatus) {
      case 'SUCCESS':
        return themeContextHome()
      case 'FAILURE':
        return failedHome()
      case 'IN_PROGRESS':
        return loaderFunction()
      default:
        return null
    }
  }

  useEffect(() => {
    getHomeVideos()
  }, [])

  return finalContainer()
}

export default Home
