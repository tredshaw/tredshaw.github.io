// src/config/theme.js
// Easy theme configuration system

export const theme = {
    // Brand Configuration
    brand: {
        name: "Astroship",
        tagline: "Something Amazing Is Coming Soon",
        description: "We're working hard to bring you something extraordinary. Stay tuned for updates and be the first to know when we launch.",
        logo: "/logo.png", // Add your logo to public folder
        favicon: "/favicon.svg"
    },

    // Color Schemes - Choose one or create your own
    colors: {
        // Default Blue Theme
        primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            900: '#1e3a8a'
        },

        // Alternative: Purple Theme
        // primary: {
        //   50: '#faf5ff',
        //   100: '#f3e8ff',
        //   500: '#8b5cf6',
        //   600: '#7c3aed',
        //   700: '#6d28d9',
        //   900: '#581c87'
        // },

        // Alternative: Green Theme
        // primary: {
        //   50: '#f0fdf4',
        //   100: '#dcfce7',
        //   500: '#22c55e',
        //   600: '#16a34a',
        //   700: '#15803d',
        //   900: '#14532d'
        // },

        // Neutral colors
        gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827'
        }
    },

    // Typography
    fonts: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Monaco', 'Consolas', 'monospace']
    },

    // Layout & Spacing
    layout: {
        containerMaxWidth: '1200px',
        sectionPadding: '5rem 0',
        borderRadius: '0.5rem',
        shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },

    // Animation & Transitions
    animation: {
        duration: '300ms',
        easing: 'ease-in-out',
        hover: {
            scale: '1.05',
            duration: '200ms'
        }
    },

    // Component Styles
    components: {
        button: {
            primary: {
                bg: 'bg-primary-600',
                hover: 'hover:bg-primary-700',
                text: 'text-white',
                padding: 'px-6 py-3',
                rounded: 'rounded-lg'
            },
            secondary: {
                bg: 'bg-white',
                hover: 'hover:bg-gray-50',
                text: 'text-primary-600',
                padding: 'px-6 py-3',
                rounded: 'rounded-lg',
                border: 'border border-primary-600'
            }
        },
        card: {
            bg: 'bg-white',
            shadow: 'shadow-lg',
            rounded: 'rounded-lg',
            padding: 'p-6'
        }
    },

    // Launch Configuration
    launch: {
        targetDate: '2025-12-31T23:59:59',
        progressPercentage: 75,
        showCountdown: true,
        showProgress: true
    },

    // Features to highlight
    features: [
        {
            title: "Fast & Secure",
            description: "Built with modern security practices and optimized for speed.",
            icon: "🚀"
        },
        {
            title: "User-Friendly",
            description: "Intuitive design that puts user experience first.",
            icon: "💫"
        },
        {
            title: "Mobile Ready",
            description: "Perfect experience across all devices and screen sizes.",
            icon: "📱"
        }
    ],

    // Social Media Links
    social: {
        twitter: "https://twitter.com/yourusername",
        linkedin: "https://linkedin.com/company/yourcompany",
        github: "https://github.com/yourusername",
        instagram: "https://instagram.com/yourusername"
    },

    // Contact Information
    contact: {
        email: "hello@yourdomain.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, City, State 12345"
    }
};

// Helper function to get theme values
export function getThemeValue(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], theme);
}

// CSS Custom Properties Generator
export function generateCSSVariables() {
    return `
    :root {
      --primary-50: ${theme.colors.primary[50]};
      --primary-100: ${theme.colors.primary[100]};
      --primary-500: ${theme.colors.primary[500]};
      --primary-600: ${theme.colors.primary[600]};
      --primary-700: ${theme.colors.primary[700]};
      --primary-900: ${theme.colors.primary[900]};
      
      --gray-50: ${theme.colors.gray[50]};
      --gray-100: ${theme.colors.gray[100]};
      --gray-200: ${theme.colors.gray[200]};
      --gray-300: ${theme.colors.gray[300]};
      --gray-400: ${theme.colors.gray[400]};
      --gray-500: ${theme.colors.gray[500]};
      --gray-600: ${theme.colors.gray[600]};
      --gray-700: ${theme.colors.gray[700]};
      --gray-800: ${theme.colors.gray[800]};
      --gray-900: ${theme.colors.gray[900]};
      
      --font-body: ${theme.fonts.body.join(', ')};
      --font-heading: ${theme.fonts.heading.join(', ')};
      
      --container-max-width: ${theme.layout.containerMaxWidth};
      --section-padding: ${theme.layout.sectionPadding};
      --border-radius: ${theme.layout.borderRadius};
      --shadow: ${theme.layout.shadow};
      
      --animation-duration: ${theme.animation.duration};
      --animation-easing: ${theme.animation.easing};
    }
  `;
}