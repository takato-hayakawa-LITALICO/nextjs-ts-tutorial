import * as React from "react";
import { NextStatelessComponent } from "next";
import Header from "../components/Header";
import Layout from "../components/Layout";

const About: NextStatelessComponent<{}> = ({}) => (
  <Layout>
    This is About page.
  </Layout>
);

export default About;
