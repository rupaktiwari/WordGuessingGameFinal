import React from 'react'
import './index.css';
import Form from './Form';
import {Routes, Route} from 'react-router-dom'
function App ()  {
	
  return (

		<Routes>
			<Route path='/' element = {<Form/>}/>
			{/* quit button ko lagi tala */}
			{/*<Route path = '/homepage' element = {<HomePageKocomponent/>}/>*/}
		</Routes>
	
	)
	}
export default App;