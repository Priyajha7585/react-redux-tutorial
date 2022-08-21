export const increament = (newValue) => {
    return{
        type: 'INCREAMENT',
        payload: newValue
    }
}

export const decreament = () => {
    return{
        type: 'DECREAMENT'
    }
}