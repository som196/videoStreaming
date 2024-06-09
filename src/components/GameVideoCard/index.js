import {
  EachVideoContainer,
  ThumbnailImg,
  VideoTitleAndRemainingContainer,
  VideoTitle,
  ViewsPara,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const GameVideoCard = props => {
  const {eachVideo} = props
  const {thumbnailUrl, title, viewCount, id} = eachVideo
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <EachVideoContainer to={`/videos/${id}`}>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <VideoTitleAndRemainingContainer>
              <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
              <ViewsPara>{viewCount} views</ViewsPara>
            </VideoTitleAndRemainingContainer>
          </EachVideoContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GameVideoCard
