import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer0,
  LoaderContainer,
  VideoPlayerContainer,
  ViewsLikesContainer,
  ViewsPublishedContainer,
  VideoTitle,
  ViewsPara,
  Button,
  PublishedAt,
  LikesDisContainer,
  LikeButtonContainer,
  DisLikeButtonContainer,
  SavedVideosButtonContainer,
  LikeDisPara,
  SavePara,
  HorizontalLine,
  ChannelImage,
  ChannelDetailsContainer,
  ChannelNameandDescription,
  ChannelNamePara,
  ChannelSubscribersPara,
  VideoDescriptionPara,
  FailedContainer,
  FailedImage,
  FailedHeading,
  FailedPara,
  FailedButton,
  LikeIcon,
  DislikeIcon,
  SaveIcon,
} from './styledComponents'

import Header from '../Header'
import Navigation from '../Navigation'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const VideoItemDetails = props => {
  let a = null
  const {match} = props
  const {params} = match
  const {id} = params
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [videoData, setVideoData] = useState([])
  const [isLikeClick, setIsLikeClick] = useState(false)
  const [isDislikeClick, setIsDisLikelick] = useState(false)
  const [isSaveClick, setIsSaveClick] = useState(false)

  // const saveVideo = isSaveClick ? addVideo : removeVideo

  const likeIconClick = () => {
    setIsLikeClick(!isLikeClick)
    setIsDisLikelick(false)
  }

  const dislikeIconClick = () => {
    setIsDisLikelick(!isDislikeClick)
    setIsLikeClick(false)
  }

  const getHomeVideoDetailsSuccess = fetchedData => {
    const videoDetails = fetchedData.video_details

    const updatedVideoData = {
      id: videoDetails.id,
      title: videoDetails.title,
      videoUrl: videoDetails.video_url,
      thumbnailUrl: videoDetails.thumbnail_url,
      channelName: videoDetails.channel.name,
      channelProfileImg: videoDetails.channel.profile_image_url,
      subscriberCount: videoDetails.channel.subscriber_count,
      viewCount: videoDetails.view_count,
      publishedAt: videoDetails.published_at,
      description: videoDetails.description,
    }
    setVideoData(updatedVideoData)
  }

  const fetchVideoData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const homeApiUrl = `https://apis.ccbp.in/videos/${id}`
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
        getHomeVideoDetailsSuccess(fetchedData)
      } else {
        // Handle non-200 status codes here
        setApiStatus(apiStatusConstants.failure)
        console.log('Error fetching video details:', response.statusText)
      }
    } catch (error) {
      // Handle network errors and other exceptions here
      setApiStatus(apiStatusConstants.failure)
      console.log('Error fetching video details:', error)
    }
  }

  const retryButton = () => fetchVideoData()

  const videosSuccess = () => {
    if (videoData.publishedAt !== undefined) {
      a = formatDistanceToNow(new Date(videoData.publishedAt))
      a = a.split(' ')
      a = a.slice(1).join(' ')
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, addVideo} = value
          const color = isDarkTheme ? '#64748b' : '#0f0f0f'
          const likeColor = isLikeClick && !isDislikeClick ? '#2563eb' : color
          const dislikeColor =
            !isLikeClick && isDislikeClick ? '#2563eb' : '#64748b'
          const saveColor = isSaveClick ? '#2563eb' : '#64748b'
          const saveContent = isSaveClick ? 'Saved' : 'Save'

          const saveIconClick = async () => {
            await setIsSaveClick(!isSaveClick)
            addVideo(videoData)
          }

          return (
            <HomeContainer0
              isDarkTheme={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <Navigation />
              <VideoPlayerContainer isDarkTheme={isDarkTheme}>
                <ReactPlayer
                  url={videoData.videoUrl}
                  controls
                  width="100%"
                  height="400px"
                />
                <VideoTitle>{videoData.title}</VideoTitle>
                <ViewsLikesContainer>
                  <ViewsPublishedContainer>
                    <ViewsPara isDarkTheme={isDarkTheme}>
                      {videoData.viewCount} views
                    </ViewsPara>
                    <PublishedAt
                      isDarkTheme={isDarkTheme}
                    >{`${a} ago`}</PublishedAt>
                  </ViewsPublishedContainer>
                  <LikesDisContainer>
                    <LikeButtonContainer>
                      <Button onClick={likeIconClick}>
                        <LikeIcon color={likeColor} />
                        <LikeDisPara
                          isDarkTheme={isDarkTheme}
                          color={likeColor}
                        >
                          Like
                        </LikeDisPara>
                      </Button>
                    </LikeButtonContainer>
                    <DisLikeButtonContainer>
                      <Button onClick={dislikeIconClick}>
                        <DislikeIcon color={dislikeColor} />
                        <LikeDisPara
                          isDarkTheme={isDarkTheme}
                          color={dislikeColor}
                        >
                          Dislike
                        </LikeDisPara>
                      </Button>
                    </DisLikeButtonContainer>
                    <SavedVideosButtonContainer>
                      <Button onClick={saveIconClick}>
                        <SaveIcon color={saveColor} />
                        <SavePara isDarkTheme={isDarkTheme} color={saveColor}>
                          {saveContent}
                        </SavePara>
                      </Button>
                    </SavedVideosButtonContainer>
                  </LikesDisContainer>
                </ViewsLikesContainer>

                <HorizontalLine isDarkTheme={isDarkTheme} />
                <ChannelDetailsContainer>
                  <ChannelImage
                    src={videoData.channelProfileImg}
                    alt="channel logo"
                  />
                  <ChannelNameandDescription>
                    <ChannelNamePara isDarkTheme={isDarkTheme}>
                      {videoData.channelName}
                    </ChannelNamePara>
                    <ChannelSubscribersPara isDarkTheme={isDarkTheme}>
                      {videoData.subscriberCount} subscribers
                    </ChannelSubscribersPara>
                    <VideoDescriptionPara isDarkTheme={isDarkTheme}>
                      {videoData.description}
                    </VideoDescriptionPara>
                  </ChannelNameandDescription>
                </ChannelDetailsContainer>
              </VideoPlayerContainer>
            </HomeContainer0>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  const videosFailure = () => (
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
            <FailedContainer isDarkTheme={isDarkTheme}>
              <FailedImage src={failedImgUrl} alt="failure view" />
              <FailedHeading isDarkTheme={isDarkTheme}>
                Oops! Something Went Wrong
              </FailedHeading>
              <FailedPara isDarkTheme={isDarkTheme}>
                We are having some trouble to complete your request. <br />
                Please try again.
              </FailedPara>
              <FailedButton onClick={retryButton} isDarkTheme={isDarkTheme}>
                Retry
              </FailedButton>
            </FailedContainer>
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
            <VideoPlayerContainer>
              <LoaderContainer data-testid="loader" isDarkTheme={isDarkTheme}>
                <Loader
                  type="ThreeDots"
                  color={loaderColor}
                  height="50"
                  width="50"
                />
              </LoaderContainer>
            </VideoPlayerContainer>
          </HomeContainer0>
        )
      }}
    </ThemeContext.Consumer>
  )

  const finalContainer = () => {
    switch (apiStatus) {
      case 'SUCCESS':
        return videosSuccess()
      case 'FAILURE':
        return videosFailure()
      case 'IN_PROGRESS':
        return loaderFunction()
      default:
        return null
    }
  }

  useEffect(() => {
    fetchVideoData()
  }, [])

  return finalContainer()
}

export default VideoItemDetails
