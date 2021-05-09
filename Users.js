import SurveymonkeyResource from './SurveymonkeyResource'
import SurveymonkeyCollectionResource from './SurveymonkeyCollectionResource'
import SurveymonkeyCollectionItemResource from './SurveymonkeyCollectionItemResource'

/**
 * Represents users resource.
 * @class
 * @name Users
 * @augments SurveymonkeyCollectionResource
 */
export default class Users extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name Users.item
   * @param {String} id User id.
   * @returns {User} User details resource.
   */
  item(id) {
    /**
     * Shortcut for current user
     * @example
     * monkeyshake.users('me')
     */
    if (id === 'me') {
      return new CurrentUser(this.options())
    }
    return new User(id, this.options())
  }

  /**
   * @method
   * @name Users.me
   * @returns {CurrentUser} Current user account details resource.
   */
  me() {
    return new CurrentUser(this.options())
  }

  /**
   * @method
   * @name Users.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return []
  }

  /**
   * @method
   * @name Users.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'users'
  }
}

/**
 * Represents the current user’s account details including their plan.
 * @see https://developer.surveymonkey.com/api/v3/#users-me
 * @class
 * @name CurrentUser
 * @augments SurveymonkeyResource
 */
class CurrentUser extends SurveymonkeyResource {
  /**
   * @method
   * @name CurrentUser.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'me'
  }
}

/**
 * Represents specific user details.
 * @class
 * @name User
 * @augments SurveymonkeyCollectionItemResource
 */
class User extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name User.shared
   * @returns {UserShared} Resources shared with a user across all workgroups.
   */
  shared() {
    return new UserShared(this.options())
  }

  /**
   * @method
   * @name User.workgroups
   * @returns {UserWorkgroups} Workgroups that a specific user is in.
   */
  workgroups() {
    return new UserWorkgroups(this.options())
  }

  /**
   * @method
   * @name User.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return []
  }
}

/**
 * Represents resources shared with a user across all workgroups.
 * @see https://developer.surveymonkey.com/api/v3/#users-id-shared
 * @class
 * @name UserShared
 * @augments SurveymonkeyResource
 */
class UserShared extends SurveymonkeyResource {
  /**
   * @method
   * @name UserShared.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'shared'
  }
}

/**
 * Represents workgroups that a specific user is in.
 * @see https://developer.surveymonkey.com/api/v3/#users-id-workgroups
 * @class
 * @name UserWorkgroups
 * @augments SurveymonkeyResource
 */
class UserWorkgroups extends SurveymonkeyResource {
  /**
   * @method
   * @name UserWorkgroups.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'workgroups'
  }
}