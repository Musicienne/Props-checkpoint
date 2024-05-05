import players from './playersList.json'
import Card from '../Cards'

const Players = () =>{
    const playersList = players.playerList
    console.log({playersList})
    return <div className='playersList'> 
        { playersList.map((player)=> <Card player={player}/>)}
    </div>
}
export default Players