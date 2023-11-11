import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/Store';
import TableForSuitCase from './TableForSuitCase';
import secondNumberAfterDot from '../../utils/SecondNumberAfterDot';

const Suitcase = ({ show, setShow }: { show: boolean; setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const coins = useSelector((state: RootState) => state.isSuitCaseToolkit.coins);
    const [totalCount, setTotalCount] = useState<string>('0');

    useEffect(() => {
        if (coins.length !== 0) {
            const total = coins.reduce((a, b) => a + parseFloat(b.priceUsd), 0);
            const totalWith2Number: string = secondNumberAfterDot(total.toString());
            setTotalCount(totalWith2Number);
            localStorage.setItem('total', totalWith2Number);
        } else {
            setTotalCount('0');
            localStorage.setItem('total', '0');
        }
    }, [coins]);

    return (
        <Modal show={show} onHide={() => setShow(false)} size={'xl'}>
            <Modal.Header closeButton>Портфель монет</Modal.Header>
            <Modal.Body>
                {coins.length === 0 ? (
                    <h2 className={'text-center'}>Портфель пуст!</h2>
                ) : (
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className={'align-middle text-center'}>Иконка</th>
                                <th className={'align-middle text-center'}>Название монеты</th>
                                <th className={'align-middle text-center'}>Символ</th>
                                <th className={'align-middle text-center'}>rank</th>
                                <th className={'align-middle text-center'}>supply</th>
                                <th className={'align-middle text-center'}>Цена в USD</th>
                                <th className={'align-middle text-center'}>Рыночная капитализация в USD</th>
                                <th className={'align-middle text-center'}>maxSupply</th>
                                <th className={'align-middle text-center'}>Возможность удалить из портфеля</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin) => (
                                <TableForSuitCase key={coin.id} data={coin} />
                            ))}
                        </tbody>
                    </Table>
                )}
            </Modal.Body>
            <Modal.Footer className={'d-flex flex-row  justify-content-between'}>
                <p>Общая сумма : {totalCount}$</p>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Suitcase;