import React from "react";

import winPopUp from "./images/winPopUp.svg";
import tryAgain from "./images/tryAgain.svg";

const RandomQuestion = ({
  question,
  handleYes,
  handleNo,
  myAllyUrl,
  ourHeroUrl,
  handleUnmount,
  answered,
}) => {
  const selectedYes = () => {
    handleYes(question);
  };

  const selectedNo = () => {
    handleNo(question);
  };

  return (
    <div>
      <div>
        {answered === 0 ? null : answered === 1 ? (
          <div class="pop--bg">
            <img class="pop--win" src={winPopUp} alt="Winning" />
            <p class="pop-text">You collected more allies!</p>
            <button
              className="circle--typo btn btn-link"
              onClick={this.props.handlerUnmount}
            >
              Next challenge
            </button>
          </div>
        ) : (
          <div class="pop--bg">
            <img class="pop--win" src={tryAgain} alt="tryAgain" />
            <button
              className="circle--typo btn btn-link"
              onClick={this.props.handlerUnmount}
            >
              Next challenge
            </button>
          </div>
        )}
      </div>
      <section className="question">
        <div className="question--wrap container-fluid">
          <div className="question--wrapper">
            <img
              className="question--heroine"
              src={ourHeroUrl}
              alt="Super Heroine"
            />
          </div>

          <div className="question--title wrapper">
            <div className=" slide">
              <p className="question--title_p">{question.Q}</p>
            </div>

            <button
              type="button"
              className="question--btn btn btn-link"
              onClick={selectedYes}
            >
              Yes
            </button>
            <button
              type="button"
              className="question--btn btn btn-link"
              onClick={selectedNo}
            >
              No
            </button>
          </div>
          <div className="allies-all">
            <p className="allies--text">Your Allies!</p>
            <div className="allies--wrapper">
              {myAllyUrl
                ? myAllyUrl.map((item, index) => (
                    <div className="slidehero ">
                      <img
                        className="question--allies"
                        key={index}
                        src={item}
                        alt="my allies"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RandomQuestion;
