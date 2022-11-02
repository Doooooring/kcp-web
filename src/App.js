import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import RootPage from '@pages'
import LoginPage from '@pages/login'
import ImageBuilder from '@pages/dockerimages/builder'
import ImageMonitor from '@pages/dockerimages/monitor'
import ViewImageDetails from '@pages/dockerImages/monitor/viewDetails'
import DockerContainers from '@pages/DockerContainers'
import Header from '@component/common/header'
import Sidebar from '@component/common/Sidebar'

function App() {
  const [curPage, handleCurPage] = useState('')
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route exact path="/" element={<RootPage />}>
          <Route path="contents">
            <Header curPage={curPage} handleCurPage={handleCurPage} />
            <Sidebar curSide={curSide} />
            <Route path="image">
              <Route path="build" element={<ImageBuilder />} />
              <Route path="monitor" element={<ImageMonitor />}>
                <Route path="view-details" element={<ViewImageDetails />} />
              </Route>
            </Route>
            <Route path="container" element={<DockerContainers />}></Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
