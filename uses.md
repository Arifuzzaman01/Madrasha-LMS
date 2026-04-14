<div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white">
      {/* --- Part 1: Sidebar (Lesson List) --- */}
      <div className="w-full lg:w-96 bg-gray-800 border-r border-gray-100 overflow-y-auto order-2 lg:order-1 flex flex-col justify-between">
        <div>
          <!-- <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-black uppercase tracking-widest text-emerald-400">
              Course Content
            </h2>
          </div> -->
          <div className="p-2 space-y-1">
            {courseContent.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setActiveLesson(lesson)}
                className={`w-full flex items-start gap-4 p-4 rounded-2xl transition-all text-left ${
                  activeLesson.id === lesson.id
                    ? "bg-emerald-900/40 border border-emerald-500/30"
                    : "hover:bg-gray-700/50"
                }`}
              >
                <div
                  className={
                    lesson.completed ? "text-emerald-500" : "text-gray-500"
                  }
                >
                  <HiCheckCircle size={24} />
                </div>
                <div className="flex-1">
                  {/* Rule: Change color based on completion */}
                  <h4
                    className={`font-bold text-sm leading-tight ${lesson.completed ? "text-emerald-400" : "text-gray-300"}`}
                  >
                    {lesson.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase font-black tracking-widest">
                    {lesson.duration}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <Link
          href="/myClasses"
          className="flex-shrink-0 p-6 border-t border-gray-700 group"
        >
          <p className="text-sm text-gray-300 group-hover:text-emerald-500 transition-colors mb-2">
            &larr; Back to My Classes
          </p>
        </Link>
      </div>

      {/* --- Part 2: Player Area --- */}
      
      <VideoPlayer
        activeLesson={activeLesson}
        onLessonComplete={handleLessonComplete}
        nextLesson={goToNextLesson}
      />
    </div>