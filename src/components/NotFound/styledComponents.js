import styled from 'styled-components'

export const NotFoundContainer0 = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  background-size: cover;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  margin-left: 286px;
`

export const NotFoundImage = styled.img`
  height: 20rem;
  width: 30rem;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-weight: bold;
  margin: 0px;
`

export const NotFoundPara = styled.p`
  color: #606060;
`
