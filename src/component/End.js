import React from "react";
import "./scss/end.scss";

const End = ({ myAllyUrl }) => {
  return (
    <div className="end-container">
      {myAllyUrl ? (
        <div>
          <h2 className="end-title">Congratulations!</h2>
          {myAllyUrl.map((item, index) => (
            <img
              className="question--allies"
              key={index}
              src={item}
              alt="my allies"
            />
          ))}{" "}
        </div>
      ) : (
        <h2>Better luck next time!! </h2>
      )}
      <div className="end-message">
        <h2>
          You have passed through the time and space using your powers! You have
          also united with other women!
        </h2>
        <h3>Together and using our Super Powers - we can achieve much more!</h3>
      </div>
    </div>
  );
};
export default End;
