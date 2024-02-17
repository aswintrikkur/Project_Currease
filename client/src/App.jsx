import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { ProductPage } from "./pages/ProductPage/ProductPage";

function App() {
	return (
		<>
			{/* <Home /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/about" element={<Shop />} /> */}
				{/* <Route path="/contact" element={<Shop />} /> */}
				<Route path="/shop" element={<Shop />} />
				<Route path="/productPage/:id" element={<ProductPage />} />
			</Routes>
		</>
	);
}

export default App;
