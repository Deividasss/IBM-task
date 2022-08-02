import DatePicker from "react-datepicker"
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "../companiesCard/CompaniesCard.scss"
import ReactApexChart from 'react-apexcharts';
import { HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, LineSeries, Caption, Annotation, Tooltip, SplineSeries, AreaSeries } from 'react-jsx-highcharts';
import Highcharts, { numberFormat } from 'highcharts';

const CompaniesCard = (props) => {

    const { companies, stock } = props
    const [modal, setModal] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    console.log(stock)

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

    const openModal = () => {
        setModal(true)
    }

    const hideModal = () => {
        setModal(false)
    }

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
                        <a className='stockLink' onClick={openModal}>
                            <h3 className="product-title">{companies.name}</h3>
                        </a>
                        <hr></hr>
                        <h3 className="price"><span className="product-price-dolers">{companies.country}</span>Country:</h3>
                        <h3 className="price"><span className="product-price-dolers">{companies.currency}</span>Currancy:</h3>
                        <h3 className="price"><span className="product-price-dolers">{companies.weburl}</span>WEB Url:</h3>
                    </div>
                </div>
            </div>
            <Modal size="lg" show={modal} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Button
                    type="button"
                    className="modalCloseBtn btn-close"
                    onClick={hideModal}
                    variant="none"
                ></Button>

                <div className='modalas'>
                    <div className="datepicker">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    {/*<ReactApexChart options={apex.options} series={apex.series} type="candlestick" height={350} />*/}
                    <HighchartsChart>
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
                </div>
            </Modal>
        </>
    )
}
export default withHighcharts(CompaniesCard, Highcharts)