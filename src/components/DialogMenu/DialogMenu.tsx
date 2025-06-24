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
            <button type="button" className='toggle' style={{ ...buttonStyle }} onClick={onToggleClick}>{buttonText ?? 'TOGGLE'}</button>
            <dialog ref={dialogRef} className='dialog'>
                <form method='dialog'>
                    <button type="submit">X</button>
                </form>
                <div className='dialog__content'>
                    {children}
                </div>
            </dialog>
        </>
    )
}

export default DialogMenu