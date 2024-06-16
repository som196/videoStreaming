import styled from 'styled-components'

export const GameContainer0 = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  width: 100%;
  min-height: 100vh;
`

export const GameContainer = styled.div`
  margin-left: 260px;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    margin: 0px;
    width: 100%;
  }
`
export const GameIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1rem;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const GamingHeading = styled.h1`
  margin-left: 2rem;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const GameVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ebebeb;
  flex-wrap: wrap;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  list-style-type: none;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
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
