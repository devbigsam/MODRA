# Usage Guide

## 🎯 Generating 3D Models

### 1. Quick Start Flow

```
1. Go to /generate
2. Enter text prompt OR upload image
3. Hit Generate → Wait 30-60s
4. Preview 3D model → Download GLB
```

### 2. Text-to-3D

```
Prompt: "Panda wearing a magical hat and cloak"
→ Generates detailed 3D panda model
```

### 3. Image-to-3D

```
Upload: Photo of real object
→ Reconstructs 3D mesh automatically
```

## ⚙️ Advanced Options

| Option | Description | Values |
|--------|-------------|---------|
| **Quality** | Generation detail | low/medium/high |
| **Format** | Export type | glb/gltf |
| **Material** | Surface quality | PBR/Standard |
| **Hyper Mode** | Enhanced generation | true/false |
| **TA-Pose** | Character posing | true/false |

**Open Options → Customize → Generate**

## 📱 Interface Guide

```
Top-Left: Modra Logo (Home)
Bottom: Prompt + Upload + Generate Button
Center: Live 3D Preview (drag/orbit)
Bottom (after gen): Download + Back buttons
```

## 🔗 API Endpoints

**Server Routes (Internal):**

```
POST /api/rodin           → Submit generation job
GET /api/status           → Poll job status  
GET /api/download/:id     → Fetch GLB files
GET /api/proxy-download   → CORS proxy for assets
```

## 💾 Export Formats

| File | Use Case | Size |
|------|----------|------|
| GLB | Web/Unity/Unreal | ~5-50MB |
| GLTF | WebGL | ~10-100MB |

**All exports include:**
- PBR materials
- Optimized meshes
- UV unwrapped
- Production-ready

## 📱 Mobile Usage

- Portrait: Compact prompt bar
- Landscape: Full 3D preview
- Touch gestures: Pinch zoom, drag orbit

## 🚀 Example Prompts

```
"cute robot with neon lights"
"realistic dragon sculpture"
"low poly fox character"
"cyberpunk car render"
"magic glowing mushroom"
```

## 🎮 3D Viewer Controls

| Action | Desktop | Mobile |
|--------|---------|--------|
| Orbit | LMB drag | 1 finger drag |
| Zoom | Wheel | Pinch |
| Pan | RMB drag | 2 fingers |
| Reset | Double-click | - |

## ❗ Common Issues

**Generation failed?**
```
- Check prompt length (<200 chars)
- Try medium quality first
- Image < 5MB JPG/PNG
```

**Model looks weird?**
```
- Enable PBR materials
- Use high quality
- Try Hyper mode
```

---

**Pro Tip:** Start simple → Refine with options → Export and iterate!

**Live Demo:** [modra.ai/generate](http://localhost:3000/generate)
