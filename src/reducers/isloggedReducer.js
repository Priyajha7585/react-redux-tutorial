const isloggedReducer = (state=false, action) => {
    switch(action.type)
    {
        case 'IS_LOGGED':
            return state = true;
        case 'NOT_LOGGED':
            return state = false;
        default:
            return state;
    }
}

export default isloggedReducer;