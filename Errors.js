import SurveymonkeyCollectionResource from './SurveymonkeyCollectionResource'
import SurveymonkeyCollectionItemResource from './SurveymonkeyCollectionItemResource'

/**
 * Represents a list of known errors.
 * @see https://developer.surveymonkey.com/api/v3/#errors
 * @class
 * @name Errors
 * @augments SurveymonkeyCollectionResource
 */
export default class Errors extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name Errors.item
   * @param {String} id Error id.
   * @returns {Error} Error details resource.
   */
  item(id) {
    return new Error(id, this.options())
  }

  /**
   * @method
   * @name Errors.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'errors'
  }
}

/**
 * Represents the details of a known error.
 * @see https://developer.surveymonkey.com/api/v3/#errors-id
 * @class
 * @name Error
 * @augments SurveymonkeyCollectionItemResource
 */
class Error extends SurveymonkeyCollectionItemResource { }