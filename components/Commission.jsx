// components/Commission.jsx — section with steps + form

import { copy } from '@/data/copy';
import CommissionForm from './CommissionForm';

export default function Commission() {
  const t = copy.commission;
  return (
    <section id="custom" className="bg-sky py-24">
      <div className="wrap">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <div>
            <span className="kicker !bg-bg">{t.kicker}</span>
            <h2 className="section-title">
              {t.title.pre}{' '}
              <em className="italic text-pink">{t.title.accent}</em>
            </h2>
            <p className="section-sub">{t.sub}</p>

            <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
              {t.steps.map(([n, h, d]) => (
                <li key={n} className="flex gap-4 items-start">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-pink text-white border-[2.5px] border-ink
                                   flex items-center justify-center font-display font-black text-lg">
                    {n}
                  </span>
                  <div>
                    <div className="font-bold mb-0.5">{h}</div>
                    <div className="text-ink-soft text-sm">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <CommissionForm />
        </div>
      </div>
    </section>
  );
}
