import React from "react";
import { withRouter } from "react-router-dom";
import dayjs from "dayjs";

const CurrentCity = ({
  history: { goBack },
  location: {
    state: { currentCity, country, city }
  }
}) => {
  const {
    Headline: { Date, Text, Link },
    DailyForecasts: {
      0: {
        Day: { Icon, IconPhrase },
        Temperature: { Maximum, Minimum }
      }
    }
  } = currentCity;
  return (
    <div>
      <button onClick={() => goBack()} className="back">Back</button>
      <div className="location-details">
        <h3>{country}</h3>
        <h4>{city}</h4>
        <p className="location-date">{dayjs(Date).format("MMMM DD, YYYY")}</p>
        <p>{IconPhrase}</p>
        <img
          className="location-img"
          src={`https://developer.accuweather.com/sites/default/files/${
            Icon >= 10 ? Icon : "0" + Icon
          }-s.png`}
          alt="location-img"
        />
        <div>
          <p>{Maximum.Value} °F</p>
          <p>{Minimum.Value} °F</p>
        </div>
        <p>{Text}</p>
        <a href={Link} target="noreferrer noopener">
          More details
        </a>
      </div>
    </div>
  );
};

export default withRouter(CurrentCity);
