import DatePicker from "react-datepicker"
import { useState } from 'react';
import { Modal, Button, Container } from 'react-bootstrap';
import "../companiesCard/CompaniesCard.scss"
import ReactApexChart from 'react-apexcharts';
import { HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, LineSeries, Caption, Annotation, Tooltip, SplineSeries, AreaSeries } from 'react-jsx-highcharts';
import Highcharts, { numberFormat } from 'highcharts';
import MyTimer from "../Companies/Timer/Timer";

const CompaniesCard = (props) => {

    const { companies, stock } = props
    const [stockmodal, setStockmodal] = useState(false)
    const [congradsmodal, setCongradsmodal] = useState(false)
    const [buymodal, setBuymodal] = useState(false)
    const [startDate, setStartDate] = useState(new Date());

    /*To get price by crypto*/
    const price = (stock.h / 1500)

    /*const [apex, setApex] = useState({
        series: [{
            data: [{
                x: new Date(),
                y: [stock, , 6623.04, 6633.33]
            },
            {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
            },
            ]
        }],
        options: {
            chart: {
                type: 'candlestick',
                height: 350
            },
            title: {
                text: 'CandleStick Chart',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            }
        },
    });
    */

    const openStockModal = () => {
        setStockmodal(true)
    }

    const hideStockModal = () => {
        setStockmodal(false)
    }
    const openBuyModal = () => {
        setBuymodal(true)
        setStockmodal(false)
    }

    const hideBuyModal = () => {
        setBuymodal(false)
    }

    const openCongradsModal = () => {
        setCongradsmodal(true)
        setBuymodal(false)
    }

    const hideCongradsModal = () => {
        setCongradsmodal(false)
    }



    const time = new Date();
    time.setSeconds(time.getSeconds() + 300000);

    if (companies.name == null) {
        return (
            <>
                <div>
                    <h3 className='noCompanies'>No searched companies...</h3>
                </div>
            </>
        );
    }


    return (
        <>
            <div class="col-md-3 productBox">
                <div class="product-grid">
                    <div class="product-image">
                        <img
                            className="cf_image pic-1"
                            src={companies.logo}
                            alt="image"
                        />
                    </div>
                    <div class="product-content">
                        <a className='stockLink' onClick={openStockModal}>
                            <h3 className="product-title">{companies.name}</h3>
                        </a>
                        <hr></hr>
                        <h3 className="price"><span className="product-price-dolers">{companies.country}</span>Country:</h3>
                        <h3 className="price"><span className="product-price-dolers">{companies.currency}</span>Currancy:</h3>
                        <h3 className="price"><span className="product-price-dolers">{companies.weburl}</span>WEB Url:</h3>
                    </div>
                </div>
            </div>
            <Modal size="lg" show={stockmodal} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Button
                    type="button"
                    className="modalCloseBtn btn-close"
                    onClick={hideStockModal}
                    variant="none"
                ></Button>

                <div className='modalas'>
                    <div className="datepicker">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    {/*<ReactApexChart options={apex.options} series={apex.series} type="candlestick" height={350} />*/}
                    <HighchartsChart className="stockChart">
                        <Chart />
                        <Title>Company stocks prices</Title>
                        <Legend />
                        <Tooltip valueSuffix=" k" />
                        <XAxis categories={stock.t}>
                        </XAxis>
                        <YAxis >
                            <SplineSeries name="High Price" data={stock.h} />
                        </YAxis>
                    </HighchartsChart>
                    <div className="buyMain">
                        <h3>If you want to buy stocks, visit here</h3>
                        <button className="buyStocksBtn" onClick={openBuyModal}>Buy Stocks</button>
                    </div>
                </div>
            </Modal>
            <Modal size="lg" show={buymodal} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Button
                    type="button"
                    className="modalCloseBtn btn-close"
                    onClick={hideBuyModal}
                    variant="none"
                ></Button>
                <Container className="nftEditMain">
                    <>
                        <div className="crowdFundEdit">
                            <div className="nftInfoMain">
                                <img
                                    className="nftEditImg"
                                    src={companies.logo}
                                    alt="image"
                                />
                                <div className="nftInfo">
                                    <h3 className="nftCollection">{companies.name}<img className="collectionImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png"></img></h3>
                                    <h3 className="nftTitle">{companies.name}</h3>
                                    <h3 className="nftPrice"><span className="nftPriceLine">Current Price:</span><br></br><span className="nftCripto"><img className="nftPriceImg" src="https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2422-thumb.png"></img><span className="nftDolers">Price by crypto</span></span></h3>
                                    <div className="nftBidBuyBtn">
                                        <button className="nftBidBtn" onClick={openCongradsModal}>BUY</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bidInfo">
                                <div className="bidHistory">
                                    <h3 className="bidHistoryHeading">Buy History</h3>
                                    <div className="noItems">
                                        <img className="noItemsImg" src="https://static.thenounproject.com/png/4143644-200.png"></img>
                                        <h3 className="noItemsHeading">No items</h3>
                                    </div>
                                </div>
                                <div className="bidOffers">
                                    <h3 className="bidOffersHeading">Offers</h3>
                                    <div className="noItems">
                                        <img className="noItemsImg" src="https://static.thenounproject.com/png/4143644-200.png"></img>
                                        <h3 className="noItemsHeading">No items</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <h3 className="nftDescriptionTitle">Description:</h3>
                                <hr className="nftHrLine"></hr>
                                <h3 className="nftDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ab aliquid, itaque dolorum est similique, cumque atque ducimus numquam provident omnis fugiat rerum accusantium, nihil rem magnam vel? Enim, sequi?</h3>
                            </div>
                            <div className="details">
                                <h3 className="nftDetails">Details:</h3>
                                <hr></hr>
                                <h3 className="nftCreator">Name:<span className="nftCreatorEmail">{companies.name}</span> </h3>
                                <h3 className="nftNetwork">Currency:<span className="nftNetworkInfo">{companies.currency}</span></h3>
                                <h3 className="nftCollection2">Country:<span className="nftCollectionInfo">{companies.country}</span></h3>
                                <h3 className="timerEnd">Auction ends in:<span className="myTimer"><MyTimer expiryTimestamp={time} /></span></h3>
                                <hr></hr>
                            </div>
                        </div>
                    </>
                </Container>
            </Modal>
            <Modal size="lg" show={congradsmodal} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <div className="congModal">
                    <Button
                        type="button"
                        className="modalCloseBtn btn-close"
                        onClick={hideCongradsModal}
                        variant="none"
                    ></Button>
                    <Container className="nftEditMain">
                        <>
                            <div>
                                <h3 className="congradsText">Congratulations you purchased your first {companies.name} stocks !!!</h3>
                            </div>
                        </>
                    </Container>
                </div>
            </Modal>
        </>
    )
}
export default withHighcharts(CompaniesCard, Highcharts)