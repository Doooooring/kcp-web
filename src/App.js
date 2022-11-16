import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import DefaultPage from '@component/common/default'
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
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route exact path="/" element={<RootPage />}>
          <Route exact path="contents" element={<DefaultPage />} />
          <Route path="contents/image" element={<DefaultPage />} />
          <Route path="contents/build" element={<ImageBuilder />} />
          <Route path="contents/monitor" element={<ImageMonitor />} />
          <Route
            path="contents/monitor/view-details"
            element={<ViewImageDetails />}
          />
          <Route path="contents/container" element={<DefaultPage />} />
          <Route
            path="contents/container/handle"
            element={<ContainerHandler />}
          />
          <Route
            path="contents/container/monitor"
            element={<ContainerMonitor curpage={curPage} />}
          />
          <Route
            path="contents/container/monitor/detail:containerId"
            element={<ContainerDetail curPage={curPage} />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
