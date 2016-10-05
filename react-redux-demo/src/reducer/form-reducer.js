let initialState = {
    fname: '',
    lname: '',
    email: '',
    optIn: false,
    formObj: {}
}

let formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_SUBMIT':
            return Object.assign({}, state, {
                formObj: action.formObj
            })
        case 'FORM_DATA':
            return Object.assign({}, state, {
                fname: action.fname,
                lname: action.lname,
                email: action.email
            })
        case 'IS_CHECKED':
            return Object.assign({}, state, {
                optIn: action.optIn
            })
        default:
            return state
    }
}

export default formReducer;