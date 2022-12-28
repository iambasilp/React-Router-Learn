import React from "react";
import { useOutletContext } from "react-router";
export const Sports = () => {
  const { Sports,name } = useOutletContext();
  return (
    <div className="sports">
    <div class="container_table">
      <div class="table">
        <div class="table-header">
          <div class="header__item">
            <a id="name" class="filter__link" href="#">
              Name
            </a>
          </div>
          <div class="header__item">
            <a id="wins" class="filter__link filter__link--number" href="#">
              Cricket
            </a>
          </div>
          <div class="header__item">
            <a id="draws" class="filter__link filter__link--number" href="#">
              Football
            </a>
          </div>
          <div class="header__item">
            <a id="losses" class="filter__link filter__link--number" href="#">
              Volleyball
            </a>
          </div>
        </div>
        <div class="table-content">
          <div class="table-row">
            <div class="table-data">{name}</div>
            <div class="table-data">{Sports.Cricket}</div>
            <div class="table-data">{Sports.Football}</div>
            <div class="table-data">{Sports.Volleyball}</div>
            
            {/* <div class="table-data">{Marks.English > 30 ? "Win" : "Failed"}</div> */}
            
          </div>
          <div class="table-row">
            <div class="table-data"></div>
            <div class="table-data">{Sports.Cricket}</div>
            <div class="table-data">{Sports.Football}</div>
            <div class="table-data">{Sports.Volleyball}</div>
            
            {/* <div class="table-data">{Marks.Maths > 30 ? "Win" : "Failed"}</div> */}
            
          </div>
          <div class="table-row">
            <div class="table-data"></div>
            <div class="table-data">{Sports.Cricket}</div>
            <div class="table-data">{Sports.Football}</div>
            <div class="table-data">{Sports.Volleyball}</div>
            
            {/* <div class="table-data">{Marks.Science > 30 ? "Win" : "Failed"}</div> */}
            
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
