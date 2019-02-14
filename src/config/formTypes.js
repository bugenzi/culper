import formSections from './formSections/index'

export const SF85 = [
  {
    ...formSections.IDENTIFICATION,
    subsections: [
      formSections.IDENTIFICATION_INTRO,
      formSections.IDENTIFICATION_NAME,
      formSections.IDENTIFICATION_BIRTH_DATE,
      formSections.IDENTIFICATION_BIRTH_PLACE,
      formSections.IDENTIFICATION_SSN,
      formSections.IDENTIFICATION_OTHER_NAMES,
      formSections.IDENTIFICATION_CONTACTS,
      formSections.IDENTIFICATION_PHYSICAL,
      formSections.IDENTIFICATION_REVIEW,
    ],
  },

  /*
  sections.IDENTIFICATION_INTRO,
  sections.IDENTIFICATION_NAME,
  sections.IDENTIFICATION_BIRTH_DATE,
  sections.IDENTIFICATION_BIRTH_PLACE,
  sections.IDENTIFICATION_SSN,
  sections.IDENTIFICATION_OTHER_NAMES,
  sections.IDENTIFICATION_CONTACTS,
  sections.IDENTIFICATION_PHYSICAL,
  sections.IDENTIFICATION_REVIEW,

  sections.HISTORY_INTRO,
  sections.HISTORY_RESIDENCE,
  sections.HISTORY_EMPLOYMENT,
  sections.HISTORY_EDUCATION,
  sections.HISTORY_REVIEW,

  sections.CITIZENSHIP_INTRO,
  sections.CITIZENSHIP_STATUS,
  sections.CITIZENSHIP_MULTIPLE,
  sections.CITIZENSHIP_PASSPORTS,
  sections.CITIZENSHIP_REVIEW,

  sections.MILITARY_INTRO,
  sections.MILITARY_SELECTIVE,
  sections.MILITARY_HISTORY,
  sections.MILITARY_FOREIGN,
  sections.MILITARY_REVIEW,

  sections.FOREIGN_INTRO,
  sections.FOREIGN_PASSPORT,
  sections.FOREIGN_REVIEW,

  sections.FINANCIAL_INTRO,
  sections.FINANCIAL_BANKRUPTCY,
  sections.FINANCIAL_GAMBLING,
  sections.FINANCIAL_TAXES,
  sections.FINANCIAL_CARD,
  sections.FINANCIAL_CREDIT,
  sections.FINANCIAL_DELINQUENT,
  sections.FINANCIAL_NONPAYMENT,
  sections.FINANCIAL_REVIEW,

  sections.SUBSTANCE_USE_INTRO,
  sections.SUBSTANCE_USE_DRUGS,
  sections.SUBSTANCE_USE_DRUGS_USAGE,
  sections.SUBSTANCE_USE_DRUGS_PURCHASE,
  sections.SUBSTANCE_USE_DRUGS_CLEARANCE,
  sections.SUBSTANCE_USE_DRUGS_PUBLIC_SAFETY,
  sections.SUBSTANCE_USE_DRUGS_MISUSE,
  sections.SUBSTANCE_USE_DRUGS_ORDERED,
  sections.SUBSTANCE_USE_DRUGS_VOLUNTARY,
  sections.SUBSTANCE_USE_REVIEW,

  sections.LEGAL_INTRO,
  sections.LEGAL_POLICE,
  sections.LEGAL_POLICE_OFFENSES,
  sections.LEGAL_POLICE_ADDITIONAL_OFFENSES,
  sections.LEGAL_POLICE_DOMESTIC_VIOLENCE,
  sections.LEGAL_INVESTIGATIONS,
  sections.LEGAL_INVESTIGATIONS_HISTORY,
  sections.LEGAL_INVESTIGATIONS_REVOKED,
  sections.LEGAL_INVESTIGATIONS_DEBARRED,
  sections.LEGAL_ASSOCIATIONS,
  sections.LEGAL_ASSOCIATIONS_TERRORIST_ORGANIZATION,
  sections.LEGAL_ASSOCIATIONS_ENGAGED_IN_TERRORISM,
  sections.LEGAL_ASSOCIATIONS_ADVOCATING,
  sections.LEGAL_ASSOCIATIONS_MEMBERSHIP_OVERTHROW,
  sections.LEGAL_ASSOCIATIONS_MEMBERSHIP_VIOLENCE,
  sections.LEGAL_ASSOCIATIONS_ACTIVITIES_TO_OVERTHROW,
  sections.LEGAL_ASSOCIATIONS_TERRORISM_ASSOCIATION,
  sections.LEGAL_REVIEW,
  */
]

export const SF85P = [
  {
    ...formSections.IDENTIFICATION,
    subsections: [
      formSections.IDENTIFICATION_INTRO,
      formSections.IDENTIFICATION_NAME,
      formSections.IDENTIFICATION_BIRTH_DATE,
      formSections.IDENTIFICATION_BIRTH_PLACE,
      formSections.IDENTIFICATION_SSN,
      formSections.IDENTIFICATION_OTHER_NAMES,
      formSections.IDENTIFICATION_CONTACTS,
      formSections.IDENTIFICATION_PHYSICAL,
      formSections.IDENTIFICATION_REVIEW,
    ],
  },
  /*
  sections.IDENTIFICATION_INTRO,
  sections.IDENTIFICATION_NAME,
  sections.IDENTIFICATION_BIRTH_DATE,
  sections.IDENTIFICATION_BIRTH_PLACE,
  sections.IDENTIFICATION_SSN,
  sections.IDENTIFICATION_OTHER_NAMES,
  sections.IDENTIFICATION_CONTACTS,
  sections.IDENTIFICATION_PHYSICAL,
  sections.IDENTIFICATION_REVIEW,

  sections.HISTORY_INTRO,
  sections.HISTORY_RESIDENCE,
  sections.HISTORY_EMPLOYMENT,
  sections.HISTORY_EDUCATION,
  sections.HISTORY_FEDERAL,
  sections.HISTORY_REVIEW,

  sections.RELATIONSHIPS_INTRO,
  sections.RELATIONSHIPS_STATUS,
  sections.RELATIONSHIPS_STATUS_MARITAL,
  sections.RELATIONSHIPS_STATUS_COHABITANTS,
  sections.RELATIONSHIPS_PEOPLE,
  sections.RELATIONSHIPS_RELATIVES,
  sections.RELATIONSHIPS_REVIEW,

  sections.CITIZENSHIP_INTRO,
  sections.CITIZENSHIP_STATUS,
  sections.CITIZENSHIP_MULTIPLE,
  sections.CITIZENSHIP_PASSPORTS,
  sections.CITIZENSHIP_REVIEW,

  sections.MILITARY_INTRO,
  sections.MILITARY_SELECTIVE,
  sections.MILITARY_HISTORY,
  sections.MILITARY_FOREIGN,
  sections.MILITARY_REVIEW,

  sections.FOREIGN_INTRO,
  sections.FOREIGN_PASSPORT,
  sections.FOREIGN_TRAVEL,
  sections.FOREIGN_REVIEW,

  sections.FINANCIAL_INTRO,
  sections.FINANCIAL_BANKRUPTCY,
  sections.FINANCIAL_GAMBLING,
  sections.FINANCIAL_TAXES,
  sections.FINANCIAL_CARD,
  sections.FINANCIAL_CREDIT,
  sections.FINANCIAL_DELINQUENT,
  sections.FINANCIAL_NONPAYMENT,
  sections.FINANCIAL_REVIEW,

  sections.SUBSTANCE_USE_INTRO,
  sections.SUBSTANCE_USE_DRUGS,
  sections.SUBSTANCE_USE_DRUGS_USAGE,
  sections.SUBSTANCE_USE_DRUGS_PURCHASE,
  sections.SUBSTANCE_USE_DRUGS_CLEARANCE,
  sections.SUBSTANCE_USE_DRUGS_PUBLIC_SAFETY,
  sections.SUBSTANCE_USE_DRUGS_MISUSE,
  sections.SUBSTANCE_USE_DRUGS_ORDERED,
  sections.SUBSTANCE_USE_DRUGS_VOLUNTARY,
  sections.SUBSTANCE_USE_ALCOHOL,
  sections.SUBSTANCE_USE_ALCOHOL_NEGATIVE,
  sections.SUBSTANCE_USE_ALCOHOL_ORDERED,
  sections.SUBSTANCE_USE_ALCOHOL_VOLUNTARY,
  sections.SUBSTANCE_USE_ALCOHOL_ADDITIONAL,
  sections.SUBSTANCE_USE_REVIEW,

  sections.LEGAL_INTRO,
  sections.LEGAL_POLICE,
  sections.LEGAL_POLICE_OFFENSES,
  sections.LEGAL_POLICE_ADDITIONAL_OFFENSES,
  sections.LEGAL_POLICE_DOMESTIC_VIOLENCE,
  sections.LEGAL_INVESTIGATIONS,
  sections.LEGAL_INVESTIGATIONS_HISTORY,
  sections.LEGAL_INVESTIGATIONS_REVOKED,
  sections.LEGAL_INVESTIGATIONS_DEBARRED,
  sections.LEGAL_COURT,
  sections.LEGAL_TECHNOLOGY,
  sections.LEGAL_TECHNOLOGY_UNAUTHORIZED,
  sections.LEGAL_TECHNOLOGY_MANIPULATING,
  sections.LEGAL_TECHNOLOGY_UNLAWFUL,
  sections.LEGAL_ASSOCIATIONS,
  sections.LEGAL_ASSOCIATIONS_TERRORIST_ORGANIZATION,
  sections.LEGAL_ASSOCIATIONS_ENGAGED_IN_TERRORISM,
  sections.LEGAL_ASSOCIATIONS_ADVOCATING,
  sections.LEGAL_ASSOCIATIONS_MEMBERSHIP_OVERTHROW,
  sections.LEGAL_ASSOCIATIONS_MEMBERSHIP_VIOLENCE,
  sections.LEGAL_ASSOCIATIONS_ACTIVITIES_TO_OVERTHROW,
  sections.LEGAL_ASSOCIATIONS_TERRORISM_ASSOCIATION,
  sections.LEGAL_REVIEW,
  */
]

export const SF86 = [
  {
    ...formSections.IDENTIFICATION,
    subsections: [
      formSections.IDENTIFICATION_INTRO,
      formSections.IDENTIFICATION_NAME,
      formSections.IDENTIFICATION_BIRTH_DATE,
      formSections.IDENTIFICATION_BIRTH_PLACE,
      formSections.IDENTIFICATION_SSN,
      formSections.IDENTIFICATION_OTHER_NAMES,
      formSections.IDENTIFICATION_CONTACTS,
      formSections.IDENTIFICATION_PHYSICAL,
      formSections.IDENTIFICATION_REVIEW,
    ],
  },
  /*
  sections.IDENTIFICATION_INTRO,
  sections.IDENTIFICATION_NAME,
  sections.IDENTIFICATION_BIRTH_DATE,
  sections.IDENTIFICATION_BIRTH_PLACE,
  sections.IDENTIFICATION_SSN,
  sections.IDENTIFICATION_OTHER_NAMES,
  sections.IDENTIFICATION_CONTACTS,
  sections.IDENTIFICATION_PHYSICAL,
  sections.IDENTIFICATION_REVIEW,

  sections.HISTORY_INTRO,
  sections.HISTORY_RESIDENCE,
  sections.HISTORY_EMPLOYMENT,
  sections.HISTORY_EDUCATION,
  sections.HISTORY_FEDERAL,
  sections.HISTORY_REVIEW,

  sections.RELATIONSHIPS_INTRO,
  sections.RELATIONSHIPS_STATUS,
  sections.RELATIONSHIPS_STATUS_MARITAL,
  sections.RELATIONSHIPS_STATUS_COHABITANTS,
  sections.RELATIONSHIPS_PEOPLE,
  sections.RELATIONSHIPS_RELATIVES,
  sections.RELATIONSHIPS_REVIEW,

  sections.CITIZENSHIP_INTRO,
  sections.CITIZENSHIP_STATUS,
  sections.CITIZENSHIP_MULTIPLE,
  sections.CITIZENSHIP_PASSPORTS,
  sections.CITIZENSHIP_REVIEW,

  sections.MILITARY_INTRO,
  sections.MILITARY_SELECTIVE,
  sections.MILITARY_HISTORY,
  sections.MILITARY_FOREIGN,
  sections.MILITARY_REVIEW,

  sections.FOREIGN_INTRO,
  sections.FOREIGN_PASSPORT,
  sections.FOREIGN_CONTACTS,
  sections.FOREIGN_ACTIVITIES,
  sections.FOREIGN_BUSINESS,
  sections.FOREIGN_TRAVEL,
  sections.FOREIGN_REVIEW,

  sections.FINANCIAL_INTRO,
  sections.FINANCIAL_BANKRUPTCY,
  sections.FINANCIAL_GAMBLING,
  sections.FINANCIAL_TAXES,
  sections.FINANCIAL_CARD,
  sections.FINANCIAL_CREDIT,
  sections.FINANCIAL_DELINQUENT,
  sections.FINANCIAL_NONPAYMENT,
  sections.FINANCIAL_REVIEW,

  sections.SUBSTANCE_USE_INTRO,
  sections.SUBSTANCE_USE_DRUGS,
  sections.SUBSTANCE_USE_DRUGS_USAGE,
  sections.SUBSTANCE_USE_DRUGS_PURCHASE,
  sections.SUBSTANCE_USE_DRUGS_CLEARANCE,
  sections.SUBSTANCE_USE_DRUGS_PUBLIC_SAFETY,
  sections.SUBSTANCE_USE_DRUGS_MISUSE,
  sections.SUBSTANCE_USE_DRUGS_ORDERED,
  sections.SUBSTANCE_USE_DRUGS_VOLUNTARY,
  sections.SUBSTANCE_USE_ALCOHOL,
  sections.SUBSTANCE_USE_ALCOHOL_NEGATIVE,
  sections.SUBSTANCE_USE_ALCOHOL_ORDERED,
  sections.SUBSTANCE_USE_ALCOHOL_VOLUNTARY,
  sections.SUBSTANCE_USE_ALCOHOL_ADDITIONAL,
  sections.SUBSTANCE_USE_REVIEW,

  sections.LEGAL_INTRO,
  sections.LEGAL_POLICE,
  sections.LEGAL_POLICE_OFFENSES,
  sections.LEGAL_POLICE_ADDITIONAL_OFFENSES,
  sections.LEGAL_POLICE_DOMESTIC_VIOLENCE,
  sections.LEGAL_INVESTIGATIONS,
  sections.LEGAL_INVESTIGATIONS_HISTORY,
  sections.LEGAL_INVESTIGATIONS_REVOKED,
  sections.LEGAL_INVESTIGATIONS_DEBARRED,
  sections.LEGAL_COURT,
  sections.LEGAL_TECHNOLOGY,
  sections.LEGAL_TECHNOLOGY_UNAUTHORIZED,
  sections.LEGAL_TECHNOLOGY_MANIPULATING,
  sections.LEGAL_TECHNOLOGY_UNLAWFUL,
  sections.LEGAL_ASSOCIATIONS,
  sections.LEGAL_ASSOCIATIONS_TERRORIST_ORGANIZATION,
  sections.LEGAL_ASSOCIATIONS_ENGAGED_IN_TERRORISM,
  sections.LEGAL_ASSOCIATIONS_ADVOCATING,
  sections.LEGAL_ASSOCIATIONS_MEMBERSHIP_OVERTHROW,
  sections.LEGAL_ASSOCIATIONS_MEMBERSHIP_VIOLENCE,
  sections.LEGAL_ASSOCIATIONS_ACTIVITIES_TO_OVERTHROW,
  sections.LEGAL_ASSOCIATIONS_TERRORISM_ASSOCIATION,
  sections.LEGAL_REVIEW,

  sections.PSYCHOLOGICAL_INTRO,
  sections.PSYCHOLOGICAL_COMPETENCE,
  sections.PSYCHOLOGICAL_CONSULTATIONS,
  sections.PSYCHOLOGICAL_HOSPITALIZATIONS,
  sections.PSYCHOLOGICAL_DIAGNOSES,
  sections.PSYCHOLOGICAL_CONDITIONS,
  sections.PSYCHOLOGICAL_REVIEW,
  */
]