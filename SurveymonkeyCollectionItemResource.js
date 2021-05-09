import SurveymonkeyResource from './SurveymonkeyResource'

/**
 * Represents Surveymonkey collection item resource.
 * @class
 * @name SurveymonkeyCollectionItemResource
 * @augments SurveymonkeyResource
 */
class SurveymonkeyCollectionItemResource extends SurveymonkeyResource {
  /**
   * @constructor
   * @param {String} id Collection item resource id.
   * @param {Object} options Axios config.
   * @see https://github.com/axios/axios#axios-api
   */
  constructor(id, options = {}) {
    super(options)
    this.id_ = id
  }

  /**
   * @method
   * @name SurveymonkeyCollectionItemResource.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return encodeURIComponent(this.id_)
  }
}

export default SurveymonkeyCollectionItemResource