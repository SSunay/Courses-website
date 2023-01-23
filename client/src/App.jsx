
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layouts/footer'
import Header from './layouts/header'
import AddCourse from './pages/add-course'
import Detail from './pages/details'
import HomePage from './pages/home-page'

function App() {


  return (
    <div className="App">
     <Header/>
     <Routes>
     <Route path="/" element={<HomePage />} />
      <Route path="/home-page/:_id" element={<Detail />} />
      <Route path="/add-course" element={<AddCourse />} />
      </Routes>
     <Footer/>
    </div>
  )
}

export default App
