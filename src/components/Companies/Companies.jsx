import React, { useEffect, useState } from "react"
import "./Companies.scss"
import { Alert, Spinner } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import CompaniesCard from "../companiesCard/CompaniesCard";

const Companies = (props) => {
    const [companies, setCompanies] = useState([])
    const [stock, setStock] = useState([])
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
        fetch(`https://finnhub.io/api/v1/stock/candle?symbol=${search}&&resolution=1&from=1631022248&to=1631627048&token=cbhselqad3i0blfg6ue0`)
            .then(response => response.json())
            .then(data => setStock(data))
            .catch((error) => console.log(error))
        setMessages({ message: 'Nothing found, please enter a valid company symbol', status: 'danger' })
    }

    return (
        <>
            <div className="container">
                <div className="mainPage">
                    <div className="pageHeading">
                        <h1>Logo</h1>
                        <h3>Here you can find information about your chosen company by writing its symbol</h3>
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