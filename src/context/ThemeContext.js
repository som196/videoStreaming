import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  changeTab: () => {},
  changeTheme: () => {},
  addVideo: () => {},
})

export default ThemeContext
