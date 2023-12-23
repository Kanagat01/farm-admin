import { useState } from "react";
import Icon from "@mdi/react";
import { mdiFilter } from "@mdi/js";
import { Modal, Button } from "react-bootstrap";

import Input from "./Input";

export default function Filter(props) {
    const { filterInputs } = props;
    const [showFilterModal, setShowFilterModal] = useState(false);
    const changeFilterModal = () => {
        setShowFilterModal(!showFilterModal);
    };
    return (
        <>
            <button
                className='btn btn-primary rounded-btn py-2'
                onClick={changeFilterModal}
            >
                <Icon
                    path={mdiFilter}
                    style={{ height: "1.5rem", width: "1.5rem" }}
                />
            </button>

            <Modal show={showFilterModal} onHide={changeFilterModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Фильтр</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {filterInputs.map((el) => (
                        <Input
                            name={el.name}
                            label={el.label}
                            type={el.type}
                            value={el.value}
                            radio_inputs={el.radio_inputs}
                            onChange={el.onChange}
                        />
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={changeFilterModal}>
                        Сбросить
                    </Button>
                    <Button variant='primary' onClick={changeFilterModal}>
                        Применить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
