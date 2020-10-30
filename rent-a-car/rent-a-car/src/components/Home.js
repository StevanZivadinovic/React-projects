import React from "react";
import "./Home.css";
import { Link, animateScroll as scroll } from "react-scroll";
import  daska from './daska.jpg'

export default function Home() {
  return (
    <div className="main">
      <h1>Израда Православних икона</h1>
      <div className="sazetak"></div>
      <div className="opis">
        <div className="liste">
          <ul className="lista">
            <li>
              <a href="#vizantijskiStil">Византијски стил</a>
            </li>
            <li>
              <a href="#daska">Традиционално обрађена липова даска</a>
            </li>
            {/* <animateScroll>
              <Link
                
                // to=".vizantijskiStil"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
               
              </Link>
            </animateScroll> */}
          </ul>
        </div>
        <div className="liste">
          <ul className="lista">
            <li>
              <a href="#">Техника израде - јајчана темпера</a>
            </li>
            <li>
              <a href="#">Израда икона са златом или шлаг металом</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="vizantijskiStil">
        <h2>Византијски стил</h2>
        <div className="text">
          <p>
            Иконописање је део нашег православног богослужења, управо као што је
            то и византијска музика и Божанска реч проповеди. Оно је уметност
            радости и наде. Из својих дубина учи нас покајању и послушању,
            подвигу и смирењу. Византисјко иконописање је уметност која је свој
            процват доживела у Византији са појавом тихографије (фрескописања),
            мозаика, миниатура и икона. У првим апостолским временима хришћани
            су користили сликање и украшавање из богослужбених разлога.
          </p>
          <br></br>
          <br></br>
          <p>
            Током трећег века, када је ишчезао страх од идолопоклонства,
            хришћани су почели да осликавају ликове Христа, Богородице и
            Апостола. Касније су наставили са приказом догађаја из Старог и
            Новог завета. Седмим Васељенским Сабором пре свега, дефинисана је
            теологија иконе. Иконописање није остављено на слободу и вољу
            сликарима, него је стављена под надзор Цркве. Развој монашког духа у
            доба Палеолога формира садржај и данашњег иконописања. Иконописање
            поприма приповедачки карактер, док композиције садрже велики број
            ликова. У данашње време, оно што знамо о Византијском иконописању,
            знамо пре свега из икона сачуваних након пада Византије 1453.
            године, а које се налазе широм Православних земаља.
          </p>
        </div>
      </div>
      <div id="daska">
        <h2>Традиционално обрађена липова даска</h2>
        <div className='textDaska'>
        <img id='slikaDaska' src={daska}></img>
        <p>Oригинална липова даска</p>
        </div>
      </div>
    </div>
  );
}
