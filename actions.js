// end action age

export function CountAgeins() {
    return (dispatch) => {
        return dispatch(countAgein())
    }
}

function countAgein() {
    return {
        type: 'INCREMENT'
    }
}

export function DecrementAgeds() {
    return (dispatch) => {
        return dispatch(countAgedes())
    }
}

function countAgedes() {
    return {
        type: 'DECREMENT'
    }
}

// end action age