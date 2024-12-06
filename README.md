# Social Network API

## Description
The Social Network API is a backend application designed for a social media platform where users can share their thoughts, react to friends' posts, and manage friend lists. Built with MongoDB, Express.js, and Mongoose, this API leverages the flexibility and performance of NoSQL databases to handle unstructured data efficiently. It provides routes for creating, reading, updating, and deleting users, thoughts, and reactions.

This project is a comprehensive demonstration of building APIs for a NoSQL database and understanding schema relationships, middleware, and routing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

Follow these steps to set up the Kanban Board locally:

1. Clone the repository:
```bash
git clone git@github.com:AdminChatter/Social-Network-API.git
```

2. Navigate to the project directory:
```bash
cd ksocial-network-api
```

3.Install dependencies:
```bash
npm install
```

4. Start the application:
```bash
npm start
```

## Usage
1. Open Insomnia (or any API client) to interact with the API.
2. Use the available routes for:
    - Managing users and their friend lists.
    - Adding, updating, and deleting thoughts.
    - Creating and removing reactions to thoughts.

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.<BR>
Click the license above to learn more about this license.

## Badges

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-blue.svg)
![Javascript](https://img.shields.io/badge/Javascript-blue.svg)

## Features
1. Schema Design:
    User schema includes virtual fields for friend count.
    Thought schema includes nested reactions and reaction count.
2. NoSQL Database:
    MongoDB for handling unstructured data.
3. Timestamp Formatting:
    Properly formatted timestamps for thoughts and reactions.
4. Scalable Backend:
    Built with Express.js and Mongoose for efficient routing and data handling.

## How to Contribute
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (git checkout -b feature-name).
3. Commit your changes (git commit -m 'Add feature').
4. Push to the branch (git push origin feature-name).
5. Open a Pull Request.