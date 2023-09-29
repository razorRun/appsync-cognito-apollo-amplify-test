const Amplify = require('@aws-amplify/core').default;
const Auth = require('aws-amplify').Auth;
const API = require('aws-amplify').API;
const graphqlOperation = require('aws-amplify').graphqlOperation;

Amplify.configure({
    Auth: {
        region: '',
        userPoolId: '',
        userPoolWebClientId: '',
    },
    API: {
        aws_appsync_graphqlEndpoint: '',
        aws_appsync_region: '',
        aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS'
    }
});

async function signIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        console.log('User logged in:', user);
        return user;
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
}

async function fetchAppSyncData(query) {
    try {
        const data = await API.graphql(graphqlOperation(query));
        return data;
    } catch (error) {
        console.error('Error fetching data from AppSync:', error);
        throw error;
    }
}

async function main() {
    const username = '';
    const password = '';

    await signIn(username, password);

    const sampleQuery = `
    {
        getItems(userId: "12") {
                itemName
                itemId
            }
    }
    `;

    const results = await fetchAppSyncData(sampleQuery);
    console.log(JSON.stringify(results, null, 2));
}

main();
