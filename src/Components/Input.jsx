export default function Input(props) {
    const { name, label, type, value, onChange } = props;
    if (type === "checkbox") {
        return (
            <label class='form-group checkbox-field row'>
                <div className='col-md-3 d-flex justify-content-end'>
                    <label htmlFor={name}>{label}</label>
                </div>
                <div className='col-md-9 position-relative'>
                    <input
                        type={type}
                        name={name}
                        onChange={onChange}
                        checked={value}
                    />

                    <span class='checkmark'></span>
                </div>
            </label>
        );
    } else if (type === "radio") {
        const { radio_inputs } = props;
        return (
            <div class='form-group input-rounded row d-flex align-items-center'>
                <div className='col-md-3 d-flex justify-content-end'>
                    <label htmlFor='subscription_type'>{label}</label>
                </div>
                <div className='col-md-9'>
                    <div class='custom-radio-inputs'>
                        {radio_inputs.map((el) => (
                            <label>
                                <input
                                    type='radio'
                                    name={name}
                                    value={el.value}
                                    checked={el.value === value}
                                    onChange={onChange}
                                />
                                <span>{el.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div class='form-group input-rounded row d-flex align-items-center'>
            <div className='col-md-3 d-flex justify-content-end'>
                <label htmlFor={name}>{label}</label>
            </div>
            <div className='col-md-9'>
                <input
                    type={type}
                    name={name}
                    class='form-control'
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
