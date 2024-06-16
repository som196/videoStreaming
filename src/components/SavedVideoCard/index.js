import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoContainer,
  VideoLink,
  VideoThumbNail,
  VideoTitleHeading,
  RemainingDetailsContainer,
  ChannelName,
  ViewsDetailsContainer,
  ViewsCountPara,
  PublishedSincePara,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const SavedVideoCard = props => {
  let a = null
  const {eachVideoDetails} = props
  const {
    title,
    thumbnailUrl,
    channelName,
    viewCount,
    publishedAt,
    id,
  } = eachVideoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        if (publishedAt !== undefined) {
          a = formatDistanceToNow(new Date(publishedAt))
          a = a.split(' ')
          a = a.slice(1).join(' ')
        }
        return (
          <VideoLink to={`/videos/${id}`}>
            <VideoContainer isDarkTheme={isDarkTheme}>
              <VideoThumbNail src={thumbnailUrl} alt="video thumbnail" />
              <RemainingDetailsContainer isDarkTheme={isDarkTheme}>
                <VideoTitleHeading isDarkTheme={isDarkTheme}>
                  {title}
                </VideoTitleHeading>
                <ChannelName isDarkTheme={isDarkTheme}>
                  {channelName}
                </ChannelName>
                <ViewsDetailsContainer>
                  <ViewsCountPara isDarkTheme={isDarkTheme}>
                    {viewCount}
                  </ViewsCountPara>
                  <BsDot className="dot-icon" />
                  <PublishedSincePara isDarkTheme={isDarkTheme}>
                    {`${a} ago`}
                  </PublishedSincePara>
                </ViewsDetailsContainer>
              </RemainingDetailsContainer>
            </VideoContainer>
          </VideoLink>
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
