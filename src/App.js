import {Route, Switch} from 'react-router-dom'
import {useState} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import GamingVideos from './components/GamingVideos'
import TrendingVideos from './components/TrendingVideos'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import './App.css'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [activeTab, setActiveTab] = useState('')

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const changeTab = tabValue => {
    setActiveTab(tabValue)
  }

  return (
    <Switch>
      <ThemeContext.Provider
        value={{isDarkTheme, changeTheme, activeTab, changeTab}}
      >
        <Route exact path='/login' component={LoginForm} />
        <ProtectedRoute exact path='/' component={Home} />
        <ProtectedRoute exact path='/videos/:id' component={VideoItemDetails} />
        <ProtectedRoute exact path='/saved-videos' component={SavedVideos} />
        <ProtectedRoute exact path='/gaming' component={GamingVideos} />
        <ProtectedRoute exact path='/trending' component={TrendingVideos} />
      </ThemeContext.Provider>
    </Switch>
  )
}

export default App
