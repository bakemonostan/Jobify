import React, { useReducer, useContext } from 'react';

import reducer from './reducer';
import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';

// reducer states
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};

// create the context
const AppContext = React.createContext();

// create context component
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    // always dispatch an action type
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  // to clear the alert after 3 seconds
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  //context components always return a provider
  return (
    // use spread operator to pass in all the states
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {/* children in context is your application */}
      {children}
    </AppContext.Provider>
  );
};

// export your context as a custom hook
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
