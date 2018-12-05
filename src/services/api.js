import axios from 'axios';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

axios.defaults.baseURL = 'https://laboratorios-api.herokuapp.com';
const client = new ApolloClient({ uri: 'http://localhost:3001/graphql' });

const auth = token => {
  axios.defaults.params = { token };
};

export default {
  auth,
  login: loginParams => axios.post('/login', loginParams),
  users: {
    create: params => axios.post('/usuarios', params)
  },
  reservations: {
    get: params => axios.get('/reservations', params)
  },
  labs: {
    get: async () => {
      const getLabsQry = gql`
        query {
          get_labs {
            id
            name
            short_name
          }
        }
      `;
      return client.query({ query: getLabsQry });
    }
  },
  requests: {
    create: async params => {
      const createRequestQry = gql`
        mutation request(
          $userId: ID!
          $subjectId: ID!
          $teacherId: ID!
          $requestTypeId: ID!
          $laboratoryId: ID!
          $startTime: String!
          $endTime: String!
          $startDate: String
          $endDate: String
          $dia: daysScalar!
        ) {
          create_request(
            userId: $userId
            teacherId: $teacherId
            subjectId: $subjectId
            requestTypeId: $requestTypeId
            laboratoryId: $laboratoryId
            startTime: $startTime
            endTime: $endTime
            startDate: $startDate
            endDate: $endDate
            dia: $dia
          ) {
            id
          }
        }
      `;

      return client.mutate({
        mutation: createRequestQry,
        variables: params
      });
    },
    getUserRequests: async params => {
      const userRequestsQry = gql`
        query userReqs($userId: ID!) {
          user_Requests(userId: $userId) {
            id
            requestType_id {
              type
            }
            laboratory_id {
              name
              short_name
            }
            start_date
            end_date
            start_time
            end_time
            dia
            description
          }
        }
      `;
      return client.query({
        query: userRequestsQry,
        variables: params
      });
    },
    getManagerRequests: async params => {
      const managerRequestsQry = gql`
        query userReqs($userId: ID!) {
          encargado_Requests(userId: $userId) {
            id
            subjectSemester_id {
              teacher {
                id
                first_name
                last_name
              }
              subject {
                name
              }
            }
            laboratory_id {
              name
              short_name
            }
            start_date
            end_date
            start_time
            end_time
            description
          }
        }
      `;
    }
  },
  session: {
    login: async params => {
      const loginQuery = gql`
        query login_query($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            first_name
            last_name
            id
            userType {
              id
              type
              permissions
            }
            token
          }
        }
      `;
      return client.query({
        query: loginQuery,
        variables: params
      });
    }
  },
  semester: {
    getActive: async () => {
      const activeSemesterQry = gql`
        query {
          get_active_Semester {
            start_date
            end_date
          }
        }
      `;

      return client.query({ query: activeSemesterQry });
    }
  },
  subjects: {
    get: async () => {
      const activeSubjectsQry = gql`
        query {
          get_active_Subjects {
            id
            subject {
              name
            }
          }
        }
      `;

      return client.query({ query: activeSubjectsQry });
    },
    getTeachers: async params => {
      const subjectTeachersQry = gql`
        query subjectTeachers($subjectId: ID!) {
          get_Subject_Teachers(subjectId: $subjectId) {
            teacher {
              id
              first_name
              last_name
            }
          }
        }
      `;
      return client.query({
        query: subjectTeachersQry,
        variables: params
      });
    }
  }
};
