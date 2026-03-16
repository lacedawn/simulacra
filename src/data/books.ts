import { BookSchema, type Book } from "@/lib/schemas";
import { z } from "zod";

const rawBooks = [
    {
        title: "Tractatus Logico-Philosophicus",
        author: "Ludwig Wittgenstein",
        description: "The limits of language are the limits of the world. A crystalline work on logic, meaning, and silence.",
        pdfFilename: "Wittgenstein - Tractatus Logico-Philosophicus.pdf",
        cover: "/simulacra/covers/tractatus.jpg",
    },
    {
        title: "Philosophical Investigations",
        author: "Ludwig Wittgenstein",
        description: "Language games, family resemblances, and the dissolution of philosophy's deepest puzzles.",
        pdfFilename: "Philosophical Investigations.pdf",
        cover: "/simulacra/covers/philsophical investigations.jpg",
    },
    {
        title: "Anti-Oedipus",
        author: "Gilles Deleuze & Félix Guattari",
        description: "Capitalism and schizophrenia — desiring-machines, the body without organs, and the critique of psychoanalysis.",
        pdfFilename: "Anti-Oedipus.pdf",
        cover: "/simulacra/covers/antioedipus.jpg",
    },
    {
        title: "A Thousand Plateaus",
        author: "Gilles Deleuze & Félix Guattari",
        description: "Rhizomes, deterritorialization, and the war machine. The second volume of Capitalism and Schizophrenia.",
        pdfFilename: "Deleuze_and_Guattari_A_Thousand_Plateaus.pdf",
        cover: "/simulacra/covers/a thousand plateaus.jpg",
    },
    {
        title: "Simulacra and Simulation",
        author: "Jean Baudrillard",
        description: "The map precedes the territory. Hyperreality, the desert of the real, and the precession of simulacra.",
        pdfFilename: "Baudrillard.1981.Simulacra-and-Simulation.pdf",
        cover: "/simulacra/covers/simulacra and simulation.jpg",
    },
    {
        title: "Capitalist Realism",
        author: "Mark Fisher",
        description: "Is there no alternative? A short, devastating meditation on late capitalism and the slow cancellation of the future.",
        pdfFilename: "Capitalist Realism_ Is There No Alternat - Mark Fisher.pdf",
        cover: "/simulacra/covers/capitalist realism.jpg",
    },
    {
        title: "Critique of Pure Reason",
        author: "Immanuel Kant",
        description: "The transcendental architecture of human knowledge — space, time, categories, and the bounds of reason.",
        pdfFilename: "critique of pure reason.pdf",
        cover: "/simulacra/covers/critique of pure reason.jpg",
    },
    {
        title: "Ethics",
        author: "Baruch Spinoza",
        description: "God, nature, and human freedom demonstrated in geometrical order. A monument of rationalist philosophy.",
        pdfFilename: "Ethics.pdf",
        cover: "/simulacra/covers/ethics.jpg",
    },
    {
        title: "An Enquiry Concerning Human Understanding",
        author: "David Hume",
        description: "Causation, custom, and the limits of empirical knowledge. The foundation of modern skepticism.",
        pdfFilename: "hume_enquiry.pdf",
        cover: "/simulacra/covers/an enquiry.jpg",
    },
    {
        title: "Societies of Control",
        author: "Gilles Deleuze",
        description: "A short essay on the transition from disciplinary societies to societies of control.",
        pdfFilename: "Societies of Control.pdf",
        cover: "/simulacra/covers/societies of control.jpg",
    },
    {
        title: "Regarding the Pain of Others",
        author: "Susan Sontag",
        description: "How do photographs of suffering affect us? A meditation on war photography, empathy, and spectatorship.",
        pdfFilename: "Sontag_Susan_2003_Regarding_the_Pain_of_Others.pdf",
        cover: "/simulacra/covers/regarding the pain of others.jpg",
    },
    {
        title: "A Nick Land Reader",
        author: "Nick Land",
        description: "Accelerationist theory, machinic desire, and the dark enlightenment. Collected writings from the CCRU era.",
        pdfFilename: "A Nick Land Reader.pdf",
        cover: "/simulacra/covers/a nick land reader.jpg",
    },
    {
        title: "CCRU Collected Writings",
        author: "Cybernetic Culture Research Unit",
        description: "Hyperstition, numogram, and occult theory-fiction from the Warwick collective.",
        pdfFilename: "Ccru Collected Writings.pdf",
        cover: "/simulacra/covers/ccru.jpg",
    },
    {
        title: "Against Intellectual Property",
        author: "Stephan Kinsella",
        description: "A libertarian critique of patents and copyrights as violations of property rights.",
        pdfFilename: "Against Intellectual Property.pdf",
        cover: "/simulacra/covers/against intellectual property.jpg",
    },
    {
        title: "Critique of the Gotha Programme",
        author: "Karl Marx",
        description: "Marx's sharp critique of the German workers' party programme — on labour, distribution, and the state.",
        pdfFilename: "Marx_Critque_of_the_Gotha_Programme.pdf",
        cover: "/simulacra/covers/critique of the gotha programme.jpg",
    },
];

// Provide compile-time guarantees that the array matches our type bounds exactly
export const books = rawBooks satisfies Book[];
