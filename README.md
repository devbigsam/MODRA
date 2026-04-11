# Modra - AI 3D Model Generator

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

**Modra** is a modern, full-stack Next.js application that lets you generate production-ready 3D models from text prompts or images in under 60 seconds. Built with a sleek UI powered by shadcn/ui and Tailwind CSS, featuring real-time 3D previews using React Three Fiber.

## 🚀 Features

- **Text → 3D**: Describe anything, generate detailed 3D assets
- **Image → 3D**: Upload photos, reconstruct 3D geometry instantly
- **Production Exports**: GLB, PBR materials, ready for Blender/Unreal/Sketchfab
- **Advanced Options**: Quality settings, mesh simplification, Hyper mode, TA-Pose
- **Real-time Preview**: Interactive 3D viewer with orbit controls
- **Progress Tracking**: Live job status polling
- **Responsive Design**: Perfect on desktop & mobile

## 🎨 Screenshots - AI Generated Assets

### Panda in a Hat and Cloak
![Panda 3D Model](https://i.ibb.co/4gtyWHvs/Panda.png)
*Generated from text prompt*

### Magic Turtle
![Magic Turtle 3D](https://i.ibb.co/3mQj5JDk/turtle.png)  
*Image → 3D reconstruction*

### Fox 3D Sculpt
![Fox 3D Asset](https://i.ibb.co/JhVBbTF/fox.png)
*Prompt → Production-ready GLB*

## 🏗️ Tech Stack

```
Frontend: Next.js 14+, React 19, TypeScript 5+
UI: shadcn/ui, Tailwind CSS, Lucide Icons, Fredoka font
3D: @react-three/fiber, @react-three/drei, Three.js
API: Rodin (Hyper3d), Vercel Analytics
Forms: React Hook Form, Zod
```

## 🎉 Big Credits

**Huge thanks to the Hyper3d team for [Rodin](https://developer.hyper3d.ai)!**  
This app is powered by their incredible text-to-3D and image-to-3D API. All 3D generation magic happens through their service.

```
❤️ Rodin Team @ Hyper3d - Making 3D creation accessible to everyone
```

## 🚀 Quick Start

1. **Clone & Install**
```bash
git clone <repo>
cd modra
npm install
```

2. **Run Development Server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

3. **Generate!**
- Visit `/generate`
- Enter prompt or upload image
- Watch magic happen ✨

## 📚 Documentation

See [docs/INSTALLATION.md](docs/INSTALLATION.md) for detailed setup
See [docs/USAGE.md](docs/USAGE.md) for generation workflows

## 🔧 Environment Variables

```
# Rodin API (handled via proxy routes)
No API keys needed - uses server-side proxy
```

## 🌐 Deployment

**Vercel (Recommended)**
```bash
npm i -g vercel
vercel --prod
```

**Other platforms**: Standard Next.js static export supported.

## 🤝 Contributing

1. Fork the repo
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -am 'Add amazing feature'`)
4. Push (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

---

⭐ **Made with ❤️ by BIG SAM**  
[Live Demo](http://modra1.vercel.app) | [API Docs](https://developer.hyper3d.ai)
