import React from "react";
import { useOutletContext } from "react-router";
import "./Styles/Marks.css";
export const Marks = () => {
  const { Marks,name } = useOutletContext();
  return (
    <div className="marks">
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
                Subject
              </a>
            </div>
            <div className="header__item">
              <a id="draws" className="filter__link filter__link--number" href="#">
                Mark
              </a>
            </div>
            <div className="header__item">
              <a id="losses" className="filter__link filter__link--number" href="#">
                Win/Fail
              </a>
            </div>
          </div>
          <div className="table-content">
            <div className="table-row">
              <div className="table-data">{name}</div>
              <div className="table-data">English</div>
              <div className="table-data">{Marks.English}</div>
              <div className="table-data">{Marks.English > 30 ? "Win" : "Failed"}</div>
              
            </div>
            <div className="table-row">
              <div className="table-data"></div>
              <div className="table-data">Maths</div>
              <div className="table-data">{Marks.Maths}</div>
              <div className="table-data">{Marks.Maths > 30 ? "Win" : "Failed"}</div>
              
            </div>
            <div className="table-row">
              <div className="table-data"></div>
              <div className="table-data">Science</div>
              <div className="table-data">{Marks.Science}</div>
              <div className="table-data">{Marks.Science > 30 ? "Win" : "Failed"}</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
