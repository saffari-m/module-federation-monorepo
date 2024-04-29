# Module Federation Monorepo

This repository is a monorepo setup for implementing module federation with webpack. It demonstrates how to use module federation to build microfrontends and share code between them.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this repository, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/saffari-m/module-federation-monorepo.git
```

2. Navigate to the cloned repository directory:

```bash
cd module-federation-monorepo
```

3. Install dependencies using pnpm (ensure pnpm is installed globally, if not, install it with `npm install -g pnpm`):

```bash
pnpm install
```

## Usage

To run the project, you can use the following pnpm scripts:

- `pnpm start`: Starts the development server for the main application.
- `pnpm start:dashboard`: Starts the development server for the dashboard application.
- `pnpm start:marketing`: Starts the development server for the marketing application.

Visit the respective URLs to view the applications in your browser.

## Features

- Demonstrates module federation setup with webpack.
- Implements microfrontend architecture.
- Shared code between microfrontends.
- Development server for each microfrontend.

## Contributing

Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

Please ensure that your code follows the project's coding conventions and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.