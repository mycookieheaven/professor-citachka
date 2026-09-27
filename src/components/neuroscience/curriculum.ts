export type NeuroscienceLessonData = {
  number: string;
  slug: string;
  title: string;
  deck: string;
  objectives: string[];
  conceptTitle: string;
  concept: string;
  example: { title: string; setup: string; observation: string; explanation: string; scene: string };
  retrieval: { prompt: string; answer: string }[];
};

export const neuroscienceLessons: NeuroscienceLessonData[] = [
  {
    number: "01", slug: "neural-foundations", title: "Neural Foundations",
    deck: "Cells, signals, and circuits: the grammar of the nervous system.",
    objectives: ["Identify the major parts of a neuron and the direction information usually travels.", "Explain how a change in membrane potential can lead to an action potential.", "Distinguish electrical signaling within a neuron from chemical signaling across most synapses."],
    conceptTitle: "A voltage difference is stored possibility",
    concept: "A resting potential is not a neuron at rest. It is a controlled difference in electrical charge across a membrane. Inputs that depolarize the membrane make the inside less negative; if enough arrive together, an action potential travels along the axon.",
    example: { title: "Worked scene: deciding to send", setup: "A sensory neuron receives several small excitatory inputs at its dendrites.", observation: "One input alone changes little, but nearby inputs arriving together push the axon hillock to threshold.", explanation: "The cell integrates inputs in time and space. Threshold is not a measure of importance; it is the point at which voltage-gated channels make a rapid, all-or-none spike likely.", scene: "Several lanterns lighting a single threshold gate" },
    retrieval: [
      { prompt: "A depolarizing input moves membrane potential in which direction?", answer: "A depolarizing input makes the membrane potential less negative (closer to threshold)." },
      { prompt: "Where does a typical chemical synapse pass its message?", answer: "From a presynaptic terminal, across a synaptic cleft, to receptors on a postsynaptic cell." },
      { prompt: "Why can several small inputs matter more together than separately?", answer: "Neurons integrate inputs across space and time; combined depolarization can reach threshold." },
    ],
  },
  {
    number: "02", slug: "sensation-and-movement", title: "Sensation and Movement",
    deck: "From physical energy to perception, then from intention to action.",
    objectives: ["Trace how sensory receptors transduce physical energy into neural signals.", "Describe why perception is an active inference rather than a literal recording.", "Outline the complementary roles of cortex, basal ganglia, and cerebellum in action."],
    conceptTitle: "The brain interprets, not merely receives",
    concept: "Receptors convert light, pressure, sound, and chemicals into patterns of neural activity. The nervous system then combines those patterns with context, expectations, and goals. What you perceive is a useful construction constrained by evidence.",
    example: { title: "Worked scene: catching a cup", setup: "A cup slips from a counter while you are looking nearby.", observation: "Vision estimates its path, motor areas prepare a reach, the cerebellum compares expected and actual movement, and touch updates the grip.", explanation: "The response is a loop, not a command sent once. Sensory feedback and prediction continually refine action.", scene: "A hand meeting a falling cup along a predicted arc" },
    retrieval: [
      { prompt: "What does sensory transduction mean?", answer: "It is the conversion of physical energy into changes in neural signaling." },
      { prompt: "Why can two people notice different details in the same scene?", answer: "Perception combines sensory evidence with attention, prior knowledge, context, and current goals." },
      { prompt: "Which structure is especially important for calibrating movement from error signals?", answer: "The cerebellum is especially important for comparing predicted and actual movement and refining coordination." },
    ],
  },
  {
    number: "03", slug: "learning-memory-attention", title: "Learning, Memory, and Attention",
    deck: "Practice changes systems when retrieval meets feedback.",
    objectives: ["Differentiate working memory, episodic memory, and procedural learning.", "Explain how attention shapes what is encoded and later retrieved.", "Use retrieval practice and spacing as evidence-informed learning strategies."],
    conceptTitle: "Memory is reconstructed in systems",
    concept: "Working memory holds a small, goal-relevant set of information briefly. Episodic memory supports recollection of events, while procedural learning supports skilled performance. These systems cooperate, but they are not interchangeable files in one mental drawer.",
    example: { title: "Worked scene: learning a route", setup: "You repeatedly navigate a new route to campus without using a map.", observation: "At first you consciously rehearse turns; later landmarks cue the route and the sequence needs less deliberate attention.", explanation: "Practice changes what is easy to retrieve and execute. Spaced attempts with feedback reveal what is not yet stable better than rereading does.", scene: "A path becoming clearer between familiar landmarks" },
    retrieval: [
      { prompt: "Which memory system temporarily holds a phone number while you dial it?", answer: "Working memory temporarily maintains goal-relevant information such as a phone number." },
      { prompt: "What learning activity gives a stronger signal about what you know: rereading or trying to recall?", answer: "Trying to recall gives a stronger diagnostic signal because it requires retrieval." },
      { prompt: "Why does spacing practice help?", answer: "Spacing requires effortful retrieval after some forgetting and distributes learning across time." },
    ],
  },
  {
    number: "04", slug: "emotion-and-motivation", title: "Emotion and Motivation",
    deck: "Value, prediction, physiology, and choice in context.",
    objectives: ["Describe emotion as coordinated appraisal, physiology, behavior, and experience.", "Explain prediction error without reducing it to a feeling of pleasure.", "Identify how stress can shift attention, memory, and decision-making."],
    conceptTitle: "Signals of value are not simple pleasure meters",
    concept: "Reward-related systems help organisms learn from discrepancies between expected and actual outcomes. A positive prediction error can strengthen cues and actions that preceded an outcome, but it is not proof that a single molecule or region explains happiness.",
    example: { title: "Worked scene: an unexpected message", setup: "You expect no news, then receive an encouraging message after submitting an application.", observation: "The event draws attention, changes body state, and may increase the value assigned to the actions that led there.", explanation: "The response joins interpretation, prediction, social context, and physiology. A careful explanation avoids calling one brain area the whole emotion.", scene: "A bright message arriving in a quiet observatory" },
    retrieval: [
      { prompt: "What is a prediction error?", answer: "It is the difference between an expected outcome and the outcome that actually occurs." },
      { prompt: "Why is it misleading to call dopamine simply the pleasure chemical?", answer: "Dopamine participates in several functions, including learning from prediction errors; it does not by itself explain pleasure." },
      { prompt: "Name one way sustained stress can affect cognition.", answer: "Sustained stress can narrow attention, alter memory, and bias decisions toward immediate responses." },
    ],
  },
  {
    number: "05", slug: "clinical-and-cognitive-neuroscience", title: "Clinical and Cognitive Neuroscience",
    deck: "Use evidence carefully: patterns guide questions, not verdicts.",
    objectives: ["Explain why lesions, imaging, and behavioral tasks provide converging but limited evidence.", "Recognize the difference between association, mechanism, and diagnosis.", "Apply person-first, uncertainty-aware language to neuroscience claims."],
    conceptTitle: "A brain image is evidence, not a diagnosis",
    concept: "Clinical neuroscience links behavior, symptoms, anatomy, development, and context. A scan can show structure or activity under specific conditions, but it rarely determines what a person thinks, feels, or should be labeled. Strong conclusions require converging evidence and appropriate expertise.",
    example: { title: "Worked scene: interpreting a scan headline", setup: "A headline says a study found a brain difference between two groups.", observation: "The study may report an average association under one task, with overlap between individuals and no direct test of everyday functioning.", explanation: "The responsible response is to ask about sample, task, effect size, replication, and alternative explanations before inferring cause or making claims about an individual.", scene: "A scan viewed beside notes, questions, and a magnifying glass" },
    retrieval: [
      { prompt: "What additional evidence can strengthen a claim beyond one imaging result?", answer: "Converging behavioral, clinical, developmental, replication, and task-specific evidence can strengthen a claim." },
      { prompt: "Does a group average determine an individual’s abilities or diagnosis?", answer: "No. Group averages often overlap and do not by themselves determine an individual’s abilities or diagnosis." },
      { prompt: "What is one responsible question to ask about a neuroscience headline?", answer: "Ask what the study measured, who was sampled, whether the result replicates, and whether association has been mistaken for cause." },
    ],
  },
];

export function getNeuroscienceLesson(slug: string) {
  return neuroscienceLessons.find((lesson) => lesson.slug === slug);
}
