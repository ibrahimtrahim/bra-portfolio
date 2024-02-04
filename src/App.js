import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import AllRoutes from './routes/AllRoutes';



function App() {
  return (
    <div className="lg:flex bg-white-peimary dark:bg-black h-screen lg:justify-center lg:items-center">
      <Header />
      <Hero />
      <AllRoutes />
    </div>
  );
}

export default App;
