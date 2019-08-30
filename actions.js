import axios from "axios";

// getaddressLocation
export const getaddressLocation = (latitude, longitude) => {
    var apikey = '1ab0c1cedeba4d39b98b68cdc5df73a4';
    return dispatch => {
      return axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${apikey}&q=${encodeURIComponent(latitude + ',' + longitude)}&pretty=1&no_annotations=1`,{
        }).then(results => {
            /* 
                เมื่อข้อมูลส่งกลับมาก็สั่ง dispatch ให้ reducer รู้พร้อมส่ง payload axios จะส่งข้อมูลกลับมากับ object ชื่อ data
            */
        dispatch({type:'LOAD_LOCATION_SUCCESS', payload: results.data})
        }).catch(err => {
            // กรณี error
            dispatch({type:'LOAD_LOCATION_REJECTED', payload: err.message})
        })
    };
};