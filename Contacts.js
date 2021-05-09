import SurveymonkeyResource from './SurveymonkeyResource'
import SurveymonkeyCollectionResource from './SurveymonkeyCollectionResource'
import SurveymonkeyCollectionItemResource from './SurveymonkeyCollectionItemResource'

/**
 * Represents a list of all contacts.
 * @see https://developer.surveymonkey.com/api/v3/#contacts
 * @class
 * @name Contacts
 * @augments SurveymonkeyCollectionResource
 */
export default class Contacts extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name Contacts.item
   * @param {String} id Contact id.
   * @returns {Contact} Contact details resource.
   */
  item(id) {
    return new Contact(id, this.options())
  }

  /**
   * @method
   * @name Contacts.bulk
   * @return {ContactsBulk} Contact list resource.
   */
  bulk() {
    return new ContactsBulk(this.options())
  }

  /**
   * @method
   * @name Contacts.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name Contacts.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'contacts'
  }
}

/**
 * Represents a list of all contacts with all available fields.
 * @see https://developer.surveymonkey.com/api/v3/#contacts-bulk
 * @class
 * @name ContactsBulk
 * @augments SurveymonkeyResource
 */
class ContactsBulk extends SurveymonkeyResource {
  /**
   * @method
   * @name ContactsBulk.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['GET', 'POST']
  }

  /**
   * @method
   * @name ContactsBulk.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'bulk'
  }
}

/**
 * Represents contact details.
 * @see https://developer.surveymonkey.com/api/v3/#contacts-id
 * @class
 * @name Contact
 * @augments SurveymonkeyCollectionItemResource
 */
class Contact extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name Contact.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH', 'PUT', 'DELETE']
  }
}

/**
 * Represents contact lists.
 * @see https://developer.surveymonkey.com/api/v3/#contact_lists
 * @class
 * @name ContactLists
 * @augments SurveymonkeyCollectionResource
 */
export class ContactLists extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name ContactLists.item
   * @param {String} id Contact list id.
   * @returns {ContactList} Contact list resource.
   */
  item(id) {
    return new ContactList(id, this.options())
  }

  /**
   * @method
   * @name ContactLists.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name ContactLists.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'contact_lists'
  }
}

/**
 * Represents contact list details. 
 * @see https://developer.surveymonkey.com/api/v3/#contact_lists-id
 * @class
 * @name ContactList
 * @augments SurveymonkeyCollectionItemResource
 */
class ContactList extends SurveymonkeyCollectionItemResource {
  contacts() {
    return new ContactListContacts(this.options())
  }

  copy() {
    return new ContactListCopy(this.options())
  }

  merge() {
    return new ContactListMerge(this.options())
  }

  /**
   * @method
   * @name ContactList.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH', 'PUT', 'DELETE']
  }
}

/**
 * Represents a list of all contacts in contact list.
 * @see https://developer.surveymonkey.com/api/v3/#contact_lists-id-contacts
 * @class
 * @name ContactListContacts
 * @augments SurveymonkeyResource
 */
class ContactListContacts extends SurveymonkeyResource {
  /**
   * @method
   * @name ContactListContacts.bulk
   * @return {ContactsBulk} Contact list resource.
   */
  bulk() {
    return new ContactsBulk(this.options())
  }

  /**
   * @method
   * @name ContactListContacts.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name ContactListContacts.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'contacts'
  }
}

/**
 * Represents a copy action of an existing contact list.
 * @see https://developer.surveymonkey.com/api/v3/#contact_lists-id-copy
 * @class
 * @name ContactListCopy
 * @augments SurveymonkeyResource
 */
class ContactListCopy extends SurveymonkeyResource {
  /**
   * @method
   * @name ContactListCopy.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['POST']
  }

  /**
   * @method
   * @name ContactListCopy.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'copy'
  }
}

/**
 * Represents a merge action of an existing contact list.
 * @see https://developer.surveymonkey.com/api/v3/#contact_lists-id-merge
 * @class
 * @name ContactListMerge
 * @augments SurveymonkeyResource
 */
class ContactListMerge extends SurveymonkeyResource {
  /**
   * @method
   * @name ContactListMerge.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['POST']
  }

  /**
   * @method
   * @name ContactListMerge.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'merge'
  }
}

/**
 * Represents list of all custom contacts fields.
 * @see https://developer.surveymonkey.com/api/v3/#contact_fields
 * @class
 * @name ContactFields
 * @augments SurveymonkeyCollectionResource
 */
export class ContactFields extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name ContactFields.item
   * @param {String} id Contact field id.
   * @returns {ContactField} Contact field resource.
   */
  item(id) {
    return new ContactField(id, this.options())
  }

  /**
   * @method
   * @name ContactFields.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'contact_fields'
  }
}

/**
 * Represents specified custom contact field.
 * @see https://developer.surveymonkey.com/api/v3/#contact_fields-id
 * @class
 * @name ContactField
 * @augments SurveymonkeyCollectionItemResource
 */
class ContactField extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name ContactField.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH']
  }
}