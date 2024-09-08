const Data = {
  "1A": {
    question: "How would you describe your general attitude towards work?",
    b: {
      answer: "I prefer a steady pace with clearly defined tasks.",
      next: "2B",
    },
    c: {
      answer: " I enjoy a relaxed environment and dislike strict deadlines.",
      next: "2C",
    },
    a: {
      answer: "I am highly motivated and enjoy taking on challenges.",
      next: "2A",
    },
  },
  "2A": {
    question: "How do you prefer to handle conflicts at work?",
    a: { answer: "Take charge and direct the resolution process", next: "3A" },
    b: { answer: "Discuss with a team and seek a consensus.", next: "3B" },
    c: { answer: "Avoid conflict and seek a compromise.", next: "3C" },
  },
  "2B": {
    question:
      "How do you feel about working on multiple projects simultaneously?",
    a: { answer: "I thrive in a multitasking environment.", next: "3D" },
    b: { answer: "I prefer focusing on one project at a time.", next: "3D" },
    c: { answer: "It depends on the nature of the projects.", next: "3F" },
  },
  "2C": {
    question: "What is your preferred method of managing stress?",
    a: { answer: "Engaging in physical activities.", next: "3G" },
    b: { answer: "Talking with friends or family.", next: "3H" },
    c: { answer: "Practicing mindfulness or meditation.", next: "3I" },
  },

  "3A": {
    question: "When making a decision, do you rely more on:",
    a: { answer: "Your instincts and gut feeling.", next: "4A" },
    b: { answer: "Detailed analysis and data.", next: "4B" },
    c: { answer: "Advice from others.", next: "4C" },
  },

  "3B": {
    question: "How do you handle differing opinions in a team?",
    a: {
      answer: "Take the lead in convincing others of your perspective.",
      next: "4D",
    },
    b: {
      answer: " Facilitate a discussion to find common ground.",
      next: "4E",
    },
    c: {
      answer: "Prefer to compromise or defer to the majority opinion.",
      next: "4F",
    },
  },

  "3C": {
    question: "How do you handle differing opinions in a team?",
    a: {
      answer: "Take the lead in convincing others of your perspective.",
      next: "4D",
    },
    b: {
      answer: " Facilitate a discussion to find common ground.",
      next: "4E",
    },
    c: {
      answer: "Prefer to compromise or defer to the majority opinion.",
      next: "4F",
    },
  },
  "3C": {
    question: "How do you handle differing opinions in a team?",
    a: {
      answer: "Take the lead in convincing others of your perspective.",
      next: "4D",
    },
    b: {
      answer: " Facilitate a discussion to find common ground.",
      next: "4E",
    },
    c: {
      answer: "Prefer to compromise or defer to the majority opinion.",
      next: "4F",
    },
  },
  "3D": {
    question: "How do you prioritize tasks when faced with multiple deadlines?",
    a: { answer: "Focus on the most critical tasks first.", next: "4G" },
    b: {
      answer: "Break down tasks into smaller, manageable chunks.",
      next: "4H",
    },
    c: { answer: "Delegate tasks to team members when possible.", next: "4I" },
  },

  "3F": {
    question:
      "How do you handle ambiguity or unclear expectations in a project?",
    a: {
      answer: "Seek clarification from the project lead or manager.",
      next: "4J",
    },
    b: { answer: "Make an educated assumption and move forward.", next: "4K" },
    c: { answer: "Escalate the issue to a higher authority.", next: "4L" },
  },

  "3G": {
    question: "How do you approach learning new skills or technologies?",
    a: {
      answer: "Dive in headfirst and figure it out through trial and error.",
      next: "4M",
    },
    b: { answer: "Take an online course or attend a workshop.", next: "4N" },
    c: { answer: "Read books or articles on the subject.", next: "4O" },
  },

  "3H": {
    question: "How do you handle constructive criticism or feedback?",
    a: { answer: "Take it personally and get defensive.", next: "4P" },
    b: {
      answer: "Listen actively and make adjustments accordingly.",
      next: "4Q",
    },
    c: { answer: "Become discouraged and doubt your abilities.", next: "4R" },
  },

  "3I": {
    question: "How do you approach goal-setting and planning?",
    a: {
      answer: "Set specific, measurable, and achievable goals.",
      next: "4S",
    },
    b: {
      answer: "Set broad, aspirational goals and figure it out as you go.",
      next: "4T",
    },
    c: {
      answer: "Don't set goals, and instead focus on the present moment.",
      next: "4U",
    },
  },

  "4A": {
    question: "How do you handle a sudden change in priorities?",
    a: {
      answer: "Adapt quickly and adjust plans accordingly.",
      next: "result",
    },
    b: {
      answer: "Resist the change and argue for the original plan.",
      next: "result",
    },
    c: {
      answer: "Take time to understand the reasons behind the change.",
      next: "result",
    },
  },

  "4B": {
    question: "How do you approach delegating tasks to team members?",
    a: { answer: "Clearly define tasks and expectations.", next: "result" },
    b: {
      answer: "Provide general guidance and let team members figure it out.",
      next: "result",
    },
    c: { answer: "Micromanage and closely monitor progress.", next: "result" },
  },

  "4C": {
    question: "How do you handle a lack of resources or budget constraints?",
    a: {
      answer: "Find creative solutions to work within the constraints.",
      next: "result",
    },
    b: { answer: "Request additional resources or budget.", next: "result" },
    c: {
      answer: "Scale back the project scope or expectations.",
      next: "result",
    },
  },

  "4D": {
    question: "How do you handle a team member who is underperforming?",
    a: {
      answer: "Address the issue directly and provide feedback.",
      next: "result",
    },
    b: { answer: "Provide additional training or coaching.", next: "result" },
    c: {
      answer: "Avoid confrontation and hope the issue resolves itself.",
      next: "result",
    },
  },

  "4E": {
    question: "How do you approach giving feedback to team members?",
    a: { answer: "Provide specific, actionable feedback.", next: "result" },
    b: { answer: "Focus on general praise or encouragement.", next: "result" },
    c: { answer: "Avoid giving feedback to avoid conflict.", next: "result" },
  },

  "4F": {
    question: "How do you handle a conflict between team members?",
    a: {
      answer: "Address the issue directly and facilitate a resolution.",
      next: "result",
    },
    b: {
      answer: "Encourage team members to work it out themselves.",
      next: "result",
    },
    c: { answer: "Escalate the issue to a higher authority.", next: "result" },
  },
  "4G": {
    question:
      "How do you prioritize your work when faced with competing demands?",
    a: { answer: "Focus on the most urgent tasks first.", next: "result" },
    b: {
      answer: "Prioritize tasks based on their impact on the organization.",
      next: "result",
    },
    c: {
      answer: "Delegate tasks to team members when possible.",
      next: "result",
    },
  },

  "4H": {
    question: "How do you handle a project that is falling behind schedule?",
    a: { answer: "Work overtime to catch up.", next: "result" },
    b: {
      answer: "Re-evaluate the project scope and adjust deadlines.",
      next: "result",
    },
    c: {
      answer:
        "Communicate with stakeholders and negotiate a deadline extension.",
      next: "result",
    },
  },

  "4I": {
    question:
      "How do you approach knowledge sharing and collaboration with team members?",
    a: {
      answer:
        "Actively seek out opportunities to share knowledge and expertise.",
      next: "result",
    },
    b: {
      answer: "Share knowledge only when asked or required.",
      next: "result",
    },
    c: { answer: "Keep knowledge and expertise to yourself.", next: "result" },
  },

  "4J": {
    question:
      "How do you handle a situation where you are unsure of the correct course of action?",
    a: { answer: "Seek guidance from a supervisor or mentor.", next: "result" },
    b: {
      answer: "Take a calculated risk and make a decision.",
      next: "result",
    },
    c: {
      answer: "Avoid making a decision and wait for further guidance.",
      next: "result",
    },
  },

  "4K": {
    question:
      "How do you approach continuous learning and professional development?",
    a: {
      answer: "Actively seek out training and development opportunities.",
      next: "result",
    },
    b: {
      answer:
        "Participate in training and development opportunities as required.",
      next: "result",
    },
    c: {
      answer:
        "Focus on immediate tasks and responsibilities, rather than long-term development.",
      next: "result",
    },
  },

  "4L": {
    question: "How do you handle a situation where you have made a mistake?",
    a: {
      answer: "Own up to the mistake and take responsibility.",
      next: "result",
    },
    b: { answer: "Blame external circumstances or others.", next: "result" },
    c: {
      answer: "Try to cover up the mistake or downplay its significance.",
      next: "result",
    },
  },

  "4M": {
    question:
      "How do you approach building relationships with colleagues and stakeholders?",
    a: {
      answer: "Actively seek out opportunities to build relationships.",
      next: "result",
    },
    b: {
      answer:
        "Focus on task-oriented interactions, rather than building relationships.",
      next: "result",
    },
    c: {
      answer:
        "Avoid building relationships, and instead focus on individual work.",
      next: "result",
    },
  },

  "4N": {
    question:
      "How do you handle a situation where you disagree with a team member's idea?",
    a: { answer: "Openly discuss and debate the idea.", next: "result" },
    b: { answer: "Avoid confrontation and agree to disagree.", next: "result" },
    c: { answer: "Dismiss the idea without consideration.", next: "result" },
  },

  "4O": {
    question: "How do you approach time management and prioritization?",
    a: {
      answer: "Use a structured approach to prioritize tasks.",
      next: "result",
    },
    b: {
      answer: "Prioritize tasks based on their urgency and importance.",
      next: "result",
    },
    c: {
      answer: "Manage time reactively, responding to immediate needs.",
      next: "result",
    },
  },

  "4P": {
    question:
      "How do you handle a situation where you are not meeting your performance goals?",
    a: {
      answer: "Take ownership and develop a plan to improve.",
      next: "result",
    },
    b: { answer: "Blame external circumstances or others.", next: "result" },
    c: { answer: "Become discouraged and lose motivation.", next: "result" },
  },

  "4Q": {
    question: "How do you approach providing feedback to others?",
    a: { answer: "Provide specific, actionable feedback.", next: "result" },
    b: { answer: "Focus on general praise or encouragement.", next: "result" },
    c: { answer: "Avoid giving feedback to avoid conflict.", next: "result" },
  },

  "4R": {
    question:
      "How do you handle a situation where you are feeling overwhelmed?",
    a: {
      answer:
        "Take a step back, prioritize tasks, and focus on one thing at a time.",
      next: "result",
    },
    b: {
      answer: "Try to push through and complete all tasks at once.",
      next: "result",
    },
    c: {
      answer: "Seek help and support from colleagues or a supervisor.",
      next: "result",
    },
  },

  "4S": {
    question:
      "How do you approach setting boundaries with colleagues or stakeholders?",
    a: {
      answer: "Clearly communicate expectations and needs.",
      next: "result",
    },
    b: {
      answer: "Avoid setting boundaries to maintain relationships.",
      next: "result",
    },
    c: {
      answer: "Set boundaries reactively, in response to conflicts or issues.",
      next: "result",
    },
  },

  "4T": {
    question:
      "How do you handle a situation where you need to make a difficult decision?",
    a: {
      answer: "Weigh the pros and cons, and consider multiple perspectives.",
      next: "result",
    },
    b: {
      answer: "Trust your instincts and make a quick decision.",
      next: "result",
    },
    c: {
      answer: "Avoid making the decision, and seek input from others.",
      next: "result",
    },
  },

  "4U": {
    question: "How do you approach delegating tasks to team members?",
    a: {
      answer:
        "Clearly define tasks and expectations, and provide necessary resources.",
      next: "result",
    },
    b: {
      answer: "Provide general guidance, and let team members figure it out.",
      next: "result",
    },
    c: { answer: "Micromanage, and closely monitor progress.", next: "result" },
  },
};

module.exports = Data;
