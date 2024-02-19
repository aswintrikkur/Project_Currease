import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Cart } from "./pages/Cart/Cart";
import { Contact } from "./pages/Contact/Contact";
import { About } from "./pages/About/About";
import { Login } from "./pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
	return (
		<>
			{/* <Home /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/login" element={<Login />} />
				<Route path="/productPage/:id" element={<ProductPage />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/cart" element={<Cart />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
