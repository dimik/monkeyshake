import axios from 'axios'

/**
 * Base class for all Surveymonkey resources.
 * @class
 * @name SurveymonkeyResource
 */
class SurveymonkeyResource {
  /**
   * @constructor
   * @param {Object} options Axios config.
   * @see https://github.com/axios/axios#axios-api
   */
  constructor(options = {}) {
    this.options_ = options
  }

  /**
   * Appends resource URL chunk to axios config url.
   * @method
   * @name SurveymonkeyResource.options
   * @return {Object} Axios config.
   */
  options() {
    const options = this.options_
    return {
      ...options,
      url: `${options.url || ''}/${this.uri()}`,
    }
  }

  /**
   * @method
   * @name SurveymonkeyResource.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET']
  }

  /**
   * Makes axios request and returns Promise.
   * @see https://github.com/axios/axios#axios-api
   * @method
   * @name SurveymonkeyResource.request
   * @param {Object} options Axios request config.
   * @see https://github.com/axios/axios#request-config
   * @returns {Promise} Resolved with axios response or rejected with error
   * @see https://github.com/axios/axios#response-schema
   * @see https://github.com/axios/axios#handling-errors
   */
  request(options = {}) {
    const { method = 'GET' } = options
    const allowedMethods = this.methods()
    if (!allowedMethods.length) {
      return Promise.reject(new Error('[Surveymonkey]: Request is not allowed'))
    }
    if (allowedMethods.includes(method)) {
      return axios({
        ...this.options(),
        ...options,
        method,
      })
    } else {
      // TODO: Mimic to Surveymonkey Error structure.
      return Promise.reject(new Error('[Surveymonkey]: Method is not allowed'))
    }
  }

  /**
   * @method
   * @name SurveymonkeyResource.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return ''
  }
}

export default SurveymonkeyResource