import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Home.css'

export const Favorites = () => {
    const dispatch = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel);
    return (
        <Fragment>

            <div className="poc"><h2>Lista de Favoritos</h2> </div>
            <table class="table" >
                 <thead>
                    <tr >
                        <th scope="col" className="poc"><h3>ID</h3></th>
                        <th scope="col" className="poc"><h3>Nombre</h3></th>
                        <th scope="col" className="poc"><h3>Nacionalidad</h3></th>
                        <th scope="col" className="poc"><h3>Edad</h3></th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {celebrities_List.map(c => {
                        return (
                            <tr>
                                <td scope="row">  <h4>{c.birthday}</h4></td>
                                <td scope="row">  <h4>{c.name}</h4></td>
                                <td scope="row">  <h4>{c.nationality}</h4></td>
                                <td scope="row">  <h4>{c.age}</h4></td>
                            </tr>
                        )
                    })}
                </tbody>
            
            </table>
        </Fragment>
    )
}

/*<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>*/