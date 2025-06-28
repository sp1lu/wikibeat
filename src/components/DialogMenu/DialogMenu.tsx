/** Libraries */
import { useRef, type CSSProperties, type PropsWithChildren } from 'react'

/** Styles */
import './DialogMenu.css'

/** Interfaces */
export interface DialogMenuProps {
    buttonText?: string;
    buttonStyle?: CSSProperties
}

/** Component */
function DialogMenu(props: PropsWithChildren<DialogMenuProps>) {
    const { children, buttonText, buttonStyle } = props;

    /** Hooks */
    const dialogRef = useRef<HTMLDialogElement>(null);

    /** Methods */
    const onToggleClick = (): void => {
        if (!dialogRef.current) return;
        dialogRef.current.open ? dialogRef.current.close() : dialogRef.current.showModal();
    }

    /** View */
    return (
        <>
            <button type='button' className='toggle' style={{ ...buttonStyle }} onClick={onToggleClick}>{buttonText ?? 'TOGGLE'}</button>
            <dialog ref={dialogRef} className='dialog'>
                <form method='dialog' className='close-btn-wrapper'>
                    <button type='submit' className='close-btn'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24px'height='24px' viewBox='0 -960 960 960' fill='currentColor'>
                            <path d='m322.15-293.08-29.07-29.07L450.92-480 293.08-636.85l29.07-29.07L480-508.08l156.85-157.84 29.07 29.07L508.08-480l157.84 157.85-29.07 29.07L480-450.92 322.15-293.08Z' />
                        </svg>
                    </button>
                </form>
                <div className='dialog__content'>
                    {children}
                </div>
            </dialog>
        </>
    )
}

export default DialogMenu