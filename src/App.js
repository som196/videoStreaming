import {Route, Switch, Redirect} from 'react-router-dom'
import {useState} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import GamingVideos from './components/GamingVideos'
import TrendingVideos from './components/TrendingVideos'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'
import './App.css'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [activeTab, setActiveTab] = useState('')
  const [savedVideos, setSavedVideos] = useState([])

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const changeTab = tabValue => {
    setActiveTab(tabValue)
  }

  const addVideo = async videoData => {
    const index = savedVideos.findIndex(
      eachVideo => eachVideo.id === videoData.id,
    )
    if (index === -1) {
      setSavedVideos(prevSavedVideos => [...prevSavedVideos, videoData])
    } else {
      savedVideos.splice(index, 1)
      setSavedVideos(savedVideos)
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        changeTheme,
        activeTab,
        changeTab,
        addVideo,
        savedVideos,
      }}
    >
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        <ProtectedRoute exact path="/gaming" component={GamingVideos} />
        <ProtectedRoute exact path="/trending" component={TrendingVideos} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    </ThemeContext.Provider>
  )
}

export default App
