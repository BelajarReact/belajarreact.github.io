import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import Category from "./Category";

export default function Categories() {
  let match = useRouteMatch();
  let history = useHistory();
  console.log(match);

  const args = [
    { id: "makanan", label: "Makanan" },
    { id: "mainan", label: "Mainan dan Hobi" },
    { id: "pekerjaan", label: "Pekerjaan adalah Hobi" }
  ];

  const List = args.map((item, index) => (
    <li key={index}>
      <Link to={`${match.url}/${item.id}`}>{item.label}</Link>
    </li>
  ));
  return (
    <div>
      <header>
        ini adalah halaman{" "}
        <span onClick={() => history.push("/categories")}>Categories</span>
      </header>
      <ul className="mn">{List}</ul>
      <Switch>
        <Route path={`${match.url}/:topicId`}>
          <Category />
        </Route>
        <Route path={`${match.url}`}>
          <h1>Tolong Pilih Topik Terlebih dahulu</h1>
        </Route>
      </Switch>
    </div>
  );
}
