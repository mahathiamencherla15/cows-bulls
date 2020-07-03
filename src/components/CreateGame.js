import React from 'react';
import TeamsModal from './TeamsModal';
import MultiModal from './MultiModal';
import CompModal from './CompModal';

export default class CreateGame extends React.Component {
  state = {
    selectedOption: undefined
  }

  handleSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined}))
}
teamsGame = () => {
  this.setState(() => ({
    selectedOption: "teams"
}))
}
multiGame = () => {
  this.setState(() => ({
    selectedOption: "multi"
}))
}
compGame = () => {
  this.setState(() => ({
    selectedOption: "comp"
}))
}
  render() {
    return (
      <div>
      <p>Game type</p>
      <p>Rules</p>
      <div>
        <button onClick={this.teamsGame}>Teams</button>
        <a href="/rules_teams">Teams</a>
        <button onClick={this.multiGame}>Multiplayer</button>
        <a href="/rules_multiplayer">Multiplayer</a>
        <button onClick={this.compGame}>Computer</button>
        <a href="/rules_computer">Computer</a>
      </div>
      {this.state.selectedOption === 'teams' && <TeamsModal selectedOption={this.state.selectedOption}
            handleSelectedOption={this.handleSelectedOption}/>}
      {this.state.selectedOption === 'multi' && <MultiModal selectedOption={this.state.selectedOption}
            handleSelectedOption={this.handleSelectedOption}/>}   
      {this.state.selectedOption === 'comp' && <CompModal selectedOption={this.state.selectedOption}
            handleSelectedOption={this.handleSelectedOption}/>}         
    </div>
    )
  }
 
}