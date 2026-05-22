'use client';
// components/CommissionForm.jsx — react-hook-form

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import clsx from 'clsx';
import { copy } from '@/data/copy';
import { social } from '@/data/site.config';

export default function CommissionForm() {
  const f = copy.commission.form;
  const s = copy.commission.success;
  const [submitted, setSubmitted] = useState(null);

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      contact: '',
      types: [],
      occasion: f.occasionOptions[0],
      deadline: '',
      description: '',
    },
  });

  const onSubmit = (data) => {
    // TODO: wire to an email service (Resend, Formspree, etc.)
    // For now we just acknowledge in-page.
    setSubmitted(data);
  };

  if (submitted) {
    return (
      <div className="bg-sky border-[2.5px] border-ink rounded-card p-6 sm:p-10 text-center">
        <div className="text-5xl">✿</div>
        <div className="font-display text-5xl font-black my-3 tracking-[-0.02em]">{s.big}</div>
        <p className="text-lg leading-[1.5] m-0 mx-auto mb-5 max-w-[380px]">
          {s.body(submitted.name)}
        </p>
        <div className="flex gap-2.5 justify-center flex-wrap">
          <a className="btn btn-primary" href={social.instagram.url} target="_blank" rel="noreferrer">
            {s.followCta}
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => { setSubmitted(null); reset(); }}
          >
            {s.againCta}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-bg-soft rounded-card border-[2.5px] border-ink p-5 sm:p-8 md:p-10 shadow-hard"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <Field label={f.name} error={errors.name?.message}>
          <input
            {...register('name', { required: 'Required' })}
            placeholder="Your name"
            className={inputCls}
          />
        </Field>
        <Field label={f.contact} error={errors.contact?.message}>
          <input
            {...register('contact', { required: 'Required' })}
            placeholder="@yourhandle"
            className={inputCls}
          />
        </Field>
      </div>

      <Field label={f.types}>
        <Controller
          control={control}
          name="types"
          render={({ field }) => (
            <div className="grid grid-cols-2 gap-2 mt-1.5">
              {f.typeOptions.map((opt) => {
                const on = field.value.includes(opt);
                return (
                  <button
                    type="button"
                    key={opt}
                    onClick={() =>
                      field.onChange(on ? field.value.filter((x) => x !== opt) : [...field.value, opt])
                    }
                    className={clsx(
                      'px-3.5 py-2.5 rounded-input border-2 text-sm font-semibold text-left transition-colors',
                      on
                        ? 'bg-pink text-white border-ink'
                        : 'bg-bg text-ink border-ink hover:bg-yellow'
                    )}
                  >
                    {on ? '✓ ' : ''}{opt}
                  </button>
                );
              })}
            </div>
          )}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <Field label={f.occasion}>
          <select {...register('occasion')} className={inputCls}>
            {f.occasionOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field label={f.deadline}>
          <input type="date" {...register('deadline')} className={inputCls} />
        </Field>
      </div>

      <Field label={f.description} error={errors.description?.message}>
        <textarea
          {...register('description', { required: 'Required' })}
          placeholder={f.descriptionPlaceholder}
          className={`${inputCls} min-h-[100px] resize-y`}
        />
      </Field>

      <button
        type="submit"
        className="btn btn-primary w-full justify-center mt-2"
      >
        {f.submit}
      </button>
      <p className="text-xs text-ink-soft mt-3.5 text-center leading-[1.5]">{f.disclaimer}</p>
    </form>
  );
}

const inputCls =
  'font-body w-full px-3.5 py-3 rounded-input border-2 border-ink bg-bg text-ink outline-none ' +
  'focus:border-pink focus:ring-[3px] focus:ring-pink/30 transition';

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5 mb-4">
      <label className="text-xs font-bold tracking-[0.06em] uppercase text-ink">
        {label}
        {error && <span className="ml-2 text-pink normal-case tracking-normal font-semibold">· {error}</span>}
      </label>
      {children}
    </div>
  );
}
