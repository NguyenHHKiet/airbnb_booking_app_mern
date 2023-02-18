import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";

import { UserContextProvider } from "./UserContext";
import AccountPage from "./pages/AccountPage";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./components/PlacesFormPage";
import PlaceDetail from "./pages/PlaceDetail";
import BookingsPage from "./pages/BookingsPage";
import BookingDetail from "./pages/BookingDetail";

axios.defaults.baseURL = "http://127.0.0.1:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlaceDetail />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingDetail />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
