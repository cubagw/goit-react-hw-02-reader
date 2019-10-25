import React from 'react';
import Reader from './Reader/Reader';

// import user from './Profile/user.json';
// import statsConfig from './Stats/statsConfig.json';
// import transactions from './TransactionHistory/transactions.json';
import publications from '../data/publications.json';

const App = () => <Reader items={publications} />;
export default App;
