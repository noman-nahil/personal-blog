import Home from './components/Home';
import { Route } from 'react-router-dom'
import About from './components/About';
import Article from './components/Article';
import ArticleList from './components/ArticleList';


function App() {
  return (
    <div className="max-w-screen-md mx-auto pt-20">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/article" component={Article} />
      <Route exact path="/article-list" component={ArticleList} />
    </div>
  );
}

export default App;
