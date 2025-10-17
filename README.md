# Import Section Sorter

Extensão para organizar imports por seções configuráveis no VSCode.

---

## ⚙️ Configuração

Adicione no seu `settings.json`:

```json
"importSections.sorter.sections": [
  { "name": "Components", "regex": "^@components/" },
  { "name": "Services", "regex": "^@services/" },
  { "name": "Utils", "regex": "^@utils/" },
  { "name": "External", "regex": "^[a-z]" }
]
