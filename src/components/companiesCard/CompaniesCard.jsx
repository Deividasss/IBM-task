import { HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, LineSeries, Caption, Annotation, Tooltip, SplineSeries, AreaSeries } from 'react-jsx-highcharts';
import Highcharts, { numberFormat } from 'highcharts';
import DatePicker from "react-datepicker"
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "../companiesCard/CompaniesCard.scss"

const CompaniesCard = (props) => {

    const { companies, stock } = props
    const [modal, setModal] = useState(false)
    const [startDate, setStartDate] = useState(new Date());

    const unixTime = stock.t;
    const date = new Date(unixTime * 1000);
    console.log(date.toLocaleDateString("en-US"));

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
                        <h3 className="price"><span className="product-price-dolers">{companies.country}</span>Country</h3>
                        <h3 className="price"><span className="product-price-dolers">{companies.currency}</span>Currancy</h3>
                        <h3 className="price"><span className="product-price-dolers">{companies.weburl}</span>WEB Url</h3>
                    </div>
                </div>
            </div>
            <Modal size="lg" show={modal} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Button
                    type="button"
                    className="cartCloseBtn btn-close"
                    onClick={hideModal}
                    variant="none"
                ></Button>
                <div className='modalas'>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <HighchartsChart>
                        <Chart />
                        <Title>Company stocks price</Title>
                        <Legend />
                        <Tooltip valueSuffix=" k" />
                        <XAxis categories={date}>
                        </XAxis>
                        <YAxis >
                            <SplineSeries name="High Price" data={stock.h} />
                            <SplineSeries name="Low Price" data={stock.l} />
                        </YAxis>
                    </HighchartsChart>
                </div>
            </Modal>
        </>
    )
}
export default withHighcharts(CompaniesCard, Highcharts)