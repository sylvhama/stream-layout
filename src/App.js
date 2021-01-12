import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { InOuTro, Main } from "./components";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/intro">
          <InOuTro
            title="Début de La lecture en continu..."
            src="https://64.media.tumblr.com/965f6dd7055367c854d7f6799a8c4b96/tumblr_oly81wdEDo1rnbw6mo1_540.gifv"
          />
        </Route>
        <Route path="/outro">
          <InOuTro
            title="Fin de la lecture en continu."
            src="https://64.media.tumblr.com/a4128288be7be4f62cc145c243c5dc95/861089564bf6bee8-0f/s500x750/7e2bc0e2e8afb56a4a37a8e739e85b89c842120a.gifv"
          />
        </Route>
        <Route>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
