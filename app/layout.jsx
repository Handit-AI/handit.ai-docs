import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
// Required for theme styles, previously was imported under the hood
import "nextra-theme-docs/style.css";

// Import Discord icon
const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

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
    title: "Tracing",
    description: "Trace your AI to be more accurate",
  },
};

const banner = <Banner storageKey="some-key">🎉 Welcome to handit.ai Documentation!</Banner>;

const navbar = (
  <Navbar
    logo={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src="/assets/logo.png" alt="Handit.ai" style={{ width: '50px', height: 'auto' }} />
        <span style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600',
          color: 'var(--nextra-colors-text-primary)'
        }}>
          Handit.ai
        </span>
      </div>
    }
    projectLink="https://github.com/Handit-AI/handit.ai.git"
    chatLink="https://discord.gg/XCVWYCFen6"
    chatIcon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
      >
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    }
  >
    <a
      href="https://beta.handit.ai/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: '8px 16px',
        background: 'linear-gradient(135deg, #0070f3 0%, #0051a8 100%)',
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '14px',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
      className="hover:scale-105 hover:shadow-lg"
    >
      Sign Up
    </a>
  </Navbar>
);

const footer = (
  <Footer className="flex-col items-center md:items-start">
    MIT {new Date().getFullYear()} © Handit.ai
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
          docsRepositoryBase="https://github.com/Handit-AI/handit.ai-docs/tree/main"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
