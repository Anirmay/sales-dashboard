# Sales Dashboard

A polished front-end assessment application built with Next.js 16, TypeScript, Tailwind CSS, and Recharts.

## Project Overview

This project demonstrates a modern sales dashboard using Atomic Design principles:

- `components/atoms` for reusable UI building blocks
- `components/molecules` for composed controls and charts
- `components/organisms` for page-level dashboard sections
- `data/mockSalesData.ts` for static sales values
- `types/sales.ts` for TypeScript interfaces

The dashboard highlights sales data for 2022, 2023, and 2024, plus interactive filtering, summary metrics, and responsive chart views.

## Features

- Sales dashboard page at `/dashboard`
- Bar Chart, Line Chart, and Pie Chart using Recharts
- Summary cards for Total Sales, Highest Sales Year, and Average Sales
- Minimum sales threshold filter that updates charts dynamically
- Loading state, error state, and empty-state handling
- Responsive layout with Tailwind CSS

## Project Structure

```
app/
  dashboard/
    page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  atoms/
    Card.tsx
    Heading.tsx
    Input.tsx
    Spinner.tsx
    StatusMessage.tsx
  molecules/
    BarChartCard.tsx
    ChartCard.tsx
    FilterInput.tsx
    LineChartCard.tsx
    PieChartCard.tsx
    SummaryCard.tsx
  organisms/
    DashboardSummary.tsx
    SalesCharts.tsx
    SalesDashboard.tsx
data/
  mockSalesData.ts
types/
  sales.ts
package.json
README.md
```

## Installation

Install dependencies:

```bash
npm install
```

## Run Locally

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Navigate to `/dashboard` to view the sales dashboard.

## Deploy to Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Visit [https://vercel.com/new](https://vercel.com/new).
3. Import the repository and select the project.
4. Deploy with the default Next.js settings.

### Recommended Vercel Settings

- Framework preset: `Next.js`
- Root directory: `/`
- Build command: `npm run build`
- Output directory: automatically handled by Next.js

## Development Notes

- `app/dashboard/page.tsx` renders the dashboard page.
- `components/organisms/SalesDashboard.tsx` manages client-side loading, filter state, and chart data.
- `data/mockSalesData.ts` contains sample sales records for 2022–2024.
- `types/sales.ts` defines reusable TypeScript interfaces for sales records and summaries.

## Available Scripts

- `npm run dev` — run the development server
- `npm run build` — build the production app
- `npm run start` — start the production server
- `npm run lint` — run ESLint

## Notes

This app uses the Next.js App Router and Tailwind CSS v4 for a clean, responsive dashboard experience.
