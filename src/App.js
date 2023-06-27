import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import RootLayOut from "./components/RootLayOut"
import NotFound from "./components/NotFound"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfoForm from "./components/InfoForm";
import UpdateForm from "./components/UpdateForm";


const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<RootLayOut />} >
          <Route index element={<HomePage />} />
          <Route path="infoForm" element={<InfoForm />} />
          <Route path="update/:id" element={<UpdateForm />} />

          <Route path="*" element={<NotFound />} />

        </Route>



      </Routes>
      <ToastContainer position="top-right" autoClose='1000' />
    </>


  )
}
export default App