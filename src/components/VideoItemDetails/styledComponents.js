import styled from 'styled-components'

export const HomeContainer0 = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  background-size: cover;
  height: 100vh;
  padding: 10px;
`

export const VideoPlayerContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  margin-left: 260px;
  margin-top: 20px;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    margin: 0px;
    width: 100%;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const ViewsLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
`

export const ViewsPublishedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 27%;
`

export const ViewsPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-size: 1rem;
`

export const PublishedAt = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-size: 1rem;
`

export const LikesDisContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const LikeButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  cursor: pointer;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
`

export const DisLikeButtonContainer = styled(LikeButtonContainer)``

export const LikeDisPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-size: 1rem;
  margin-left: 0.5rem;
`
export const SavePara = styled.p`
  color: ${props => props.color};
  font-size: 1rem;
  margin-left: 0.5rem;
`

export const SavedVideosButtonContainer = styled(LikeButtonContainer)``

export const HorizontalLine = styled.hr``

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const ChannelImage = styled.img`
  height: 5rem;
  width: 5rem;
  margin-right: 2rem;
`
export const ChannelNameandDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelNamePara = styled.p`
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const ChannelSubscribersPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const VideoDescriptionPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  height: 60vh;
`

export const FailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  margin-top: 1rem;
`
export const FailedImage = styled.img`
  heigth: 10rem;
  width: 20rem;
`

export const FailedHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-weight: bold;
  margin: 0px;
`
export const FailedPara = styled.p`
  color: #606060;
`

export const FailedButton = styled.button`
  background-color: #4f46e5;
  padding: 0.5rem;
  width: 4rem;
  color: white;
`
