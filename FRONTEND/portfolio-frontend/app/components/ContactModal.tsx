"use client";
import { useEffect, useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { useLanguage } from '../contexts/LanguageContext';

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL ??
  'https://n8n.servergorazer.uk/webhook/contacto-portafolio-az';
const EMAIL_ADDRESS = 'azerpa56@gmail.com';
const OPEN_EVENT = 'open-contact-modal';

/** Abre el modal de contacto desde cualquier parte de la página. */
export function openContactModal() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent'; ref?: string } | { kind: 'error' };

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition';

export function ContactModal() {
  const { t, language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  useEffect(() => {
    const handler = () => {
      setStatus({ kind: 'idle' });
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: 'sending' });
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, lang: language }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.ok === false) throw new Error(json.error || res.statusText);
      setStatus({ kind: 'sent', ref: json.ref });
      form.reset();
    } catch {
      setStatus({ kind: 'error' });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        {status.kind === 'sent' ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <DialogTitle className="text-2xl mb-2 text-gray-900 dark:text-white">
              {t('contactForm.sentTitle')}
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              {t('contactForm.sentText')}
            </DialogDescription>
            {status.ref && (
              <p className="mt-3 text-xs text-gray-500">
                {t('contactForm.ref')}: {status.ref}
              </p>
            )}
            <button
              onClick={() => setOpen(false)}
              className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all"
            >
              {t('contactForm.close')}
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-gray-900 dark:text-white">
                {t('contactForm.title')}
              </DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-400">
                {t('contactForm.subtitle')}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-gray-700 dark:text-gray-300">{t('contactForm.name')} *</span>
                  <input name="name" required minLength={2} maxLength={100} autoComplete="name" className={`${inputClass} mt-1`} />
                </label>
                <label className="block">
                  <span className="text-sm text-gray-700 dark:text-gray-300">{t('contactForm.email')} *</span>
                  <input name="email" type="email" required maxLength={150} autoComplete="email" className={`${inputClass} mt-1`} />
                </label>
              </div>
              <label className="block">
                <span className="text-sm text-gray-700 dark:text-gray-300">{t('contactForm.company')}</span>
                <input name="company" maxLength={150} autoComplete="organization" className={`${inputClass} mt-1`} />
              </label>
              <label className="block">
                <span className="text-sm text-gray-700 dark:text-gray-300">{t('contactForm.message')} *</span>
                <textarea
                  name="message"
                  required
                  minLength={5}
                  maxLength={5000}
                  rows={5}
                  placeholder={t('contactForm.messagePlaceholder')}
                  className={`${inputClass} mt-1 resize-y`}
                />
              </label>

              {/* Campo trampa para bots: oculto para personas */}
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] w-px h-px opacity-0"
              />

              {status.kind === 'error' && (
                <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>
                    {t('contactForm.error')}{' '}
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="underline font-medium">
                      {EMAIL_ADDRESS}
                    </a>
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={status.kind === 'sending'}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-wait"
              >
                {status.kind === 'sending' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {status.kind === 'sending' ? t('contactForm.sending') : t('contactForm.send')}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
