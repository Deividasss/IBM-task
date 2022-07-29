import { useEffect, useState } from 'react';

const Stocks = () => {

    const finnhub = require('finnhub');
    const [stock, setStocks] = useState([])

    useEffect(() => {

        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = "cbhselqad3i0blfg6ue0"
        const finnhubClient = new finnhub.DefaultApi()

        finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
            console.log(data)
        });


    })

    return (
        <>
            
        </>
    )
}
export default Stocks