import SurveymonkeyResource from './SurveymonkeyResource'

/**
 * Represents Surveymonkey collection resource.
 * @class
 * @name SurveymonkeyCollectionResource
 * @augments SurveymonkeyResource
 */
class SurveymonkeyCollectionResource extends SurveymonkeyResource {
  /**
   * @constructor
   * @param {String} [id] Collection item resource id.
   * @param {Object} options Axios config.
   * @see https://github.com/axios/axios#axios-api
   */
  constructor(id, options = {}) {
    super(options)

    if (id) {
      return this.item(id)
    }
  }

  /**
   * @method
   * @name SurveymonkeyCollectionResource.item
   * @param {String} id Collection item resource id.
   * @returns {SurveymonkeyCollectionItemResource} Collection item resource instance.
   */
  item(id) { }
}

export default SurveymonkeyCollectionResource