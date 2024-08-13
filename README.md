This repository contains the Galactic Incidence Manager application for Logixs Company. This tool allows users to list, edit, create, and delete Galactic Incidences.

## Getting Started

To connect to the Trello API, ensure you have a .dev configuration file set up.

### Development Server

To start the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running Tests

To run the tests, use the following command:

```bash
npm run test
```

For continuous testing, where tests will re-run automatically upon saving a file, use:

```bash
npm run test
```

### Production Build

To create a production build, execute:

```bash
npm run build
```

## About the app

### Landing Page

The Landing Page serves as the entry point to the application. You can return to this page by clicking the logo in the top bar. Clicking on any "Acceder" button will navigate you to the Incidence Manager.

### Incidence Manager

Here you can see a list of incidences. You can see on the pilot the color incidence, hover it to see the status and hover on the name of the incidence to see the incidence description

In addition, you can create, edit or delete incidences

### Create a new Incidence

To create a new incidence, fill in the required information and submit the form. The new incidence will then appear in the Incidence Manager.

### Update an actual Incidence

You can edit any incidence by clicking the pencil icon on the right side of each incidence.

### Delete an Incidence

To delete an incidence, click the trash icon located on the right side of each incidence.

## Changing Incidence Status

Click on the status of an incidence to change it. The incidence will then be moved to the top of the "Pending" or "Done" group based on its new status.

## Technologies Used

The following technologies were used in the development of this application:

- `Next.JS 14`
- `React 18`
- `lucide-react` edit, spinner and delete icons
- `Tailwind CSS`
- `Shadcn`
- `Typescript 5`
