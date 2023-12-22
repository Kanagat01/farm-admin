import { useState } from "react";
import Input from "../Layout/Input";
import { NavLink, generatePath } from "react-router-dom";
import { USER_ROUTE } from "../../utils/consts";

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
    const related_links = [
        // { route: generatePath(USER_ROUTE, {user_id: }), name: "Владелец" },
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
                    {}
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
