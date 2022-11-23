# `Told.So` - Remember, I Told So?

"Solidify your reputation as a trusted source of information by sharing your predictions with the world."
-- Github Copilot

## Features

- A user can write a tweet
- If anyone knows a user, they can read all their tweets
- User can edit tweet within first 30mins (extras, try yourself!)
- Allow for images and other complex data in tweets (extras, try yourself!)

## Get started

- Install [git](https://git-scm.com/downloads), [node](https://nodejs.org/en/download/) and [VSCode](https://code.visualstudio.com/download)
- Clone the base repository

```bash
git clone https://github.com/relaxxpls/told-so.git
```

## Steps

### Smart Contracts

- Setup basic hardhat project, this is where we will code, test and deploy our contracts from

```bash
npx hardhat
```

### Web Frontend

#### Setup basic NextJS frontend project

```bash
npx create-next-app --typescript told-so
```

#### Install required dependencies

```bash
npm install daisyui @rainbow-me/rainbowkit ethers react-icons wagmi tailwindcss prettier prettier-plugin-tailwindcss eslint-config-web postcss autoprefixer
```

#### Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Hosting

#### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.
