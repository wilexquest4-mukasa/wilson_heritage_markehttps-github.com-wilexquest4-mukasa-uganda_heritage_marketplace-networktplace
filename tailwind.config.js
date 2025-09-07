module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B8860B", // warm-gold
          50: "#FFFBF0", // warm-gold-50
          100: "#FFF4D6", // warm-gold-100
          200: "#FFE8AD", // warm-gold-200
          300: "#FFDC84", // warm-gold-300
          400: "#FFD05B", // warm-gold-400
          500: "#B8860B", // warm-gold-500
          600: "#9A7209", // warm-gold-600
          700: "#7C5E07", // warm-gold-700
          800: "#5E4A05", // warm-gold-800
          900: "#403603", // warm-gold-900
        },
        secondary: {
          DEFAULT: "#8B4513", // bark-brown
          50: "#F7F3F0", // bark-brown-50
          100: "#EDE4DC", // bark-brown-100
          200: "#DBC9B9", // bark-brown-200
          300: "#C9AE96", // bark-brown-300
          400: "#B79373", // bark-brown-400
          500: "#8B4513", // bark-brown-500
          600: "#763A10", // bark-brown-600
          700: "#612F0D", // bark-brown-700
          800: "#4C240A", // bark-brown-800
          900: "#371907", // bark-brown-900
        },
        accent: {
          DEFAULT: "#CD853F", // terracotta
          50: "#FBF7F3", // terracotta-50
          100: "#F5EBE0", // terracotta-100
          200: "#EBD7C1", // terracotta-200
          300: "#E1C3A2", // terracotta-300
          400: "#D7AF83", // terracotta-400
          500: "#CD853F", // terracotta-500
          600: "#AF7135", // terracotta-600
          700: "#915D2B", // terracotta-700
          800: "#734921", // terracotta-800
          900: "#553517", // terracotta-900
        },
        background: "#FFF8DC", // cream
        surface: "#F5F5DC", // beige
        text: {
          primary: "#2F1B14", // deep-brown
          secondary: "#5D4E37", // medium-brown
        },
        success: {
          DEFAULT: "#228B22", // forest-green
          50: "#F0F9F0", // forest-green-50
          100: "#D4F4D4", // forest-green-100
          200: "#A9E9A9", // forest-green-200
          300: "#7EDE7E", // forest-green-300
          400: "#53D353", // forest-green-400
          500: "#228B22", // forest-green-500
          600: "#1E761E", // forest-green-600
          700: "#1A611A", // forest-green-700
          800: "#164C16", // forest-green-800
          900: "#123712", // forest-green-900
        },
        warning: {
          DEFAULT: "#FF8C00", // vibrant-orange
          50: "#FFF7F0", // vibrant-orange-50
          100: "#FFEBD6", // vibrant-orange-100
          200: "#FFD7AD", // vibrant-orange-200
          300: "#FFC384", // vibrant-orange-300
          400: "#FFAF5B", // vibrant-orange-400
          500: "#FF8C00", // vibrant-orange-500
          600: "#D97700", // vibrant-orange-600
          700: "#B36200", // vibrant-orange-700
          800: "#8D4D00", // vibrant-orange-800
          900: "#673800", // vibrant-orange-900
        },
        error: {
          DEFAULT: "#B22222", // muted-red
          50: "#F9F0F0", // muted-red-50
          100: "#F0D6D6", // muted-red-100
          200: "#E1ADAD", // muted-red-200
          300: "#D28484", // muted-red-300
          400: "#C35B5B", // muted-red-400
          500: "#B22222", // muted-red-500
          600: "#971D1D", // muted-red-600
          700: "#7C1818", // muted-red-700
          800: "#611313", // muted-red-800
          900: "#460E0E", // muted-red-900
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        caption: ['Lato', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(139, 69, 19, 0.1)',
        'medium': '0 4px 8px rgba(139, 69, 19, 0.1)',
        'large': '0 8px 16px rgba(139, 69, 19, 0.1)',
      },
      borderRadius: {
        'heritage': '4px',
        'heritage-lg': '8px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}