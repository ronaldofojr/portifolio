import { useState } from "react";

function ContactSection({ contact }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousValue) => ({ ...previousValue, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setFeedback("");

      const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Contato do portfólio - ${formData.name}`,
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar formulário.");
      }

      setFeedback("Mensagem enviada com sucesso. Vou te responder em breve.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFeedback("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <aside className="section-card">
        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
          Informações de contato
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Se você busca um Project Manager com visão técnica e foco em resultados, vamos conversar.
        </p>

        <div className="mt-6 space-y-3 text-sm">
          <p className="text-slate-700 dark:text-slate-200">
            <strong>Email:</strong> {contact.email}
          </p>
          <p className="text-slate-700 dark:text-slate-200">
            <strong>LinkedIn:</strong>{" "}
            <a
              className="font-semibold text-brand-700 transition hover:text-brand-600 dark:text-brand-300"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {contact.linkedin.replace("https://", "")}
            </a>
          </p>
        </div>
      </aside>

      <form onSubmit={handleSubmit} className="section-card space-y-4">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Aberto a oportunidades como Project Manager em produtos digitais e software.
        </p>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="name">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-brand-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-brand-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="message">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-brand-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
        >
          {isSubmitting ? "Enviando..." : "Enviar contato"}
        </button>

        {feedback ? <p className="text-sm font-medium text-brand-700 dark:text-brand-300">{feedback}</p> : null}
      </form>
    </div>
  );
}

export default ContactSection;
