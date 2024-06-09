import styled from 'styled-components'

export const NoSavedContainer = styled.div`
  @media (min-width: 769px) {
    background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
    width: 100%;
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 256px;
  }
`

export const NoSavedImg = styled.img`
  heigth: 20rem;
  width: 30rem;
`

export const NoSavedHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-weight: bold;
  margin: 0px;
`

export const NoSavedPara = styled.p`
  color: #606060;
`
