import { LoaderCircle } from "lucide-react";

type LoadProps = {
    className?: string;
    classNameIcon?: string;
}

export default function Load({className, classNameIcon}: LoadProps) {
    return (
        <div className={`${className}`}>
            <LoaderCircle className={`animate-spin ${classNameIcon}`} />
        </div>
    )
}