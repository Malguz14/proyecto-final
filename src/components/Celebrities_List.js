import React, { Fragment } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { removeCel, setCel } from '../reducer/slices/celSlices';
import "./Celebrity.css";

const Celebrities_List = ({ celebrities }) => {
  const dispatch = useDispatch();
  const { celebrities_List } = useSelector(state => state.cel)
  function handleAdd(celId) {
    const celebrity = celebrities.find(c => c.birthday === celId);
    if (celebrities_List.find(c => c.birthday === celId)) {
      dispatch(removeCel(celId));
    } else {

      dispatch(setCel(celebrity));
    }
    console.log(celebrity);
  }
  return (
    <div>
      <div><h2>Celebrities_List</h2></div>
      <div> {celebrities.map(c => {
        return (
          <div class="card" id="divCard" >
            <div class="card-body">
            <h4  class="card-title">{c.name}</h4>
            <h2>{c.age}</h2>
            <div> {c.occupation}  </div>
            <button type="button" class="btn btn-outline-primary" onClick={() => handleAdd(c.birthday)}>Agregar Celebridades Favoritas</button>
          </div>
          </div>)
      })}
      </div>
    </div>)
}

export default Celebrities_List


