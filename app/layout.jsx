import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
// Required for theme styles, previously was imported under the hood
import "nextra-theme-docs/style.css";

export const metadata = {
  // ... your metadata API
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata

  overview: {
    title: "Handit.ai",
    description: "Overview of Handit.ai",
  },
  quickstart: {
    title: "Quickstart",
    description: "Get started with Handit.ai in minutes",
  },
  tracing: {
    title: "Training",
    description: "Train your AI to be more accurate",
  },

};

const banner = <Banner storageKey="some-key">🎉 Welcome to handit.ai Documentation!</Banner>;
const navbar = (
  <Navbar
    logo={<b>Handit.ai</b>}
    projectLink="https://github.com/Handit-AI/handit.ai.git"
  />
);
const footer = (
  <Footer className="flex-col items-center md:items-start">
    MIT {new Date().getFullYear()} © Nextra.
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        // backgroundColor={{
        //   dark: "rgb(15, 23, 42)",
        //   light: "rgb(254, 252, 232)",
        // }}
        // color={{
        //   hue: { dark: 120, light: 0 },
        //   saturation: { dark: 100, light: 100 },
        // }}
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Handit-AI/handit.ai-docs.git"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          // ...Your additional theme config options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
