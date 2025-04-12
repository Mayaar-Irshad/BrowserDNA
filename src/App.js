// App.js 
import Navbar from './components/Navbar';
import Home from './pages/Home';

// Entry point of the app, renders Navbar and Home page
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;