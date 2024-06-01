import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  font-family: 'Roboto';
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#ffffff')};
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  height: 23rem;
  width: 20rem;
  min-width: 5rem;
`

export const CompanyLogo = styled.img`
  height: 60px;
  width: 150px;
  display: flex;
  align-self: center;
  padding: 10px;
`

export const FormContainer = styled.form`
  width: 90%;
  min-width: 70%;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
`

export const LabelandInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-bottom: 10px;
`

export const LabelItem = styled.label`
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  margin-bottom: 5px;
`

export const InputItem = styled.input`
  border: ${props =>
    props.isDarkTheme ? '1px solid #f9f9f9' : '1px solid #475569'};
  height: 2rem;
  width: 14rem;
`

export const InputCheckBox = styled.input`
  padding: 20px;
`

export const CheckBoxAndPassContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
`

export const ShowPassPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  font-weight: bold;
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  margin-left: 20px;
  width: 90%;
  height: 2rem;
  border-radius: 0.5rem;
  border-style: none;
  cursor: pointer;
`

export const ErrorPara = styled.p`
  font-size: 20px;
  color: #ff0b37;
  padding-left: 20px;
`
