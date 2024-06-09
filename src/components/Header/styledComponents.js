import styled from 'styled-components'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

export const HeaderContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  position: sticky;
  top: 0;
  width: 100%;
  list-style-type: none;
`

export const CompanyLogoHeader = styled.img`
  height: 2rem;
  width: 8rem;
  margin-left: 2rem;
  cursor: pointer;
  @media (min-width: 400px and max-width: 576px) {
    margin-left: 0.8rem;
  }
  @media (max-width: 399px) {
    margin-left: 0.4rem;
    height: 2rem;
    widht: 4rem;
  }
`

export const ProfileOtherContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 576px) {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`

export const LogoutButton = styled.button`
  @media (max-width: 576px) {
    display: none;
  }
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#4f46e5')};
  border: ${props =>
    props.isDarkTheme ? '1px solid #ffffff' : '1px solid #3b82f6'};
  background-color: transparent;
  width: 8rem;
  height: 2rem;
  font-size: 1.2rem;
  margin-left: 1rem;
  margin-top: 0.3rem;
  cursor: pointer;
`

export const ProfilePhoto = styled.img`
  @media (min-width: 576px) {
    height: 2.5rem;
    width: 2.5rem;
    margin-left: 2rem;
    margin-right: 2rem;
    cursor: pointer;
  }
  @media (max-width: 576px) {
    display: none;
  }
`

export const StyledMoon = styled(BsMoon)`
  height: 42px;
  width: 40px;
  cursor: pointer;

  @media (max-width: 576px) {
    height: 30px;
    width: 30px;
    margin-right: 0.5rem;
  }
`

export const StyledBrightness = styled(BsBrightnessHigh)`
  height: 40px;
  width: 40px;
  cursor: pointer;
  color: #ffffff;
  @media (max-width: 576px) {
    height: 30px;
    width: 40px;
    margin-right: 0.5rem;
  }
`
export const IconButon = styled.button`
  background-color: transparent;
  border: none;
`

export const LogoutConfirmationContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  height: 10rem;
  width: 20rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`

export const LogoutConfirmationPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#4f46e5')};
`

export const ButtonsContainer = styled.div``

export const LogoutButtonCancelButton = styled.button`
  background-color: transparent;
  opacity: 4;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748b')};
  margin-right: 2rem;
  height: 2rem;
  width: 4rem;
  cursor: pointer;
  padding: 0.2rem;
  border: 1px solid #64748b;
`

export const LogoutButtonConfimationButton = styled.button`
  background-color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  color: #ffffff;
  margin-left: 5rem;
  height: 2rem;
  width: 4rem;
  cursor: pointer;
  padding: 0.2rem;
  border: none;
`
export const Hamburger = styled(GiHamburgerMenu)`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  color: ${props => props.color};
  margin-right: 0.5rem;
  @media (min-width: 576px) {
    display: none;
  }
`
export const LogoutIcon = styled.div`
  @media (min-width: 576px) {
    display: none;
  }
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`
