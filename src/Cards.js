
const Card = ({player}) =>{
    return <div className="card"> 
<div >
    <img src={player.img} className="playerImg"/>
</div>
<div className="playerList">
    <div >
    
        <h5> Name : {player.name} </h5>
        <h5> Age: {player.age} </h5>
    </div>
    <div>
        <h5> Nationality: {player.nationality} </h5>
    </div>
    <div>
        <h5> Team: {player.team} </h5>
        <h5> Number: {player.jerseyNumber} </h5>
        
    </div>
</div>
    </div>
}
export default Card