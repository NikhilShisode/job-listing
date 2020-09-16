import { gql } from "@apollo/client";

import client from "./client";

const getJobListings = () =>
  client.query({
    query: gql`
      query job {
        jobs {
          id
          title
          slug
          # description
          locationNames
          company {
            name
            slug
            logoUrl
          }
        }
      }
    `,
  });

const getJobDetails = (companySlug, jobSlug) =>
  client.query({
    query: gql`
  query {
    job(input: {companySlug: "${companySlug}", jobSlug: "${jobSlug}"}) {
      title
      description
      cities {
        name
        slug
      }
      locationNames
      applyUrl
      company {
        logoUrl
        slug
        name
        websiteUrl
      }
      tags {
        name
      }
    }
    }
`,
  });

export default {
  getJobListings,
  getJobDetails,
};
