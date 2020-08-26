import React, {Component} from 'react';
import Profile from './Profile.js';
import SearchBar from './SearchBar.js'
import DataViewContainer from './DataViewContainer.js';

import { DEFAULT_PLAYER_INFO } from '../constants';

import nba from '../nba-client';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerInfo: DEFAULT_PLAYER_INFO
    }
  }

  componentDidMount() {
    window.nba = nba;
     this.loadPlayerInfo(this.state.playerInfo.fullName);
  }

  loadPlayerInfo = (playerName) => {
      nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId}).then((info) => {
          console.log(info);
          const playInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
          console.log(playInfo);
          this.setState({ playerInfo: playInfo });
      })
  }

  handleSelectPlayer = (playerName) => {
      this.loadPlayerInfo(playerName);
  }

  render() {
     return (
          <div className="main">
            <SearchBar handleSelectPlayer={this.handleSelectPlayer} />
            <div className="player">
              <Profile playerInfo={this.state.playerInfo} />
              <DataViewContainer playerId={this.state.playerInfo.playerId}/>
           </div>
         </div>
     );
  }
}

export default Main;
