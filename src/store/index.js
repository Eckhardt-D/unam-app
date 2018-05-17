import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  chapterTwo: [
  {
    "q": "Name the three classes of the IFAC code of ethics. (eg. (A - xxx, B - xxx) etc.)",
    "a": "A - General application, B - Chartered Accountants in Public Practice, C - Chartered Accountants in Business Practice"
  },
  {
    "q": "What are the 5 fundamental principles which RA's must apply?",
    "a": "1. Integrity, 2. Objectivity, 4. Professional competence and due care, 4. Cofidentiality"
  },
  {
    "q": "Explain Integrity.",
    "a": "Straight forward, honest, fair, truthful."
  },
  {
    "q": "Objectivity means free of:",
    "a": "Bias, conflict of interest, undue influence."
  },
  {
    "q": "Explain competence:",
    "a": "Professional knowledge and skill"
  },
  {
    "q": "Under which circumstances may a RA disclose information?",
    "a": "Specific authority, legal obligation, professional duty, permitted by law"
  },
  {
    "q": "Explain what threats are defined as (what they threaten).",
    "a": "Threaten compliance with the fundamental principles."
  },
  {
    "q": "List the types of threats eg. (1. threat name, 2. threat name)",
    "a": "1. Self-interest threats, 2. Self-review threats, 3. Advocacy threats, 4. Familiarity threats, 5. Intimidation threats"
  },
  {
    "q": "What are safeguards' purpose?",
    "a": "Reduce the threat to an accetpable level"
  },
  {
    "q": "Name the 2 categories of safeguards",
    "a": "1. Created by profession, legislation, regulation or law, 2. Created in the work environment"
  },
  {
    "q": "What is a safeguard for threats that arise from client acceptance.",
    "a": "screening of clients before acceptance and quality control."
  },
  {
    "q": "How should you handle a change in professional appointment.",
    "a": "1. Discuss the client affairs with existing accountant"
  },
  {
    "q": "what are the threats posed by conflict of interest?",
    "a": "Competing in the same industry or market"
  },
  {
    "q": "Name some safeguards to apply in case of conflict of interest.",
    "a": "Notification of conflict of interst, consent to offer services, use of separate engagement terms, confidentiality agreements."
  },
  {
    "q": "what section does the threat of low fees fall in to? Name and Number.",
    "a": "Section 240 - fees and other type of remuneration"
  },
  {
    "q": "How to safeguard against low fees?",
    "a": "Providing a basis on which fees are charged."
  },
  {
    "q": "What are the threats of marketing professional services?",
    "a": "dishonest, exaggerated, bad taste."
  },
  {
    "q": "List five examples of improper conduct:",
    "a": "Any: dishonesty, divulging confidential information, accepting rewards, solicting, canvasing, advertising for work."
  },
  {
    "q": "what are the reprecussions of an auditor being found guitly of imporoper conduct?",
    "a": "caution, reprimand, 100 000 fine,suspension from practice."
  }
],
chapterFive: [
  {
    "q": "What is a postulation (i.e. what does postulate mean)?",
    "a": "it is a basis for reasoning and basis of thinking about problems and arriving at solutions."
  },
  {
    "q": "Name as many auditing postulations as you can.",
    "a": "1. Not necessarily conflict of interest between the auditor and management. 2. Independent and objective opinion. 3. Professional status of auditor due care before personal interest, efficiency and competence. 4. Financial data is verifiable. 5. Internal control reduce probability of errors and irregularities. 6. Application of GAAP. 7. Which held true in past will hold true in future. 8. AFS submitted to auditor are free of collusive and unusual irregularities"
  },
  {
    "q": "Define internal control.",
    "a": "is a process affected by BOD, mgt and staff and designed to provide reasonable assurance regarding the achievement of objective in 3 categories."
  },
  {
    "q": "What are the three categories that internal control sets out o achieve its objective?",
    "a": "1. Economy, efficiency and effectiveness of operations. 2. Internal financial control. 3. Compliance with laws and regulations."
  },
  {
    "q": "Name 5 objectives of internal controls.",
    "a": "1. Adherence to management policies, 2. Safeguarding assets, 3. Accuracy and completeness of accounting records. 4. Prevention and detection of fraud and error. 5. Timely preparations of financial info."
  },
  {
    "q": "Add keywords to the following sentences: 1. Cost of controls should not _____ benefit.",
    "a": "Exceed"
  },
  {
    "q": "Internal controls are directed at ______ transactions.",
    "a": "Routine"
  },
  {
    "q": "Distraction and carelessness may cause human ______.",
    "a": "Error"
  },
  {
    "q": "When a member of organization (management etc.) commits _____ with an outside party, internal controls can be overcome.",
    "a": "Collusion"
  },
  {
    "q": "Name the components of internal control.",
    "a": "1. Control environment. 2. Risk assessment. 3. Information system. 4. Control activities. 5. Monitoring of controls."
  },
  {
    "q": "Materiality relates to the ______ and _______ of an amount.",
    "a": "Importance, significance"
  },
  {
    "q": "True or false: If Audit evidence is provided by a 3rd party (eg. bank) it is less reliable than if the client provides it?",
    "a": "False"
  },
  {
    "q": "Name the associated financial statement assertion: 1. All assets have been recorded.",
    "a": "Completeness"
  },
  {
    "q": "2. transactions recorded in correct accounting period",
    "a": "Cut-off"
  },
  {
    "q": "3. transactions recorded in proper accounts.",
    "a": "Classification"
  },
  {
    "q": "What are two ways that you can determine the sample size of a sampling exercise?",
    "a": "1. Random, 2. Systemic"
  }
]
}

export default new Vuex.Store({
  state
})
