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

const HomeVideoCard = props => {
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
            <ThumbnailImg src={thumbnailUrl} alt="thumbnail" />
            <ProfileAndRemainingContainer>
              <ChannelImg src={channelProfileUrl} alt="channelimg" />
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
export default HomeVideoCard
