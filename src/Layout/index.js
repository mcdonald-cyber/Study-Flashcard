import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Switch, Route} from "react-router-dom";
import Home from "../Components/Home/Home";
import View from "../Components/View/View";
import Create from "../Components/Deck//Create"

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
            <Route path="/desks/new">
              <Create />
            </Route>
          </Route>
          <Route path="/decks/:deckId">
            <View />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
