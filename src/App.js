import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import RootPage from '@pages'
import LoginPage from '@pages/login'
import ImageBuilder from '@pages/dockerImages/builder'
import ImageMonitor from '@pages/dockerImages/monitor'
import ViewImageDetails from '@pages/dockerImages/monitor/viewImageDetails'
import ContainerHandler from '@pages/dockerContainers/handler'
import ContainerMonitor from '@pages/dockerContainers/monitor'
import ContainerDetail from '@pages/dockerContainers/monitor/detail'
import Header from '@component/common/header'
import Sidebar from '@component/common/sidebar'

function App() {
  const [curPage, handleCurPage] = useState('')
  return (
    <Router>
      <Header curPage={curPage} handleCurPage={handleCurPage} />
      <Sidebar curPage={curPage} />
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route exact path="/" element={<RootPage />}>
          <Route path="contents">
            <Route path="image">
              <Route path="build" element={<ImageBuilder />} />
              <Route path="monitor" element={<ImageMonitor />}>
                <Route path="view-details" element={<ViewImageDetails />} />
              </Route>
            </Route>
            <Route path="container">
              <Route path="handle" element={<ContainerHandler />}></Route>
              <Route path="monitor" element={<ContainerMonitor />}>
                <Route
                  path="detail:containerId"
                  element={<ContainerDetail curPage={curPage} />}
                ></Route>
              </Route>
              <Route></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
