

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto  px-4 md:px-8 lg:px-10 ">
      <p
          className="text-neutral-700  text-sm md:text-base max-w-sm font-semibold text-left">
         Testimonials
        </p>
        <p className="text-lg text-purple-900 md:text-4xl mb-4  max-w-4xl font-semibold">
        From Dreamers <span className="text-orange-500 drop-shadow-xl">to Achievers</span>
        </p>
       
      </div>      
      <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
    </div>)
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",

  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
