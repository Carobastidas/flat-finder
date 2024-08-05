import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AllFlats } from "./components/AllFlats";
import { LoginSecond } from "./components/LoginSecond";
import { NewFlat } from "./components/NewFlat";
import { ProfileUpdate } from "./components/ProfileUpdate";
import { UpdateFlat } from "./components/UpdateFlat";
import { ViewFlat } from "./components/ViewFlat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/all-flats" element={<AllFlats />} />
      <Route path="/login-second" element={<LoginSecond />} />
      <Route path="/new-flat" element={<NewFlat />} />
      <Route path="/profile-update" element={<ProfileUpdate />} />
      <Route path="/update-flat" element={<UpdateFlat />} />
      <Route path="/view-flat" element={<ViewFlat />} />
    </Routes>
  );
}

export default App;
