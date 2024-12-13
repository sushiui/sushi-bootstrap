# Bootstrap Sushi

## Storybook page
### [Storybook](https://moomdate.github.io/bs-sushi/?path=/docs/configure-your-project--docs)


Welcome to the **Bootstrap Sushi** project!

## Overview

Bootstrap Sushi is a project aimed at providing a streamlined and efficient way to integrate Bootstrap components into your web applications. This project simplifies the process of building responsive and visually appealing web pages.

## Repository

You can find the project repository at the following URL:
[Bootstrap Sushi Repository](https://git.alm.set/ens/bootstrap-sushi)

## Features

- Easy integration of Bootstrap components
- Pre-designed templates for quick setup
- Customizable styles and themes
- Responsive design out of the box

## Getting Started

To get started with Bootstrap Sushi, clone the repository and follow the instructions in the documentation.

```bash
git clone https://git.alm.set/ens/bootstrap-sushi
cd bootstrap-sushi
```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For any questions or feedback, please open an issue in the repository or contact the maintainers.

Happy coding with Bootstrap Sushi!

## How to Use
add `.npmrc` file to the root of your project and add the following line:
```sh
@ensset:registry=https://git.alm.set/api/v4/projects/4764/packages/npm/
//git.alm.set/api/v4/projects/4764/packages/npm/:_authToken=CI_TOKEN
```

then add the following line to your `package.json` file:
```
"@ensset/bootstrap-sushi": "0.0.14",
```

### Run roll up
```sh
npm run rollup
```
