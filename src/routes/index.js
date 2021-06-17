import React from "react";
import Header from "../components/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Home = React.lazy(() => import("../pages/Home"));
const single = React.lazy(() => import("../pages/single"));
const Blog = React.lazy(() => import("../pages/Blog"));
const blogLeftSidebar = React.lazy(() =>
  import("../pages/blogs/blog_left_sidebar")
);
const blogRightSidebar = React.lazy(() =>
  import("../pages/blogs/blog_right_sidebar")
);
const BlogDetail = React.lazy(() => import("../pages/blogs/no_sidebar"));

const Routes = () => (
  <Router>
    <React.Suspense fallback={() => <h1>loading</h1>}>
      <Header topClass="top-header" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/single/:id" component={single} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/blogLeftSidebar" component={blogLeftSidebar} />
        <Route exact path="/blogRightSidebar" component={blogRightSidebar} />
        <Route exact path="/BlogDetail" component={BlogDetail} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default Routes;
