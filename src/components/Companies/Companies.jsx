import React, { useEffect, useState } from "react"
import "./Companies.scss"
import { Link } from "react-router-dom"



const Companies = () => {
    const [companys, setCompanys] = useState([])
    const [search, setSearch] = useState('')
    const finnhub = require('finnhub');
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "cbhselqad3i0blfg6ue0"
    const finnhubClient = new finnhub.DefaultApi()

    const handleChange = (e) => {
        setSearch(e.target.value)
        
    }
    const submitHandler = (e) => {
        e.preventDefault()
        finnhubClient.companyProfile2({ 'symbol': `${search}` }, (error, data, response) => {
            setCompanys(data)
        });
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body" style={{ backgroundColor: '#DEB887' }}>
                        <form onSubmit={submitHandler}>
                            <input
                                style={{ backgroundColor: '#FFE4C4' }}
                                type="text"
                                placeholder="Patiekalo pavadinimas"
                                onChange={handleChange}
                                value={search}
                                className="form-control" />
                            <button className="btn btn-danger mt-2">Ieskoti</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                    <div class="col-md-5 ">
                        <div class="product-grid">
                            <div class="product-image">
                                <a class="image">
                                    <img class="pic-1" src={companys.logo} />
                                </a>
                            </div>
                            <div class="product-content">
                            <Link to={'/stockS'}>
                                <h3>{companys.name}</h3>
                                </Link>
                                <h3>{companys.country}</h3>
                                <h3>{companys.currency}</h3>
                                <h3>{companys.weburl}</h3>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Companies