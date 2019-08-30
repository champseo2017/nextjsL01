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

// google map default postion lat
export const googledeflat = (value) => {
    return dispatch => {
      dispatch({ type: "VALUEGOOGLEDEFLAT", payload:value});
    };
};
// google map default postion lat

// google map default postion lon
export const googledeflon = (value) => {
    return dispatch => {
      dispatch({ type: "VALUEGOOGLEDEFLON", payload:value});
    };
};
// google map default postion lon

// google map lat change postion
export const googlelat = (value) => {
    console.log(value)
    return dispatch => {
      dispatch({ type: "VALUEGOOGLELAT", payload:value});
    };
};
// google map lat change postion


// google map lon change postion
export const googlelon = (value) => {
    return dispatch => {
      dispatch({ type: "VALUEGOOGLELON", payload:value});
    };
  };
// google map lon change postion