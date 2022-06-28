import {useState, useEffect, useRef} from 'react';

const useValidate = (callback) => {
    const inputRef = useRef();
    const [isInputValid, setIsInputValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const hasError = isTouched && !isInputValid;
    console.log('Re-rendered')

    const onChangeHanler = () => {
        const enteredText = inputRef.current.value; 
        if(callback(enteredText)){
            setIsInputValid(true)
        } else {
            setIsInputValid(false)
        }
    }

    const onBlurHandler = () => {
        setIsTouched(true);
    }

    return {onBlurHandler, onChangeHanler, inputRef, hasError, isInputValid};
    
};
export default useValidate;