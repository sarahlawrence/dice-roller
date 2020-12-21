import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import CustomRolls from "./CustomRolls";

export default function Router() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/custom-rolls">
            <CustomRolls />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}
