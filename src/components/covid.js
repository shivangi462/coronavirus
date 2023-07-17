import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);
  //jb api ko call krte hai toh wo hame promises return krta hai
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  //use effect hooks jaise hi page open ho apne aap update hona chaiye

  useEffect(() => {
    getCovidData();
  }, []);


  return (
    <>
      <section>
        <h1>Live</h1>
        <h2>Coronavirus Live Tracker</h2>
        <ul>
          <li>
            <div>
              <div>
                <p><span>Our</span> Country</p>
                <p>India</p>
              </div>
            </div>
          </li>

          <li>
            <div>
              <div>
                <p><span>Total</span> Recovered</p>
                <p>{data.recovered}</p>
              </div>
            </div>
          </li>

          <li>
            <div>
              <div>
                <p><span>Total</span> Confirmed</p>
                <p>{data.confirmed}</p>
              </div>
            </div>
          </li>

          <li>
            <div>
              <div>
                <p><span>Total</span> Deaths</p>
                <p>{data.deaths}</p>
              </div>
            </div>
          </li>

          <li>
            <div>
              <div>
                <p><span>Total</span> Active</p>
                <p>{data.active}</p>
              </div>
            </div>
          </li>

          <li>
            <div>
              <div>
                <p><span>Last</span> Updated</p>
                <p>{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
