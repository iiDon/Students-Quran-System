import { gql } from "@apollo/client";

// get all students data
export const GET_ALL_STUDENTS = gql`
  query getStudents {
    students(pagination: { limit: 100 }) {
      data {
        id
        attributes {
          name
          phoneNumber
          fatherName
          fatherPhoneNumber
          stage {
            data {
              id
              attributes {
                stage
              }
            }
          }
          halqa {
            data {
              id
              attributes {
                name
              }
            }
          }
          qrCode
        }
      }
    }
  }
`;

// get halqat
export const GET_ALL_HALQAT = gql`
  query getHalqas {
    halqas {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

// get stages
export const GET_ALL_STAGES = gql`
  query getStages {
    stages {
      data {
        id
        attributes {
          stage
        }
      }
    }
  }
`;

export const GET_ONE_STUDENT = gql`
  query GetOneStudent($id: ID!) {
    student(id: $id) {
      data {
        id
        attributes {
          name
          phoneNumber
          fatherName
          fatherPhoneNumber
          stage {
            data {
              attributes {
                stage
              }
            }
          }
          halqa {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_HALQA_PHONES = gql`
  query GetOneStudent($id: ID!) {
    halqa(id: $id) {
      data {
        attributes {
          students {
            data {
              attributes {
                phoneNumber
              }
            }
          }
        }
      }
    }
  }
`;

// Get students points
export const GET_STUDENTS_POINTS = gql`
  query getStudentsPoints {
    students(pagination: { limit: 100 }) {
      data {
        id
        attributes {
          name
          halqa {
            data {
              id
              attributes {
                name
              }
            }
          }
          SavingPoints {
            data {
              attributes {
                value
                createdAt
              }
            }
          }
          ReapetingPoints {
            data {
              attributes {
                value
                createdAt
              }
            }
          }
          recitation {
            data {
              attributes {
                value
                createdAt
              }
            }
          }
          links {
            data {
              attributes {
                value
                createdAt
              }
            }
          }
          attend {
            data {
              attributes {
                value
                createdAt
              }
            }
          }
        }
      }
    }
  }
`;

// get points
// export const GET_ALL_POINTS_TYPES
