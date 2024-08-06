import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { NewFlatPage } from "./pages/NewFlatPage";
import { UpdateProfilePage } from "./pages/UpdateProfilePage";
import { EditFlatPage } from "./pages/EditFlatPage";
import { FlatDetailsPage } from "./pages/FlatDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/new-flat" element={<NewFlatPage />} />
      <Route path="/profile-update" element={<UpdateProfilePage />} />
      <Route path="/edit-flat" element={<EditFlatPage />} />
      <Route path="/details-flat" element={<FlatDetailsPage />} />
    </Routes>
  );
}

export default App;
