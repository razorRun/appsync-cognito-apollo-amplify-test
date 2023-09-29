const { CognitoUser, AuthenticationDetails, CognitoUserPool } = require('amazon-cognito-identity-js');
const fetch = require('node-fetch');

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

async function fetchAppSyncData(token) {
    const url = '';//gql endpoint
    const body = {
        query: `query SampleQuery {
            getItems(userId: "12") {
                itemName
                itemId
            }
        }`,
        variables: {}
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };

    const response = await fetch(url, requestOptions);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}

async function main() {
    const username = '';
    const password = '';

    try {
        const token = await signIn(username, password);
        console.log("Cognito Token:", token);

        const data = await fetchAppSyncData(token);
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main();
