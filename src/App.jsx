import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/Details";
import AdminProducts from "./pages/AdminProduct";
import AdminOrders from "./pages/AdminOrder";
import AdminUsers from "./pages/AdminUser";
import AdminDashboard from "./pages/AdminDashboard";
import Checkout from "./pages/cart/Checkout";
import ShopingCard from "./pages/cart/ShopingCard";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import AdminProductForm from "./pages/AdminProductForm";
import Category from "./pages/Category";
import SuccessPage from "./pages/cart/SuccessPage";
import CancelPage from "./pages/cart/CancelPage";
import ItemsPage from "./pages/ItemsPage";
import AddCategory from "./pages/AddCategory";
import PostProductForm from "./pages/PostProductForm";
import Login from "./pages/Login";

const App = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const isAdmin = currentUser && currentUser.username === "Admin";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/detail/:id" element={<DetailsPage />} />
          <Route path="/items/:term" element={<ItemsPage />} />
          <Route path="/login" element={<Login />} />
          {isAdmin ? (
            <>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route
                path="/admin/dashboard/customers"
                element={<AdminUsers />}
              />
              <Route
                path="/admin/dashboard/products"
                element={<AdminProducts />}
              />
              <Route path="/admin/dashboard/orders" element={<AdminOrders />} />
              <Route
                path="/admin/dashboard/addproducts"
                element={<AdminProductForm />}
              />

              <Route
                path="/admin/dashboard/addcategory"
                element={<AddCategory />}
              />
              <Route
                path="/admin/dashboard/postProductForm"
                element={<PostProductForm />}
              />
            </>
          ) : (
            <>
              <Route path="/cart/shoppingcart" element={<ShopingCard />} />
              <Route path="/cart/checkout" element={<Checkout />} />
              <Route path="/cart/success" element={<SuccessPage />} />
              <Route path="/cart/cancel" element={<CancelPage />} />
            </>
          )}

          {/* Default route if none of the above conditions are met */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
