import React, { useEffect, useState } from "react"
import Search from "../search/Search"
import Company from "finnhub/dist/model/Company"
import { Spinner } from "react-bootstrap"


const Meals = () => {
    const [companys, setCompanys] = useState([])
    const [search, setSearch] = useState('')
    const finnhub = require('finnhub');

    const handleSearch = (term) => {
        setSearch(term)
    }

    useEffect(() => {

        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = "cbhselqad3i0blfg6ue0"
        const finnhubClient = new finnhub.DefaultApi()

        finnhubClient.companyProfile2({ 'symbol': `${search}` }, (error, data, response) => {
            setCompanys(data)
        });

    }, [search])

    console.log(companys)

    return (
        <div className="container mt-4">
            <Search onSearch={handleSearch} />
            <h2 className="text-center p-4" style={{ color: '#D2691E' }}>companys</h2>
            <div className="row">
                {(companys.length ? companys.map((comp, i) => (
                    <Company
                        key={i}
                        logo={comp.logo}
                        name={comp.name}
                    />)) :
                    <h1>Search Companys</h1>
                )
                }
            </div>
        </div>
    )
}
export default Meals