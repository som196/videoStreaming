import styled from 'styled-components'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

export const HomeContainer0 = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  background-size: cover;
  padding: 10px;
  min-height: 100vh;
`

export const VideoPlayerContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 769px) {
    margin-left: 280px;
    margin-top: 20px;
    margin-bottom: 0px;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-size: 0.7rem;

  @media (min-width: 769px) {
    font-size: 1.3rem;
  }
`

export const ViewsLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0.5rem;

  @media (min-width: 576px and max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: 0.2rem;
  }
`

export const ViewsPublishedContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 10%;
    width: 27%;
  }
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0.2rem;
  width: 29%;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0.1rem;
    width: 40%;
  }
`

export const ViewsPara = styled.p`
  @media (min-width: 768px) {
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
    font-size: 1rem;
  }

  font-size: 0.7rem;
  margin-right: 1rem;
  margin-top: 0.6rem;

  @media (max-width: 576px) {
    font-size: 0.5rem;
    margin-right: 1rem;
    margin-top: 0.6rem;
  }
`

export const PublishedAt = styled.p`
  @media (min-width: 768px) {
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
    font-size: 1rem;
  }

  font-size: 0.7rem;

  @media (max-width: 576px) {
    font-size: 0.5rem;
  }
`

export const LikesDisContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;

  @media (min-width: 576px and max-width: 768px) {
    margin-top: 0.8rem;
    width: 48%;
  }

  @media (max-width: 576px) {
    width: 60%;
  }
`

export const LikeButtonContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    cursor: pointer;
  }

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  @media (max-width: 576px) {
    width: 70%;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-item: center;
`

export const DisLikeButtonContainer = styled(LikeButtonContainer)``

export const LikeDisPara = styled.p`
  @media (min-width: 768px) {
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
    font-size: 1rem;
    margin-bottom: 0rem;
    margin-top: 0.5rem;
    margin-left: 0.3rem;
  }
  margin-top: 0rem;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};

  @media (max-width: 576px) {
    font-size: 0.6rem;
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  }
`
export const LikeIcon = styled(AiOutlineLike)`
  @media (min-width: 768px) {
    font-size: 2rem;
    margin-top: 0rem;
  }
  font-size: 0.8rem;

  @media (max-width: 576px) {
    font-size: 0.6rem;
  }
`

export const DislikeIcon = styled(AiOutlineDislike)`
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  font-size: 0.8rem;
  margin-left: 0.01rem;

  @media (max-width: 576px) {
    font-size: 0.6rem;
  }
`

export const SaveIcon = styled(MdPlaylistAdd)`
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  font-size: 0.8rem;
  margin-left: 0.01rem;
`

export const SavePara = styled.p`
  @media (min-width: 768px) {
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0rem;
    margin-left: 0.3rem;
  }
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-size: 0.7rem;
  margin-left: 0.01rem;
  margin-top: 0rem;

  @media (max-width: 576px) {
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
    font-size: 0.6rem;
  }
`

export const SavedVideosButtonContainer = styled(LikeButtonContainer)``

export const HorizontalLine = styled.hr``

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const ChannelImage = styled.img`
  height: 2rem;
  width: 3rem;
  margin-right: 1rem;

  @media (min-width: 769px) {
    height: 5rem;
    width: 5rem;
    margin-right: 2rem;
  }
`
export const ChannelNameandDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`

export const ChannelNamePara = styled.p`
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  margin: 0px;
  font-size: 0.7rem;

  @media (min-width: 769px) {
    font-weight: bold;
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
    margin: 0px;
    font-size: 1.3rem;
  }
`

export const ChannelSubscribersPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  margin: 0px;
  font-size: 0.7rem;

  @media (min-width: 769px) {
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
    margin: 0px;
    font-size: 1.3rem;
  }
`

export const VideoDescriptionPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  margin-top: 10px;
  font-size: 0.7rem;

  @media (min-width: 769px) {
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
    margin-top: 10px;
    font-size: 1.3rem;
  }
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
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 769px) {
    margin-left: 280px;
    margin-top: 20px;
    margin-bottom: 0px;
  }
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
