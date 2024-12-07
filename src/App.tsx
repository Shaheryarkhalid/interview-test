import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { Signin, Signup } from './Components'
function App() {
  return (
	<div>
		<div>
			<p>
				<a href='/'>Home</a>
			</p>
			<p>
				<a href='/register'>Sign up</a>
			</p>
			<p>
				<a href='/signin'>Sign in</a>
			</p>
		</div>
		<BrowserRouter>
			<Routes>
				<Route path='register' element={<Signup/>}  />
				<Route path='signin' element={<Signin />} />
			</Routes>
		</BrowserRouter>
	</div>
  )
}

export default App
