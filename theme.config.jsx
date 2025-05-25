// import { DiscordIcon } from './components/icons/discord'

export default {
  logo: (
    <span style={{ 
      fontWeight: '600',
      fontSize: '1.5rem',
      color: 'white'
    }}>
      Handit.ai
    </span>
  ),
  project: {
    link: 'https://github.com/Handit-AI/handit.ai',
  },
  docsRepositoryBase: 'https://github.com/Handit-AI/handit.ai-docs/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Handit.ai',
      description: 'Documentation for Handit.ai - Build and deploy AI models at scale',
      openGraph: {
        images: [
          {
            url: 'https://handit.ai/og.png',
            width: 1200,
            height: 630,
            alt: 'Handit.ai Documentation'
          }
        ]
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Handit.ai Documentation" />
      <meta property="og:description" content="Documentation for Handit.ai - Build and deploy AI models at scale" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </>
  ),
  navbar: {
    extraContent: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a
          href="https://discord.gg/M6su47HZ"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: 'var(--nextra-colors-gray-100)',
            color: 'var(--nextra-colors-gray-900)',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          className="dark:bg-gray-800 dark:text-white hover:scale-105 hover:shadow-md"
        >
          {/* <DiscordIcon style={{ width: '24px', height: '24px' }} /> */}
        </a>
        <a
          href="https://dashboard.handit.ai/auth/custom/sign-up"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '10px 20px',
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
      </div>
    )
  },
  footer: {
    text: (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '8px',
        padding: '24px 0'
      }}>
        <span>
          {new Date().getFullYear()} ©{' '}
          <a 
            href="https://handit.ai" 
            target="_blank"
            style={{
              color: 'var(--nextra-colors-primary)',
              textDecoration: 'none',
              fontWeight: '500'
            }}
            className="hover:underline"
          >
            Handit.ai
          </a>
        </span>
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          fontSize: '14px',
          color: 'var(--nextra-colors-gray-500)'
        }}>
          <a href="/privacy" className="hover:text-primary">Privacy</a>
          <a href="/terms" className="hover:text-primary">Terms</a>
          <a href="/contact" className="hover:text-primary">Contact</a>
        </div>
      </div>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    titleComponent: ({ title, type }) => (
      <span style={{ 
        fontWeight: '600',
        fontSize: type === 'separator' ? '0.9rem' : '1rem',
        color: type === 'separator' ? 'var(--nextra-colors-gray-500)' : 'inherit'
      }}>
        {title}
      </span>
    )
  },
  toc: {
    float: true,
    title: 'On This Page',
    backToTop: true
  },
  navigation: {
    prev: true,
    next: true
  },
  editLink: {
    text: 'Edit this page on GitHub',
    component: ({ children, ...props }) => (
      <a
        {...props}
        style={{
          color: 'var(--nextra-colors-primary)',
          textDecoration: 'none',
          fontWeight: '500'
        }}
        className="hover:underline"
      >
        {children}
      </a>
    )
  },
  feedback: {
    content: 'Questions? Give us feedback →',
    labels: 'feedback'
  },
  search: {
    placeholder: 'Search documentation...'
  },
  banner: {
    key: 'handit-ai-docs',
    text: '🎉 Welcome to handit.ai Documentation!'
  },
  primaryHue: 210,
  primarySaturation: 100
} 