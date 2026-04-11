import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Zap, Box, Cuboid, Layers3 } from "lucide-react"
import { Sparkles } from "lucide-react"
import { fredoka } from "@/lib/font"
import {
  SiBlender,
  SiUnrealengine,
  SiSketchfab,
  SiAutodeskmaya,
  SiHoudini,
} from "react-icons/si"

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(120,120,255,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,120,255,0.06),transparent_40%)]">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          <Link href="/" className="flex items-center gap-3">
  <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
    <img
      src="https://i.ibb.co/vxvnhVfZ/Modra-1.png"
      alt="Modra"
      className="w-full h-full object-cover"
    />
  </div>

  <span className={`${fredoka.className} text-xl font-bold tracking-tight`}>
  Modra
</span>
</Link>

          <div className="flex items-center gap-3">
            <Link href="/generate">
              <Button className="bg-white text-black hover:bg-gray-200 font-semibold rounded-xl px-6">
                <Zap className="w-4 h-4 mr-2" />
                Open Generator
              </Button>
            </Link>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="max-w-5xl w-full text-center">

          {/* floating 3D cards */}
          {/* floating 3D wire cubes (mobile safe) */}
<div className="relative mb-10">

  <div className="hidden sm:block cube-wire cube-glow -top-10 left-10 bg-white/5" />

  <div className="hidden sm:block cube-wire cube-glow -top-6 right-10 bg-white/5" style={{ animationDuration: "8s" }} />

  <div className="hidden sm:block cube-wire cube-glow bottom-0 left-1/2 -translate-x-1/2 bg-white/5" style={{ animationDuration: "10s" }} />

  {/* MOBILE VERSION (smaller + not blocking text) */}
  <div className="sm:hidden flex justify-center mb-6">
    <div className="cube-wire cube-glow bg-white/5 scale-75" />
  </div>

  <h1 className="text-6xl md:text-8xl font-black leading-tight">
    Generate
    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      3D Models
    </span>
    Instantly
  </h1>

</div>

          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
            Turn images or prompts into production-ready 3D assets in under 60 seconds.
            Built for creators, developers, and studios.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/generate">
              

<Button className="bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-6 rounded-2xl text-lg font-semibold hover:scale-105 transition">
  <Sparkles className="w-5 h-5 mr-2" />
  Start Creating
</Button>
            </Link>

            <Button variant="outline" className="border-white/20 bg-white/5 px-10 py-6 rounded-2xl">
              Watch Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* subtle UI preview */}
          <div className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="h-24 rounded-xl bg-white/5 border border-white/10"></div>
            <div className="h-24 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10"></div>
            <div className="h-24 rounded-xl bg-white/5 border border-white/10"></div>
          </div>

        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <p className="text-blue-400 font-semibold mb-2">Image → 3D</p>
          <p className="text-gray-400">Upload photos and instantly reconstruct 3D geometry.</p>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <p className="text-purple-400 font-semibold mb-2">Text → 3D</p>
          <p className="text-gray-400">Describe anything and generate detailed 3D assets.</p>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <p className="text-pink-400 font-semibold mb-2">Export Ready</p>
          <p className="text-gray-400">GLB, FBX, USDZ formats for any pipeline.</p>
        </div>

      </section>

      {/* ASSET SHOWCASE (Rodin-style) */}
<section className="py-28 px-6 max-w-6xl mx-auto">
  
  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-black">
      AI Generated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Assets</span>
    </h2>
    <p className="text-gray-400 mt-3">
      Real-time 3D outputs from text & image prompts
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6">

    {/* Asset Card */}
    {[
      {
        name: "Panda in a Hat and a Cloak",
        img: "https://i.ibb.co/4gtyWHvs/Panda.png",
        tag: "Text → 3D"
      },
      {
        name: "Magic Turtle",
        img: "https://i.ibb.co/3mQj5JDk/turtle.png",
        tag: "Image → 3D"
      },
      {
        name: "Fox 3D Sculpt",
        img: "https://i.ibb.co/JhVBbTF/fox.png",
        tag: "Prompt → 3D"
      }
    ].map((asset, i) => (
      
      <div
        key={i}
        className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.03] transition-all duration-300"
      >

        {/* glow layer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20" />

        {/* IMAGE */}
        <div className="h-56 overflow-hidden">
          <img
            src={asset.img}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* bottom info */}
        <div className="p-5 relative z-10">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">{asset.name}</h3>
            <span className="text-xs text-gray-400">{asset.tag}</span>
          </div>

          <div className="mt-3 text-xs text-gray-500">
            GLB • PBR • Ready for export
          </div>
        </div>

      </div>
    ))}

  </div>
</section>

      {/* FINAL CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="text-5xl font-black mb-6">
          Build 3D faster than ever
        </h2>

        <p className="text-gray-400 mb-10">
          Join creators generating next-gen 3D assets with AI.
        </p>

        <Link href="/generate">
          <Button className="bg-white text-black px-12 py-6 rounded-2xl text-lg font-bold hover:scale-105 transition">
            Launch Modra
          </Button>
        </Link>
      </section>
<section className="py-16 border-y border-white/10 bg-black/40">
 <p className="text-center text-gray-300 mb-10 text-sm font-bold tracking-wide">
  Powered & compatible with industry tools
</p>

  <div className="overflow-hidden relative">
    <div className="flex gap-16 animate-scroll whitespace-nowrap items-center">

      {[
        { icon: SiBlender, name: "Blender" },
        { icon: SiUnrealengine, name: "Unreal" },
        { icon: SiSketchfab, name: "Sketchfab" },
        { icon: SiAutodeskmaya, name: "Maya" },
       
      ].map((item, i) => {
        const Icon = item.icon
        return (
          <div
            key={i}
            className="flex items-center gap-2 text-white/70 min-w-fit"
          >
            <Icon className="w-6 h-6 text-white/80" />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        )
      })}

      {/* duplicate for infinite loop */}
      {[
        { icon: SiBlender, name: "Blender" },
        { icon: SiUnrealengine, name: "Unreal" },
        { icon: SiSketchfab, name: "Sketchfab" },
        { icon: SiAutodeskmaya, name: "Maya" },

        { icon: SiBlender, name: "Blender" },
        { icon: SiUnrealengine, name: "Unreal" },
        { icon: SiSketchfab, name: "Sketchfab" },
        { icon: SiAutodeskmaya, name: "Maya" },
     
      ].map((item, i) => {
        const Icon = item.icon
        return (
          <div
            key={`dup-${i}`}
            className="flex items-center gap-2 text-white/70 min-w-fit"
          >
            <Icon className="w-6 h-6 text-white/80" />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        )
      })}

    </div>
  </div>
</section>
{/* FOOTER */}
<footer className="border-t border-white/10 py-10 px-6 mt-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

    <p className="text-center md:text-left">
      © 2026 Modra. With love from <span className="text-white font-semibold">BIG SAM</span> ❤️
    </p>

    <div className="flex items-center gap-4">
      <Link href="/generate" className="hover:text-white transition">
        Generator
      </Link>
      <Link href="/" className="hover:text-white transition">
        Home
      </Link>
    </div>

  </div>
</footer>
    </div>
  )
}