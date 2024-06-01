import styled from 'styled-components'

export const HomeContainer0 = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const HomeContainer = styled.div`
  margin-left: 260px;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    margin: 0px;
    width: 100%;
  }
`

export const HomeVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ebebeb;
  flex-wrap: wrap;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};

  @media (max-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const LeftContainer = styled.div`
  width: 20%;
`

export const RightContainer = styled.div`
  width: 80%;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  padding: 10px;
  display: ${props => (props.isBannerClosed ? 'none' : 'block')};
`

export const CompanyLogoInBanner = styled.img`
  height: 30px;
  flex-shrink: 1;
`

export const BannerPara = styled.p`
  margin: 10px;
  flex-shrink: 1;
`

export const BannerButton = styled.button`
  text-align: center;
  padding: 10px;
  border: 2px solid black;
  background-color: transparent;
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
  flex-shrink: 1;
`

export const CloseButton = styled.div`
  width: 30px;
  height: 20px;
  text-align: center;
  cursor: pointer;
`

export const BannerContainerInside = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 20px;
`

export const InputSearch = styled.input`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  border: ${props =>
    props.isDarkTheme ? '1px solid #ffffff' : '1px solid #181818'};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  height: 2.1rem;
  width: 35rem;

  ::placeholder {
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
    margin-left: 1rem;
    font-style: italic; /* Optional: Add italics */
  }
`

export const SearchIcon = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#7e858e' : '#ebebeb')};
  text-align: center;
  width: 2rem;
  padding: 0.1rem;
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
