## 🚀 Apify Monorepo with TypeScript and Shared Packages

This project is a fork of [actor-monorepo-example](https://github.com/apify/actor-monorepo-example) and serves as a starter template to create a single codebase for multiple Apify actors with shared code and packages.

## 🎯 Features

- Allows for a single codebase to manage multiple Apify actors.
- Facilitates the sharing of code and packages across actors.
- Provides a simple and efficient way to maintain and scale your Apify projects.
- Supports shared `input_schema.json` for consistent input validation across actors.
- Uses TypeScript for better development experience, improved code quality, and maintainability.

## 👨‍💻 Usage

This Apify starter is designed to help you manage multiple actors in a single codebase and easily share code and packages between them. To use this starter in your Apify project, follow these steps:

1. Fork this repository and clone it to your local machine.
2. Customize the actors and shared code as needed.
3. When deploying an actor to Apify, use the following Git URL format:
   `git@github.com:<username>/<repo>.git#main:crawlers/actor_1`.
   Replace <username> with your GitHub username, <repo> with your repository name, and actor_1 with the specific actor you want to host on Apify. This way, you can seamlessly deploy and manage multiple actors from a single codebase.
