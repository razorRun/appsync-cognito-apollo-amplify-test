const { CognitoUser, AuthenticationDetails, CognitoUserPool } = require('amazon-cognito-identity-js');
const { ApolloClient, InMemoryCache, createHttpLink, gql } = require('@apollo/client/core');

const poolData = {
    UserPoolId: '',
    ClientId: ''
};

const userPool = new CognitoUserPool(poolData);

function signIn(username, password) {
    return new Promise((resolve, reject) => {
        const authenticationDetails = new AuthenticationDetails({
            Username: username,
            Password: password,
        });

        const cognitoUser = new CognitoUser({
            Username: username,
            Pool: userPool,
        });

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (session) => {
                resolve(session.getIdToken().getJwtToken());
            },
            onFailure: (err) => {
                reject(err);
            },
        });
    });
}


const httpLink = createHttpLink({
    uri: '', // gql endpoint
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

const QUERY = gql`
    query SampleQuery {
        getItems(userId: "12") {
            itemName
            itemId
        }
    }
`;

async function fetchAppSyncData(token) {
    try {
        const result = await client.query({
            query: QUERY,
            context: {
                headers: {
                    Authorization: token
                }
            }
        });
        return result.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

async function main() {
    const username = '';
    const password = '';

    const token = await signIn(username, password);
    console.log("Cognito Token:", token);

    const data = await fetchAppSyncData(token);
    console.log(JSON.stringify(data, null, 2));
}

main();
