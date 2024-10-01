import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "JoyCenter",
  description: "Achetez vos uniques tenues de choix chez nous ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <div className="bg-white/50 h-[100%] w-full p-2">
          {children}
        </div>
      </body>
    </html>
  );
}
