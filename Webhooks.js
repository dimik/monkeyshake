import SurveymonkeyCollectionResource from './SurveymonkeyCollectionResource'
import SurveymonkeyCollectionItemResource from './SurveymonkeyCollectionItemResource'

/**
 * Represents a list of webhooks.
 * @see https://developer.surveymonkey.com/api/v3/#webhooks
 * @class
 * @name Webhooks
 * @augments SurveymonkeyCollectionResource
 */
export default class Webhooks extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name Webhooks.item
   * @param {String} id Webhook id.
   * @returns {Webhook} Webhook resource.
   */
  item(id) {
    return new Webhook(id, this.options())
  }

  /**
   * @method
   * @name Webhooks.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'webhooks'
  }
}

/**
 * Represents a webhook.
 * @see https://developer.surveymonkey.com/api/v3/#webhooks-id
 * @class
 * @name Webhook
 * @augments SurveymonkeyCollectionItemResource
 */
class Webhook extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name Webhook.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH', 'PUT', 'DELETE']
  }
}