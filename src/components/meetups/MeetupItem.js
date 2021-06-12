import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(prop){

    return(
        <li className={classes.item}>

            <Card>
                <div className={classes.image}>
                    <img src={prop.image} alt={prop.title} />
                </div>

                <div className={classes.content}>
                    <h3>{prop.title}</h3>
                    <address>{prop.address}</address>
                    <p>{prop.description}</p>
                </div>

                <div className={classes.actions}>
                    <button>Fav</button>
                </div>
            </Card>

        </li>
    )
}

export default MeetupItem;