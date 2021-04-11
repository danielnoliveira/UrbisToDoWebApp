import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import ToDoApp from '../Pages/ToDoApp';
import SignIn from '../Pages/Signin';
import SignUp from '../Pages/Signup';
import NotFound from '../Pages/NotFound';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/app" component={ToDoApp} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;