type ErrorMessageProps = {
    message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <div className="text-center my-5">
            <img src="/mishi-error.png" className="m-auto w-96"/>
            <p className="text-2xl font-bold text-primary">¡Error!</p>
            <p className="text-lg font-bold text-primary">{message}</p>
        </div>
    )
}