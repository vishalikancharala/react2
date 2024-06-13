import { useState } from 'react'
// import Student from './Student'
// import List from './List'
// import Input from './Input'
// import CarDetails from './CarDetails'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import About from './components/About'
function App() {
  const [studentName, setStudentName] = useState('prabhas')
  const [age, setAge] = useState(20)
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>







      {/* <List/> */}
      {/* <p> hello all </p>
      <p>Name is :{studentName} and his age is :{age}</p>
      <Student name="vish" rollno="5f1"/>
      <Student name="akhila" rollno="5e1"/>  
      <Student name="poojitha" rollno="5a6"/>
      <Student name="susu" rollno="593"/> 
      <list/> */}
      {/* <Input/> */}
      {/* <CarDetails/> */}
    </div>
  )
}
export default App
