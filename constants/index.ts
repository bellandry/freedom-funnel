import { Clock, Layers, ShieldCheck, TrendingUp, Zap } from "lucide-react";

export const incomeData = [
  { name: "M0", fixe: 1000, digital: 0 },
  { name: "M3", fixe: 1000, digital: 150 },
  { name: "M6", fixe: 1000, digital: 400 },
  { name: "M12", fixe: 1000, digital: 800 },
  { name: "M24", fixe: 1000, digital: 1500 },
  { name: "M36", fixe: 1000, digital: 2800 },
];
export const testimonials = [
  {
    name: "Marc L.",
    role: "Ex-Salarié",
    text: "Je cherchais un complément de revenu sérieux. Le modèle de Diane est limpide et m'a permis de retrouver de l'air financièrement en quelques mois.",
    stars: 5,
  },
  {
    name: "Sophie D.",
    role: "Maman Active",
    text: "Enfin un système qui respecte mon temps avec mes enfants. Diane m'a accompagnée sans aucune pression commerciale. C'est du solide.",
    stars: 5,
  },
  {
    name: "Jean-Pierre V.",
    role: "Retraité",
    text: "À 64 ans, la tech me faisait peur. Mais le modèle est si simple que j'ai pu générer mes premiers revenus très rapidement. Une vraie sécurité.",
    stars: 5,
  },
];

export const process = [
  { step: "01", title: "Appel Offert", desc: "Vérification d'alignement" },
  { step: "02", title: "Planification", desc: "Analyse stratégique" },
  { step: "03", title: "Lancement", desc: "Action assistée" },
];

export const benefits = [
  {
    title: "Sérénité Mentale",
    text: "Ne stressez plus face aux imprévus financiers ou à l'inflation.",
    icon: ShieldCheck,
  },
  {
    title: "Liberté Géographique",
    text: "Gérez votre actif depuis votre salon ou en voyage.",
    icon: Zap,
  },
  {
    title: "Flexibilité Totale",
    text: "Compatible avec votre emploi actuel ou votre retraite.",
    icon: Clock,
  },
  {
    title: "Base Transmissible",
    text: "Bâtissez quelque chose de légal que vous pourrez transmettre.",
    icon: Layers,
  },
];

export const principles = [
  {
    title: "Maîtrise absolue",
    text: "Reprenez le contrôle total de votre agenda quotidien.",
    icon: Clock,
  },
  {
    title: "Sérénité Légale",
    text: "Un cadre 100% conforme, déclaré et transparent.",
    icon: ShieldCheck,
  },
  {
    title: "Actif Durable",
    text: "Construisez quelque chose qui travaille pour vous.",
    icon: TrendingUp,
  },
];
