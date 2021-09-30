import React from "react";
import "./Results.css";
import dip1 from "./img/dip1.png";
import dip2 from "./img/dip2.png";
import dip3 from "./img/dip3.png";

function Results(props) {
  return (
    <div className="container section">
      <h2 id="results" tabIndex="-1">
        Результати
      </h2>
      <div className="results">
        <div className="result">
          <div className="result-info">
            <span className="subtitle">Teenagers vs COVID-19</span>
            <span className="txt">
              Навесні 2020-го року разом з Міжнародним фондом “Відродження” було
              проведено “Teengaers vs COVID-19” - перший в Україні конкурс,
              метою якого було долучення молоді до боротьби з коронавірусом. У
              результаті, ми зібрали 100+ заявок з 26 областей України та надали
              фінансову й менторську допомогу DetectorMask та Chapel - двом
              молодіжним стартапам.
            </span>
          </div>
          <img src={dip1} alt="" />
        </div>
        <div className="result">
          <img src={dip2} alt="" />
          <div className="result-info">
            <span className="subtitle">Science Mentoring 2020</span>
            <span className="txt">
              Навесні 2020-го року наша команда створила Science Mentoring -
              проєкт, який допомагає здібним українським школярам з маленьких
              міст проводити наукові дослідження та ставати вченими. За рік наші
              студенти вже здобули 1-2 місця на Всеукраїнську конкурсі наукових
              робіт МАН, отримали стипендії за наукові здобутки від Rochester
              University та вступили в Ukraine Global Scholars.
            </span>
          </div>
        </div>
        <div className="result">
          <div className="result-info">
            <span className="subtitle">Economic Battle</span>
            <span className="txt">
              У січні 2021-го року було проведено “Economic Battle” - командне
              змагання, завданням якого було розробка рішень для подолання
              економічних наслідків пандемії. Як результат, змагання зібрало 60+
              заявок з 15 фіналістами, розподіленими в 5 команд, які
              презентували свої проєкти.
            </span>
          </div>
          <img src={dip3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Results;
