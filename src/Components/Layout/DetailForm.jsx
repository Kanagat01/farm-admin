import { useState } from "react";
import { NavLink } from "react-router-dom";

import Input from "./Input";

export default function DetailForm(props) {
    const { isCreateMode, title, dataObj, relatedInfo } = props;

    const [dataObj2, setObj] = useState({
        ...dataObj,
    });
    const updateObjectField = (fieldName, value) => {
        setObj((prevObj) => ({
            ...prevObj,
            [fieldName]: value,
        }));
    };

    let inputs_list = [];
    let related_links = [];

    Object.entries(relatedInfo).map(([key, relInfo]) => {
        let value = dataObj2[key];
        let verbose_name = relInfo["verbose_name"];
        let type = relInfo["type"];
        let radio_inputs = relInfo["radio_inputs"];

        if (type === "array") {
            related_links.push({
                name: verbose_name,
                route: relInfo["route"],
            });
        } else if (type === "text_array") {
            inputs_list.push({
                label: verbose_name,
                name: key,
                type: type,
                value: value ? value.join(", ") : "",
                onChange: (e) =>
                    updateObjectField(
                        key,
                        e.target.value.replace(" ", "").split(",")
                    ),
            });
        } else {
            inputs_list.push({
                label: verbose_name,
                name: key,
                type: type,
                value: value,
                radio_inputs: radio_inputs,
                onChange: (e) => updateObjectField(key, e.target.value),
            });
        }
        return 0;
    });
    return (
        <form className='row' encType='multipart/form-data'>
            {!isCreateMode ? (
                <div className='table-title my-4'>{title}</div>
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
                        radio_inputs={el.radio_inputs}
                    />
                ))}
                {!isCreateMode ? (
                    <>
                        {related_links.length !== 0 ? (
                            <>
                                <hr />
                                <div className='buttons-group justify-content-end'>
                                    {related_links.map((el) => (
                                        <NavLink
                                            to={el.route}
                                            className='btn btn-primary'
                                        >
                                            {el.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </>
                        ) : (
                            ""
                        )}
                        <hr />
                        <div className='buttons-group justify-content-end'>
                            {dataObj2.hasOwnProperty("is_banned") ? (
                                <button className='btn btn-outline-danger'>
                                    {dataObj2.is_banned
                                        ? "Разблокировать"
                                        : "Заблокировать"}
                                </button>
                            ) : (
                                ""
                            )}
                            <button className='btn btn-secondary'>
                                Отмена
                            </button>
                            <button className='btn btn-success'>
                                Сохранить
                            </button>
                        </div>
                    </>
                ) : (
                    ""
                )}
            </div>
        </form>
    );
}
