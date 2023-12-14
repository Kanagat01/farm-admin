import { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../Input";
import { getConfiguration, getModel } from "../../utils/api_connection";

export default function ConfigurationForm() {
    const { model_id } = useParams;
    console.log(model_id);
    let model = getModel(parseInt(model_id, 10));
    const configurationObj = getConfiguration();
    const [configuration, setConfiguration] = useState({
        ...configurationObj,
    });

    const updateObjectField = (fieldName, value) => {
        setConfiguration((prevConfiguration) => ({
            ...prevConfiguration,
            [fieldName]: value,
        }));
    };
    const inputs_list = [
        {
            name: "unit_of_measure",
            label: "Единица измерения",
            type: "radio",
            radio_inputs: [
                { value: "inch", label: "Дьюим" },
                { value: "millimeter", label: "Миллиметр" },
            ],
            value: configuration.unit_of_measure,
            onChange: (e) =>
                updateObjectField("unit_of_measure", e.target.value),
        },
        {
            name: "unit_of_temp_measure",
            label: "Единица измерения температуры",
            type: "radio",
            radio_inputs: [
                { value: "C", label: "C" },
                { value: "F", label: "F" },
                { value: "K", label: "K" },
            ],
            value: configuration.unit_of_temp_measure,
            onChange: (e) =>
                updateObjectField("unit_of_temp_measure", e.target.value),
        },
        {
            name: "x",
            label: "X",
            type: "number",
            value: configuration.x,
            onChange: (e) => updateObjectField("x", e.target.value),
        },
        {
            name: "y",
            label: "Y",
            type: "number",
            value: configuration.y,
            onChange: (e) => updateObjectField("y", e.target.value),
        },
        {
            name: "z",
            label: "Z",
            type: "number",
            value: configuration.z,
            onChange: (e) => updateObjectField("z", e.target.value),
        },
        {
            name: "offset_x",
            label: "Смещение Х",
            type: "number",
            value: configuration.offset_x,
            onChange: (e) => updateObjectField("offset_x", e.target.value),
        },
        {
            name: "offset_y",
            label: "Смещение Y",
            type: "number",
            value: configuration.offset_y,
            onChange: (e) => updateObjectField("offset_y", e.target.value),
        },
        {
            name: "offset_z",
            label: "Смещение Z",
            type: "number",
            value: configuration.offset_z,
            onChange: (e) => updateObjectField("offset_z", e.target.value),
        },
        {
            name: "diameter",
            label: "Диаметр",
            type: "number",
            value: configuration.diameter,
            onChange: (e) => updateObjectField("diameter", e.target.value),
        },
    ];
    return (
        <form>
            <div class='table-title my-4'>
                Информация о конфигурации модели #{model.id} {model.name}
            </div>

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
            <hr />
            <div className='buttons-group justify-content-end'>
                <button className='btn btn-secondary' type='reset'>
                    Отмена
                </button>
                <button className='btn btn-success' type='submit'>
                    Сохранить
                </button>
            </div>
        </form>
    );
}
