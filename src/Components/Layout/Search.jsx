import Icon from "@mdi/react";
import { mdiArrowRightThick } from "@mdi/js";

export default function Search(props) {
    const { placeholder } = props;
    return (
        <form action='#' className='search-box'>
            <div className='input-group'>
                <input
                    type='text'
                    className='form-control'
                    id='inlineFormInputGroup'
                    placeholder={placeholder}
                    autoComplete='off'
                />
                <button
                    className='btn btn-primary rounded-btn d-inline-flex align-items-center justify-content-center'
                    type='submit'
                >
                    <Icon path={mdiArrowRightThick} size={1} />
                </button>
            </div>
        </form>
    );
}
