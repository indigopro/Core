export type LexiconDataService = {
  getLexicon(langCode: string): Promise<Lexicon>
}

export type Lexicon =  Array<{lemma: string; translation: string}>
