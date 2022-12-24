import React, { useReducer } from 'react';

const emailReducer = (state,action) => {
    if( 'SET_EMAIL'===action.type ){
        return {value:action.payload,isValid:action.payload.includes('@')}
    }
    return {value:'',isValid:false}
}

function UseReducer() {
    const [emailState,dispatchEmail] = useReducer(emailReducer,{value:'',isValid:false});
    const emailHandler = (e)=>{
        dispatchEmail({type:'SET_EMAIL',payload:e.target.value});
    }
    return (
        <div>
            <input type="email" name="email" onChange={emailHandler} />
            <p>{emailState.value}</p>
            <p>{emailState.isValid && <p>ya man</p>}</p>
        </div>
    )
}

export default UseReducer