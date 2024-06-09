import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'

import {
  NoSavedContainer,
  NoSavedImg,
  NoSavedHeading,
  NoSavedPara,
} from './styledComponents'
import Header from '../Header'
import Navigation from '../Navigation'
import SavedVideoCard from '../SavedVideoCard'

const SavedVideos = () => {
  const [videoData, setVideoData] = useState([])

  const savedVideosReturn = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos} = value

        return (
          <>
            {savedVideos.map(eachVideoDetails => (
              <SavedVideoCard
                eachVideoDetails={eachVideoDetails}
                key={eachVideoDetails.id}
              />
            ))}
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  const noSavedVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <NoSavedContainer>
              <NoSavedImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <NoSavedHeading>No saved videos found</NoSavedHeading>
              <NoSavedPara>
                You can save videos while watching them.
              </NoSavedPara>
            </NoSavedContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  const themeContextSave = () => (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideos = []} = value
        console.log(savedVideos)
        return (
          <>
            <Header />
            <Navigation />
            {savedVideos.length !== 0 ? savedVideosReturn() : noSavedVideos()}
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  return themeContextSave()
}

export default SavedVideos
