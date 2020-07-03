import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import CreateGame from '../components/CreateGame';
import JoinGame from '../components/JoinGame';
import NotFoundPage from '../components/NotFoundPage';
import RulesTeams from '../components/RulesTeams';
import RulesMultiplayer from '../components/RulesMultiplayer';
import RulesComputer from '../components/RulesComputer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={CreateGame} exact={true} />
        <Route path="/join" component={JoinGame} />
        <Route path="/rules_teams" component={RulesTeams}/>
        <Route path="/rules_multiplayer" component={RulesMultiplayer}/>
        <Route path="/rules_computer" component={RulesComputer}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
