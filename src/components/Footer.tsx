// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-16 text-center text-gray-400 text-sm border-t border-white/6 mt-20">
      Zero-Meeting Studio © {new Date().getFullYear()}. Clean, simple, fast.
    </footer>
  );
}
