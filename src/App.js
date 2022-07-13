import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar />
						<div className='container'>
							<Alert />
							<Routes>
								<Route exact path='/' element={<Home />} />
								<Route exact path='/about' element={<About />} />
								<Route exact path='/user/:id' element={<User />} />
								<Route element={<NotFound />} />
							</Routes>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
