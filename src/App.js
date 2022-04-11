import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import './sass/app.sass'
import { Home, Task, Register, Login } from "./pages";

function App() {
	return (
		<div className="box">
			<Header />

			<div className="box__body">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="task" element={<Task />} />
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
				</Routes>
			</div>

			<Footer />
	</div>
	);
}

export default App;
