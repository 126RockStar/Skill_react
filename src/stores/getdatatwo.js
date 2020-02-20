import{
    GET_DATA2,
    CLEAR_DATA2
} from './types'

/*action creator*/

export const onGetDataTwo = (data) =>{
    return{
        type: GET_DATA2,
        payload:data
    }
}

export const onClearData2 = () => {
    return{
        type: CLEAR_DATA2
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
        case GET_DATA2:
            return{
                ...state,
                ...action.payload
            }
        case CLEAR_DATA2:
            return{
                ...state,
                ...initialState
            }
        default:
            return state;
    }
}