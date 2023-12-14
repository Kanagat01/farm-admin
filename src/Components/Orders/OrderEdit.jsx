import React from 'react'

export default function OrderEdit() {
    return (
      <div className='main'>
            <div class='table-title '>
                Доставка :
            </div>
            <div className='info-block'>
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label htmlFor='full_name'>Страна</label>
                    </div>
                    <div className='col-md-9'>
                        <input
                            type='text'
                            name='full_name'
                            class='form-control border'
                            
                        />
                    </div>
                </div>
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label htmlFor='email'>Регион</label>
                    </div>
                    <div className='col-md-9'>
                        <input
                            type='email'
                            name='email'
                            class='form-control border'
                        />
                    </div>
                </div>
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label htmlFor='description'>Город</label>
                    </div>
                    <div className='col-md-9'>
                        <textarea
                            name='description'
                            class='form-control border'
                        ></textarea>
                    </div>
                </div>
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label htmlFor='username'>Индекс почты</label>
                    </div>
                    <div className='col-md-9'>
                        <input
                            type='text'
                            name='index post'
                            class='form-control border'
                           
                        />
                    </div>
                </div>
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label htmlFor='phone'>Номер телефона</label>
                    </div>
                    <div className='col-md-9'>
                        <input
                            type='text'
                            name='phone'
                            class='form-control border'
                        />
                    </div>
                </div>
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label>ФИО</label>
                    </div>
                    <div className='col-md-9'>
                        <input
                            type='name'
                            className='form-control border'
                            name='FIO'
                        />
                    </div>
                </div>
                <div className='buttons-group justify-content-end'>
                    <button className='btn btn-secondary'>
                        Отмена
                    </button>
                    <button className='btn btn-success'>
                        Сохранить
                    </button>
                </div>
            </div>
      </div>
    )
}
