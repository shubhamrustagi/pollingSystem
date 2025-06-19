# Polling System Assignment

A voting system where you can vote and see all the previous votes' data through charts 

## How to set up
### For frontend
```bash
git clone https://github.com/shubhamrustagi/pollingSystem.git
cd frontend
npm install
npm run dev
```

### For backend
```bash
cd backend
npm install
npm run dev
```

Add a .env file like the following to ensure database connectivity to mysql db on your local system
```bash
PORT=[your port number]
DATABASE_URL="mysql://[username]:[password]@localhost:[mysqlrunningport]/votesdb"
```

and then while in the backend directory run
```bash
npx prisma generate
```

##For running tests
```bash
cd..
cd frontend
npx vitest
```
## References
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [React Chartjs 2 Documentation](https://react-chartjs-2.js.org/)
- [Vitest Documentation](https://vitest.dev/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Javascript mastery (for integration and in between query solving)](https://www.youtube.com/@javascriptmastery)

## Documentation

### Backend (`/backend`)

- `controllers/`
  - `analysisController.js`: Handles logic for analysis-related API requests.
  - `voteController.js`: Handles logic for vote-related API requests.

- `routes/`
  - `analysisRoutes.js`: Defines API endpoints for analysis features.
  - `votesRoutes.js`: Defines API endpoints for voting functionality.

- `prisma/`: Contains Prisma schema and migration files for database modeling.

- `db.js`: Initializes and exports the Prisma client for database access.

- `server.js`: Entry point of the backend. Configures Express server and routes.

### Frontend (`/frontend`)

- `services/`
  - `voteServices.js`: Handles API calls related to voting from the frontend.

- `src/`
  - `components/`
    - `ChartComponents/`: Contains reusable chart components (`BarChart.jsx`, `LineChart.jsx`, `LiveTable.jsx`).
    - `LeftSection.jsx`: Contains the user vote submission form.
    - `RightSection.jsx`: Contains the data dashboard with charts and tables.
  - `tests/`
    - `LeftSection.test.jsx`: Unit tests for the `LeftSection` component.

- `App.jsx`: Root component combining all sections of the UI.

- `main.jsx`: React entry point that renders the App component.

## Screen Recording of Application
[Link](https://drive.google.com/file/d/1M1xzV2RJzX7vmd0ZCLjj4ftWaVrtnsSa/view?usp=sharing)
