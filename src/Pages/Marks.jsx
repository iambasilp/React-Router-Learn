import React from "react";
import { useOutletContext } from "react-router-dom";
import "./Marks.css";
export const Marks = () => {
  const { Marks, name } = useOutletContext();
  console.log(Marks,name);
  return (
    <div className="wrapper">
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
                Subjects
              </a>
            </div>
            <div className="header__item">
              <a
                id="draws"
                className="filter__link filter__link--number"
                href="#"
              >
                Marks
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
              <div className="table-data" style={{fontWeight:"bold",textTransform:"capitalize",fontSize:"1rem"}}>{name}</div>
              <div className="table-data">English</div>
              <div className="table-data">{Marks.English}</div>
              <div className="table-data">{(Marks.English > 30 ? "Better" : "Best")}</div>
            </div>
            <div className="table-row">
              <div className="table-data"></div>
              <div className="table-data">Maths</div>
              <div className="table-data">{Marks.Maths}</div>
              <div className="table-data">{(Marks.Maths > 30 ? "Better" : "Best")}</div>
            </div>
            <div className="table-row">
              <div className="table-data"></div>
              <div className="table-data">Science</div>
              <div className="table-data">{Marks.Science}</div>
              <div className="table-data">{(Marks.Science > 30 ? "Better" : "Best")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
