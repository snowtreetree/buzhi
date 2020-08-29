import React, {useState}from 'react'

function useCustom(init){
    const [value,setValue] = useState(init||{})
    setTimeout(() => {
        setValue(2)
    }, 3000);
    return {
        value
    }
}

export default useCustom