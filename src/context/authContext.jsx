import React from 'react';

const AuthContext = React.createContext({
	user: false,
	login: () => {},
	logout: () => {},
});

AuthContext.displayName = 'AuthContext'; //Do debuggowania React plug chrome dodaje nazwe z Context.Provider na AuthContext.Provider

export default AuthContext;
