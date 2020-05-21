import React from "react";
import HeroList from "./HeroList";
import Game from "./Game";
import ChooseMale from "./ChooseMale";
import "./scss/SelectHero.scss";

function SelectHero({
  superHero,
  mountGame,
  selectHeroOnClick,
  id_list,
  selectedHero,
  ourHeroUrl,
  maleUrl,
  toggleMountChoseMale,
  mountChoseMale,
}) {
  return (
    <div>
      {mountGame === true ? (
        <Game
          id_list={id_list}
          selectedHero={selectedHero}
          ourHeroUrl={ourHeroUrl}
        />
      ) : (
        <div>
          {mountChoseMale ? (
            <ChooseMale toggleMountChoseMale={toggleMountChoseMale} />
          ) : (
            <section className="start ">
              <h2 className="start--title">Artechmis</h2>
              <div className="start--wrap container-fluid">
                <div className="eye--wrapper">
                  <div className="choose--img" />
                </div>
              </div>
              <div className="wrapper_select ">
                <div className="start--typo slide_select">
                  <p>Choose your Heroine!</p>
                </div>
              </div>
              <div className="allies-all ">
                <div className="allies--wrapper slidehero ">
                  {superHero.map((item, index) => (
                    <HeroList
                      key={index}
                      obj={item}
                      onClick={selectHeroOnClick}
                    />
                  ))}
                  <img
                    src={maleUrl}
                    alt="male"
                    onClick={toggleMountChoseMale}
                  />
                </div>
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
export default SelectHero;
