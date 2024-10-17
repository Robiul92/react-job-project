import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobPages from "./pages/JobPages";
import NotFound from "./pages/NotFound";
import JobPage from "./pages/JobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobPages />} />
      <Route path="/jobs/:id" element={<JobPage />} />
      <Route path="/jobs/test/test" element={<div><h1>Hello Test</h1> </div>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
