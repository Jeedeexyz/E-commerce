import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/Details"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/detail' element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;




// This is how we will map our product in the page
//  {productDetail.map((product) => (
//                          <div key={product.id}>
//       <ProductDetail product={product} />
//      </div>
//                         ))}