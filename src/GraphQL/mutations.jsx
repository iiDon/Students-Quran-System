import { gql } from "@apollo/client";

// delete a spicific student
export const DELETE_ONE_STUDENT = gql`
  mutation deleteStudent($id: ID!) {
    deleteStudent(id: $id) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

//add a student
export const ADD_A_STUDENT = gql`
  mutation createStudent(
    $name: String!
    $stage: ID!
    $halqa: ID!
    $phoneNumber: String!
    $fatherName: String!
    $fatherPhoneNumber: String!
    $qrCode: String!
  ) {
    createStudent(
      data: {
        name: $name
        stage: $stage
        halqa: $halqa
        phoneNumber: $phoneNumber
        fatherName: $fatherName
        fatherPhoneNumber: $fatherPhoneNumber
        qrCode: $qrCode
      }
    ) {
      data {
        id
        attributes {
          name
          phoneNumber
          fatherName
          phoneNumber
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
          qrCode
        }
      }
    }
  }
`;
