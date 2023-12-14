import { useState } from "react";

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
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label htmlFor='name'>Название</label>
                    </div>
                    <div className='col-md-9'>
                        <input
                            type='text'
                            name='name'
                            class='form-control'
                            value={culture.name}
                            onChange={(e) =>
                                updateObjectField("name", e.target.value)
                            }
                        />
                    </div>
                </div>
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label htmlFor='description'>Описание</label>
                    </div>
                    <div className='col-md-9'>
                        <textarea
                            name='description'
                            class='form-control'
                            value={culture.description}
                            onChange={(e) =>
                                updateObjectField("description", e.target.value)
                            }
                        ></textarea>
                    </div>
                </div>
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label htmlFor='levels'>Количество уровней</label>
                    </div>
                    <div className='col-md-9'>
                        <input
                            type='number'
                            name='levels'
                            class='form-control'
                            value={culture.levels}
                            onChange={(e) =>
                                updateObjectField("levels", e.target.value)
                            }
                        />
                    </div>
                </div>
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label htmlFor='family_of_plants'>
                            Семейство растений
                        </label>
                    </div>
                    <div className='col-md-9'>
                        <input
                            type='text'
                            name='family_of_plants'
                            class='form-control'
                            value={culture.family_of_plants}
                            onChange={(e) =>
                                updateObjectField(
                                    "family_of_plants",
                                    e.target.value
                                )
                            }
                        />
                    </div>
                </div>
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label htmlFor='max_height'>
                            Максимальная высота (в см)
                        </label>
                    </div>
                    <div className='col-md-9'>
                        <input
                            type='number'
                            name='max_height'
                            class='form-control'
                            value={culture.levels}
                            onChange={(e) =>
                                updateObjectField("max_height", e.target.value)
                            }
                        />
                    </div>
                </div>
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
