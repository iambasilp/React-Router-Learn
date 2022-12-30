import React from "react";
import { useOutletContext } from "react-router";
export const Sports = () => {
  const { Sports,name } = useOutletContext();
  return (
    <div className="sports">
    <div className="container_table">
      <div className="table">
        <div className="table-header">
          <div className="header__item">
            <a id="name" className="filter__link" href="#">
              Name
            </a>
          </div>
          <div className="header__item">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Cricket
            </a>
          </div>
          <div className="header__item">
            <a id="draws" className="filter__link filter__link--number" href="#">
              Football
            </a>
          </div>
          <div className="header__item">
            <a id="losses" className="filter__link filter__link--number" href="#">
              Volleyball
            </a>
          </div>
        </div>
        <div className="table-content">
          <div className="table-row">
            <div className="table-data">{name}</div>
            <div className="table-data">{Sports.Cricket}</div>
            <div className="table-data">{Sports.Football}</div>
            <div className="table-data">{Sports.Volleyball}</div>
            
            {/* <div className="table-data">{Marks.English > 30 ? "Win" : "Failed"}</div> */}
            
          </div>
          <div className="table-row">
            <div className="table-data"></div>
            <div className="table-data">{Sports.Cricket}</div>
            <div className="table-data">{Sports.Football}</div>
            <div className="table-data">{Sports.Volleyball}</div>
            
            {/* <div className="table-data">{Marks.Maths > 30 ? "Win" : "Failed"}</div> */}
            
          </div>
          <div className="table-row">
            <div className="table-data"></div>
            <div className="table-data">{Sports.Cricket}</div>
            <div className="table-data">{Sports.Football}</div>
            <div className="table-data">{Sports.Volleyball}</div>
            
            {/* <div className="table-data">{Marks.Science > 30 ? "Win" : "Failed"}</div> */}
            
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
