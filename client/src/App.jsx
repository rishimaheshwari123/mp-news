import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, getAllNews } from "./services/operations/admin";
import PrivateRoute from "./components/Admin/auth/PrivateRoute";
import AdminRoutes from "./routes/AdminRoutes";
import RegualerRoutes from "./routes/RegualerRoutes";
import Error from "./pages/Error";
import { saveCategory } from "./redux/newsSlice";
import axios from "axios";

function App() {
  const { user } = useSelector((state) => state.auth);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const dispatch = useDispatch();



  const visitAdd = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/visit`);
      
    } catch (error) {
      console.error('Failed to add visit record dashboard ', error);
    }
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await fetchCategory();
        dispatch(saveCategory(categoriesData?.categories || []));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    visitAdd()
    fetchCategories();
    dispatch(getAllNews());
  }, []);




  return (
    <div className="">
    <Routes>
      {/* Regular routes accessible to everyone, including admins */}
      <Route path="/*" element={<RegualerRoutes />} />

      {/* Admin-specific routes protected by PrivateRoute */}
      {(user?.role === "Admin" || user?.role === "SuperAdmin") && (
        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <AdminRoutes />
            </PrivateRoute>
          }
        />
      )}

      {/* Catch-all route for unmatched paths (404) */}
      <Route path="*" element={<Error />} />
    </Routes>
  </div>

  );
}

export default App;
