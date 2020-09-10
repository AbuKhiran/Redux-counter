import {createStore} from "redux";

const reducers =(state,action) => 
{
    switch(action.type)
    {
        case 'Incrase':
            return{counter:state.counter +1}
        case 'decrease':
            return{counter:state.counter -1}
        default:
        return state;
    }

}

const initialstate={
    counter:0
}
export default createStore(reducers,initialstate);
