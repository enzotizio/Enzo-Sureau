import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Demander un devis",
  description: `Demandez un devis gratuit à ${siteConfig.name} pour votre projet de paysagisme.`,
};

export default function DevisPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Devis"
        title="Le formulaire de devis en ligne arrive bientôt"
        description="Nous mettons actuellement en place un formulaire guidé en plusieurs étapes (type de travaux, photos, budget, coordonnées) pour vous permettre d'obtenir un devis chiffré rapidement."
      />

      <div className="mt-10 rounded-2xl border border-emerald-900/10 bg-white p-8">
        <h2 className="text-lg font-semibold text-stone-900">
          En attendant, contactez-nous directement
        </h2>
        <p className="mt-2 text-stone-600">
          Décrivez-nous votre projet par téléphone ou par email — nous revenons vers
          vous rapidement avec les informations nécessaires à l&apos;établissement de
          votre devis.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-900"
          >
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 ring-1 ring-inset ring-emerald-800/30 hover:bg-emerald-50"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}
