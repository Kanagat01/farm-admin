import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className='error-container'>
            <h1 className='display-1 error-heading'>
                {error.status ? error.status : "404"}
            </h1>
            <h2 className='error-code'>
                {error.statusText ? error.statusText : "Not found"}
            </h2>
            <p className='error-message'>
                {error.data
                    ? error.data
                    : "The page you are looking for might have been removed had its name changed or is temporarily unavailable."}
            </p>
            <a href='/' className='btn btn-primary'>
                Вернуться на главную
            </a>
        </div>
    );
}
