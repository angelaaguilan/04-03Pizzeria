import Navbar from "./component/NavBar.jsx";
import Home from "./component/Home.jsx";
import Footer from "./component/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from "./component/RegisterPage.jsx";
import LoginPage from "./component/LoginPage.jsx";

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      <RegisterPage></RegisterPage>
      {/* <LoginPage></LoginPage> */}
      <Footer></Footer>
    </>
  );
}

export default App