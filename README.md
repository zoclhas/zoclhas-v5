<div align="center">
  <img alt="Logo" src="https://github.com/zoclhas/zoclhas-v5/blob/main/public/meta-img.png?raw=true" width="100" />
</div>
<h1 align="center">
  zoclhas.com
</h1>
<p align="center">
The official source code for my portfolio site.
</p>
<p align="center">
<a href="https://github.com/zoclhas/zoclhas-website-v4">v4</a> <b>v5</b>
</p>

## Before Forking:

Yes you can fork this repo, and modify it for your personal site- **but you attribution is required.**

You can give the attribution by linking my website [zoclhas.com](https://zoclhas.com/) or linking to this [GitHub Page](https://github.com/zoclhas/zoclhas-v5)

## Installation

1. Clone the repo

2. Install the dependencies

    ```sh
    yarn
    #or
    npm i
    ```

3. Start the development server

    ```sh
    yarn dev
    #or
    npm run dev
    ```

4. Environment variables

    - Create a `.env` file.
    - Add these keys and fill them with your own values.

    ```env
    NEXT_PUBLIC_SPOTIFY_CLIENT_ID =
    NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET =
    NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN =

    NEXT_PUBLIC_EMAIL_SERVICE_ID =
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID =
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY =
    ```

    - Get the values related to from EmailJS
    - Upload it when hosting the site.

## Publishing the site

Host it on [Vercel](https://vercel.com/).

&lt;3
