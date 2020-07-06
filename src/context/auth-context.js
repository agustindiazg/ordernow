import React from 'react';

const authContext = React.createContext({
  authContext: false,
  login: () => {}
})

export default authContext;