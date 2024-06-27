import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import CreateLobby from "../pages/CreateLobby/CreateLobby";
import JoinLobby from "../pages/JoinLobby/JoinLobby";
import Difficulty from "../pages/Difficulty/Difficulty";
import Lobby from "../pages/Lobby/Lobby";
import Sins from "../pages/Sins/Sins";
import Punishments from "../pages/Punishments/Punishments";
import QRCodeGenerator from "../pages/QrCodeGenerator/QrCodeGenerator";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/createlobby" element={<CreateLobby />} />
      <Route path="/joinlobby" element={<JoinLobby />} />
      <Route path="/difficulty" element={<Difficulty />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/sins" element={<Sins />} />
      <Route path="/punishments" element={<Punishments />} />
      <Route path="/qr" element={<QRCodeGenerator />}></Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
