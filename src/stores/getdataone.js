import{
    GET_DATA1,
    CLEAR_DATA1
} from './types'

/*action creator*/

export const onGetDataOne = (data) =>{
    return{
        type: GET_DATA1,
        payload:data
    }
}

export const onClearData1 = () => {
    return{
        type: CLEAR_DATA1
    }
}

/*----------------initialState-------------*/
const initialState = {
    label:'',
    backgroundColor: 'primary',
    borderColor: 'primary',
    borderWidth: 1,
    data: []
}

/*-----------------reducers----------------*/

export default function( state=initialState, action){
    console.log("bbbbbbbbbbbbbbbbbbbbb");
    switch(action.type){
        case GET_DATA1:
            return{
                ...state,
                ...action.payload
            }
        case CLEAR_DATA1:
            return{
                ...state,
                ...initialState
            }
        default:
            return state;
    }
}