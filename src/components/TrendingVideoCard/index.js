import {BsDot} from 'react-icons/bs'
import {
  EachVideoContainer,
  ThumbnailImg,
  ProfileAndRemainingContainer,
  VideoTitleAndRemainingContainer,
  ChannelImg,
  ChannelNameAndViewsDateContainer,
  VideoTitle,
  ChannelName,
  ViewsAndDateContainer,
  ViewsPara,
  PublishedDate,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const TrendingVideoCard = props => {
  const {eachVideo} = props
  const {
    channelName,
    channelProfileUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    id,
  } = eachVideo
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <EachVideoContainer to={`/videos/${id}`}>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <ProfileAndRemainingContainer>
              <ChannelImg src={channelProfileUrl} alt="channel logo" />
              <VideoTitleAndRemainingContainer>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <ChannelNameAndViewsDateContainer>
                  <ChannelName>{channelName}</ChannelName>
                  <ViewsAndDateContainer>
                    <ViewsPara>{viewCount} views</ViewsPara>
                    <BsDot size="45" />
                    <PublishedDate>{publishedAt}</PublishedDate>
                  </ViewsAndDateContainer>
                </ChannelNameAndViewsDateContainer>
              </VideoTitleAndRemainingContainer>
            </ProfileAndRemainingContainer>
          </EachVideoContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default TrendingVideoCard
