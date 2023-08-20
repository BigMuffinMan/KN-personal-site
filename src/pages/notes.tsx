import React from "react";
import  {Link, graphql} from "gatsby";


export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { slug: { regex: "/accounting/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

const NotesPage = ({ data }) => {
    return (
      <Layout>
        <h1>Notes</h1>
        <ul>
          {data.allMdx.edges.map(({ node }) => (
            <li key={node.frontmatter.slug}>
              <Link to={`/posts/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  };
  
  export default NotesPage;
  