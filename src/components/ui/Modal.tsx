import { X } from "lucide-react";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
    if (!open) return null;
    
    return (
        <div 
            data-slot="modal"
            className="fixed h-full inset-0 flex items-center justify-center z-100"
        >
        
            <div
                className="absolute inset-0 bg-bg/5 backdrop-blur"
                onClick={onClose}
            />

            <div className="bg-card relative max-h-[90%] border-2 border-primary p-6 w-full max-w-md shadow-xl mx-2 rounded-xl">
                
                {children}
    
                <button
                    className="absolute top-3 right-3 text-text-primary"
                    onClick={onClose}
                >
                    <X className="h-4 w-4 cursor-pointer"/>
                </button>
            </div>
        </div>
    )
}