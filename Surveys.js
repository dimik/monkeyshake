import SurveymonkeyResource from './SurveymonkeyResource'
import SurveymonkeyCollectionResource from './SurveymonkeyCollectionResource'
import SurveymonkeyCollectionItemResource from './SurveymonkeyCollectionItemResource'

/**
 * Represents a list of surveys owned or shared with the authenticated user.
 * @see https://developer.surveymonkey.com/api/v3/#surveys
 * @class
 * @name Surveys
 * @augments SurveymonkeyCollectionResource
 */
export default class Surveys extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name Surveys.item
   * @param {String} id Survey id.
   * @returns {Survey} Survey details resource.
   */
  item(id) {
    return new Survey(id, this.options())
  }

  /**
   * @method
   * @name Surveys.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name Surveys.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'surveys'
  }
}

/**
 * Represents survey details.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id
 * @class
 * @name Survey
 * @augments SurveymonkeyCollectionItemResource
 */
class Survey extends SurveymonkeyCollectionItemResource {
  collectors() {
    return new SurveyCollectors(this.options())
  }
  /**
   * @method
   * @name Survey.details
   * @returns {SurveyDetails} Expanded survey details resource.
   */
  details() {
    return new SurveyDetails(this.options())
  }

  /**
   * @method
   * @name Survey.languages
   * @param {String} [languageCode] Survey translation language code.
   * @returns {SurveyTranslations|SurveyTranslation} Existed survey translations or translation resource.
   */
  languages(languageCode) {
    return new SurveyTranslations(languageCode, this.options())
  }

  /**
   * @method
   * @name Survey.pages
   * @param {String} [id] Page id.
   * @returns {SurveyPages|SurveyPage} Survey page list or page resource.
   */
  pages(id) {
    return new SurveyPages(id, this.options())
  }

  /**
   * @method
   * @name Survey.responses
   * @param {String} [id] Response id.
   * @returns {SurveyResponses|SurveyResponse} Survey response list or response resource.
   */
  responses(id) {
    return new SurveyResponses(id, this.options())
  }

  /**
   * @method
   * @name Survey.rollups
   * @returns {Rollups} Rollups resource for all questions in a survey.
   */
  rollups() {
    return new Rollups(this.options())
  }

  /**
   * @method
   * @name Survey.trends
   * @returns {Trends} Trends resource for specified survey.
   */
  trends() {
    return new Trends(this.options())
  }

  /**
   * @method
   * @name Survey.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH', 'PUT', 'DELETE']
  }
}

/**
 * Represents a list of collectors for a given survey.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-collectors
 * @class
 * @name SurveyCollectors
 * @augments SurveymonkeyResource
 */
class SurveyCollectors extends SurveymonkeyResource {
  /**
   * @method
   * @name SurveyCollectors.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name SurveyCollectors.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'collectors'
  }
}

/**
 * Represents expanded survey details.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-details
 * @class
 * @name SurveyDetails
 * @augments SurveymonkeyResource
 */
class SurveyDetails extends SurveymonkeyResource {
  /**
   * @method
   * @name SurveyDetails.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['GET']
  }

  /**
   * @method
   * @name SurveyDetails.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'details'
  }
}

/**
 * Represents all existed survey translations.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-survey_id-languages
 * @class
 * @name SurveyTranslations
 * @augments SurveymonkeyCollectionResource
 */
class SurveyTranslations extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name SurveyTranslations.item
   * @param {String} languageCode Survey translation language code.
   * @returns {SurveyTranslation} Survey translation resource.
   */
  item(languageCode) {
    return new SurveyTranslation(languageCode, this.options())
  }

  /**
   * @method
   * @name SurveyTranslations.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'languages'
  }
}

/**
 * Represents specified survey translation.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-survey_id-languages-language_code
 * @class
 * @name SurveyTranslation
 * @augments SurveymonkeyCollectionItemResource
 */
class SurveyTranslation extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name SurveyTranslation.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH', 'PUT', 'DELETE']
  }
}

/**
 * Represents survey pages details
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-pages
 * @class
 * @name SurveyPages
 * @augments SurveymonkeyCollectionResource
 */
class SurveyPages extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name SurveyPages.item
   * @param {String} id Survey page id
   * @returns {SurveyPage} Survey page details resource.
   */
  item(id) {
    return new SurveyPage(id, this.options())
  }

  /**
   * @method
   * @name SurveyPages.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name SurveyPages.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'pages'
  }
}

/**
 * Represents survey page details.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-pages-id
 * @class
 * @name SurveyPage
 * @augments SurveymonkeyCollectionItemResource
 */
class SurveyPage extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name SurveyPage.questions
   * @param {String} [id] Question id.
   * @returns {Questions|Question} Question list or question resource.
   */
  questions(id) {
    return new Questions(id, this.options())
  }

  /**
   * @method
   * @name SurveyPage.rollups
   * @returns {Rollups} Rollups resource for only the survey page specified.
   */
  rollups() {
    return new Rollups(this.options())
  }

  /**
   * @method
   * @name SurveyPage.trends
   * @returns {Trends} Trends resource for only the survey page specified.
   */
  trends() {
    return new Trends(this.options())
  }

  /**
   * @method
   * @name SurveyPage.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH', 'PUT', 'DELETE']
  }
}

/**
 * Represents list of questions.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-pages-id-questions
 * @class
 * @name Questions
 * @augments SurveymonkeyCollectionResource
 */
class Questions extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name Questions.item
   * @param {String} id Question id.
   * @returns {Question} Question details resource.
   */
  item(id) {
    return new Question(id, this.options())
  }

  /**
   * @method
   * @name Questions.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name Questions.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'questions'
  }
}

/**
 * Represents question details.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-pages-id-questions-id
 * @class
 * @name Question
 * @augments SurveymonkeyCollectionItemResource
 */
class Question extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name Question.benchmark
   * @returns {Benchmark} Benchmark resource for the given question.
   */
  benchmark() {
    return new Benchmark(this.options())
  }

  /**
   * @method
   * @name Question.rollups
   * @returns {Rollups} Rollups resource for only the survey question specified.
   */
  rollups() {
    return new Rollups(this.options())
  }

  /**
   * @method
   * @name Question.trends
   * @returns {Trends} Trends resource for only the survey question specified.
   */
  trends() {
    return new Trends(this.options())
  }

  /**
   * @method
   * @name Question.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH', 'PUT', 'DELETE']
  }
}

/**
 * Represents list of responses for the given survey.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-responses
 * @class
 * @name SurveyResponses
 * @augments SurveymonkeyCollectionResource
 */
export class SurveyResponses extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name SurveyResponses.bulk
   * @returns {SurveyResponsesBulk} Expanded responses list resource.
   */
  bulk() {
    return new SurveyResponsesBulk(this.options())
  }

  /**
   * @method
   * @name SurveyResponses.item
   * @param {String} id Response id.
   * @returns {SurveyResponse} Response details resource.
   */
  item(id) {
    return new SurveyResponse(id, this.options())
  }

  /**
   * @method
   * @name SurveyResponses.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['GET']
  }

  /**
   * @method
   * @name SurveyResponses.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'responses'
  }
}

/**
 * Represents list of full expanded responses, including answers to all questions.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-responses-bulk
 * @class
 * @name SurveyResponsesBulk
 * @augments SurveymonkeyResource
 */
class SurveyResponsesBulk extends SurveymonkeyResource {
  /**
   * @method
   * @name SurveyResponsesBulk.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['GET']
  }

  /**
   * @method
   * @name SurveyResponsesBulk.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'bulk'
  }
}

/**
 * Represents response details.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-responses-id
 * @class
 * @name SurveyResponse
 * @augments SurveymonkeyCollectionItemResource
 */
class SurveyResponse extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name SurveyResponse.details
   * @returns {SurveyResponseDetails} Expanded response details resource.
   */
  details() {
    return new SurveyResponseDetails(this.options())
  }

  /**
   * @method
   * @name SurveyResponse.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH', 'PUT', 'DELETE']
  }
}

/**
 * Represents a full expanded response, including answers to all questions.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-responses-id-details
 * @class
 * @name SurveyResponseDetails
 * @augments SurveymonkeyResource
 */
class SurveyResponseDetails extends SurveymonkeyResource {
  /**
   * @method
   * @name SurveyResponseDetails.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['GET']
  }

  /**
   * @method
   * @name SurveyResponseDetails.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'details'
  }
}

/**
 * Represents benchmark for the given question.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-pages-id-questions-id-benchmark
 * @class
 * @name Benchmark
 * @augments SurveymonkeyResource
 */
class Benchmark extends SurveymonkeyResource {
  /**
   * @method
   * @name Benchmark.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'benchmark'
  }
}

/**
 * Represents questions' rollups.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-rollups
 * @class
 * @name Rollups
 * @augments SurveymonkeyResource
 */
class Rollups extends SurveymonkeyResource {
  /**
   * @method
   * @name Rollups.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'rollups'
  }
}

/**
 * Represents answer counts for a particular time periods.
 * @see https://developer.surveymonkey.com/api/v3/#surveys-id-trends
 * @class
 * @name Trends
 * @augments SurveymonkeyResource
 */
class Trends extends SurveymonkeyResource {
  /**
   * @method
   * @name Trends.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'trends'
  }
}

/**
 * Represents a list of survey categories that can be used to filter survey templates.
 * @see https://developer.surveymonkey.com/api/v3/#survey_categories
 * @class
 * @name SurveyCategories
 * @augments SurveymonkeyResource
 */
export class SurveyCategories extends SurveymonkeyResource {
  /**
   * @method
   * @name SurveyCategories.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'survey_categories'
  }
}

/**
 * Represents survey folders.
 * @see https://developer.surveymonkey.com/api/v3/#survey_folders
 * @class
 * @name SurveyFolders
 * @augments SurveymonkeyResource
 */
export class SurveyFolders extends SurveymonkeyResource {
  /**
   * @method
   * @name SurveyFolders.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name SurveyFolders.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'survey_folders'
  }
}

/**
 * Represents a list of survey languages.
 * @see https://developer.surveymonkey.com/api/v3/#survey_languages
 * @class
 * @name SurveyLanguages
 * @augments SurveymonkeyResource
 */
export class SurveyLanguages extends SurveymonkeyResource {
  /**
   * @method
   * @name SurveyLanguages.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'survey_languages'
  }
}

/**
 * Represents a list of survey templates.
 * @see https://developer.surveymonkey.com/api/v3/#survey_templates
 * @class
 * @name SurveyTemplates
 * @augments SurveymonkeyResource
 */
export class SurveyTemplates extends SurveymonkeyResource {
  /**
   * @method
   * @name SurveyTemplates.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'survey_templates'
  }
}