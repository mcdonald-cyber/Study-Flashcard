import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Switch, Route} from "react-router-dom";
import Home from "../Components/Home/Home";
import View from "../Components/View/View";
import Create from "../Components/Deck//Create"
import EditDeck from "../Components/Deck/Edit"
import CreateCard from "../Components/Card/Create"
import EditCard from "../Components/Card/Edit"

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
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CreateCard />
          </Route>
          <Route path="/decks/:deckId/cards/edit">
            <EditCard />
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
