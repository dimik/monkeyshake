import SurveymonkeyResource from './SurveymonkeyResource'
import SurveymonkeyCollectionResource from './SurveymonkeyCollectionResource'
import SurveymonkeyCollectionItemResource from './SurveymonkeyCollectionItemResource'
import {SurveyResponses} from './Surveys'

/**
 * Represents list of collectors.
 * @class
 * @name Collectors
 * @augments SurveymonkeyCollectionResource
 */
export default class Collectors extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name Collectors.item
   * @param {String} id Collector id.
   * @returns {Collector} Collector details resource.
   */
  item(id) {
    return new Collector(id, this.options())
  }

  /**
   * @method
   * @override
   * @name Collectors.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return []
  }

  /**
   * @method
   * @name Collectors.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'collectors'
  }
}

/**
 * Represents collector details.
 * @see https://developer.surveymonkey.com/api/v3/#collectors-id
 * @class
 * @name Collector
 * @augments SurveymonkeyCollectionItemResource
 */
class Collector extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name Collector.messages
   * @param {String} [id] Message id.
   * @returns {CollectorMessages|CollectorMessage} Collector's message list or message resource.
   */
  messages(id) {
    return new CollectorMessages(id, this.options())
  }

  /**
   * @method
   * @name Collector.recipients
   * @param {String} [id] Recipient id.
   * @returns {CollectorRecipients|CollectorRecipient} Collector's recipient list or recipient resource.
   */
  recipients(id) {
    return new CollectorRecipients(id, this.options())
  }

  /**
   * @method
   * @name Collector.responses
   * @param {String} [id] Survey response id.
   * @returns {CollectorResponses|SurveyResponse} Collector's responses list or response resource.
   */
  responses(id) {
    return new CollectorResponses(id, this.options())
  }

  /**
   * @method
   * @name Collector.stats
   * @returns {MessageStats} Collector's messages stats resource.
   */
  stats() {
    return new MessageStats(this.options())
  }

  /**
   * @method
   * @name Collector.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH', 'PUT', 'DELETE']
  }
}

/**
 * Represents list of collector's messages.
 * @see https://developer.surveymonkey.com/api/v3/#collectors-id-messages
 * @class
 * @name CollectorMessages
 * @augments SurveymonkeyCollectionResource
 */
class CollectorMessages extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name CollectorMessages.item
   * @param {String} id Message id.
   * @returns {CollectorMessage} Collector's message details resource.
   */
  item(id) {
    return new CollectorMessage(id, this.options())
  }

  /**
   * @method
   * @name CollectorMessages.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name CollectorMessages.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'messages'
  }
}

/**
 * Represents collector's message details.
 * @see https://developer.surveymonkey.com/api/v3/#collectors-id-messages-id
 * @class
 * @name CollectorMessage
 * @augments SurveymonkeyCollectionItemResource
 */
class CollectorMessage extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name CollectorMessage.recipients
   * @returns {MessageRecipients} Message recipient list resource.
   */
  recipients() {
    return new MessageRecipients(this.options())
  }

  /**
   * @method
   * @name CollectorMessage.send
   * @returns {MessageSend} Message send resource.
   */
  send() {
    return new MessageSend(this.options())
  }

  /**
   * @method
   * @name CollectorMessage.stats
   * @return {MessageStats} Message stats resource.
   */
  stats() {
    return new MessageStats(this.options())
  }

  /**
   * @method
   * @name Response.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH', 'PUT', 'DELETE']
  }
}

/**
 * Represents list of collector's recipients.
 * @see https://developer.surveymonkey.com/api/v3/#collectors-id-recipients
 * @class
 * @name CollectorRecipients
 * @augments SurveymonkeyCollectionResource
 */
class CollectorRecipients extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name CollectorRecipients.item
   * @param {String} id Recipient id.
   * @returns {CollectorRecipient} Recipient details resource.
   */
  item(id) {
    return new CollectorRecipient(id, this.options())
  }

  /**
   * @method
   * @name CollectorRecipients.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'messages'
  }
}

/**
 * Represents collector's recipient details.
 * @see https://developer.surveymonkey.com/api/v3/#collectors-id-recipients-id
 * @class
 * @name CollectorRecipient
 * @augments SurveymonkeyCollectionItemResource
 */
class CollectorRecipient extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name CollectorRecipient.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'DELETE']
  }
}

/**
 * Represents list of responses.
 * @see https://developer.surveymonkey.com/api/v3/#collectors-id-responses
 * @class
 * @name CollectorResponses
 * @augments SurveyResponses
 */
class CollectorResponses extends SurveyResponses {
  /**
   * @method
   * @override
   * @name CollectorResponses.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }
}

/**
 * Represents list of recipients for the specified message.
 * @see https://developer.surveymonkey.com/api/v3/#collectors-id-messages-id-recipients
 * @class
 * @name MessageRecipients
 * @augments SurveymonkeyResource
 */
class MessageRecipients extends SurveymonkeyResource {
  /**
   * @method
   * @name MessageRecipients.bulk
   * @return {MessageRecipientsBulk} Message recipients bulk actions resource.
   */
  bulk() {
    return new MessageRecipientsBulk(this.options())
  }

  /**
   * @method
   * @name MessageRecipients.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name MessageRecipients.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'recipients'
  }
}

/**
 * Represents message recipients bulk actions.
 * @see https://developer.surveymonkey.com/api/v3/#collectors-id-messages-id-recipients-bulk
 * @class
 * @name MessageRecipientsBulk
 * @augments SurveymonkeyResource
 */
class MessageRecipientsBulk extends SurveymonkeyResource {
  /**
   * @method
   * @name MessageRecipientsBulk.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['POST']
  }

  /**
   * @method
   * @name MessageRecipientsBulk.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'recipients'
  }
}

/**
 * Represents send or schedule to send an existing message to all message recipients.
 * @see https://developer.surveymonkey.com/api/v3/#collectors-id-messages-id-send
 * @class
 * @name MessageSend
 * @augments SurveymonkeyResource
 */
class MessageSend extends SurveymonkeyResource {
  /**
   * @method
   * @name MessageSend.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['POST']
  }

  /**
   * @method
   * @name MessageSend.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'send'
  }
}

/**
 * Represent message stats.
 * @see https://developer.surveymonkey.com/api/v3/#collectors-id-messages-id-stats
 * @class
 * @name MessageStats
 * @augments SurveymonkeyResource
 */
class MessageStats extends SurveymonkeyResource {
  /**
   * @method
   * @name MessageStats.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'stats'
  }
}