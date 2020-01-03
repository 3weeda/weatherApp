import React from "react";

const AllCities = ({ data, getCurrentCity }) => {
  return (
    <div>
      <ul className="location-list">
        {data.map(location => {
          const { id, country, city } = location;
          return (
            <li className="location" key={id}>
              <div>
                  <h3>{country}</h3>
                  <p>{city}</p>
              </div>
              <button className="forcast-btn" onClick={() => getCurrentCity(id)} >Get Forcast</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllCities;
