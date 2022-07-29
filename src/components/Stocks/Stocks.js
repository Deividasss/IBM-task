import { useEffect, useState } from 'react';

const Stocks = () => {

    const finnhub = require('finnhub');
    const [stock, setStocks] = useState([])
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "cbhselqad3i0blfg6ue0"
    const finnhubClient = new finnhub.DefaultApi()

    useEffect(() => {
        finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
            setStocks(data)
        });
    },[])
    console.log(stock)

    return (
        <>
            <h1>dfdfsd</h1>
            <h3>{stock.o}</h3>
        </>
    )
}
export default Stocks