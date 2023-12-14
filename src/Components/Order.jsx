import React from 'react'

export default function Order(){
    return (
      <div className="main">
            <div class='table-title '>
                Товары
            </div>
            <div class='table-title '>
                Покупатель
            </div>
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
                            class='form-control'
                            
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
                            class='form-control'
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
                            class='form-control'
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
                            class='form-control'
                           
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
                            class='form-control'
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
                            className='form-control'
                            name='FIO'
                        />
                    </div>
                </div>
            </div>
      </div>
    )
}
