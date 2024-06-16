import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'

import {
  SaveWholeContainer,
  NoSavedContainer,
  NoSavedImg,
  NoSavedHeading,
  NoSavedPara,
  SavedVideosContainer,
  SavedHeadingContainer,
  SavedHeading,
} from './styledComponents'
import Header from '../Header'
import Navigation from '../Navigation'
import SavedVideoCard from '../SavedVideoCard'
import './index.css'

const SavedVideos = () => {
  const savedVideosReturn = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos} = value

        return (
          <SavedVideosContainer isDarkTheme={isDarkTheme}>
            {savedVideos.map(eachVideoDetails => (
              <SavedVideoCard
                eachVideoDetails={eachVideoDetails}
                key={eachVideoDetails.id}
              />
            ))}
          </SavedVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  const noSavedVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoSavedContainer isDarkTheme={isDarkTheme}>
            <NoSavedImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedHeading isDarkTheme={isDarkTheme}>
              No saved videos found
            </NoSavedHeading>
            <NoSavedPara isDarkTheme={isDarkTheme}>
              You can save videos while watching them.
            </NoSavedPara>
          </NoSavedContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  const themeContextSave = () => (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideos = [], isDarkTheme} = value
        return (
          <SaveWholeContainer isDarkTheme={isDarkTheme}>
            <Header />
            <Navigation />
            <SavedHeadingContainer isDarkTheme={isDarkTheme}>
              <HiFire size="30" color="red" className="hi-fire" />
              <SavedHeading isDarkTheme={isDarkTheme}>Saved</SavedHeading>
            </SavedHeadingContainer>
            {savedVideos.length !== 0 ? savedVideosReturn() : noSavedVideos()}
          </SaveWholeContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  return themeContextSave()
}

export default SavedVideos
