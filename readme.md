---

# AppSync with Cognito, Apollo, and Amplify Test

This repository demonstrates how to integrate AWS AppSync with Cognito for authentication, and use client libraries such as Apollo and Amplify for querying the GraphQL endpoints.

## Description

This project contains examples of how to interact with AWS AppSync using different approaches:
1. Using Amplify by itself.
2. Using Apollo with the Cognito ID.
3. Using Amplify for querying AppSync, but with Cognito ID for authentication.

## Setup

### Pre-requisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone this repository:
    ```bash
    git clone [<repository-url>](https://github.com/razorRun/appsync-cognito-apollo-amplify-test)
    cd appsync-cognito-apollo-amplify-test
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

There are three scripts you can run, each representing one of the three approaches:

1. **Using Amplify by itself:**
    ```bash
    npm run start-amplify
    ```

2. **Using Apollo with the Cognito ID:**
    ```bash
    npm run start-apollo
    ```

3. **Using Amplify for querying AppSync, but with Cognito ID for authentication:**
    ```bash
    npm run start-ca
    ```

## Key Points

- Ensure you've set up your AWS AppSync and Cognito correctly for these scripts to function.
- Never hardcode sensitive credentials directly in your scripts. It's recommended to use environment variables or AWS Secrets Manager.
- These scripts are meant for demonstration and might need adjustments based on your actual AppSync and Cognito configurations.

## Dependencies

- [@apollo/client](https://www.npmjs.com/package/@apollo/client): For making GraphQL requests using Apollo Client.
- [@aws-amplify/core](https://www.npmjs.com/package/@aws-amplify/core) and [@aws-amplify/ui-react](https://www.npmjs.com/package/@aws-amplify/ui-react): Core Amplify libraries for configuration and UI components.
- [amazon-cognito-identity-js](https://www.npmjs.com/package/amazon-cognito-identity-js): Provides Cognito Identity functionality.
- [aws-amplify](https://www.npmjs.com/package/aws-amplify): Complete AWS Amplify library.
- [graphql](https://www.npmjs.com/package/graphql): JavaScript reference implementation for GraphQL.

## Author

- Roshan Milinda

## License

- ISC

---
