import { Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/authContext";

import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { NewFlatPage } from "./pages/NewFlatPage";
import { UpdateProfilePage } from "./pages/UpdateProfilePage";
import { EditFlatPage } from "./pages/EditFlatPage";
import { FlatDetailsPage } from "./pages/FlatDetailsPage";
import { FavouritesPage } from "./pages/FavouritesPage";
import { MyFlatsPage } from "./pages/MyFlatsPage";
import { AllUsersPage } from "./pages/AllUsersPage";
import { ProfilePage } from "./pages/ProfilePage";
import { PrivateRoute } from "./components/Commons/PrivateRoute";

const AppRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/new-flat" element={<NewFlatPage />} />
          <Route path="/update-profile" element={<UpdateProfilePage />} />
          <Route path="/edit/:id" element={<EditFlatPage />} />
          <Route path="/flat/:id" element={<FlatDetailsPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/my-flats" element={<MyFlatsPage />} />
          <Route path="/all-users" element={<AllUsersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
