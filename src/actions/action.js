// import {createAction} from 'redux-actions';
import C from './constants'

//  export const searchItem = createAction<string>(SEARCH_ITEM);


export function searchItem(value) {

    return {
        type: C.SEARCH_FILTER,
        payload: value
    }

}


export function filterItem(value) {

    return {
        type: C.SEARCH_FILTER,
        payload: value
    }

}

