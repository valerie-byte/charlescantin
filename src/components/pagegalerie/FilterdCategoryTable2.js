
import React from "react";
import { Container } from "react-bootstrap";
import {useState} from 'react'
import Imagefamille from './imgfamille'
import Imagecouple from "./imgcouple";
import Imagebebe from "./imgbebe"
import Imagebapteme from "./imgbapteme"
import Imagegrossesse from "./Imggrossesse"
import Imagemariage from "./imgmariage"
import AffichageImg from "./affichageImg"



function FilterdCategoryTable2 () {

  
 

// render = () => {

  const [isall, setAll] = useState(true);
  function HandleclickAll  ()  {
    setAll(!isall);
    setGrossesse(false);
    setMariage(false);
    setCouple(false);
    setFamille(false);
    setBapteme(false);
    setBebe(false);
  }
  const [isgrossesse, setGrossesse] = useState(false);
  function HandleclickGrossesse () {
    setGrossesse(!isgrossesse)
    setAll(false);
    setMariage(false);
    setFamille(false);
    setBapteme(false);
    setBebe(false);
    setCouple(false);
}
const [ismariage, setMariage] = useState(false);
function HandleclickMariage () {
  setMariage(!ismariage);
  setAll(false);
  setGrossesse(false);
  setCouple(false);
  setFamille(false);
  setBapteme(false);
  setBebe(false);
  setCouple(false);
}
const [iscouple, setCouple] = useState(false);
function HandleclickCouple () {
  setCouple(!iscouple)
  setAll(false);
  setGrossesse(false);
  setFamille(false);
  setBapteme(false)
  setBebe(false);
  setMariage(false);
}

const [isfamille, setFamille] = useState(false);
function HandleclickFamille () {
 setFamille(!isfamille)
 setAll(false);
 setBebe(false);
 setBapteme(false);
 setMariage(false);
 setGrossesse(false);
 setCouple(false);
}

const [isBapteme, setBapteme] = useState(false);
function HandleclickBapteme () {
setBapteme(!isBapteme)
 setAll(false);
 setFamille(false);
 setMariage(false);
 setBebe(false);
 setGrossesse(false);
 setCouple(false);
}

const [isbebe, setBebe] = useState(false);
function HandleclickBebe () {
 setBebe(!isbebe)
 setBapteme(false)
 setAll(false);
 setFamille(false);
 setMariage(false);
 setGrossesse(false);
 setCouple(false);
}
 function casecheckbox () {
    if (isall === true) {
      return <AffichageImg></AffichageImg>
    }
    if (isBapteme === true) {
      return <Imagebapteme></Imagebapteme>
    }
    if (isgrossesse === true) {
      return <Imagegrossesse></Imagegrossesse>
    }
    if (isbebe === true) {
      return <Imagebebe></Imagebebe>
    }
    if (iscouple === true) {
      return <Imagecouple></Imagecouple>
    }
    if (isfamille === true) {
      return <Imagefamille></Imagefamille>
    }
    if (ismariage === true) {
      return <Imagemariage></Imagemariage>
    }


  
 }

 
    return(
      <Container>
        
        <h1 className='titleGalerieChoice'>Liste des catégories</h1>
        <Container className="containerfiltre ">

        <div className="label">
          <input id="optall" type="checkbox" onChange={HandleclickAll}></input>
          <label htmlFor="optall">toutes les images</label>
        </div>

        <div className="label">
          <input id="optgrossesse" type="checkbox" onChange={HandleclickGrossesse}></input>
          <label htmlFor="optgrossesse">grossesse</label>
        </div>

        <div className="label">
          <input id="optmariage" type="checkbox" onChange={HandleclickMariage}></input>
          <label htmlFor="optmariage">mariage</label>
        </div>

        <div className="label">
          <input id="optfamille" type="checkbox" onChange={HandleclickFamille}></input>
          <label htmlFor="optfamille">famille</label>
        </div>

        <div className="label">
          <input id="optcouple" type="checkbox" onChange={HandleclickCouple}></input>
          <label htmlFor="optcouple">couple</label>
        </div>

        <div className="label">
          <input id="optbebe" type="checkbox" onChange={HandleclickBebe}></input>
          <label htmlFor="optbebe">bébé</label>
        </div>

        <div className="label">
          <input id="optbapteme" type="checkbox" onChange={HandleclickBapteme}></input>
          <label htmlFor="optbapteme">bapteme</label>
        </div>

        </Container>
        <Container>
{/* les images s'affchent ici */}

         {casecheckbox()}
        </Container>
      </Container>
    )
}
// }
export default FilterdCategoryTable2