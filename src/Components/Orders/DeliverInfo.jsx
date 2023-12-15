import React from "react";
import Input from "../Input";

export default function DeliverInfo() {
    const inputs_list = [
        {
            label: "ФИО",
            name: "full_name",
            type: "text",
        },
        {
            label: "Номер телефона",
            name: "phone",
            type: "phone",
        },
        {
            label: "Страна",
            name: "country",
            type: "text",
        },
        {
            label: "Регион",
            name: "region",
            type: "text",
        },
        {
            label: "Город",
            name: "city",
            type: "text",
        },
        {
            label: "Индекс почты",
            name: "post_index",
            type: "text",
        },
    ];
    return (
        <div className='main'>
            <div class='table-title '>Доставка #{deliver.id}</div>
            <div className='info-block'>
                {inputs_list._list.map((el) => (
                    <Input label={el.label} name={el.name} type={el.type} />
                ))}
                <hr />
                <div className='buttons-group justify-content-end'>
                    <button className='btn btn-secondary'>Отмена</button>
                    <button className='btn btn-success'>Сохранить</button>
                </div>
            </div>
        </div>
    );
}
