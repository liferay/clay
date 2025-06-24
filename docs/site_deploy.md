# Clay site deploy

The implementation of Clay's new website, which was rewritten in Next.js and implemented on Netlify, has changed the way it is done compared to when we used Gastby. This is due to the integration of Netlify with Next.js, unfortunately there are many problems running and using all the possible resources of Next.js. This happens with all platforms with the exception of Vercel, which runs things much smoother. Cloudflare has been working on the opennext process, but unfortunately it is very "bad" and costs end up being very high in some tests I have done and it is not yet 100% mature.

## Deploy on Netlify

Some issues with Next.js and the way we generate documents in Clay make it quite heavy to run the build on Netlify, which ends up exceeding the limits of the free account for the build and requires upgrading the build service, which ends up being expensive to do. So the cheapest strategy while not migrating to Vercel is to configure the site to export the static page and run the build manually. Below are the steps for the manual build, which can be done every time a release is made.

- `yarn build && yarn buildTypes` Run the component build on the root folder
- `cd www && yarn && yarn build` Enter the website folder, install the dependencies and run the website build
- Configure `.env` files with environment variables
  - `LIFERAY_SITE_ID=xxx`
  - `LIFERAY_HOST=https://lexicon.lxc.liferay.com`
  - `GA4=xxx`
  - `NEXT_PUBLIC_ALGOLIA_PUBLIC_KEY=xxx`
  - `NEXT_PUBLIC_ALGOLIA_APP_ID=xxx`
  - `NEXT_PUBLIC_ALGOLIA_INDEX=clay`
- `netlify deploy --build --prod` Push site changes to production. If it is your first time you need to choose the site in this case choose between the sites `next-clayui` (dev) and `clayui` (prod).

> ⚠️ Please note that in the last command, you will need to log in with your Liferay account on Netlify using `netlify login`.

Once all the steps have been completed, the site will be deployed to production.

## Migration to Vercel

Using Netlify with Next.js being imported statically is temporary because we are unable to extract all the resources from Next.js such as the ISR so that we do not need to build to update the design pages.

To use the site on Vercel, some configuration changes are needed to use it. Some steps need to be taken.
- Change the DNS of the sites to the Vercel account
- Once the account is configured, you need to modify the `next.config.mjs` files by removing the `output: 'export'` from the configuration and update the `redirects` list. You may have more `netlify.toml` redirects that need to be added to the Next.js configuration.
- The integration of the version with the Clay repo must be done by connecting the Github account to the repository and modifying some settings for the build to work correctly. In `Build & Deployments` in the project settings in Vercel, modify the `Framework Settings`.
  - Build Command: `cd ./www && yarn build`
  - Output Directory: `www/.next`
  - Install Command: `yarn install && yarn build && cd ./www && yarn install`
- The node version must be set to `18.x` in the project in the Vercel account
- Add the environment variables that are necessary for Clay to run
