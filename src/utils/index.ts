export const INITIAL_CODE = `
{
  "title": "Form Title",
  "actions": ["submit", "reset"],
  "textarea": [
    {
      "id": "text-area-1",
      "order": "1",
      "fieldName": "TextArea"
    },
    {
      "id": "text-area-2",
      "order": "2",
      "fieldName": "Another text area"
    }
  ],
  "radio": [
    {
      "id": "radio-id",
      "order": "3",
      "fieldName": "Radio-1",
      "options": ["option a", "option b", "option c"]
    }
  ]
}
`;

export const DESCRIPTION_CODE = `
{
  "title": "Form Title", // Form title string
  "actions": ["submit", "reset"], // Array of action buttons. (submit & reset)
  "input": [ // Array of text input fields
    {
      "id": "input-id",
      "order": "1", // represents the order of input field in the form
      "fieldName": "Input-1"
    },
    { ... },
    { ... }
  ],
  "textarea": [ // Array of textarea input fields
    {
      "id": "textarea-id",
      "order": "2",
      "fieldName": "Textarea-1"
    },
    { ... },
    { ... }
  ],
  "dateflied": [ // Array of date input fields
    {
      "id": "datefield-id",
      "order": "3",
      "fieldName": "Datefield-1"
    },
    { ... },
    { ... }
  ],
  "checkbox": [ // Array of checkboxes fields
    {
      "id": "checkbox-id",
      "order": "4",
      "fieldName": "Checkbox-1"
    },
    { ... },
    { ... }
  ],
  "numberfield": [ // Array of number input fields
    {
      "id": "numberfield-id",
      "order": "4",
      "fieldName": "Numberfield-1"
    },
    { ... },
    { ... }
  ],
  "radio": [ // Array of radio input fields
    {
      "id": "radio-id",
      "order": "5",
      "fieldName": "Radio-1",
      "options": ["option a", "option b", "option c"]
    },
    { ... },
    { ... }
  ]
}
`;
