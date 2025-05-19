import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { useEffect } from "react"
import { App as CapacitorApp } from '@capacitor/app';
import Home from "./pages/Home.tsx"
import CreateTask from "./pages/CreateTask.tsx"

const App = () => {
  return (
    <BrowserRouter>
      <BackButtonHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createtask" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  )
}

const BackButtonHandler = (): null => {
  const location = useLocation();

  useEffect(() => {
    let listener: { remove: () => void } | undefined;

    const setupListener = async () => {
      listener = await CapacitorApp.addListener('backButton', () => {
        if (location.pathname === "/") {
          CapacitorApp.exitApp();
        } else {
          window.history.back();
        }
      });
    };

    setupListener();

    return () => {
      listener?.remove();
    };
  }, [location.pathname]);

  return null;
};

export default App