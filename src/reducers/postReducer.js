import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [ ], // post that is coming from an action where there is a fetch request
    item: { } // single post that we add and get a response
}

export default function( state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
            default:
                return state;
    }
}