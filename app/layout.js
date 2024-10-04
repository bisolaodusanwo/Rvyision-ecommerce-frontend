import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Simple E-commerce</title>
      </head>
      <body className="bg-gray-100 font-sans p-6">{children}</body>
    </html>
  );
}
