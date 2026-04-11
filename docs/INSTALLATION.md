# Installation Guide

## Prerequisites

- Node.js 18+ 
- npm 9+ or yarn/pnpm
- Git

## Quick Install

```bash
git clone <your-repo-url>
cd modra
npm install
npm run dev
```

## Manual Setup

1. **Clone Repository**
```bash
git clone https://github.com/yourusername/modra.git
cd modra
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Optional: Environment Setup**
```
No API keys required! Uses server-side proxy for Rodin API.
```

4. **Run Development Server**
```bash
npm run dev
```
- App runs on `http://localhost:3000`
- Open `/generate` to start creating!

## Build Commands

```bash
npm run build    # Production build
npm run start    # Production server
npm run lint     # Code quality
```

## Deployment Platforms

### Vercel (1-click)
```
vercel --prod
```

### Netlify
```
netlify deploy --prod --dir=.next
```

### Railway/Docker
```
docker build -t modra .
docker run -p 3000:3000 modra
```

## Troubleshooting

**Port already in use**
```bash
npm run dev -- -p 3001
```

**ESLint errors**
```bash
npm run lint -- --fix
```

**Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

## Editor Setup

**VS Code Extensions:**
```
Tailwind CSS IntelliSense
ES7+ React/Redux/React-Native snippets
Thunder Client (API testing)
ESLint
Prettier
```

## System Requirements

| OS | Node | RAM | Recommended |
|----|------|-----|-------------|
| Windows 11 | 18+ | 8GB+ | 16GB |
| macOS | 18+ | 8GB+ | 16GB |
| Linux | 18+ | 8GB+ | 16GB |

---

**Ready to generate 3D?** → [http://localhost:3000/generate](http://localhost:3000/generate)
