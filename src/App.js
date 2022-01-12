import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TeamList } from './views/TeamList/TeamList'
import { TeamDetail } from './views/TeamDetail/TeamDetail'
import { PlayerList } from './views/PlayerList/PlayerList'
import { PlayerDetail } from './views/PlayerDetail/PlayerDetail'
import { Home } from './views/Home/Home';
import { Header } from './views/Header/Header.jsx'
import { CreateTeam } from './views/TeamList/CreateTeam'
import { UpdateTeam } from './views/TeamList/UpdateTeam'
import { CreatePlayer } from './views/PlayerList/CreatePlayer'
import { UpdatePlayer } from './views/PlayerList/UpdatePlayer'


function App() {
  return (
    <Router>
    <header>
      <Header />
    </header>

    <Switch>
        <Route path="/teams/new" exact component={CreateTeam} />
        <Route path="/teams/:id/update" exact component={UpdateTeam} />
        <Route path="/players/new" exact component={CreatePlayer} />
        <Route path="/players/:id/update" exact component={UpdatePlayer}/>
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
