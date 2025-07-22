// import React from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

// interface LayoutProps {
//   children: React.ReactNode;
//   title?: string;
//   description?: string;
// }

// const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
//   return (
//     <HelmetProvider>
//       <Helmet>
//         <title>{title || 'House of Humanity'}</title>
//         <meta
//           name="description"
//           content={description || 'Support House of Humanity’s mission to make a positive impact through your donations.'}
//         />
//         <link rel="icon" href="/favicon.ico" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="keywords" content="donation, charity, non-profit, House of Humanity" />
//         <meta property="og:title" content={title || 'House of Humanity'} />
//         <meta
//           property="og:description"
//           content={description || 'Support House of Humanity’s mission to make a positive impact through your donations.'}
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={window.location.href} />
//         <meta property="og:image" content="/og-image.jpg" />
//       </Helmet>
//       <main className="flex-grow">{children}</main>
//     </HelmetProvider>
//   );
// };

// export default Layout;