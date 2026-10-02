import { Quote } from "lucide-react";
import type { StarterWeek } from "@/lib/types";
import { cn } from "@/lib/utils";

const accentStyles = {
  coral: "bg-coral text-paper",
  yellow: "bg-yellow text-ink",
  blue: "bg-blue text-paper",
  green: "bg-green text-paper",
  violet: "bg-violet text-paper",
};

export function WeekRecord({ week }: { week: StarterWeek }) {
  return (
    <article className="relative grid gap-5 pb-16 pl-14 last:pb-0 sm:grid-cols-[120px_1fr] sm:gap-8 sm:pl-0">
      <div className="absolute left-0 top-0 flex flex-col items-center sm:static sm:items-start">
        <div className={cn("grid size-10 place-items-center rounded-full text-xs font-black shadow-sm", accentStyles[week.accent as keyof typeof accentStyles])}>
          {week.week}
        </div>
        <div className="mt-2 h-full w-px bg-ink/10 sm:hidden" />
      </div>
      <div>
        <p className="mb-2 text-xs font-black tracking-[0.18em] text-muted">{week.eyebrow}</p>
        <h2 className="font-display text-3xl font-black tracking-[-0.06em] text-ink sm:text-4xl">{week.title}</h2>
        <p className="mt-3 max-w-2xl leading-7 text-muted">{week.description}</p>

        <div className="mt-7 space-y-4">
          <p className="text-xs font-black tracking-[0.14em] text-coral">QUESTIONS & ANSWERS</p>
          {week.questions.map((question) => (
            <div key={question.id} className="rounded-2xl border border-ink/10 bg-white/55 p-5">
              <p className="font-semibold leading-6 text-ink">{question.text}</p>
              <p className="mt-3 leading-7 text-muted">{question.answer}</p>
            </div>
          ))}
        </div>

        {week.assignment && (
          <div className="mt-5 rounded-[1.5rem] bg-[#fff4dc] p-6">
            <div className="flex items-center gap-2 text-xs font-black tracking-[0.14em] text-coral">
              <Quote className="size-4 fill-coral" /> THIS WEEK&apos;S WRITING
            </div>
            <h3 className="mt-4 font-display text-2xl font-black tracking-[-0.04em] text-ink">{week.assignment.title}</h3>
            <p className="mt-3 whitespace-pre-line leading-8 text-ink/75">{week.assignment.body}</p>
          </div>
        )}

        {week.reflection && (
          <blockquote className="mt-5 border-l-4 border-violet pl-5 font-display text-xl font-bold leading-8 text-ink/80">“{week.reflection}”</blockquote>
        )}
      </div>
    </article>
  );
}
