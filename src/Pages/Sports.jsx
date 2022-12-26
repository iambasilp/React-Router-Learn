import React from "react";
import { useOutletContext } from "react-router";
export const Sports = () => {
  const { Sports, name } = useOutletContext();

  return (
    <>
      <div className="box">
        <div className="table">
          <div className="table-header">
            <div className="header__item">
              <a id="name" className="filter__link" href="#">
                Name
              </a>
            </div>
            <div className="header__item">
              <a
                id="subject"
                className="filter__link filter__link--number"
                href="#"
              >
                Games
              </a>
            </div>
            <div className="header__item">
              <a
                id="draws"
                className="filter__link filter__link--number"
                href="#"
              >
                Leads
              </a>
            </div>
            <div className="header__item">
              <a
                id="losses"
                className="filter__link filter__link--number"
                href="#"
              >
                BEST/BETTER
              </a>
            </div>
          </div>
          <div className="table-content">
            <div className="table-row">
              <div
                className="table-data"
                style={{
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                }}
              >
                {name}
              </div>
              <div className="table-data">Cricket</div>
              <div className="table-data">{Sports.Cricket}</div>
              <div className="table-data">
                {Sports.Cricket > 30 ? "Better" : "Best"}
              </div>
            </div>
            <div className="table-row">
              <div
                className="table-data"
                style={{
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                }}
              >
                
              </div>
              <div className="table-data">Football</div>
              <div className="table-data">{Sports.Football}</div>
              <div className="table-data">
                {Sports.Football > 30 ? "Better" : "Best"}
              </div>
            </div>
            <div className="table-row">
              <div
                className="table-data"
                style={{
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                }}
              >
                
              </div>
              <div className="table-data">Volleyball</div>
              <div className="table-data">{Sports.Volleyball}</div>
              <div className="table-data">
                {Sports.Volleyball > 30 ? "Better" : "Best"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
