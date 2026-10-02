import { Compass, Sparkles } from "lucide-react";
import type { ThirtyDayChallenge } from "@/lib/types";
import { Card } from "@/components/ui/card";

export function ChallengeCard({ challenge }: { challenge: ThirtyDayChallenge }) {
  return (
    <Card className="overflow-hidden border-0 bg-ink text-paper shadow-[8px_8px_0_#a8c7a0]">
      <div className="grid gap-8 p-7 sm:p-9 md:grid-cols-[1.25fr_0.75fr]">
        <div>
          <div className="flex items-center gap-2 text-xs font-black tracking-[0.2em] text-yellow"><Sparkles className="size-4" /> MY 30-DAY CHALLENGE</div>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.06em] sm:text-4xl">앞으로 30일 동안 나는</h2>
          <p className="mt-4 font-display text-2xl font-bold leading-9 text-yellow sm:text-3xl">{challenge.statement}</p>
        </div>
        <div className="space-y-5 rounded-2xl bg-white/10 p-5 text-sm leading-6 text-paper/75">
          <div><p className="mb-1 font-bold text-paper">이 도전을 하는 이유</p><p>{challenge.reason}</p></div>
          <div><p className="mb-1 font-bold text-paper">첫 번째 행동</p><p>{challenge.firstAction}</p></div>
          {challenge.expectedLearning && <div><p className="mb-1 font-bold text-paper">30일 뒤 알고 싶은 것</p><p>{challenge.expectedLearning}</p></div>}
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-white/10 px-7 py-4 text-sm font-semibold text-paper/60 sm:px-9"><Compass className="size-4" /> 방향은 생각만으로 선명해지지 않아요. 움직인 뒤에야 다음 장면이 보여요.</div>
    </Card>
  );
}
