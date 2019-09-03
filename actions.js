import axios from "axios";

// getaddressLocation
export const getaddressLocation = (latitude, longitude) => {
    var apikey = '1ab0c1cedeba4d39b98b68cdc5df73a4';
    return dispatch => {
        return axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${apikey}&q=${encodeURIComponent(latitude + ',' + longitude)}&pretty=1&no_annotations=1`, {
        }).then(results => {
            dispatch({ type: 'LOAD_LOCATION_SUCCESS', payload: results.data })
        }).catch(err => {
            // กรณี error
            dispatch({ type: 'LOAD_LOCATION_REJECTED', payload: err.message })
        })
    };
};

// lan en th
export const lanenth = (valuelan) => {
    return dispatch => {
        dispatch({ type: 'LOAD_LANENTH', payload: valuelan })
    };
};

// fetch load post
export const loadPosts = (value) => {
    return dispatch => {
        dispatch({
            type: 'LOAD_POSTS',
            payload: fetch(`https://restapiwp.saleallday.com/wp-json/wp/v2/posts?per_page=${value}`)
                .then(result => result.json())
        })
    }
};

// check post 404
export const checkpost404 = (id) => {
  
    return dispatch => {
        return axios.get(`https://restapiwp.saleallday.com/wp-json/wp/v2/posts/${id}`, {
           
        }).then(results => {
            dispatch({ type: 'LOAD_CHECKPOST_SUCCESS', payload: results.data })
        }).catch(err => {
            // กรณี error
            dispatch({ type: 'LOAD_CHECKPOST_REJECTED', payload: err.message })
        })
    }
};

// load post id
export const loadpostid = (id) => {
    //console.log(id)
    return dispatch => {
        return axios.get(`https://restapiwp.saleallday.com/wp-json/wp/v2/posts/${id}`, {
           
        }).then(results => {
            dispatch({ type: 'LOAD_POSTID_FULFILLED', payload: results.data }) ;
           
        }).catch(err => {
            console.log(err)
            // กรณี error
            dispatch({ type: 'LOAD_POSTID_REJECTED', payload: err.message })
        })
    }
};

// save id post 
export const Saveidposts = (id) => {
    console.log(id)
    return dispatch => {
            dispatch({ type: 'SAVE_POSTID_SUCCESS', payload:id})
    }
};
