import { Links, useLoaderData } from '@remix-run/react';
import { json, LinksFunction, LoaderFunction } from '@remix-run/node';

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export let loader: LoaderFunction = async () => {
  const posted_random = Math.random();
  const text = posted_random < 0.8 ? 'YES' : 'NO';

  const image_random = Math.floor(Math.random() * 20);
  const path = '/n' + image_random + '.jpg';


  return json({ path, text });
}

export default function Index() {
  let data = useLoaderData();
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Are They Posted?</title>
        <Links />
    </head>
      <body style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '98vh',
        backgroundImage: `url(${data.path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: 'white',
        fontSize: '50px',
        margin: '0', 
        overflow: 'hidden'
      }}>
        {data.text}
      </body>
    </html>
  );
}
