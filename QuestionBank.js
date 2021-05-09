import SurveymonkeyResource from './SurveymonkeyResource'

/**
 * Represents a question bank.
 * @class
 * @name QuestionBank
 * @augments SurveymonkeyResource
 */
export default class QuestionBank extends SurveymonkeyResource {
  /**
   * @method
   * @name QuestionBank.questions
   * @returns {QuestionBankQuestions} Question bank questions resource.
   */
  questions() {
    return new QuestionBankQuestions(this.options())
  }

  /**
   * @method
   * @name QuestionBank.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return []
  }

  /**
   * @method
   * @name QuestionBank.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'question_bank'
  }
}

/**
 * Represents a list of question bank questions available to the user.
 * @see https://developer.surveymonkey.com/api/v3/#question_bank-questions
 * @class
 * @name QuestionBankQuestions
 * @augments SurveymonkeyResource
 */
class QuestionBankQuestions extends SurveymonkeyResource {
  /**
   * @method
   * @name QuestionBankQuestions.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'questions'
  }
}