import { Route, Switch } from 'react-router-dom'
//from components
import Home from './components/Home';
import About from './components/About';
import Article from './components/Article';
import ArticleList from './components/ArticleList';
import NotFound from './components/NotFound'
import Navbar from './Navigation/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/article/:name" component={Article} />
          <Route exact path="/article-list" component={ArticleList} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
