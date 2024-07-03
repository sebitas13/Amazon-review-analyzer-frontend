

import { useState } from 'react'

export const useForm = (initialState) => {

  const [values, setValues] = useState(initialState);
  
  const handleInput = ({target}) => {
        const {value,name} = target;
        setValues(()=>({...values,[name]:value}))
  }

  const handleReset = () => {
    setValues(initialState);
  }

  return {
    ...values,
    handleInput,
    handleReset,
  }

}
