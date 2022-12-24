import React, { useReducer, useState, useEffect } from 'react';

function LoginUseReducer() {
    const emailReducer = (state, action) => {
        if ('SET_EMAIL' === action.type) {
            return { value: action.payload, isValid: action.payload.includes('@') };
        }
    }
    const passwordReducer = (state, action) => {
        if ('SET_PASSWORD' === action.type) {
            return { value: action.payload, isValid: action.payload.length > 6 };
        }
    }
    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false });
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleEmail = (e) => {
        dispatchEmail({ type: 'SET_EMAIL', payload: e.target.value });
    }
    const handlePassword = (e) => {
        dispatchPassword({ type: 'SET_PASSWORD', payload: e.target.value })
    }
    const [formIsValid, setFormIsValid] = useState(false);
    const {isValid:emailIsValid} = emailState;
    const {isValid:passwordIsValid} = passwordState;
    useEffect(() => {
        const funId = setTimeout(()=>{
            setFormIsValid( passwordIsValid && emailIsValid );
        },500);
        return () => {
            clearTimeout(funId);
        };
    }, [passwordIsValid,emailIsValid]);

    return (
        <div>
            <input type="email" name="email" value={emailState.value} onChange={handleEmail} />
            <input type="password" name="password" value={passwordState.value} onChange={handlePassword} />
            <button type="submit" disabled={!formIsValid} onSubmit={handleSubmit}>submit</button>
        </div>
    )
}

export default LoginUseReducer