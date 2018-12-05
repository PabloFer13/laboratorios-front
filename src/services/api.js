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
  requests: {
    create: async params => {
      const createRequestQry = gql`
        mutation request(
          $userId: ID!
          $subjectSemesterId: ID!
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
            subjectSemesterId: $subjectSemesterId
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

      return client.query({
        query: createRequestQry,
        variables: params
      });
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
  }
};
