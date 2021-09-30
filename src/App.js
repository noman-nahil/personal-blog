import Home from './components/home';
import { Route } from 'react-router-dom'
function App() {
  return (
    <div className="max-w-screen-md mx-auto pt-20">
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
