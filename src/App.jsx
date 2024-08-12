import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/new-flat" element={<NewFlatPage />} />
      <Route path="/update-profile" element={<UpdateProfilePage />} />
      <Route path="/edit-flat" element={<EditFlatPage />} />
      <Route path="/flat-details" element={<FlatDetailsPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="/my-flats" element={<MyFlatsPage />} />
      <Route path="/all-users" element={<AllUsersPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
