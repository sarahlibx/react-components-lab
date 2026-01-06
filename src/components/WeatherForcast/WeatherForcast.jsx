import './WeatherForcast.css';

const WeatherForcastListItem = ({ forcast }) => {
    return (
        <div>
            <h2>{forcast.day}</h2>
            <img src={forcast.img} alt={forcast.alt} />
            <p><span>conditions: </span>{forcast.conditions}</p>
            <p><span>time: </span>{forcast.time}</p>
        </div>
    );
};

export default WeatherForcastListItem;