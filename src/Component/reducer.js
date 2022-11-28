export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after developing
    // token: 'BQB6uydaxCB5GBrVdljwnThooc4F_ZFuM9YklzI9LRl-eHvuaQ…6EQfzuiTDuvdyLsJrKKQwmuaY13oT_FnjsAgBN6YU1PMeboqC',
};

const reducer = (state, action) =>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN': 
            return{
                ...state,
                token:action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }

};

export default reducer;