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
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobPages />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader}/>
      <Route path="/add-job" element={<AddJobPage/>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
