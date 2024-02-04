import './App.css';
import AnimCursor from './component/AnimCursor';
import Header from './component/Header';
import Hero from './component/Hero';
import AllRoutes from './routes/AllRoutes';



function App() {
  return (
    <div className="lg:flex bg-white-peimary dark:bg-black h-screen lg:justify-center lg:items-center">
      <AnimCursor/>
      <Header />
      <Hero />
      <AllRoutes />
    </div>
  );
}

export default App;
