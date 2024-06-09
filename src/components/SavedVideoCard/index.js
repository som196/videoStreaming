import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoContainer,
  VideoThumbNail,
  VideoTitleHeading,
  RemainingDetailsContainer,
  ChannelName,
  ViewsDetailsContainer,
  ViewsCountPara,
  PublishedSincePara,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const SavedVideoCard = props => {
  let a = null
  const {eachVideoDetails} = props
  const {title, thumbnailUrl, channelName, viewCount, publishedAt, id} =
    eachVideoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        if (publishedAt !== undefined) {
          a = formatDistanceToNow(new Date(publishedAt))
          a = a.split(' ')
        }
        return (
          <VideoContainer to={`/videos/${id}`}>
            <VideoThumbNail src={thumbnailUrl} alt="video thumbnail" />
            <RemainingDetailsContainer>
              <VideoTitleHeading>{title}</VideoTitleHeading>
              <ChannelName>{channelName}</ChannelName>
              <ViewsDetailsContainer>
                <ViewsCountPara>{viewCount}</ViewsCountPara>
                <BsDot size="45" />
                <PublishedSincePara>{a}</PublishedSincePara>
              </ViewsDetailsContainer>
            </RemainingDetailsContainer>
          </VideoContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoCard

//  id: videoDetails.id,
//       title: videoDetails.title,
//       videoUrl: videoDetails.video_url,
//       thumbnailUrl: videoDetails.thumbnail_url,
//       channelName: videoDetails.channel.name,
//       channelProfileImg: videoDetails.channel.profile_image_url,
//       subscriberCount: videoDetails.channel.subscriber_count,
//       viewCount: videoDetails.view_count,
//       publishedAt: videoDetails.published_at,
//       description: videoDetails.description,
