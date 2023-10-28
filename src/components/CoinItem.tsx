import React from 'react';
import {Col, Container, Image, Row , Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {COIN_ROUTE} from "../utils/route_path";

interface CoinData {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
}


const CoinItem = ({data}: { data: CoinData }) => {

     const history = useNavigate();

    function showPageOfCoin(e : any , id : string): void {
        e.preventDefault();
        history(COIN_ROUTE + '/' + id);

    }

    return (
        <Container >
            <Row onClick={ e => showPageOfCoin(e , data.id)}>
                <Col>
                    <Image src={data.symbol} />
                </Col>
                <Col>
                   <p>{data.symbol}</p>
                </Col>
                <Col>
                    <p>Цена в USD: {data.priceUsd}</p>
                </Col>
                <Col>
                    <p>Рыночная капитализация в USD : {data.marketCapUsd}</p>
                </Col>
                <Col>
                    <p>Изменение цены за 24 часа в процентах : {data.changePercent24Hr}</p>
                </Col>
                <Col>
                    <Button type={'button'}>Добавить в портфель</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CoinItem;