import React , { createContext, useContext, useReducer} from 'react';


const AppDataStateContext = createContext(null);
const AppDataDispatcherContext = createContext(null);

const app_data_initial_state = 
{
    selected_dates: new Set(),
};

function app_data_reducer(state, action)
{
    let new_state = {}
    switch(action.type)
    {
        case 'update_selected_dates':
        {
            new_state = {...state};
            new_state.selected_dates = new Set(action.selected_dates);
            return new_state;
        }

        default:
            console.log('Data action not found !');
    }
}

export default function AppDataProvider(props)
{
    console.log(app_data_initial_state)
    const [app_data_state, app_data_dispatcher] = useReducer(
        app_data_reducer,
        app_data_initial_state
    );

    return (
        <AppDataStateContext.Provider value={app_data_state}>
            <AppDataDispatcherContext.Provider value={app_data_dispatcher}>
                {props.children}
            </AppDataDispatcherContext.Provider>
        </AppDataStateContext.Provider>
    );
}

export function get_app_data_state()
{
    return useContext(AppDataStateContext);
}

export function get_app_data_dispatcher()
{
    return useContext(AppDataDispatcherContext);
}

