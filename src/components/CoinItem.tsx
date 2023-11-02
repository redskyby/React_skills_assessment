import React from 'react';
import {Image, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {COIN_ROUTE} from "../utils/route_path";
import secondNumberAfterDot from "../utils/secondNumberAfterDot";
import icon from "../utils/imgIcon/favicon.png";
import {useDispatch, useSelector} from "react-redux";
import {ADD_IN_ONE_SUIT} from "../redux/slice/SuitCaseSlice";


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
    const dispatch = useDispatch();


    function showPageOfCoin(e: React.MouseEvent, id: string): void {
        e.preventDefault();
        history(COIN_ROUTE + '/' + id);
    }

    function addInSuitCase(e : React.MouseEvent , data :CoinData) {
        e.stopPropagation();
         dispatch(ADD_IN_ONE_SUIT(data));
    }

    return (
        <tr onClick={e => showPageOfCoin(e, data.id)}>
            <td>
                <Image src={icon}/>
            </td>
            <td>
                {data.symbol}
            </td>
            <td>
                {secondNumberAfterDot(data.priceUsd)}
            </td>
            <td>
                {secondNumberAfterDot(data.marketCapUsd)}
            </td>
            <td>
                {secondNumberAfterDot(data.marketCapUsd)}
            </td>
            <td>
                <Button
                    type={'button'}
                    onClick={e => addInSuitCase(e , data)}
                >Добавить в портфель</Button>
            </td>
        </tr>

    );
};

export default CoinItem;