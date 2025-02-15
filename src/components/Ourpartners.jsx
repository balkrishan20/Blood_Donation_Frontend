import React from 'react';
import { motion } from 'framer-motion';

const Ourpartners = () => {
  const logos = [
    { src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvc3BpdGFsIj48cGF0aCBkPSJNMTIgNnY0Ii8+PHBhdGggZD0iTTE0IDE0aC00Ii8+PHBhdGggZD0iTTE0IDE4aC00Ii8+PHBhdGggZD0iTTE0IDhoLTQiLz48cGF0aCBkPSJNMTggMTJoMmEyIDIgMCAwIDEgMiAydjZhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJ2LTlhMiAyIDAgMCAxIDItMmgyIi8+PHBhdGggZD0iTTE4IDIyVjRhMiAyIDAgMCAwLTItMkg4YTIgMiAwIDAgMC0yIDJ2MTgiLz48L3N2Zz4=', alt: 'Apollo' },
    { src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvc3BpdGFsIj48cGF0aCBkPSJNMTIgNnY0Ii8+PHBhdGggZD0iTTE0IDE0aC00Ii8+PHBhdGggZD0iTTE0IDE4aC00Ii8+PHBhdGggZD0iTTE0IDhoLTQiLz48cGF0aCBkPSJNMTggMTJoMmEyIDIgMCAwIDEgMiAydjZhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJ2LTlhMiAyIDAgMCAxIDItMmgyIi8+PHBhdGggZD0iTTE4IDIyVjRhMiAyIDAgMCAwLTItMkg4YTIgMiAwIDAgMC0yIDJ2MTgiLz48L3N2Zz4=', alt: 'Fortis' },
    { src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvc3BpdGFsIj48cGF0aCBkPSJNMTIgNnY0Ii8+PHBhdGggZD0iTTE0IDE0aC00Ii8+PHBhdGggZD0iTTE0IDE4aC00Ii8+PHBhdGggZD0iTTE0IDhoLTQiLz48cGF0aCBkPSJNMTggMTJoMmEyIDIgMCAwIDEgMiAydjZhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJ2LTlhMiAyIDAgMCAxIDItMmgyIi8+PHBhdGggZD0iTTE4IDIyVjRhMiAyIDAgMCAwLTItMkg4YTIgMiAwIDAgMC0yIDJ2MTgiLz48L3N2Zz4=', alt: 'Tata' },
    { src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvc3BpdGFsIj48cGF0aCBkPSJNMTIgNnY0Ii8+PHBhdGggZD0iTTE0IDE0aC00Ii8+PHBhdGggZD0iTTE0IDE4aC00Ii8+PHBhdGggZD0iTTE0IDhoLTQiLz48cGF0aCBkPSJNMTggMTJoMmEyIDIgMCAwIDEgMiAydjZhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJ2LTlhMiAyIDAgMCAxIDItMmgyIi8+PHBhdGggZD0iTTE4IDIyVjRhMiAyIDAgMCAwLTItMkg4YTIgMiAwIDAgMC0yIDJ2MTgiLz48L3N2Zz4=', alt: 'Apollo 2' },
    { src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvc3BpdGFsIj48cGF0aCBkPSJNMTIgNnY0Ii8+PHBhdGggZD0iTTE0IDE0aC00Ii8+PHBhdGggZD0iTTE0IDE4aC00Ii8+PHBhdGggZD0iTTE0IDhoLTQiLz48cGF0aCBkPSJNMTggMTJoMmEyIDIgMCAwIDEgMiAydjZhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJ2LTlhMiAyIDAgMCAxIDItMmgyIi8+PHBhdGggZD0iTTE4IDIyVjRhMiAyIDAgMCAwLTItMkg4YTIgMiAwIDAgMC0yIDJ2MTgiLz48L3N2Zz4=', alt: 'Fortis 2' },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-8">Our Partners</h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-20"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ourpartners;