import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const EachVideoContainer = styled(Link)`
  width: 31%;
  padding: 10px;
  margin: 10px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  text-decoration: none;
  flex-grow: 1;

  @media (min-width: 576px and max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const ProfileAndRemainingContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3px;
`

export const VideoTitleAndRemainingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelNameAndViewsDateContainer = styled.div`
  color: #94a3b8;
  dispaly; flex;
`

export const ThumbnailImg = styled.img`
  height: 200px;

  @media (min-width: 576px and max-width: 767px) {
    height: 250px;
    width: 40%;
  }

  @media (max-width: 576px) {
    height: 250px;
  }
`

export const ChannelImg = styled.img`
  margin-top: 16px;
  margin-right: 10px;
  height: 50px;
  width: 50px;
`

export const VideoTitle = styled.p`
  font-size: 20px;
  margin-bottom: 0px;
  width: 95%;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const ChannelName = styled.p`
  font-size: 19px;
  margin-bottom: 0px;
`

export const ViewsAndDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
`

export const ViewsPara = styled.p`
  font-size: 15px;
  width: 40%;
  margin-bottom: 0px;
`

export const PublishedDate = styled.p`
  font-size: 15px;
  width: 40%;
  margin-bottom: 0px;
  margin-left: 10px;
`
