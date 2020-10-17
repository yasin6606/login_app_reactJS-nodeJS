import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import Reducer from './Reducer/Reducer';
import Index from './Main/Index.jsx'
import Alert from './Main/Content/Components/Alerts/Alert';

const App = () => {

  const store = createStore(Reducer);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Index />
          <div className="row">
            <div className="col fixed-top col-12 d-md-none d-lg-none d-xl-none">
              <Alert />
            </div>
            <div className="col fixed-bottom d-none d-md-flex d-lg-flex d-xl-flex col-md-6 col-lg-4 col-xl-4">
              <Alert />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
