// src/app/components/myClasses/VideoPlayer.jsx
"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { HiZoomIn, HiFastForward } from "react-icons/hi";

export default function VideoPlayer({
  activeLesson,
  onLessonComplete,
  nextLesson,
}) {
  const [zoom, setZoom] = useState(1);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  console.log("active lesson from video player", activeLesson.url);
  return (
    <div className="flex-1 flex flex-col order-1 lg:order-2 bg-black">
      <div
        className="w-full h-full transition-transform duration-200 ease-out"
        style={{ transform: `scale(${zoom})` }}
      >
        <ReactPlayer
          key={activeLesson.id} // ✅ important
          url={activeLesson.url}
          width="100%"
          height="100%"
          controls={true}
          playing={false}
          playbackRate={playbackSpeed}
          onEnded={() => {
            onLessonComplete(activeLesson.id);
            nextLesson();
          }}
          config={{
            youtube: {
              playerVars: { autoplay: 1 },
            },
          }}
        />
      </div>

      {/* Player Controls (Custom Overlay Concept) */}
      <div className="p-8 bg-gray-900/50 backdrop-blur-xl border-t border-gray-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-black">{activeLesson.title}</h1>
            <p className="text-gray-400 text-sm">
              Next Lesson: 03. Setting up Git
            </p>
          </div>

          {/* Custom Controls */}
          <div className="flex items-center gap-4 bg-gray-800 p-2 rounded-2xl">
            <span className="text-[10px] font-black uppercase text-gray-500 px-2">
              Speed
            </span>
            {[1, 1.5, 2].map((s) => (
              <button
                key={s}
                onClick={() => setPlaybackSpeed(s)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  playbackSpeed === s
                    ? "bg-emerald-600 text-white"
                    : "hover:bg-gray-700"
                }`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
