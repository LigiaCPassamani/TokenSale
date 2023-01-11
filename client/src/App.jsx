import React from "react";
import PersonalizeRoutes from "./routes";
import { InfosProvider } from "./instance/infos";
import NavBar from "./components/NavBar/NavBar";


export default function App() {
  return (
    <InfosProvider>
      <NavBar></NavBar>
      <PersonalizeRoutes />
    </InfosProvider>
  );
}