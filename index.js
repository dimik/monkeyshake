import SurveymonkeyResource from './SurveymonkeyResource'
import Groups from './Groups'
import Users from './Users'
import Surveys, {SurveyCategories, SurveyFolders, SurveyLanguages, SurveyTemplates} from './Surveys'
import Collectors from './Collectors'
import Contacts, {ContactFields, ContactLists} from './Contacts'
import Workgroups, {Roles} from './Workgroups'
import QuestionBank from './QuestionBank'
import Errors from './Errors'
import Webhooks from './Webhooks'

/**
 * Represents Surveymonkey resources.
 * @class
 * @name Monkeyshake
 * @augments SurveymonkeyResource
 */
class Monkeyshake extends SurveymonkeyResource {
  /**
   * @constructor
   * @param {String} token Surveymonkey token.
   * @param {Object} options Axios config.
   * @see https://github.com/axios/axios#axios-api
   */
  constructor(token, options = {}) {
    super({
      baseURL: 'https://api.surveymonkey.com/v3',
      ...options,
      headers: {
        ...(options.headers || {}),
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
  }

  /**
   * These endpoint provide you a team's details if the user account belongs to a team.
   * Teams’ details include the teams’ owner and email address.
   * @method
   * @name Monkeyshake.groups
   * @param {String} [id] Group id.
   * @returns {Groups|Group} Surveymonkey groups or specified group resource.
   */
  groups(id) {
    return new Groups(id, this.options())
  }

  /**
   * Use these endpoints to get user’s account information.
   * @see https://developer.surveymonkey.com/api/v3/#users-me
   * @method
   * @name Monkeyshake.users
   * @param {String} [id] User id.
   * @returns {Users|User|CurrentUser} Surveymonkey users or specified user resource.
   */
  users(id) {
    return new Users(id, this.options())
  }

  /**
   * These endpoints let you manage contacts.
   * @see https://developer.surveymonkey.com/api/v3/#contacts-and-contact-lists
   * @method
   * @name Monkeyshake.contacts
   * @param {String} [id] Contact id.
   * @returns {Contacts|Contact} Surveymonkey contacts or specified contact resource.
   */
  contacts(id) {
    return new Contacts(id, this.options())
  }

  /**
   * These endpoints let you read and modify custom contacts fields.
   * @see https://developer.surveymonkey.com/api/v3/#contact_fields
   * @method
   * @name Monkeyshake.contactFields
   * @param {String} [id] Contact id.
   * @returns {ContactFields|ContactField} Custom contact fields or specified field resource.
   */
  contactFields(id) {
    return new ContactFields(id, this.options())
  }

  /**
   * The following endpoints let you create contact lists to send survey invite messages.
   * @see https://developer.surveymonkey.com/api/v3/#contact_lists
   * @method
   * @name Monkeyshake.contactLists
   * @param {String} [id] Contact list id.
   * @returns {ContactLists|ContactList} Contact lists or specified list resource.
   */
  contactLists(id) {
    return new ContactLists(id, this.options())
  }

  /**
   * The following endpoints let you create surveys, survey pages, and add questions to survey pages.
   * @see https://developer.surveymonkey.com/api/v3/#surveys-pages-and-questions
   * @method
   * @name Monkeyshake.surveys
   * @param {String} [id] Survey id.
   * @returns {Surveys|Survey} Surveys or specified survey resource.
   */
  surveys(id) {
    return new Surveys(id, this.options())
  }

  /**
   * The following endpoint give you a list of survey categories.
   * Survey categories ids can be used to filter survey templates.
   * @see https://developer.surveymonkey.com/api/v3/#survey_categories
   * @method
   * @name Monkeyshake.surveyCategories
   * @returns {SurveyCategories} Survey categories resource.
   */
  surveyCategories() {
    return new SurveyCategories(this.options())
  }

  /**
   * Folders are used to organize surveys.
   * The following endpoints let you retreive and create folders.
   * @see https://developer.surveymonkey.com/api/v3/#survey-folders
   * @method
   * @name Monkeyshake.surveyFolders
   * @returns {SurveyFolders} Survey folders resource.
   */
  surveyFolders() {
    return new SurveyFolders(this.options())
  }

  /**
   * The following endpoint give you a list of survey languages.
   * Survey language ids can be used to generate translations for multilingual surveys.
   * @see https://developer.surveymonkey.com/api/v3/#survey_languages
   * @method
   * @name Monkeyshake.surveyLanguages
   * @returns {SurveyLanguages} Survey languages resource.
   */
  surveyLanguages() {
    return new SurveyLanguages(this.options())
  }

  /**
   * The following endpoint give you a list of survey templates.
   * Survey template ids can be used as an argument to POST a new survey.
   * @see https://developer.surveymonkey.com/api/v3/#survey_templates
   * @method
   * @name Monkeyshake.surveyTemplates
   * @returns {SurveyTemplates} Survey templates resource.
   */
  surveyTemplates() {
    return new SurveyTemplates(this.options())
  }

  /**
   * Collectors allow you to collect survey responses with a link to your survey.
   * @see https://developer.surveymonkey.com/api/v3/#collectors-and-invite-messages
   * @method
   * @name Monkeyshake.collectors
   * @param {String} [id] Collector id.
   * @returns {Collectors|Collector} Collectors or specified collector resource.
   */
  collectors(id) {
    return new Collectors(id, this.options())
  }

  /**
   * Use these endpoints to get information about an organization,
   * including roles and workgroups in your team account.
   * @see https://developer.surveymonkey.com/api/v3/#organizations
   * @method
   * @name Monkeyshake.workgroups
   * @param {String} [id] Workgroup id.
   * @returns {Workgroups|Workgroup} Workgroups or specified workgroup resource.
   */
  workgroups(id) {
    return new Workgroups(id, this.options())
  }

  /**
   * Surveymonkey list of user roles in an organization.
   * @see https://developer.surveymonkey.com/api/v3/#roles
   * @method
   * @name Monkeyshake.roles
   * @returns {Roles} User roles resource.
   */
  roles() {
    return new Roles(this.options())
  }

  /**
   * The following endpoint lets you get a list of questions that exist in the question bank.
   * You can then use these to create a question in a survey.
   * @see https://developer.surveymonkey.com/api/v3/#question-bank
   * @method
   * @name Monkeyshake.questionBank
   * @returns {QuestionBank} Question bank resource.
   */
  questionBank() {
    return new QuestionBank(this.options())
  }

  /**
   * Create webhooks that subscribe to various events in SurveyMonkey.
   * @see https://developer.surveymonkey.com/api/v3/#webhooks
   * @method
   * @name Monkeyshake.webhooks
   * @param {String} [id] Webhook id.
   * @returns {Webhooks|Webhook} Webhooks or specified webhook resource.
   */
  webhooks(id) {
    return new Webhooks(id, this.options())
  }

  /**
   * Get a list of errors or lookup an error by its id.
   * @see https://developer.surveymonkey.com/api/v3/#webhooks
   * @method
   * @name Monkeyshake.errors
   * @param {String} [id] Error id.
   * @returns {Errors|Error} List of known errors or specified error resource.
   */
  errors(id) {
    return new Errors(id, this.options())
  }

  /**
   * Don't append url for root resource.
   * @override
   */
  options() {
    return this.options_
  }
}

export default Monkeyshake
