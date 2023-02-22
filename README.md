# Datatable React Library Component Demo

This is a demo website showcasing the features and capabilities of the Datatable React Library Component. The component is designed to provide an easy-to-use and highly
customizable datatable for displaying and manipulating tabular data in React applications.

## Table of Contents

- [Datatable React Library Component Demo](#datatable-react-library-component-demo)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Practical Demos](#practical-demos)
    - [Without style](#without-style)
    - [With style](#with-style)
  - [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

The Datatable React Library Component comes with a wide range of features to make it easy and efficient to work with tabular data, including:

- Sorting: Easily sort your data by clicking on the table headers
- Filtering: Quickly filter your data to find the records you need
- Pagination: Display large data sets in a user-friendly way with pagination
- Customizable styling: Customize the look and feel of your table to match your application
- Flexible data input: Accepts data in various formats, including arrays, objects, and JSON
  
## Practical Demos

To view how to the datatable will work in your React application, view this website:

### Without style

- <https://lephenix47-react-datatable-demo.vercel.app/>

### With style

- <https://hrnet-p14.vercel.app/employees>

## Getting Started

To get started using the Datatable React Library Component, you'll need to install it using npm:

```bash
npm install @your-namespace/datatable-react
```

Once you've installed the component, you can import it into your React application and start using it right away:

```javascript
import Datatable from '@your-namespace/datatable-react';

// Render the component with your data (using CSR)
const data = [{ id: 1, name: 'John Doe', age: 30 }, { id: 2, name: 'Jane Smith', age: 25 }];

function App() {
  return (
    <Datatable
      data={data}
      paging
    />
  );
}
```

# Documentation

For more detailed information on how to use the Datatable React Library Component, please refer to the [documentation](https://github.com/LePhenix47/HRnet-Data-Table_npm-package/blob/master/README.md).

# Contributing

We welcome contributions from the community! To contribute to the Datatable React Library Component, please refer to our contributing guidelines (currently none).

# License

The Datatable React Library Component is open source and licensed under the ISC License.
