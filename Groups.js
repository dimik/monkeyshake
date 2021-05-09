import SurveymonkeyCollectionResource from './SurveymonkeyCollectionResource'
import SurveymonkeyCollectionItemResource from './SurveymonkeyCollectionItemResource'

/**
 * Represents team if the user account belongs to a team.
 * @see https://developer.surveymonkey.com/api/v3/#groups
 * @class
 * @name Groups
 * @augments SurveymonkeyCollectionResource
 */
export default class Groups extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name Groups.item
   * @param {String} id Group id.
   * @returns {Group} Group details resource.
   */
  item(id) {
    return new Group(id, this.options())
  }

  /**
   * @method
   * @name Groups.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'groups'
  }
}

/**
 * Represents teams’s details including the teams’s owner and email address.
 * @see https://developer.surveymonkey.com/api/v3/#groups-id
 * @class
 * @name Group
 * @augments SurveymonkeyCollectionItemResource
 */
class Group extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name Group.members
   * @param {String} [id] Group member id.
   * @returns {GroupMembers|GroupMember} Group members or member resource.
   */
  members(id) {
    return new GroupMembers(id, this.options())
  }
}

/**
 * Represents list of users who have been added as members of the specified group.
 * @see https://developer.surveymonkey.com/api/v3/#groups-id-members
 * @class
 * @name GroupMembers
 * @augments SurveymonkeyCollectionResource
 */
class GroupMembers extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name GroupMembers.item
   * @param {String} id Group member id.
   * @returns {GroupMember} Group member resource.
   */
  item(id) {
    return new GroupMember(id, this.options())
  }

  /**
   * @method
   * @name GroupMembers.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'members'
  }
}

/**
 * Represents group member’s details including their role and status. 
 * @see https://developer.surveymonkey.com/api/v3/#groups-id-members-id
 * @class
 * @name GroupMember
 * @augments SurveymonkeyCollectionItemResource
 */
class GroupMember extends SurveymonkeyCollectionItemResource { }