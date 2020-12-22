import { Container, makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import CustomRolls from "./CustomRolls";
import Navigation from "../components/Navigation";

const styles = makeStyles({
  container: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  body: {
    flex: 1,
  },
  navigation: {},
});
export default function Router() {
  const classes = styles();
  return (
    <Container className={classes.container}>
      <BrowserRouter>
        <div className={classes.body}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/custom-rolls">
              <CustomRolls />
            </Route>
          </Switch>
        </div>
        <div className={classes.navigation}>
          <Navigation />
        </div>
      </BrowserRouter>
    </Container>
  );
}
