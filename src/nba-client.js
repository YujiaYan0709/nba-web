
import nba from 'nba';

const SERVER_URL = 'https://34.67.117.84';

export default {
 ...nba,
 stats: {
   ...nba.stats,
   playerInfo: function({ PlayerID }) {
     return fetch(`${SERVER_URL}/players/${PlayerID}`).then(res => res.json())
   },
   shots: function({ PlayerID }) {
     return fetch(`${SERVER_URL}/players/${PlayerID}/shots`).then(res => res.json())
   },
 },
};
