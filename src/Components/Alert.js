import React from 'react'

function Alert(props) {
     const capitalize = (word)=>{
        const Lower = word.toLowerCase();
        return Lower.charAt(0).toUpperCase() + Lower.slice(1);
        }
    return (
        //If props.alert is null then the code written after && won’t be shown otherwise the code inside <div></div> tag will be displayed.
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>
        
    )
}

export default Alert
