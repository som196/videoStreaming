import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const EachVideoContainer = styled(Link)`
  width: 18%;
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

export const VideoTitleAndRemainingContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ThumbnailImg = styled.img`
  height: 400px;

  @media (min-width: 576px and max-width: 767px) {
    height: 250px;
    width: 40%;
  }

  @media (max-width: 576px) {
    height: 250px;
  }
`

export const VideoTitle = styled.p`
  font-size: 20px;
  margin-bottom: 0px;
  width: 95%;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const ViewsPara = styled.p`
  font-size: 15px;
  width: 40%;
  margin-bottom: 0px;
  color: #606060;
`
