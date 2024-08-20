export const questions = [
    {
      id: 1,
      type: 'select-sex',
      question: 'What is your gender assigned at birth?',
      options: ['Male', 'Female'],
    },
    {
      id: 2,
      type: 'single-variant',
      question: 'Are you currently pregnant?',
      options: ['Yes', 'No'],
      conditional: 'Female',
    },
    {
      id: 3,
      type: 'custom-input',
      question: 'Do you have any known allergies?',
    },
  ];
  