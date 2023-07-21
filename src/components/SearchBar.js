import React, { Fragment, useState } from "react";
import Axios from "axios";
import Celebrities_List from "./Celebrities_List";
import Home from "../pages/Home";
import "./Celebrity.css"

const SearchBar = () => {
    const [celData, setCelData] = useState();
    const [celebrity, setCelebrity] = useState();

    function handleChange(e) {
        e.preventDefault();
        setCelebrity(e.target.value);
    }

    function getCelData() {
        const key = process.env.REACT_APP_KEY;
        const headers = { 'X-Api-Key': key }
        const url = `${process.env.REACT_APP_URL_NAME}=${celebrity}`;
        Axios.get(url, { headers })
            .then(resp => {
                setCelData(resp.data);
            })
            .catch(error => { console.log(error) })
    }

    return (
        <Fragment>
            <div>
                <nav>
                    <div className="search">
                        <li> <input type="text" onChange={handleChange} ></input>
                            <button type="button" class="btn btn-outline-info" onClick={getCelData}>Buscar</button>
                        </li>
                    </div>
                </nav>
                {celData ? (<Celebrities_List celebrities={celData} />) : (<Home />)}
            </div>
        </Fragment>
    )
}

export default SearchBar;
