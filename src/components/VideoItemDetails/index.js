import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
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
  const {match} = props
  const {params} = match
  const {id} = params
  const [apiStatus, setApiStatus] = useState('')
  const [videoData, setVideoData] = useState([])
  const [isLikeClick, setIsLikeClick] = useState(false)
  const [isDislikeClick, setIsDisLikelick] = useState(false)
  const [isSaveClick, setIsSaveClick] = useState(false)

  const likeIconClick = () => setIsLikeClick(!isLikeClick)
  const dislikeIconClick = () => setIsDisLikelick(!isDislikeClick)
  const saveIconClick = () => setIsSaveClick(!isSaveClick)

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

    const response = await fetch(homeApiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      setApiStatus(apiStatusConstants.success)
      getHomeVideoDetailsSuccess(fetchedData)
    } else {
      setApiStatus(apiStatusConstants.failure)
      // Handle network or other errors here (e.g., display error message)
    }
  }

  const videosSuccess = () => {
    console.log('a')
    // console.log(formatDistanceToNow(new Date(videoData.publishedAt)))
    // import {formatDistanceToNow} from 'date-fns'
    // console.log(formatDistanceToNow(new Date(2021, 8, 20)))
    // Return the distance between the given date and now in words.
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const likeColor =
            isLikeClick && !isDislikeClick ? '#3b82f6' : '#181818'
          const dislikeColor =
            !isLikeClick && isDislikeClick ? '#3b82f6' : '#181818'
          const saveColor = isSaveClick ? '#3b82f6' : '#181818'
          const saveContent = isSaveClick ? 'Saved' : 'Save'

          return (
            <HomeContainer0
              isDarkTheme={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <Navigation />
              <VideoPlayerContainer isDarkTheme={isDarkTheme}>
                <ReactPlayer url={videoData.videoUrl} />
                <VideoTitle>{videoData.title}</VideoTitle>
                <ViewsLikesContainer>
                  <ViewsPublishedContainer>
                    <ViewsPara isDarkTheme={isDarkTheme}>
                      {videoData.viewCount} views
                    </ViewsPara>
                    <PublishedAt isDarkTheme={isDarkTheme}>
                      {videoData.publishedAt}
                    </PublishedAt>
                  </ViewsPublishedContainer>
                  <LikesDisContainer>
                    <LikeButtonContainer>
                      <Button onClick={likeIconClick}>
                        <AiOutlineLike size="30" color={likeColor} />
                      </Button>
                      <LikeDisPara
                        isDarkTheme={isDarkTheme}
                        color={dislikeColor}
                      >
                        Like
                      </LikeDisPara>
                    </LikeButtonContainer>
                    <DisLikeButtonContainer>
                      <Button onClick={dislikeIconClick}>
                        <AiOutlineDislike size="30" color={dislikeColor} />
                      </Button>
                      <LikeDisPara
                        isDarkTheme={isDarkTheme}
                        color={dislikeColor}
                      >
                        Dislike
                      </LikeDisPara>
                    </DisLikeButtonContainer>
                    <SavedVideosButtonContainer>
                      <Button onClick={saveIconClick}>
                        <MdPlaylistAdd size="30" color={saveColor} />
                      </Button>
                      <SavePara isDarkTheme={isDarkTheme} color={saveColor}>
                        {saveContent}
                      </SavePara>
                    </SavedVideosButtonContainer>
                  </LikesDisContainer>
                </ViewsLikesContainer>

                <HorizontalLine isDarkTheme={isDarkTheme} />
                <ChannelDetailsContainer>
                  <ChannelImage
                    src={videoData.channelProfileImg}
                    alt="channel img"
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
                We are having trouble to complete your request <br /> Please try
                again.
              </FailedPara>
              <FailedButton isDarkTheme={isDarkTheme}>Retry</FailedButton>
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
