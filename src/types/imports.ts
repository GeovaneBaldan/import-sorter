export interface ImportSectionConfig {
  name: string
  regex: string
}

export interface ImportConfig {
  sections: ImportSectionConfig[]
  order: 'none' | 'alphabetical' | 'length'
}
