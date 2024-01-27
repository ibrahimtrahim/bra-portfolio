import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import AllRoutes from './routes/AllRoutes';


function App() {
  return (
    <div className="flex bg-black h-screen justify-center items-center">
      <Header />
      <Hero />
      <AllRoutes />
    </div>
  );
}

export default App;
