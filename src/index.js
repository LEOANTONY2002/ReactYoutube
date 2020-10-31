import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


const Main = () => {
  return (
    <div className="ui container">
      <App/>
    </div>
  );
};

ReactDOM.render(<Main/>,document.querySelector('#root'));