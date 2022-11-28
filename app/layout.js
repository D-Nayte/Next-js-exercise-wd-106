import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <header>
          <h1>Blogposts</h1>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
