import React, { useState } from "react"

function TextInput({ id, successMessage, errorMessage, helperMessage, labelText, changeHandler, validationState, value , disabled}) {
    let validValue = ""

    if (validationState === 0 || validationState === 1) {
        validValue = validationState === 0 ? "invalid" : "valid"
    }


    return (
        <div className="input-field">
            <input id={id} type="text" className={validValue} onChange={changeHandler} value={value} disabled={disabled}/>
            <label className="" htmlFor={id}>{labelText}</label>
            <span className="helper-text" data-error={errorMessage} data-success={successMessage}>{helperMessage}</span>
        </div>
    )

}

export default TextInput