import Button from "../components/Button"
import React from "react"
function Dialog({ heading, children, open,onConfirm}) {
    
    console.log(open)

    return (
        <div className={ open ? `login__dialogBackground login__dialogBackground--open` : `login__dialogBackground login__dialogBackground--close`} onClick={onConfirm}>
            <dialog id="modal1" className="login__successDialog" open={open}>
                <section>
                    <div className="modal-content">
                        <h1 className="login__dialogHeading">{heading}</h1>
                        {children}
                    </div>
                    <footer className="modal-footer">
                        <Button clickHandler={onConfirm} text="cerrar" classes="login__closeSuccessDialog" />
                    </footer>
                </section>
            </dialog>
        </div>
    )
}

export default Dialog