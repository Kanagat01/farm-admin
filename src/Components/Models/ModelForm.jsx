import { useState } from "react";
import Input from "../Input";
import { NavLink, generatePath } from "react-router-dom";
import { CONFIGURATION_ROUTE } from "../../utils/consts";

export default function ModelForm(props) {
    const isCreateMode = Object.keys(props).length === 0;
    const { modelObj } = props;
    const [model, setModel] = useState({
        ...modelObj,
    });

    const updateObjectField = (fieldName, value) => {
        setModel((prevModel) => ({
            ...prevModel,
            [fieldName]: value,
        }));
    };
    const inputs_list = [
        {
            name: "name",
            label: "Название",
            type: "text",
            value: model.name,
            onChange: (e) => updateObjectField("name", e.target.value),
        },
        {
            name: "x",
            label: "Высота",
            type: "number",
            value: model.x,
            onChange: (e) => updateObjectField("x", e.target.value),
        },
        {
            name: "y",
            label: "Высота",
            type: "number",
            value: model.y,
            onChange: (e) => updateObjectField("y", e.target.value),
        },
        {
            name: "z",
            label: "Высота",
            type: "number",
            value: model.z,
            onChange: (e) => updateObjectField("z", e.target.value),
        },
        {
            name: "top_temp",
            label: "Температура верха",
            type: "number",
            value: model.top_temp,
            onChange: (e) => updateObjectField("top_temp", e.target.value),
        },
        {
            name: "bottom_temp",
            label: "Температура низа",
            type: "number",
            value: model.bottom_temp,
            onChange: (e) => updateObjectField("bottom_temp", e.target.value),
        },
        {
            name: "ventilation_temp",
            label: "Температура вентилятора",
            type: "number",
            value: model.ventilation_temp,
            onChange: (e) =>
                updateObjectField("ventilation_temp", e.target.value),
        },
        {
            name: "data_transfer_rate",
            label: "Скорость передачи данных",
            type: "number",
            value: model.data_transfer_rate,
            onChange: (e) =>
                updateObjectField("data_transfer_rate", e.target.value),
        },
        {
            name: "speed_of_movement",
            label: "Скорость перемещения (мм)",
            type: "number",
            value: model.speed_of_movement,
            onChange: (e) =>
                updateObjectField("speed_of_movement", e.target.value),
        },
        {
            name: "feed_rate",
            label: "Скорость подачи (мм / мин)",
            type: "number",
            value: model.feed_rate,
            onChange: (e) => updateObjectField("feed_rate", e.target.value),
        },
        {
            name: "max_top_temp",
            label: "Максимальная температура верха",
            type: "number",
            value: model.max_top_temp,
            onChange: (e) => updateObjectField("max_top_temp", e.target.value),
        },
        {
            name: "max_bottom_temp",
            label: "Максимальная температура низа",
            type: "number",
            value: model.max_bottom_temp,
            onChange: (e) =>
                updateObjectField("max_bottom_temp", e.target.value),
        },
        {
            name: "start_from_center",
            label: "Начинать с центра",
            type: "checkbox",
            value: model.start_from_center,
            onChange: () =>
                updateObjectField(
                    "start_from_center",
                    !model.start_from_center
                ),
        },
        {
            name: "high_temperature_mode",
            label: "Режим повышенной температуры",
            type: "checkbox",
            value: model.high_temperature_mode,
            onChange: () =>
                updateObjectField(
                    "high_temperature_mode",
                    !model.high_temperature_mode
                ),
        },
    ];
    return (
        <form encType='multipart/form-data'>
            {!isCreateMode ? (
                <div class='table-title my-4'>
                    Информация о модели #{model.id} {model.name}
                </div>
            ) : (
                ""
            )}
            <div className='info-block'>
                {inputs_list.map((el) => (
                    <Input
                        name={el.name}
                        label={el.label}
                        type={el.type}
                        value={el.value}
                        onChange={el.onChange}
                    />
                ))}
            </div>
            {!isCreateMode ? (
                <>
                    <hr />
                    <div className='buttons-group justify-content-end'>
                        <NavLink
                            to={generatePath(CONFIGURATION_ROUTE, {
                                model_id: model.id,
                            })}
                            className='btn btn-primary'
                        >
                            Конфигурация
                        </NavLink>
                    </div>
                    <hr />
                    <div className='buttons-group justify-content-end'>
                        <button className='btn btn-secondary' type='reset'>
                            Отмена
                        </button>
                        <button className='btn btn-success' type='submit'>
                            Сохранить
                        </button>
                    </div>
                </>
            ) : (
                ""
            )}
        </form>
    );
}
