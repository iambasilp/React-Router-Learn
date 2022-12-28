import React from "react";
import { useOutletContext } from "react-router";
import "./Styles/Marks.css";
export const Marks = () => {
  const { Marks,name } = useOutletContext();
  return (
    <div className="marks">
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
                Subject
              </a>
            </div>
            <div class="header__item">
              <a id="draws" class="filter__link filter__link--number" href="#">
                Mark
              </a>
            </div>
            <div class="header__item">
              <a id="losses" class="filter__link filter__link--number" href="#">
                Win/Fail
              </a>
            </div>
          </div>
          <div class="table-content">
            <div class="table-row">
              <div class="table-data">{name}</div>
              <div class="table-data">English</div>
              <div class="table-data">{Marks.English}</div>
              <div class="table-data">{Marks.English > 30 ? "Win" : "Failed"}</div>
              
            </div>
            <div class="table-row">
              <div class="table-data"></div>
              <div class="table-data">Maths</div>
              <div class="table-data">{Marks.Maths}</div>
              <div class="table-data">{Marks.Maths > 30 ? "Win" : "Failed"}</div>
              
            </div>
            <div class="table-row">
              <div class="table-data"></div>
              <div class="table-data">Science</div>
              <div class="table-data">{Marks.Science}</div>
              <div class="table-data">{Marks.Science > 30 ? "Win" : "Failed"}</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
