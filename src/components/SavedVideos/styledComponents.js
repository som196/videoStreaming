import styled from 'styled-components'

export const SaveWholeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  min-height: 100vh;
  background-size: cover;
`

export const NoSavedContainer = styled.div`
  @media (min-width: 769px) {
    background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 250px;
  }
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  height: 100vh;
  background-size: cover;
`

export const NoSavedImg = styled.img`
  heigth: 20rem;
  width: 30rem;
  @media (max-width: 768px) {
    height: 15rem;
    width: 17rem;
  }
`

export const NoSavedHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-weight: bold;
  margin: 0px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const NoSavedPara = styled.p`
  color: #606060;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`

export const SavedVideosContainer = styled.div`
  @media (min-width: 769px) {
    background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 250px;
    background-size: cover;
    width: 70%;
  }
`

export const SavedHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1rem;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#cccccc')};
  margin-left: 250px;

  @media (max-width: 768px) {
    margin: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1rem;
  }
`

export const SavedHeading = styled.h1`
  margin-left: 2rem;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`
