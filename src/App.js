import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TeamList } from './views/TeamList/TeamList'
import { TeamDetail } from './views/TeamDetail/TeamDetail'
import { PlayerList } from './views/PlayerList/PlayerList'
import { PlayerDetail } from './views/PlayerDetail/PlayerDetail'
import { Home } from './views/Home/Home';
import { Header } from './views/Header/Header.jsx'


function App() {
  return (
    <Router>
    <header>
      <Header />
    </header>

    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teamlist" exact component={TeamList} />
        <Route path="/teams/:id" exact component={TeamDetail} />
        <Route path="/playerlist" exact component={PlayerList} />
        <Route path="/players/:id" exact component={PlayerDetail} />
    </Switch>

  </Router>
  
  );
}

export default App;
