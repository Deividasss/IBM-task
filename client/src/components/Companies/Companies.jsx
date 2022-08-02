import React, { useEffect, useState } from "react"
import "./Companies.scss"
import { Alert, Spinner } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import CompaniesCard from "../companiesCard/CompaniesCard";
import axios from "axios";

const Companies = (props) => {
    const [stock, setStock] = useState([])
    const [companies, setCompanies] = useState([])
    const [search, setSearch] = useState('')
    const [messages, setMessages] = useState({ message: '', status: '' })

    const handleChange = (e) => {
        setSearch(e.target.value.replace(/[^a-zA-Z ]/, ''))

    }

    const submitHandler = (e) => {
        e.preventDefault()
        fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${search}&token=cbhselqad3i0blfg6ue0`)
            .then(response => response.json())
            .then(data => setCompanies(data))
            .catch((error) => console.log(error))
        axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${search}&&resolution=1&from=1631022248&to=1631627048&token=cbhselqad3i0blfg6ue0`)
            .then(response => {
                setStock(response.data)
                /*
                for (const key in response.data) {
                    if (Array.isArray(response.data[key])) {
                        for (let i = 0; i < response.data[key].length; i++) {
                            console.log(response.data[key][i]);
                        }
                    }
                    else {
                        console.log(response.data[key])
                    }
                }
                */
            })
        setMessages({ message: 'Nothing found, please enter a valid company symbol', status: 'danger' })
    }

    return (
        <>
            <div className="container">
                <div className="mainPage">
                    <div className="pageHeading">
                        <div className="pageHead">
                            <img className="mainLogo" src="https://rekvizitai.vz.lt/photos/uab_companies_house_uflyw0_1308059421.jpg"></img>
                            <div className="info">
                                <h3>What Are Stocks?</h3>
                                <p>A stock, also known as equity, is a security that represents the ownership of a fraction of the issuing corporation. Units of stock are called "shares" which entitles the owner to a proportion of the corporation's assets and profits equal to how much stock they own. </p>
                            </div>
                        </div>
                        <h3 className="searchInfoHeading">Here you can find information about your chosen company by writing its symbol</h3>
                        <form onSubmit={submitHandler} className="search">
                            {companies.name == null && <div className='cartHeaderEmpty2'><Alert className="shippingAlert" variant={messages.status}>{messages.message}</Alert></div>}
                            <div className="searchInput">
                                <input
                                    type="text"
                                    placeholder="Enter Companie symbol"
                                    onChange={handleChange}
                                    value={search}
                                    className="form-control"
                                    maxLength={35} />
                                <button className="searchBtn">Search</button>
                            </div>
                        </form>
                    </div>
                    <hr></hr>
                    <div className="row justify-content-center">
                        <CompaniesCard companies={companies} stock={stock} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Companies