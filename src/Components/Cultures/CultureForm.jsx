import { useState } from "react";
import Input from "../Input";

export default function CultureForm(props) {
    const isCreateMode = Object.keys(props).length === 0;
    const { cultureObj } = props;
    const [culture, setCulture] = useState({
        ...cultureObj,
    });

    const updateObjectField = (fieldName, value) => {
        setCulture((prevCulture) => ({
            ...prevCulture,
            [fieldName]: value,
        }));
    };
    const inputs_list = [
        {
            label: "Название",
            name: "name",
            type: "text",
            value: culture.name,
            onChange: (e) => updateObjectField("name", e.target.value),
        },
        {
            label: "Описание",
            name: "description",
            type: "textarea",
            value: culture.description,
            onChange: (e) => updateObjectField("description", e.target.value),
        },
        {
            label: "Количество уровней",
            name: "levels",
            type: "number",
            value: culture.levels,
            onChange: (e) => updateObjectField("levels", e.target.value),
        },
        {
            label: "Семейство растений",
            name: "family_of_plants",
            type: "text",
            value: culture.family_of_plants,
            onChange: (e) =>
                updateObjectField("family_of_plants", e.target.value),
        },
        {
            label: "Максимальная высота (в см)",
            name: "max_height",
            type: "number",
            value: culture.max_height,
            onChange: (e) => updateObjectField("max_height", e.target.value),
        },
    ];
    return (
        <form className='row' encType='multipart/form-data'>
            {!isCreateMode ? (
                <div class='table-title my-4'>
                    Информация о культуре #{culture.id} {culture.name}
                </div>
            ) : (
                ""
            )}
            <div className='info-block'>
                {inputs_list.map((el) => (
                    <Input
                        label={el.label}
                        name={el.name}
                        type={el.type}
                        value={el.value}
                        onChange={el.onChange}
                    />
                ))}
            </div>
            {!isCreateMode ? (
                <>
                    <hr />
                    <div className='buttons-group justify-content-center'>
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
