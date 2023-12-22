import Icon from "@mdi/react";
import { mdiKeyboardBackspace } from "@mdi/js";

export default function BackButton() {
    return (
        <button
            className='btn btn-outline-secondary d-inline-flex align-items-center'
            onClick={window.history.back}
        >
            <Icon path={mdiKeyboardBackspace} size={1} />
            Вернуться назад
        </button>
    );
}
