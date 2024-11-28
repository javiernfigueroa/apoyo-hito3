import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Cart from "./views/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* <Home /> */}
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
