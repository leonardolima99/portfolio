export const queryGetData = gql`
  query Pages($lang: String!) {
    page(where: { lang: $lang }) {
      hero {
        headline {
          html
        }
        photo {
          url
        }
        alt
      }
      about {
        headline
        content {
          html
        }
      }
      techs {
        headline
        content {
          html
        }
        techs {
          name
          image {
            url
          }
          alt
          id
        }
      }
      projects {
        headline
        content {
          html
        }
        projects {
          techs {
            name
            id
            image {
              url
            }
            alt
          }
          viewCode
          livePreview
        }
      }
      workExperiences {
        headline
        content {
          html
        }
        workExperience {
          id
          endDate
          employer
          category
          incomplete
          location
          position
          startDate
          untilNow
        }
      }
      educations {
        educations {
          startDate
          untilNow
          position
          location
          incomplete
          id
          endDate
          employer
          category
        }
        id
      }
      contact {
        headline {
          html
        }
      }
      id
      lang
      createdAt
      publishedAt
      updatedAt
    }
  }
`;
