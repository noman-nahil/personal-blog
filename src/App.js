import { Route } from 'react-router-dom'
//from components
import Home from './components/Home';
import About from './components/About';
import Article from './components/Article';
import ArticleList from './components/ArticleList';

import Navbar from './Navigation/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/article-list" component={ArticleList} />
      </div>
    </div>
  );
}

export default App;
