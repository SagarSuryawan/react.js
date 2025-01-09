import Icon from '../Icon/Icon'

function Card({ player,onplay,index }){
    let icon = <Icon />
    if (player === 'X'){
        icon = <Icon name = "cross"/>
    }
    else if (player === 'O'){
        icon = <Icon name = 'circle'/>
    }

    return (
        <div className='card' onClick={() => onplay(index)}>
            {icon}
        </div>
    )
}
 
export default Card;