import { ToastContainer } from "react-toastify";

import { TaskProvider } from "./hooks/useTask";

import { Home } from "./pages/Home";

export default function App() {
  return (
    <TaskProvider>
      <Home />
      <ToastContainer />
    </TaskProvider>
  );
}
