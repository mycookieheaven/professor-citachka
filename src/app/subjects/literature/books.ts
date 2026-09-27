export type ReadingGuide = {
  id: string; title: string; author: string; level: string; objective: string;
  assignment: string; context: string; core: string; examples: string[];
  steps: string[]; question: string; choices: { text: string; feedback: string; correct?: boolean }[];
  writing: string; model: string; next: string; care: string;
};

export const books: ReadingGuide[] = [
  {
    id: "jane-eyre", title: "Jane Eyre", author: "Charlotte Brontë · 1847 · English novel",
    level: "Beginner entry · voice and evidence",
    objective: "Separate an event from a narrator’s interpretation, then support a claim about belonging with a precise detail.",
    assignment: "Read or listen to chapters 1–4. Begin with chapter 1 alone if you are new to classics. Stop after each scene to name who acts, who tells, and what changes; page numbers vary by edition.",
    context: "Jane recounts her childhood from a later point in her life. A governess was an educated employee in a private household: this later role places Jane uneasily between family and servant. The novel connects a woman’s self-respect with dependence, class, and moral choice; it is not simply a romance.",
    core: "A first-person narrator says ‘I’, but the speaking voice is not identical to the author. Here we encounter both a child experiencing exclusion and an older Jane arranging that experience into a story. Close reading means noticing how wording and narrative order create meaning—not merely retelling the plot. Jane’s account deserves attention without assuming she can know every other person’s inner life.",
    examples: [
      "In chapter 1, Jane retreats behind a curtain with a book. Event: she withdraws from the household. Interpretation: reading offers a private refuge when family belonging is denied. The curtain and the book support that claim more precisely than ‘Jane is sad’. This is a defensible reading, not the only possible one.",
      "In the red-room episode, a frightening space is filtered through a child’s fear and the adult narrator’s recollection. Calling the room frightening describes its effect on Jane; claiming the scene proves a supernatural event would exceed the evidence. Distinguish what Jane perceives from what the story establishes."
    ],
    steps: ["Make two columns: what happened / what Jane makes of it.", "Choose one detail about a room, a book, or an exclusion. Record its chapter and a short quotation from your edition.", "Write: ‘The detail suggests ___ because ___.’ Add one plausible alternative reading."],
    question: "Which claim stays closest to the evidence in the opening?",
    choices: [
      { text: "Every adult’s private motive is known with certainty.", feedback: "A first-person account cannot directly establish everyone’s private motives. Return to what Jane actually sees, hears, and recalls." },
      { text: "The curtain and book suggest a refuge from exclusion.", correct: true, feedback: "Yes. You connect concrete objects to a modest interpretive claim. ‘Suggest’ leaves room for other readings instead of pretending interpretation is proof." },
      { text: "Charlotte Brontë and Jane are the same speaker.", feedback: "Jane is a fictional narrator; Brontë is the author who constructed that voice. Keep those roles separate even when a novel draws on experience." }
    ],
    writing: "In three sentences, explain how a physical boundary shapes Jane’s sense of belonging. Use one detail from chapters 1–4 and distinguish observation from interpretation.",
    model: "Jane places herself behind a curtain with a book. The separation can be read as both exclusion and a small act of self-protection: she cannot command the household, but she can choose where to direct her attention. This does not mean she never wants companionship; the refuge matters because belonging remains difficult.",
    next: "Continue with chapters 5–10 (Lowood). Compare Jane’s responses to authority with Helen Burns’s: explain one difference without reducing either character to ‘right’ or ‘wrong’. Then use Austen’s guide to study how a third-person narrator handles judgment. Review your two-column notes tomorrow and again next week.",
    care: "Content note: child abuse, neglect, illness, and death. Later chapters include confinement and racialized representations of the Caribbean; read these critically rather than treating the narrator’s viewpoint as neutral.",
  },
  {
    id: "pride-and-prejudice", title: "Pride and Prejudice", author: "Jane Austen · 1813 · English novel",
    level: "Developing reader · irony and social judgment",
    objective: "Recognize irony and distinguish a character’s first impression from a well-supported judgment.",
    assignment: "Read or listen to chapters 1–6. In a three-volume edition, these are Volume I, chapters 1–6. Keep a small cast list: Elizabeth and Jane Bennet, their parents, Bingley, and Darcy.",
    context: "Marriage in Austen’s setting has economic consequences as well as emotional ones. Property, inheritance, gender, and social rank shape the options available to the Bennet daughters. An entail restricts how an estate can descend; do not treat the family’s anxiety as nothing more than vanity, or suppose all women shared identical circumstances.",
    core: "Irony creates a gap between a statement’s surface and what its context invites us to understand. Austen’s confident opening about a wealthy single man sounds like a universal truth, yet the ensuing conversation shows a particular family eager for a match. The narrative lets us enjoy a judgment while asking whether we have accepted it too quickly.",
    examples: [
      "The opening sentence assigns a desire for marriage to the wealthy man. Mrs Bennet’s conversation instead foregrounds her own hopes for her daughters. That shift makes the supposed universal truth look like interested social reasoning—not a scientific statement about all men.",
      "Darcy’s dismissive behavior at the assembly gives Elizabeth grounds to dislike him. But an observed slight supports ‘he behaved rudely here’, not ‘I now know his entire character’. Austen can make an impression persuasive while leaving its completeness open to revision."
    ],
    steps: ["Underline one sweeping judgment. Ask who benefits if everyone believes it.", "Record one public action and two possible explanations. Keep the explanations separate from the action.", "Read a piece of dialogue aloud twice, once literally and once ironically. Identify the context that makes the second reading plausible."],
    question: "What does the opening’s confident generalization invite you to examine?",
    choices: [
      { text: "An established rule that every rich man wants marriage.", feedback: "That takes the sentence only at face value. Compare it with Mrs Bennet’s aims: the joke exposes whose desire is being projected onto the newcomer." },
      { text: "How family interests can masquerade as universal truth.", correct: true, feedback: "Yes. The conversation makes the ‘truth’ look interested rather than neutral. You have located irony in the relationship between wording and context." },
      { text: "Proof that financial security never matters in marriage.", feedback: "The economic stakes are real. Irony can question people’s reasoning without making their material constraints disappear." }
    ],
    writing: "Write a four-sentence paragraph about a first impression in chapters 1–6. State the impression, cite an action or phrase, explain why it is persuasive, and name what remains unknown.",
    model: "Darcy appears proud at the assembly because he resists sociability and dismisses Elizabeth. His behavior makes her unfavorable impression understandable. Yet a public encounter gives only limited evidence about a person’s motives or capacity to change. The episode therefore tests the reader’s judgment as well as Elizabeth’s.",
    next: "Read chapters 7–12 and track how illness, visits, and conversation reveal class expectations. Later, revisit your first-impression notes after the letter in chapter 35 (Volume II, chapter 12); do not read ahead if you want to avoid spoilers. Next, Shelley will complicate judgment through several narrators.",
    care: "Content note: class prejudice and restrictive expectations around gender and marriage. Historical explanation is not an endorsement of those restrictions.",
  },
  {
    id: "frankenstein", title: "Frankenstein", author: "Mary Shelley · 1818; revised 1831 · English novel",
    level: "Intermediate · framed narratives and responsibility",
    objective: "Map a story told inside another story, and distinguish explanation of harm from justification of harm.",
    assignment: "Begin with Walton’s four opening letters, then Victor’s early account through the creation scene. Chapter numbering differs between 1818 and 1831 editions: use the scene, not a page number, as your stopping point. Match your audio and print edition when possible.",
    context: "The novel places scientific ambition beside questions of care, companionship, and responsibility. The 1818 and 1831 texts differ; claims about fate or choice should identify the edition being used. Victor Frankenstein is the creator, not the creature’s personal name. Avoid letting film imagery substitute for the novel’s language.",
    core: "A frame narrative places one speaker’s account inside another’s. Walton writes to his sister and reports Victor’s story; later Victor reports the creature’s account. Each layer affects what reaches us. A speaker can explain suffering persuasively while remaining accountable for harmful choices. Sympathy and moral approval are different judgments.",
    examples: [
      "Walton’s letters join a desire for discovery with loneliness and a wish for a friend. Those details make him more than a delivery mechanism for Victor’s story: one possible reading is that Walton mirrors the ambition and isolation Victor will describe. Support that comparison with a phrase from each speaker, not just the label ‘both ambitious’.",
      "Victor expends effort on producing life, then recoils when the creature lives. The contrast between preparation and immediate abandonment supports a question about care after creation. It does not by itself prove that all scientific inquiry is immoral; that larger claim would need much more evidence."
    ],
    steps: ["Draw three nested boxes: Walton’s letters → Victor’s account → the creature’s account (when you reach it). Add the audience for each.", "List a speaker’s stated reason for acting beside the consequence for someone else.", "Ask what the speaker admits, excuses, or cannot know. Keep compassion separate from acquittal."],
    question: "Which statement best handles the novel’s framed storytelling?",
    choices: [
      { text: "Every account reaches us without anyone selecting or retelling it.", feedback: "The letters and reported stories make mediation visible. Ask who is retelling whose words before treating an account as a neutral transcript." },
      { text: "A speaker’s suffering makes every later action morally acceptable.", feedback: "Suffering can explain motives and invite compassion without justifying violence. Separate understanding a reason from endorsing a choice." },
      { text: "Walton’s reporting shapes how we receive Victor’s account.", correct: true, feedback: "Yes. You identified a narrative layer. Next ask how Walton’s own ambitions might affect what he finds persuasive, rather than declaring him automatically dishonest." }
    ],
    writing: "Compare Walton’s wish for a friend with Victor’s response to the living creature. Make a claim about responsibility, give a detail from each scene, and add one limit to your comparison.",
    model: "Walton openly wants companionship, while Victor withdraws when his creation needs a response. Juxtaposing these moments suggests that ambition does not eliminate dependence on others. Yet their situations are not identical: Walton seeks a peer, whereas Victor has produced a vulnerable being. That difference makes Victor’s obligations a distinct question rather than a simple repetition of Walton’s loneliness.",
    next: "Continue until the creature finishes recounting his education and exclusion. Track one case where a desire for connection becomes resentment. Reassess your initial judgment of Victor using evidence from two narrative layers; then move to Gatsby to examine a narrator’s selective memory.",
    care: "Content note: abandonment, violence, death, and suicide references. Treat physical appearance and moral character as separate matters; examine the characters’ prejudices rather than adopting them.",
  },
  {
    id: "the-great-gatsby", title: "The Great Gatsby", author: "F. Scott Fitzgerald · 1925 · American novel in English",
    level: "Advanced application · symbolism and narrative limits",
    objective: "Build a qualified interpretation of a recurring image while evaluating the narrator’s perspective.",
    assignment: "Read or listen to chapters 1–3. Make a timeline of events separate from the order in which Nick tells you about them. This short novel is linguistically compact but interpretively demanding; length is not a measure of difficulty.",
    context: "Set in the American Jazz Age, the novel examines inherited wealth, newly acquired money, aspiration, and exclusion. It broadens this English-language classics shelf beyond England. Nick’s account is retrospective: he selects and evaluates events after they occur. His claim to reserve judgment is a claim to examine, not a guarantee of neutrality.",
    core: "A symbol is an image or object that gathers meanings through its uses and relationships. It is not a code with one permanently correct translation. Track who sees the green light, where it is, and what emotional language surrounds it. Then ask whether your interpretation explains the scene better than alternatives. Nick’s partial knowledge is another reason to qualify claims.",
    examples: [
      "At the end of chapter 1, Gatsby reaches toward a distant green light across the water. Distance and reaching make desire a plausible interpretation even before its personal associations are explained. ‘The light suggests something wanted but not possessed’ stays closer to the scene than ‘green always means money’. Later passages may extend or revise that claim.",
      "In chapter 3, party guests circulate rumors about Gatsby. Their confidence does not turn rumor into fact. Nick’s presentation of those rumors lets the reader experience Gatsby’s constructed public mystery while still distinguishing firsthand observation from hearsay."
    ],
    steps: ["Label three statements in Nick’s account: witnessed, reported by someone else, or interpreted.", "Track the green light in an image log with chapter, observer, surrounding words, and a provisional meaning.", "Write a claim with ‘suggests’ or ‘can be read as’, then test it against a detail that might complicate it."],
    question: "Which interpretation of the green light is strongest after chapter 1?",
    choices: [
      { text: "Its distance and Gatsby’s reaching suggest an elusive desire.", correct: true, feedback: "Yes. Your interpretation accounts for action and spatial detail without assuming a universal color code. Revisit it as the image recurs." },
      { text: "Green always means money, regardless of the scene.", feedback: "A fixed color dictionary skips close reading. Begin with Gatsby’s reaching and the light’s distance; later evidence may connect desire to wealth." },
      { text: "Every rumor about Gatsby is an established fact.", feedback: "A rumor is a claim circulating among characters, not independent verification. Note Nick’s source and what he has actually witnessed." }
    ],
    writing: "Draft a short analytical paragraph about desire or self-invention. Include one detail from chapter 1, one from chapter 3, and a counterreading that your claim must address.",
    model: "Gatsby’s reaching toward the distant light and the elaborate parties suggest a life organized around an imagined fulfillment. The first image emphasizes separation, whereas the parties offer apparent abundance and access. A counterreading might stress enjoyment rather than lack, but the contrast between public spectacle and solitary reaching keeps absence in view. This interpretation remains provisional until later chapters clarify the relationships involved.",
    next: "Read chapters 4–6 and revise your timeline as Gatsby’s past emerges. After finishing chapter 9, compare the final treatment of the light with your first entry. For a capstone, compare Nick and adult Jane in a 700–1,000-word essay: how does looking back shape moral judgment? Use chapter references, address a counterargument, and revise one overconfident claim.",
    care: "Content note: racism expressed by characters, antisemitic stereotyping, domestic violence, death, and alcohol misuse. Analyze how the text represents prejudice without repeating it as fact.",
  }
];
