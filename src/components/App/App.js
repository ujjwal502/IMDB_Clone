import React from 'react';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import NotFound from '../elements/NotFound/NotFound'
import Movie from '../Movie/Movie';

const App =() => (
    <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:movieId" component={Movie} exact />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

//Second route is movie component ,
//when we click on perticular movie it gives id with variable(movieid)
//If none of routes ,it goes to NotFound cmpnt.
export default App;
 