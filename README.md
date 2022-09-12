### To see  the project live

[IDN Test App](https://idn-test-app.vercel.app/)

### Create using Next.js, typescript, linter

A web application for IDN assignment test.

[Link UI Design](https://www.figma.com/file/nf7HlQSSOnimY6mr14GUK1/IDN-Test-App-engineer?node-id=0%3A1)

Features:

- responsive
- using Api Routes for mock api with data generate using [Faker](https://fakerjs.dev/)
- data fetching using SSR (on news page) and CSR (on header profile, livestream page, quiz page)
- display skeleton when loading data
- there is a simple unit test on news page

Libraries and dependency packages:

- fortawesome (for icons)
- moment (for formatting date)
- react-loading-skeleton (for displaying skeleton when loading data)
- faker-js (for generating api data)
- jest & testing-library (for unit testing) 
- eslint & prettier (for linter)
- typescript
- node-sass & saas


### To run in local

**Clone the project:**

```bash
$ git clone https://github.com/Rian-Sanjaya/idn-test-app.git
```

**Install package:**

```bash
$ yarn install
```
**Running the development server:**

```bash
$ yarn dev
```
