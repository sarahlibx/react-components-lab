import './WeatherForcast.css';
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

const WeatherForcastListItem = ({ forcast }) => {
    return (
        <div className='weather-item'>
            <WeatherData
                day={forcast.day}
                conditions={forcast.conditions}
                time={forcast.time}
            />
            <WeatherIcon 
            img={forcast.img}
            alt={forcast.imgAlt}
            />
        </div>
    );
};

export default WeatherForcastListItem;