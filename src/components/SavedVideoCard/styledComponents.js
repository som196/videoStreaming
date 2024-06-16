import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  margin-bottom: 1rem;
  padding: 0.5rem;
  text-decoration: none;
  width: auto;
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  padding-left: 2rem;
`

export const VideoThumbNail = styled.img`
  height: 200px;
  width: 200px;

  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`

export const VideoTitleHeading = styled.h1`
  font-size: 1.2rem;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export const ChannelName = styled.h1`
  font-size: 1rem;
  color: #64748b;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`

export const ViewsCountPara = styled.p`
  font-size: 1rem;
  color: #64748b;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`

export const PublishedSincePara = styled.p`
  font-size: 1rem;
  color: #64748b;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`

export const RemainingDetailsContainer = styled.div`
  width: 60%;
  padding-left: 1rem;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media (max-width: 768px) {
    width: 60%;
    padding-left: 0.4rem;
    background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  }
`

export const ViewsDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
