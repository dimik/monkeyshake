import SurveymonkeyResource from './SurveymonkeyResource'
import SurveymonkeyCollectionResource from './SurveymonkeyCollectionResource'
import SurveymonkeyCollectionItemResource from './SurveymonkeyCollectionItemResource'

/**
 * Represents the workgroups the user can see in an organization. 
 * @see https://developer.surveymonkey.com/api/v3/#workgroups
 * @class
 * @name Workgroups
 * @augments SurveymonkeyCollectionResource
 */
export default class Workgroups extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name Workgroups.item
   * @param {String} id Workgroup id.
   * @returns {Workgroup} Workgroup details resource.
   */
  item(id) {
    return new Workgroup(id, this.options())
  }

  /**
   * @method
   * @name Workgroups.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name Workgroups.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'workgroups'
  }
}

/**
 * Represents a workgroup details.
 * @see https://developer.surveymonkey.com/api/v3/#workgroups-workgroup_id
 * @class
 * @name Workgroup
 * @augments SurveymonkeyCollectionItemResource
 */
class Workgroup extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name Workgroup.members
   * @param {String} [id] Workgroup member id.
   * @returns {WorkgroupMembers|WorkgroupMember} Members or member in a workgroup.
   */
  members(id) {
    return new WorkgroupMembers(id, this.options())
  }

  /**
   * @method
   * @name Workgroup.shares
   * @param {String} [id] Share id.
   * @returns {WorkgroupShares|WorkgroupShare} Resources or resource shared in a workgroup.
   */
  shares(id) {
    return new WorkgroupShares(id, this.options())
  }

  /**
   * @method
   * @name Workgroup.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH', 'DELETE']
  }
}

/**
 * Represents list of members in a workgroup.
 * @see https://developer.surveymonkey.com/api/v3/#workgroups-workgroup_id-members
 * @class
 * @name WorkgroupMembers
 * @augments SurveymonkeyCollectionResource
 */
class WorkgroupMembers extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name WorkgroupMembers.bulk
   * @returns {WorkgroupMembersBulk} Workgroup members bulk actions resource.
   */
  bulk() {
    return new WorkgroupMembersBulk(this.options())
  }

  /**
   * @method
   * @name WorkgroupMembers.item
   * @param {String} id Workgroup member id.
   * @returns {WorkgroupMember} Workgroup member resource.
   */
  item(id) {
    return new WorkgroupMember(id, this.options())
  }

  /**
   * @method
   * @name WorkgroupMembers.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name WorkgroupMembers.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'members'
  }
}

/**
 * Represents workgroup member’s details. 
 * @see https://developer.surveymonkey.com/api/v3/#workgroups-workgroup_id-members-member_id
 * @class
 * @name WorkgroupMember
 * @augments SurveymonkeyCollectionItemResource
 */
class WorkgroupMember extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name WorkgroupMember.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'PATCH', 'DELETE']
  }
}

/**
 * Represents workgroup members bulk actions.
 * @see https://developer.surveymonkey.com/api/v3/#workgroups-workgroup_id-members-bulk
 * @class
 * @name WorkgroupMembersBulk
 * @augments SurveymonkeyResource
 */
class WorkgroupMembersBulk extends SurveymonkeyResource {
  /**
   * @method
   * @name WorkgroupMembersBulk.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'POST']
  }

  /**
   * @method
   * @name WorkgroupMembersBulk.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'bulk'
  }
}

/**
 * Represents resources shared in a workgroup.
 * @see https://developer.surveymonkey.com/api/v3/#workgroups-workgroup_id-shares
 * @class
 * @name WorkgroupShares
 * @augments SurveymonkeyCollectionResource
 */
class WorkgroupShares extends SurveymonkeyCollectionResource {
  /**
   * @method
   * @name WorkgroupShares.bulk
   * @returns {WorkgroupSharesBulk} Workgroup shares bulk actions resource.
   */
  bulk() {
    return new WorkgroupSharesBulk(this.options())
  }

  /**
   * @method
   * @name WorkgroupShares.item
   * @param {String} id Share id.
   * @returns {WorkgroupShare} Shared resource.
   */
  item(id) {
    return new WorkgroupShare(id, this.options())
  }

  /**
   * @method
   * @name WorkgroupShares.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'POST']
  }

  /**
   * @method
   * @name WorkgroupShares.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'shares'
  }
}

/**
 * Represents a shared resource. 
 * @see https://developer.surveymonkey.com/api/v3/#workgroups-workgroup_id-shares-share_id
 * @class
 * @name WorkgroupShare
 * @augments SurveymonkeyCollectionItemResource
 */
class WorkgroupShare extends SurveymonkeyCollectionItemResource {
  /**
   * @method
   * @name WorkgroupShare.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'GET', 'DELETE']
  }
}

/**
 * Represents a bulk actions on list of shared resources within a workgroup.
 * @see https://developer.surveymonkey.com/api/v3/#workgroups-workgroup_id-shares-bulk
 * @class
 * @name WorkgroupSharesBulk
 * @augments SurveymonkeyResource
 */
class WorkgroupSharesBulk extends SurveymonkeyResource {
  /**
   * @method
   * @name WorkgroupSharesBulk.methods
   * @returns {String[]} Available resource methods.
   */
  methods() {
    return ['HEAD', 'OPTIONS', 'POST']
  }

  /**
   * @method
   * @name WorkgroupSharesBulk.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'bulk'
  }
}

/**
 * @see https://developer.surveymonkey.com/api/v3/#roles
 * @class
 * @name Roles
 * @augments SurveymonkeyResource
 */
export class Roles extends SurveymonkeyResource {
  /**
   * @method
   * @name Roles.uri
   * @returns {String} Resource URL chunk.
   */
  uri() {
    return 'roles'
  }
}