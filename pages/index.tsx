import * as React from "react";
import { NextStatelessComponent } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Layout from "../components/Layout";

interface PostLinkProps {
  id: string;
  title: string;
}

const PostLink: NextStatelessComponent<PostLinkProps> = ({ title, id }) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Index: NextStatelessComponent<{}> = ({}) => (
  <Layout>
    <h1>Blog Posts</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Index;
