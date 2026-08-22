export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/212728166758?text=مرحبا%20تاج%20أويل،%20أريد%20طلب%20زيتك%20الطبيعي."
      aria-label="اطلب عبر واتساب"
      className="pulse-ring fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
    >
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.2 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-2.4-.8-4.9-3-6.3-5.8-.5-1-.8-2-.8-2.9 0-1 .6-1.7 1.1-2 .3-.2.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.2-.2.3-.1.5.2.4.8 1.3 1.6 1.9 1 .7 1.8.9 2.1 1 .2.1.4.1.5-.1l1-1.1c.1-.2.3-.2.5-.1l2 .9c.2.1.4.2.4.3 0 .1 0 .7-.3 1.4z" />
      </svg>
    </a>
  )
}
