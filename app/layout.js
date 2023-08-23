// "use client";
// import './globals.css'
// import { Inter } from 'next/font/google'
// import "./vendor/aos/aos.css";
// import "./vendor/bootstrap/css/bootstrap-grid.min.css";
// import "./vendor/boxicons/css/boxicons.min.css";
// import "./vendor/glightbox/css/glightbox.min.css";
// import "./vendor/swiper/swiper-bundle.min.css";
// import "./css/style.css";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Akhmad Dody Setiawan",
  description: "Chief Financial Officer |  Entrepreneur | Financial Planner ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Akhmad Dody Setiawan</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />

        <link href="assets/css/style.css" rel="stylesheet" />
      </head>

      <body>{children}</body>
    </html>
  );
}
