import React,{useState} from "react"

function TextInput({id,pattern,successMessage,errorMessage,helperMessage,labelText,changeHandler}) {
    return (
        <div className="input-field">
            <input id={id} type="text" className="validate" pattern={pattern}/>
            <label className="" htmlFor={id}>{labelText}</label>
            <span className="helper-text" data-error={errorMessage} data-success={successMessage}>{helperMessage}</span>
        </div>
    )
}

export default TextInput