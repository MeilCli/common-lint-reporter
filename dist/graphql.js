exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 1973:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OauthApplicationCreateAuditEntryState = exports.NotificationRestrictionSettingValue = exports.MilestoneState = exports.MilestoneOrderField = exports.MergeableState = exports.LockReason = exports.LanguageOrderField = exports.LabelOrderField = exports.IssueTimelineItemsItemType = exports.IssueState = exports.IssueOrderField = exports.IssueCommentOrderField = exports.IpAllowListEntryOrderField = exports.IpAllowListEnabledSettingValue = exports.IdentityProviderConfigurationState = exports.GitSignatureState = exports.GistPrivacy = exports.GistOrderField = exports.FundingPlatform = exports.FileViewedState = exports.EnterpriseUserDeployment = exports.EnterpriseUserAccountMembershipRole = exports.EnterpriseServerUserAccountsUploadSyncState = exports.EnterpriseServerUserAccountsUploadOrderField = exports.EnterpriseServerUserAccountOrderField = exports.EnterpriseServerUserAccountEmailOrderField = exports.EnterpriseServerInstallationOrderField = exports.EnterpriseMembersCanMakePurchasesSettingValue = exports.EnterpriseMembersCanCreateRepositoriesSettingValue = exports.EnterpriseMemberOrderField = exports.EnterpriseEnabledSettingValue = exports.EnterpriseEnabledDisabledSettingValue = exports.EnterpriseDefaultRepositoryPermissionSettingValue = exports.EnterpriseAdministratorRole = exports.EnterpriseAdministratorInvitationOrderField = exports.DiffSide = exports.DeploymentStatusState = exports.DeploymentState = exports.DeploymentOrderField = exports.DefaultRepositoryPermissionField = exports.ContributionLevel = exports.CommitContributionOrderField = exports.CommentCannotUpdateReason = exports.CommentAuthorAssociation = exports.CollaboratorAffiliation = exports.CheckStatusState = exports.CheckRunType = exports.CheckConclusionState = exports.CheckAnnotationLevel = exports.AuditLogOrderField = void 0;
exports.RepositoryAffiliation = exports.ReportedContentClassifiers = exports.RepoRemoveMemberAuditEntryVisibility = exports.RepoDestroyAuditEntryVisibility = exports.RepoCreateAuditEntryVisibility = exports.RepoChangeMergeSettingAuditEntryMergeType = exports.RepoArchivedAuditEntryVisibility = exports.RepoAddMemberAuditEntryVisibility = exports.RepoAccessAuditEntryVisibility = exports.ReleaseOrderField = exports.RefOrderField = exports.ReactionOrderField = exports.ReactionContent = exports.PullRequestUpdateState = exports.PullRequestTimelineItemsItemType = exports.PullRequestState = exports.PullRequestReviewState = exports.PullRequestReviewEvent = exports.PullRequestReviewDecision = exports.PullRequestReviewCommentState = exports.PullRequestOrderField = exports.PullRequestMergeMethod = exports.ProjectTemplate = exports.ProjectState = exports.ProjectOrderField = exports.ProjectColumnPurpose = exports.ProjectCardState = exports.ProjectCardArchivedState = exports.PinnableItemType = exports.PackageVersionOrderField = exports.PackageType = exports.PackageOrderField = exports.PackageFileOrderField = exports.OrganizationOrderField = exports.OrganizationMembersCanCreateRepositoriesSettingValue = exports.OrganizationMemberRole = exports.OrganizationInvitationType = exports.OrganizationInvitationRole = exports.OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = exports.OrgUpdateMemberAuditEntryPermission = exports.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = exports.OrgRemoveOutsideCollaboratorAuditEntryReason = exports.OrgRemoveOutsideCollaboratorAuditEntryMembershipType = exports.OrgRemoveMemberAuditEntryReason = exports.OrgRemoveMemberAuditEntryMembershipType = exports.OrgRemoveBillingManagerAuditEntryReason = exports.OrgCreateAuditEntryBillingPlan = exports.OrgAddMemberAuditEntryPermission = exports.OrderDirection = exports.OperationType = void 0;
exports.GetCommitStatusAndCheckRun = exports.GetCheckRunAnnotations = exports.DeletePullRequestReview = exports.DeletePullRequestReviewComment = exports.DeleteComment = exports.CreateCheckRun = exports.AddPullRequestReviewThread = exports.AddPullRequestReviewDraft = exports.AddComment = exports.VerifiableDomainOrderField = exports.UserStatusOrderField = exports.UserBlockDuration = exports.TopicSuggestionDeclineReason = exports.TeamRole = exports.TeamRepositoryOrderField = exports.TeamPrivacy = exports.TeamOrderField = exports.TeamMembershipType = exports.TeamMemberRole = exports.TeamMemberOrderField = exports.TeamDiscussionOrderField = exports.TeamDiscussionCommentOrderField = exports.SubscriptionState = exports.StatusState = exports.StarOrderField = exports.SponsorshipPrivacy = exports.SponsorshipOrderField = exports.SponsorsTierOrderField = exports.SponsorsGoalKind = exports.SponsorableOrderField = exports.SecurityVulnerabilityOrderField = exports.SecurityAdvisorySeverity = exports.SecurityAdvisoryOrderField = exports.SecurityAdvisoryIdentifierType = exports.SecurityAdvisoryEcosystem = exports.SearchType = exports.SavedReplyOrderField = exports.SamlSignatureAlgorithm = exports.SamlDigestAlgorithm = exports.RequestableCheckStatusState = exports.RepositoryVisibility = exports.RepositoryPrivacy = exports.RepositoryPermission = exports.RepositoryOrderField = exports.RepositoryLockReason = exports.RepositoryInvitationOrderField = exports.RepositoryInteractionLimitOrigin = exports.RepositoryInteractionLimitExpiry = exports.RepositoryInteractionLimit = exports.RepositoryContributionType = void 0;
exports.UpdateCheckRun = exports.SubmitPullRequestReview = exports.ResolvePullRequestReviewThread = exports.GetRepositoryId = exports.GetPullRequest = exports.GetPullRequestReviewThreads = exports.GetPullRequestComment = exports.GetPullRequestChangedFile = exports.GetLoginUser = void 0;
var graphql_tag_1 = __importDefault(__webpack_require__(351));
/** Properties by which Audit Log connections can be ordered. */
var AuditLogOrderField;
(function (AuditLogOrderField) {
    /** Order audit log entries by timestamp */
    AuditLogOrderField["CreatedAt"] = "CREATED_AT";
})(AuditLogOrderField = exports.AuditLogOrderField || (exports.AuditLogOrderField = {}));
/** Represents an annotation's information level. */
var CheckAnnotationLevel;
(function (CheckAnnotationLevel) {
    /** An annotation indicating an inescapable error. */
    CheckAnnotationLevel["Failure"] = "FAILURE";
    /** An annotation indicating some information. */
    CheckAnnotationLevel["Notice"] = "NOTICE";
    /** An annotation indicating an ignorable error. */
    CheckAnnotationLevel["Warning"] = "WARNING";
})(CheckAnnotationLevel = exports.CheckAnnotationLevel || (exports.CheckAnnotationLevel = {}));
/** The possible states for a check suite or run conclusion. */
var CheckConclusionState;
(function (CheckConclusionState) {
    /** The check suite or run requires action. */
    CheckConclusionState["ActionRequired"] = "ACTION_REQUIRED";
    /** The check suite or run has timed out. */
    CheckConclusionState["TimedOut"] = "TIMED_OUT";
    /** The check suite or run has been cancelled. */
    CheckConclusionState["Cancelled"] = "CANCELLED";
    /** The check suite or run has failed. */
    CheckConclusionState["Failure"] = "FAILURE";
    /** The check suite or run has succeeded. */
    CheckConclusionState["Success"] = "SUCCESS";
    /** The check suite or run was neutral. */
    CheckConclusionState["Neutral"] = "NEUTRAL";
    /** The check suite or run was skipped. */
    CheckConclusionState["Skipped"] = "SKIPPED";
    /** The check suite or run has failed at startup. */
    CheckConclusionState["StartupFailure"] = "STARTUP_FAILURE";
    /** The check suite or run was marked stale by GitHub. Only GitHub can use this conclusion. */
    CheckConclusionState["Stale"] = "STALE";
})(CheckConclusionState = exports.CheckConclusionState || (exports.CheckConclusionState = {}));
/** The possible types of check runs. */
var CheckRunType;
(function (CheckRunType) {
    /** Every check run available. */
    CheckRunType["All"] = "ALL";
    /** The latest check run. */
    CheckRunType["Latest"] = "LATEST";
})(CheckRunType = exports.CheckRunType || (exports.CheckRunType = {}));
/** The possible states for a check suite or run status. */
var CheckStatusState;
(function (CheckStatusState) {
    /** The check suite or run has been queued. */
    CheckStatusState["Queued"] = "QUEUED";
    /** The check suite or run is in progress. */
    CheckStatusState["InProgress"] = "IN_PROGRESS";
    /** The check suite or run has been completed. */
    CheckStatusState["Completed"] = "COMPLETED";
    /** The check suite or run is in waiting state. */
    CheckStatusState["Waiting"] = "WAITING";
    /** The check suite or run has been requested. */
    CheckStatusState["Requested"] = "REQUESTED";
})(CheckStatusState = exports.CheckStatusState || (exports.CheckStatusState = {}));
/** Collaborators affiliation level with a subject. */
var CollaboratorAffiliation;
(function (CollaboratorAffiliation) {
    /** All outside collaborators of an organization-owned subject. */
    CollaboratorAffiliation["Outside"] = "OUTSIDE";
    /** All collaborators with permissions to an organization-owned subject, regardless of organization membership status. */
    CollaboratorAffiliation["Direct"] = "DIRECT";
    /** All collaborators the authenticated user can see. */
    CollaboratorAffiliation["All"] = "ALL";
})(CollaboratorAffiliation = exports.CollaboratorAffiliation || (exports.CollaboratorAffiliation = {}));
/** A comment author association with repository. */
var CommentAuthorAssociation;
(function (CommentAuthorAssociation) {
    /** Author is a member of the organization that owns the repository. */
    CommentAuthorAssociation["Member"] = "MEMBER";
    /** Author is the owner of the repository. */
    CommentAuthorAssociation["Owner"] = "OWNER";
    /** Author is a placeholder for an unclaimed user. */
    CommentAuthorAssociation["Mannequin"] = "MANNEQUIN";
    /** Author has been invited to collaborate on the repository. */
    CommentAuthorAssociation["Collaborator"] = "COLLABORATOR";
    /** Author has previously committed to the repository. */
    CommentAuthorAssociation["Contributor"] = "CONTRIBUTOR";
    /** Author has not previously committed to the repository. */
    CommentAuthorAssociation["FirstTimeContributor"] = "FIRST_TIME_CONTRIBUTOR";
    /** Author has not previously committed to GitHub. */
    CommentAuthorAssociation["FirstTimer"] = "FIRST_TIMER";
    /** Author has no association with the repository. */
    CommentAuthorAssociation["None"] = "NONE";
})(CommentAuthorAssociation = exports.CommentAuthorAssociation || (exports.CommentAuthorAssociation = {}));
/** The possible errors that will prevent a user from updating a comment. */
var CommentCannotUpdateReason;
(function (CommentCannotUpdateReason) {
    /** Unable to create comment because repository is archived. */
    CommentCannotUpdateReason["Archived"] = "ARCHIVED";
    /** You must be the author or have write access to this repository to update this comment. */
    CommentCannotUpdateReason["InsufficientAccess"] = "INSUFFICIENT_ACCESS";
    /** Unable to create comment because issue is locked. */
    CommentCannotUpdateReason["Locked"] = "LOCKED";
    /** You must be logged in to update this comment. */
    CommentCannotUpdateReason["LoginRequired"] = "LOGIN_REQUIRED";
    /** Repository is under maintenance. */
    CommentCannotUpdateReason["Maintenance"] = "MAINTENANCE";
    /** At least one email address must be verified to update this comment. */
    CommentCannotUpdateReason["VerifiedEmailRequired"] = "VERIFIED_EMAIL_REQUIRED";
    /** You cannot update this comment */
    CommentCannotUpdateReason["Denied"] = "DENIED";
})(CommentCannotUpdateReason = exports.CommentCannotUpdateReason || (exports.CommentCannotUpdateReason = {}));
/** Properties by which commit contribution connections can be ordered. */
var CommitContributionOrderField;
(function (CommitContributionOrderField) {
    /** Order commit contributions by when they were made. */
    CommitContributionOrderField["OccurredAt"] = "OCCURRED_AT";
    /** Order commit contributions by how many commits they represent. */
    CommitContributionOrderField["CommitCount"] = "COMMIT_COUNT";
})(CommitContributionOrderField = exports.CommitContributionOrderField || (exports.CommitContributionOrderField = {}));
/** Varying levels of contributions from none to many. */
var ContributionLevel;
(function (ContributionLevel) {
    /** No contributions occurred. */
    ContributionLevel["None"] = "NONE";
    /** Lowest 25% of days of contributions. */
    ContributionLevel["FirstQuartile"] = "FIRST_QUARTILE";
    /** Second lowest 25% of days of contributions. More contributions than the first quartile. */
    ContributionLevel["SecondQuartile"] = "SECOND_QUARTILE";
    /** Second highest 25% of days of contributions. More contributions than second quartile, less than the fourth quartile. */
    ContributionLevel["ThirdQuartile"] = "THIRD_QUARTILE";
    /** Highest 25% of days of contributions. More contributions than the third quartile. */
    ContributionLevel["FourthQuartile"] = "FOURTH_QUARTILE";
})(ContributionLevel = exports.ContributionLevel || (exports.ContributionLevel = {}));
/** The possible default permissions for repositories. */
var DefaultRepositoryPermissionField;
(function (DefaultRepositoryPermissionField) {
    /** No access */
    DefaultRepositoryPermissionField["None"] = "NONE";
    /** Can read repos by default */
    DefaultRepositoryPermissionField["Read"] = "READ";
    /** Can read and write repos by default */
    DefaultRepositoryPermissionField["Write"] = "WRITE";
    /** Can read, write, and administrate repos by default */
    DefaultRepositoryPermissionField["Admin"] = "ADMIN";
})(DefaultRepositoryPermissionField = exports.DefaultRepositoryPermissionField || (exports.DefaultRepositoryPermissionField = {}));
/** Properties by which deployment connections can be ordered. */
var DeploymentOrderField;
(function (DeploymentOrderField) {
    /** Order collection by creation time */
    DeploymentOrderField["CreatedAt"] = "CREATED_AT";
})(DeploymentOrderField = exports.DeploymentOrderField || (exports.DeploymentOrderField = {}));
/** The possible states in which a deployment can be. */
var DeploymentState;
(function (DeploymentState) {
    /** The pending deployment was not updated after 30 minutes. */
    DeploymentState["Abandoned"] = "ABANDONED";
    /** The deployment is currently active. */
    DeploymentState["Active"] = "ACTIVE";
    /** An inactive transient deployment. */
    DeploymentState["Destroyed"] = "DESTROYED";
    /** The deployment experienced an error. */
    DeploymentState["Error"] = "ERROR";
    /** The deployment has failed. */
    DeploymentState["Failure"] = "FAILURE";
    /** The deployment is inactive. */
    DeploymentState["Inactive"] = "INACTIVE";
    /** The deployment is pending. */
    DeploymentState["Pending"] = "PENDING";
    /** The deployment has queued */
    DeploymentState["Queued"] = "QUEUED";
    /** The deployment is in progress. */
    DeploymentState["InProgress"] = "IN_PROGRESS";
    /** The deployment is waiting. */
    DeploymentState["Waiting"] = "WAITING";
})(DeploymentState = exports.DeploymentState || (exports.DeploymentState = {}));
/** The possible states for a deployment status. */
var DeploymentStatusState;
(function (DeploymentStatusState) {
    /** The deployment is pending. */
    DeploymentStatusState["Pending"] = "PENDING";
    /** The deployment was successful. */
    DeploymentStatusState["Success"] = "SUCCESS";
    /** The deployment has failed. */
    DeploymentStatusState["Failure"] = "FAILURE";
    /** The deployment is inactive. */
    DeploymentStatusState["Inactive"] = "INACTIVE";
    /** The deployment experienced an error. */
    DeploymentStatusState["Error"] = "ERROR";
    /** The deployment is queued */
    DeploymentStatusState["Queued"] = "QUEUED";
    /** The deployment is in progress. */
    DeploymentStatusState["InProgress"] = "IN_PROGRESS";
    /** The deployment is waiting. */
    DeploymentStatusState["Waiting"] = "WAITING";
})(DeploymentStatusState = exports.DeploymentStatusState || (exports.DeploymentStatusState = {}));
/** The possible sides of a diff. */
var DiffSide;
(function (DiffSide) {
    /** The left side of the diff. */
    DiffSide["Left"] = "LEFT";
    /** The right side of the diff. */
    DiffSide["Right"] = "RIGHT";
})(DiffSide = exports.DiffSide || (exports.DiffSide = {}));
/** Properties by which enterprise administrator invitation connections can be ordered. */
var EnterpriseAdministratorInvitationOrderField;
(function (EnterpriseAdministratorInvitationOrderField) {
    /** Order enterprise administrator member invitations by creation time */
    EnterpriseAdministratorInvitationOrderField["CreatedAt"] = "CREATED_AT";
})(EnterpriseAdministratorInvitationOrderField = exports.EnterpriseAdministratorInvitationOrderField || (exports.EnterpriseAdministratorInvitationOrderField = {}));
/** The possible administrator roles in an enterprise account. */
var EnterpriseAdministratorRole;
(function (EnterpriseAdministratorRole) {
    /** Represents an owner of the enterprise account. */
    EnterpriseAdministratorRole["Owner"] = "OWNER";
    /** Represents a billing manager of the enterprise account. */
    EnterpriseAdministratorRole["BillingManager"] = "BILLING_MANAGER";
})(EnterpriseAdministratorRole = exports.EnterpriseAdministratorRole || (exports.EnterpriseAdministratorRole = {}));
/** The possible values for the enterprise default repository permission setting. */
var EnterpriseDefaultRepositoryPermissionSettingValue;
(function (EnterpriseDefaultRepositoryPermissionSettingValue) {
    /** Organizations in the enterprise choose default repository permissions for their members. */
    EnterpriseDefaultRepositoryPermissionSettingValue["NoPolicy"] = "NO_POLICY";
    /** Organization members will be able to clone, pull, push, and add new collaborators to all organization repositories. */
    EnterpriseDefaultRepositoryPermissionSettingValue["Admin"] = "ADMIN";
    /** Organization members will be able to clone, pull, and push all organization repositories. */
    EnterpriseDefaultRepositoryPermissionSettingValue["Write"] = "WRITE";
    /** Organization members will be able to clone and pull all organization repositories. */
    EnterpriseDefaultRepositoryPermissionSettingValue["Read"] = "READ";
    /** Organization members will only be able to clone and pull public repositories. */
    EnterpriseDefaultRepositoryPermissionSettingValue["None"] = "NONE";
})(EnterpriseDefaultRepositoryPermissionSettingValue = exports.EnterpriseDefaultRepositoryPermissionSettingValue || (exports.EnterpriseDefaultRepositoryPermissionSettingValue = {}));
/** The possible values for an enabled/disabled enterprise setting. */
var EnterpriseEnabledDisabledSettingValue;
(function (EnterpriseEnabledDisabledSettingValue) {
    /** The setting is enabled for organizations in the enterprise. */
    EnterpriseEnabledDisabledSettingValue["Enabled"] = "ENABLED";
    /** The setting is disabled for organizations in the enterprise. */
    EnterpriseEnabledDisabledSettingValue["Disabled"] = "DISABLED";
    /** There is no policy set for organizations in the enterprise. */
    EnterpriseEnabledDisabledSettingValue["NoPolicy"] = "NO_POLICY";
})(EnterpriseEnabledDisabledSettingValue = exports.EnterpriseEnabledDisabledSettingValue || (exports.EnterpriseEnabledDisabledSettingValue = {}));
/** The possible values for an enabled/no policy enterprise setting. */
var EnterpriseEnabledSettingValue;
(function (EnterpriseEnabledSettingValue) {
    /** The setting is enabled for organizations in the enterprise. */
    EnterpriseEnabledSettingValue["Enabled"] = "ENABLED";
    /** There is no policy set for organizations in the enterprise. */
    EnterpriseEnabledSettingValue["NoPolicy"] = "NO_POLICY";
})(EnterpriseEnabledSettingValue = exports.EnterpriseEnabledSettingValue || (exports.EnterpriseEnabledSettingValue = {}));
/** Properties by which enterprise member connections can be ordered. */
var EnterpriseMemberOrderField;
(function (EnterpriseMemberOrderField) {
    /** Order enterprise members by login */
    EnterpriseMemberOrderField["Login"] = "LOGIN";
    /** Order enterprise members by creation time */
    EnterpriseMemberOrderField["CreatedAt"] = "CREATED_AT";
})(EnterpriseMemberOrderField = exports.EnterpriseMemberOrderField || (exports.EnterpriseMemberOrderField = {}));
/** The possible values for the enterprise members can create repositories setting. */
var EnterpriseMembersCanCreateRepositoriesSettingValue;
(function (EnterpriseMembersCanCreateRepositoriesSettingValue) {
    /** Organization administrators choose whether to allow members to create repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["NoPolicy"] = "NO_POLICY";
    /** Members will be able to create public and private repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["All"] = "ALL";
    /** Members will be able to create only public repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["Public"] = "PUBLIC";
    /** Members will be able to create only private repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["Private"] = "PRIVATE";
    /** Members will not be able to create public or private repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["Disabled"] = "DISABLED";
})(EnterpriseMembersCanCreateRepositoriesSettingValue = exports.EnterpriseMembersCanCreateRepositoriesSettingValue || (exports.EnterpriseMembersCanCreateRepositoriesSettingValue = {}));
/** The possible values for the members can make purchases setting. */
var EnterpriseMembersCanMakePurchasesSettingValue;
(function (EnterpriseMembersCanMakePurchasesSettingValue) {
    /** The setting is enabled for organizations in the enterprise. */
    EnterpriseMembersCanMakePurchasesSettingValue["Enabled"] = "ENABLED";
    /** The setting is disabled for organizations in the enterprise. */
    EnterpriseMembersCanMakePurchasesSettingValue["Disabled"] = "DISABLED";
})(EnterpriseMembersCanMakePurchasesSettingValue = exports.EnterpriseMembersCanMakePurchasesSettingValue || (exports.EnterpriseMembersCanMakePurchasesSettingValue = {}));
/** Properties by which Enterprise Server installation connections can be ordered. */
var EnterpriseServerInstallationOrderField;
(function (EnterpriseServerInstallationOrderField) {
    /** Order Enterprise Server installations by host name */
    EnterpriseServerInstallationOrderField["HostName"] = "HOST_NAME";
    /** Order Enterprise Server installations by customer name */
    EnterpriseServerInstallationOrderField["CustomerName"] = "CUSTOMER_NAME";
    /** Order Enterprise Server installations by creation time */
    EnterpriseServerInstallationOrderField["CreatedAt"] = "CREATED_AT";
})(EnterpriseServerInstallationOrderField = exports.EnterpriseServerInstallationOrderField || (exports.EnterpriseServerInstallationOrderField = {}));
/** Properties by which Enterprise Server user account email connections can be ordered. */
var EnterpriseServerUserAccountEmailOrderField;
(function (EnterpriseServerUserAccountEmailOrderField) {
    /** Order emails by email */
    EnterpriseServerUserAccountEmailOrderField["Email"] = "EMAIL";
})(EnterpriseServerUserAccountEmailOrderField = exports.EnterpriseServerUserAccountEmailOrderField || (exports.EnterpriseServerUserAccountEmailOrderField = {}));
/** Properties by which Enterprise Server user account connections can be ordered. */
var EnterpriseServerUserAccountOrderField;
(function (EnterpriseServerUserAccountOrderField) {
    /** Order user accounts by login */
    EnterpriseServerUserAccountOrderField["Login"] = "LOGIN";
    /** Order user accounts by creation time on the Enterprise Server installation */
    EnterpriseServerUserAccountOrderField["RemoteCreatedAt"] = "REMOTE_CREATED_AT";
})(EnterpriseServerUserAccountOrderField = exports.EnterpriseServerUserAccountOrderField || (exports.EnterpriseServerUserAccountOrderField = {}));
/** Properties by which Enterprise Server user accounts upload connections can be ordered. */
var EnterpriseServerUserAccountsUploadOrderField;
(function (EnterpriseServerUserAccountsUploadOrderField) {
    /** Order user accounts uploads by creation time */
    EnterpriseServerUserAccountsUploadOrderField["CreatedAt"] = "CREATED_AT";
})(EnterpriseServerUserAccountsUploadOrderField = exports.EnterpriseServerUserAccountsUploadOrderField || (exports.EnterpriseServerUserAccountsUploadOrderField = {}));
/** Synchronization state of the Enterprise Server user accounts upload */
var EnterpriseServerUserAccountsUploadSyncState;
(function (EnterpriseServerUserAccountsUploadSyncState) {
    /** The synchronization of the upload is pending. */
    EnterpriseServerUserAccountsUploadSyncState["Pending"] = "PENDING";
    /** The synchronization of the upload succeeded. */
    EnterpriseServerUserAccountsUploadSyncState["Success"] = "SUCCESS";
    /** The synchronization of the upload failed. */
    EnterpriseServerUserAccountsUploadSyncState["Failure"] = "FAILURE";
})(EnterpriseServerUserAccountsUploadSyncState = exports.EnterpriseServerUserAccountsUploadSyncState || (exports.EnterpriseServerUserAccountsUploadSyncState = {}));
/** The possible roles for enterprise membership. */
var EnterpriseUserAccountMembershipRole;
(function (EnterpriseUserAccountMembershipRole) {
    /** The user is a member of the enterprise membership. */
    EnterpriseUserAccountMembershipRole["Member"] = "MEMBER";
    /** The user is an owner of the enterprise membership. */
    EnterpriseUserAccountMembershipRole["Owner"] = "OWNER";
})(EnterpriseUserAccountMembershipRole = exports.EnterpriseUserAccountMembershipRole || (exports.EnterpriseUserAccountMembershipRole = {}));
/** The possible GitHub Enterprise deployments where this user can exist. */
var EnterpriseUserDeployment;
(function (EnterpriseUserDeployment) {
    /** The user is part of a GitHub Enterprise Cloud deployment. */
    EnterpriseUserDeployment["Cloud"] = "CLOUD";
    /** The user is part of a GitHub Enterprise Server deployment. */
    EnterpriseUserDeployment["Server"] = "SERVER";
})(EnterpriseUserDeployment = exports.EnterpriseUserDeployment || (exports.EnterpriseUserDeployment = {}));
/** The possible viewed states of a file . */
var FileViewedState;
(function (FileViewedState) {
    /** The file has new changes since last viewed. */
    FileViewedState["Dismissed"] = "DISMISSED";
    /** The file has been marked as viewed. */
    FileViewedState["Viewed"] = "VIEWED";
    /** The file has not been marked as viewed. */
    FileViewedState["Unviewed"] = "UNVIEWED";
})(FileViewedState = exports.FileViewedState || (exports.FileViewedState = {}));
/** The possible funding platforms for repository funding links. */
var FundingPlatform;
(function (FundingPlatform) {
    /** GitHub funding platform. */
    FundingPlatform["Github"] = "GITHUB";
    /** Patreon funding platform. */
    FundingPlatform["Patreon"] = "PATREON";
    /** Open Collective funding platform. */
    FundingPlatform["OpenCollective"] = "OPEN_COLLECTIVE";
    /** Ko-fi funding platform. */
    FundingPlatform["KoFi"] = "KO_FI";
    /** Tidelift funding platform. */
    FundingPlatform["Tidelift"] = "TIDELIFT";
    /** Community Bridge funding platform. */
    FundingPlatform["CommunityBridge"] = "COMMUNITY_BRIDGE";
    /** Liberapay funding platform. */
    FundingPlatform["Liberapay"] = "LIBERAPAY";
    /** IssueHunt funding platform. */
    FundingPlatform["Issuehunt"] = "ISSUEHUNT";
    /** Otechie funding platform. */
    FundingPlatform["Otechie"] = "OTECHIE";
    /** Custom funding platform. */
    FundingPlatform["Custom"] = "CUSTOM";
})(FundingPlatform = exports.FundingPlatform || (exports.FundingPlatform = {}));
/** Properties by which gist connections can be ordered. */
var GistOrderField;
(function (GistOrderField) {
    /** Order gists by creation time */
    GistOrderField["CreatedAt"] = "CREATED_AT";
    /** Order gists by update time */
    GistOrderField["UpdatedAt"] = "UPDATED_AT";
    /** Order gists by push time */
    GistOrderField["PushedAt"] = "PUSHED_AT";
})(GistOrderField = exports.GistOrderField || (exports.GistOrderField = {}));
/** The privacy of a Gist */
var GistPrivacy;
(function (GistPrivacy) {
    /** Public */
    GistPrivacy["Public"] = "PUBLIC";
    /** Secret */
    GistPrivacy["Secret"] = "SECRET";
    /** Gists that are public and secret */
    GistPrivacy["All"] = "ALL";
})(GistPrivacy = exports.GistPrivacy || (exports.GistPrivacy = {}));
/** The state of a Git signature. */
var GitSignatureState;
(function (GitSignatureState) {
    /** Valid signature and verified by GitHub */
    GitSignatureState["Valid"] = "VALID";
    /** Invalid signature */
    GitSignatureState["Invalid"] = "INVALID";
    /** Malformed signature */
    GitSignatureState["MalformedSig"] = "MALFORMED_SIG";
    /** Key used for signing not known to GitHub */
    GitSignatureState["UnknownKey"] = "UNKNOWN_KEY";
    /** Invalid email used for signing */
    GitSignatureState["BadEmail"] = "BAD_EMAIL";
    /** Email used for signing unverified on GitHub */
    GitSignatureState["UnverifiedEmail"] = "UNVERIFIED_EMAIL";
    /** Email used for signing not known to GitHub */
    GitSignatureState["NoUser"] = "NO_USER";
    /** Unknown signature type */
    GitSignatureState["UnknownSigType"] = "UNKNOWN_SIG_TYPE";
    /** Unsigned */
    GitSignatureState["Unsigned"] = "UNSIGNED";
    /** Internal error - the GPG verification service is unavailable at the moment */
    GitSignatureState["GpgverifyUnavailable"] = "GPGVERIFY_UNAVAILABLE";
    /** Internal error - the GPG verification service misbehaved */
    GitSignatureState["GpgverifyError"] = "GPGVERIFY_ERROR";
    /** The usage flags for the key that signed this don't allow signing */
    GitSignatureState["NotSigningKey"] = "NOT_SIGNING_KEY";
    /** Signing key expired */
    GitSignatureState["ExpiredKey"] = "EXPIRED_KEY";
    /** Valid signature, pending certificate revocation checking */
    GitSignatureState["OcspPending"] = "OCSP_PENDING";
    /** Valid signature, though certificate revocation check failed */
    GitSignatureState["OcspError"] = "OCSP_ERROR";
    /** The signing certificate or its chain could not be verified */
    GitSignatureState["BadCert"] = "BAD_CERT";
    /** One or more certificates in chain has been revoked */
    GitSignatureState["OcspRevoked"] = "OCSP_REVOKED";
})(GitSignatureState = exports.GitSignatureState || (exports.GitSignatureState = {}));
/** The possible states in which authentication can be configured with an identity provider. */
var IdentityProviderConfigurationState;
(function (IdentityProviderConfigurationState) {
    /** Authentication with an identity provider is configured and enforced. */
    IdentityProviderConfigurationState["Enforced"] = "ENFORCED";
    /** Authentication with an identity provider is configured but not enforced. */
    IdentityProviderConfigurationState["Configured"] = "CONFIGURED";
    /** Authentication with an identity provider is not configured. */
    IdentityProviderConfigurationState["Unconfigured"] = "UNCONFIGURED";
})(IdentityProviderConfigurationState = exports.IdentityProviderConfigurationState || (exports.IdentityProviderConfigurationState = {}));
/** The possible values for the IP allow list enabled setting. */
var IpAllowListEnabledSettingValue;
(function (IpAllowListEnabledSettingValue) {
    /** The setting is enabled for the owner. */
    IpAllowListEnabledSettingValue["Enabled"] = "ENABLED";
    /** The setting is disabled for the owner. */
    IpAllowListEnabledSettingValue["Disabled"] = "DISABLED";
})(IpAllowListEnabledSettingValue = exports.IpAllowListEnabledSettingValue || (exports.IpAllowListEnabledSettingValue = {}));
/** Properties by which IP allow list entry connections can be ordered. */
var IpAllowListEntryOrderField;
(function (IpAllowListEntryOrderField) {
    /** Order IP allow list entries by creation time. */
    IpAllowListEntryOrderField["CreatedAt"] = "CREATED_AT";
    /** Order IP allow list entries by the allow list value. */
    IpAllowListEntryOrderField["AllowListValue"] = "ALLOW_LIST_VALUE";
})(IpAllowListEntryOrderField = exports.IpAllowListEntryOrderField || (exports.IpAllowListEntryOrderField = {}));
/** Properties by which issue comment connections can be ordered. */
var IssueCommentOrderField;
(function (IssueCommentOrderField) {
    /** Order issue comments by update time */
    IssueCommentOrderField["UpdatedAt"] = "UPDATED_AT";
})(IssueCommentOrderField = exports.IssueCommentOrderField || (exports.IssueCommentOrderField = {}));
/** Properties by which issue connections can be ordered. */
var IssueOrderField;
(function (IssueOrderField) {
    /** Order issues by creation time */
    IssueOrderField["CreatedAt"] = "CREATED_AT";
    /** Order issues by update time */
    IssueOrderField["UpdatedAt"] = "UPDATED_AT";
    /** Order issues by comment count */
    IssueOrderField["Comments"] = "COMMENTS";
})(IssueOrderField = exports.IssueOrderField || (exports.IssueOrderField = {}));
/** The possible states of an issue. */
var IssueState;
(function (IssueState) {
    /** An issue that is still open */
    IssueState["Open"] = "OPEN";
    /** An issue that has been closed */
    IssueState["Closed"] = "CLOSED";
})(IssueState = exports.IssueState || (exports.IssueState = {}));
/** The possible item types found in a timeline. */
var IssueTimelineItemsItemType;
(function (IssueTimelineItemsItemType) {
    /** Represents a comment on an Issue. */
    IssueTimelineItemsItemType["IssueComment"] = "ISSUE_COMMENT";
    /** Represents a mention made by one issue or pull request to another. */
    IssueTimelineItemsItemType["CrossReferencedEvent"] = "CROSS_REFERENCED_EVENT";
    /** Represents a 'added_to_project' event on a given issue or pull request. */
    IssueTimelineItemsItemType["AddedToProjectEvent"] = "ADDED_TO_PROJECT_EVENT";
    /** Represents an 'assigned' event on any assignable object. */
    IssueTimelineItemsItemType["AssignedEvent"] = "ASSIGNED_EVENT";
    /** Represents a 'closed' event on any `Closable`. */
    IssueTimelineItemsItemType["ClosedEvent"] = "CLOSED_EVENT";
    /** Represents a 'comment_deleted' event on a given issue or pull request. */
    IssueTimelineItemsItemType["CommentDeletedEvent"] = "COMMENT_DELETED_EVENT";
    /** Represents a 'connected' event on a given issue or pull request. */
    IssueTimelineItemsItemType["ConnectedEvent"] = "CONNECTED_EVENT";
    /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
    IssueTimelineItemsItemType["ConvertedNoteToIssueEvent"] = "CONVERTED_NOTE_TO_ISSUE_EVENT";
    /** Represents a 'demilestoned' event on a given issue or pull request. */
    IssueTimelineItemsItemType["DemilestonedEvent"] = "DEMILESTONED_EVENT";
    /** Represents a 'disconnected' event on a given issue or pull request. */
    IssueTimelineItemsItemType["DisconnectedEvent"] = "DISCONNECTED_EVENT";
    /** Represents a 'labeled' event on a given issue or pull request. */
    IssueTimelineItemsItemType["LabeledEvent"] = "LABELED_EVENT";
    /** Represents a 'locked' event on a given issue or pull request. */
    IssueTimelineItemsItemType["LockedEvent"] = "LOCKED_EVENT";
    /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
    IssueTimelineItemsItemType["MarkedAsDuplicateEvent"] = "MARKED_AS_DUPLICATE_EVENT";
    /** Represents a 'mentioned' event on a given issue or pull request. */
    IssueTimelineItemsItemType["MentionedEvent"] = "MENTIONED_EVENT";
    /** Represents a 'milestoned' event on a given issue or pull request. */
    IssueTimelineItemsItemType["MilestonedEvent"] = "MILESTONED_EVENT";
    /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
    IssueTimelineItemsItemType["MovedColumnsInProjectEvent"] = "MOVED_COLUMNS_IN_PROJECT_EVENT";
    /** Represents a 'pinned' event on a given issue or pull request. */
    IssueTimelineItemsItemType["PinnedEvent"] = "PINNED_EVENT";
    /** Represents a 'referenced' event on a given `ReferencedSubject`. */
    IssueTimelineItemsItemType["ReferencedEvent"] = "REFERENCED_EVENT";
    /** Represents a 'removed_from_project' event on a given issue or pull request. */
    IssueTimelineItemsItemType["RemovedFromProjectEvent"] = "REMOVED_FROM_PROJECT_EVENT";
    /** Represents a 'renamed' event on a given issue or pull request */
    IssueTimelineItemsItemType["RenamedTitleEvent"] = "RENAMED_TITLE_EVENT";
    /** Represents a 'reopened' event on any `Closable`. */
    IssueTimelineItemsItemType["ReopenedEvent"] = "REOPENED_EVENT";
    /** Represents a 'subscribed' event on a given `Subscribable`. */
    IssueTimelineItemsItemType["SubscribedEvent"] = "SUBSCRIBED_EVENT";
    /** Represents a 'transferred' event on a given issue or pull request. */
    IssueTimelineItemsItemType["TransferredEvent"] = "TRANSFERRED_EVENT";
    /** Represents an 'unassigned' event on any assignable object. */
    IssueTimelineItemsItemType["UnassignedEvent"] = "UNASSIGNED_EVENT";
    /** Represents an 'unlabeled' event on a given issue or pull request. */
    IssueTimelineItemsItemType["UnlabeledEvent"] = "UNLABELED_EVENT";
    /** Represents an 'unlocked' event on a given issue or pull request. */
    IssueTimelineItemsItemType["UnlockedEvent"] = "UNLOCKED_EVENT";
    /** Represents a 'user_blocked' event on a given user. */
    IssueTimelineItemsItemType["UserBlockedEvent"] = "USER_BLOCKED_EVENT";
    /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
    IssueTimelineItemsItemType["UnmarkedAsDuplicateEvent"] = "UNMARKED_AS_DUPLICATE_EVENT";
    /** Represents an 'unpinned' event on a given issue or pull request. */
    IssueTimelineItemsItemType["UnpinnedEvent"] = "UNPINNED_EVENT";
    /** Represents an 'unsubscribed' event on a given `Subscribable`. */
    IssueTimelineItemsItemType["UnsubscribedEvent"] = "UNSUBSCRIBED_EVENT";
})(IssueTimelineItemsItemType = exports.IssueTimelineItemsItemType || (exports.IssueTimelineItemsItemType = {}));
/** Properties by which label connections can be ordered. */
var LabelOrderField;
(function (LabelOrderField) {
    /** Order labels by name  */
    LabelOrderField["Name"] = "NAME";
    /** Order labels by creation time */
    LabelOrderField["CreatedAt"] = "CREATED_AT";
})(LabelOrderField = exports.LabelOrderField || (exports.LabelOrderField = {}));
/** Properties by which language connections can be ordered. */
var LanguageOrderField;
(function (LanguageOrderField) {
    /** Order languages by the size of all files containing the language */
    LanguageOrderField["Size"] = "SIZE";
})(LanguageOrderField = exports.LanguageOrderField || (exports.LanguageOrderField = {}));
/** The possible reasons that an issue or pull request was locked. */
var LockReason;
(function (LockReason) {
    /** The issue or pull request was locked because the conversation was off-topic. */
    LockReason["OffTopic"] = "OFF_TOPIC";
    /** The issue or pull request was locked because the conversation was too heated. */
    LockReason["TooHeated"] = "TOO_HEATED";
    /** The issue or pull request was locked because the conversation was resolved. */
    LockReason["Resolved"] = "RESOLVED";
    /** The issue or pull request was locked because the conversation was spam. */
    LockReason["Spam"] = "SPAM";
})(LockReason = exports.LockReason || (exports.LockReason = {}));
/** Whether or not a PullRequest can be merged. */
var MergeableState;
(function (MergeableState) {
    /** The pull request can be merged. */
    MergeableState["Mergeable"] = "MERGEABLE";
    /** The pull request cannot be merged due to merge conflicts. */
    MergeableState["Conflicting"] = "CONFLICTING";
    /** The mergeability of the pull request is still being calculated. */
    MergeableState["Unknown"] = "UNKNOWN";
})(MergeableState = exports.MergeableState || (exports.MergeableState = {}));
/** Properties by which milestone connections can be ordered. */
var MilestoneOrderField;
(function (MilestoneOrderField) {
    /** Order milestones by when they are due. */
    MilestoneOrderField["DueDate"] = "DUE_DATE";
    /** Order milestones by when they were created. */
    MilestoneOrderField["CreatedAt"] = "CREATED_AT";
    /** Order milestones by when they were last updated. */
    MilestoneOrderField["UpdatedAt"] = "UPDATED_AT";
    /** Order milestones by their number. */
    MilestoneOrderField["Number"] = "NUMBER";
})(MilestoneOrderField = exports.MilestoneOrderField || (exports.MilestoneOrderField = {}));
/** The possible states of a milestone. */
var MilestoneState;
(function (MilestoneState) {
    /** A milestone that is still open. */
    MilestoneState["Open"] = "OPEN";
    /** A milestone that has been closed. */
    MilestoneState["Closed"] = "CLOSED";
})(MilestoneState = exports.MilestoneState || (exports.MilestoneState = {}));
/** The possible values for the notification restriction setting. */
var NotificationRestrictionSettingValue;
(function (NotificationRestrictionSettingValue) {
    /** The setting is enabled for the owner. */
    NotificationRestrictionSettingValue["Enabled"] = "ENABLED";
    /** The setting is disabled for the owner. */
    NotificationRestrictionSettingValue["Disabled"] = "DISABLED";
})(NotificationRestrictionSettingValue = exports.NotificationRestrictionSettingValue || (exports.NotificationRestrictionSettingValue = {}));
/** The state of an OAuth Application when it was created. */
var OauthApplicationCreateAuditEntryState;
(function (OauthApplicationCreateAuditEntryState) {
    /** The OAuth Application was active and allowed to have OAuth Accesses. */
    OauthApplicationCreateAuditEntryState["Active"] = "ACTIVE";
    /** The OAuth Application was suspended from generating OAuth Accesses due to abuse or security concerns. */
    OauthApplicationCreateAuditEntryState["Suspended"] = "SUSPENDED";
    /** The OAuth Application was in the process of being deleted. */
    OauthApplicationCreateAuditEntryState["PendingDeletion"] = "PENDING_DELETION";
})(OauthApplicationCreateAuditEntryState = exports.OauthApplicationCreateAuditEntryState || (exports.OauthApplicationCreateAuditEntryState = {}));
/** The corresponding operation type for the action */
var OperationType;
(function (OperationType) {
    /** An existing resource was accessed */
    OperationType["Access"] = "ACCESS";
    /** A resource performed an authentication event */
    OperationType["Authentication"] = "AUTHENTICATION";
    /** A new resource was created */
    OperationType["Create"] = "CREATE";
    /** An existing resource was modified */
    OperationType["Modify"] = "MODIFY";
    /** An existing resource was removed */
    OperationType["Remove"] = "REMOVE";
    /** An existing resource was restored */
    OperationType["Restore"] = "RESTORE";
    /** An existing resource was transferred between multiple resources */
    OperationType["Transfer"] = "TRANSFER";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
var OrderDirection;
(function (OrderDirection) {
    /** Specifies an ascending order for a given `orderBy` argument. */
    OrderDirection["Asc"] = "ASC";
    /** Specifies a descending order for a given `orderBy` argument. */
    OrderDirection["Desc"] = "DESC";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
/** The permissions available to members on an Organization. */
var OrgAddMemberAuditEntryPermission;
(function (OrgAddMemberAuditEntryPermission) {
    /** Can read and clone repositories. */
    OrgAddMemberAuditEntryPermission["Read"] = "READ";
    /** Can read, clone, push, and add collaborators to repositories. */
    OrgAddMemberAuditEntryPermission["Admin"] = "ADMIN";
})(OrgAddMemberAuditEntryPermission = exports.OrgAddMemberAuditEntryPermission || (exports.OrgAddMemberAuditEntryPermission = {}));
/** The billing plans available for organizations. */
var OrgCreateAuditEntryBillingPlan;
(function (OrgCreateAuditEntryBillingPlan) {
    /** Free Plan */
    OrgCreateAuditEntryBillingPlan["Free"] = "FREE";
    /** Team Plan */
    OrgCreateAuditEntryBillingPlan["Business"] = "BUSINESS";
    /** Enterprise Cloud Plan */
    OrgCreateAuditEntryBillingPlan["BusinessPlus"] = "BUSINESS_PLUS";
    /** Legacy Unlimited Plan */
    OrgCreateAuditEntryBillingPlan["Unlimited"] = "UNLIMITED";
    /** Tiered Per Seat Plan */
    OrgCreateAuditEntryBillingPlan["TieredPerSeat"] = "TIERED_PER_SEAT";
})(OrgCreateAuditEntryBillingPlan = exports.OrgCreateAuditEntryBillingPlan || (exports.OrgCreateAuditEntryBillingPlan = {}));
/** The reason a billing manager was removed from an Organization. */
var OrgRemoveBillingManagerAuditEntryReason;
(function (OrgRemoveBillingManagerAuditEntryReason) {
    /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
    OrgRemoveBillingManagerAuditEntryReason["TwoFactorRequirementNonCompliance"] = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";
    /** SAML external identity missing */
    OrgRemoveBillingManagerAuditEntryReason["SamlExternalIdentityMissing"] = "SAML_EXTERNAL_IDENTITY_MISSING";
    /** SAML SSO enforcement requires an external identity */
    OrgRemoveBillingManagerAuditEntryReason["SamlSsoEnforcementRequiresExternalIdentity"] = "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY";
})(OrgRemoveBillingManagerAuditEntryReason = exports.OrgRemoveBillingManagerAuditEntryReason || (exports.OrgRemoveBillingManagerAuditEntryReason = {}));
/** The type of membership a user has with an Organization. */
var OrgRemoveMemberAuditEntryMembershipType;
(function (OrgRemoveMemberAuditEntryMembershipType) {
    /** A direct member is a user that is a member of the Organization. */
    OrgRemoveMemberAuditEntryMembershipType["DirectMember"] = "DIRECT_MEMBER";
    /** Organization administrators have full access and can change several settings, including the names of repositories that belong to the Organization and Owners team membership. In addition, organization admins can delete the organization and all of its repositories. */
    OrgRemoveMemberAuditEntryMembershipType["Admin"] = "ADMIN";
    /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
    OrgRemoveMemberAuditEntryMembershipType["BillingManager"] = "BILLING_MANAGER";
    /** An unaffiliated collaborator is a person who is not a member of the Organization and does not have access to any repositories in the Organization. */
    OrgRemoveMemberAuditEntryMembershipType["Unaffiliated"] = "UNAFFILIATED";
    /** An outside collaborator is a person who isn't explicitly a member of the Organization, but who has Read, Write, or Admin permissions to one or more repositories in the organization. */
    OrgRemoveMemberAuditEntryMembershipType["OutsideCollaborator"] = "OUTSIDE_COLLABORATOR";
})(OrgRemoveMemberAuditEntryMembershipType = exports.OrgRemoveMemberAuditEntryMembershipType || (exports.OrgRemoveMemberAuditEntryMembershipType = {}));
/** The reason a member was removed from an Organization. */
var OrgRemoveMemberAuditEntryReason;
(function (OrgRemoveMemberAuditEntryReason) {
    /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
    OrgRemoveMemberAuditEntryReason["TwoFactorRequirementNonCompliance"] = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";
    /** SAML external identity missing */
    OrgRemoveMemberAuditEntryReason["SamlExternalIdentityMissing"] = "SAML_EXTERNAL_IDENTITY_MISSING";
    /** SAML SSO enforcement requires an external identity */
    OrgRemoveMemberAuditEntryReason["SamlSsoEnforcementRequiresExternalIdentity"] = "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY";
    /** User account has been deleted */
    OrgRemoveMemberAuditEntryReason["UserAccountDeleted"] = "USER_ACCOUNT_DELETED";
    /** User was removed from organization during account recovery */
    OrgRemoveMemberAuditEntryReason["TwoFactorAccountRecovery"] = "TWO_FACTOR_ACCOUNT_RECOVERY";
})(OrgRemoveMemberAuditEntryReason = exports.OrgRemoveMemberAuditEntryReason || (exports.OrgRemoveMemberAuditEntryReason = {}));
/** The type of membership a user has with an Organization. */
var OrgRemoveOutsideCollaboratorAuditEntryMembershipType;
(function (OrgRemoveOutsideCollaboratorAuditEntryMembershipType) {
    /** An outside collaborator is a person who isn't explicitly a member of the Organization, but who has Read, Write, or Admin permissions to one or more repositories in the organization. */
    OrgRemoveOutsideCollaboratorAuditEntryMembershipType["OutsideCollaborator"] = "OUTSIDE_COLLABORATOR";
    /** An unaffiliated collaborator is a person who is not a member of the Organization and does not have access to any repositories in the organization. */
    OrgRemoveOutsideCollaboratorAuditEntryMembershipType["Unaffiliated"] = "UNAFFILIATED";
    /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
    OrgRemoveOutsideCollaboratorAuditEntryMembershipType["BillingManager"] = "BILLING_MANAGER";
})(OrgRemoveOutsideCollaboratorAuditEntryMembershipType = exports.OrgRemoveOutsideCollaboratorAuditEntryMembershipType || (exports.OrgRemoveOutsideCollaboratorAuditEntryMembershipType = {}));
/** The reason an outside collaborator was removed from an Organization. */
var OrgRemoveOutsideCollaboratorAuditEntryReason;
(function (OrgRemoveOutsideCollaboratorAuditEntryReason) {
    /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
    OrgRemoveOutsideCollaboratorAuditEntryReason["TwoFactorRequirementNonCompliance"] = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";
    /** SAML external identity missing */
    OrgRemoveOutsideCollaboratorAuditEntryReason["SamlExternalIdentityMissing"] = "SAML_EXTERNAL_IDENTITY_MISSING";
})(OrgRemoveOutsideCollaboratorAuditEntryReason = exports.OrgRemoveOutsideCollaboratorAuditEntryReason || (exports.OrgRemoveOutsideCollaboratorAuditEntryReason = {}));
/** The default permission a repository can have in an Organization. */
var OrgUpdateDefaultRepositoryPermissionAuditEntryPermission;
(function (OrgUpdateDefaultRepositoryPermissionAuditEntryPermission) {
    /** Can read and clone repositories. */
    OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["Read"] = "READ";
    /** Can read, clone and push to repositories. */
    OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["Write"] = "WRITE";
    /** Can read, clone, push, and add collaborators to repositories. */
    OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["Admin"] = "ADMIN";
    /** No default permission value. */
    OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["None"] = "NONE";
})(OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = exports.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission || (exports.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = {}));
/** The permissions available to members on an Organization. */
var OrgUpdateMemberAuditEntryPermission;
(function (OrgUpdateMemberAuditEntryPermission) {
    /** Can read and clone repositories. */
    OrgUpdateMemberAuditEntryPermission["Read"] = "READ";
    /** Can read, clone, push, and add collaborators to repositories. */
    OrgUpdateMemberAuditEntryPermission["Admin"] = "ADMIN";
})(OrgUpdateMemberAuditEntryPermission = exports.OrgUpdateMemberAuditEntryPermission || (exports.OrgUpdateMemberAuditEntryPermission = {}));
/** The permissions available for repository creation on an Organization. */
var OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility;
(function (OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility) {
    /** All organization members are restricted from creating any repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["All"] = "ALL";
    /** All organization members are restricted from creating public repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["Public"] = "PUBLIC";
    /** All organization members are allowed to create any repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["None"] = "NONE";
    /** All organization members are restricted from creating private repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["Private"] = "PRIVATE";
    /** All organization members are restricted from creating internal repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["Internal"] = "INTERNAL";
    /** All organization members are restricted from creating public or internal repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["PublicInternal"] = "PUBLIC_INTERNAL";
    /** All organization members are restricted from creating private or internal repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["PrivateInternal"] = "PRIVATE_INTERNAL";
    /** All organization members are restricted from creating public or private repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["PublicPrivate"] = "PUBLIC_PRIVATE";
})(OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = exports.OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility || (exports.OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = {}));
/** The possible organization invitation roles. */
var OrganizationInvitationRole;
(function (OrganizationInvitationRole) {
    /** The user is invited to be a direct member of the organization. */
    OrganizationInvitationRole["DirectMember"] = "DIRECT_MEMBER";
    /** The user is invited to be an admin of the organization. */
    OrganizationInvitationRole["Admin"] = "ADMIN";
    /** The user is invited to be a billing manager of the organization. */
    OrganizationInvitationRole["BillingManager"] = "BILLING_MANAGER";
    /** The user's previous role will be reinstated. */
    OrganizationInvitationRole["Reinstate"] = "REINSTATE";
})(OrganizationInvitationRole = exports.OrganizationInvitationRole || (exports.OrganizationInvitationRole = {}));
/** The possible organization invitation types. */
var OrganizationInvitationType;
(function (OrganizationInvitationType) {
    /** The invitation was to an existing user. */
    OrganizationInvitationType["User"] = "USER";
    /** The invitation was to an email address. */
    OrganizationInvitationType["Email"] = "EMAIL";
})(OrganizationInvitationType = exports.OrganizationInvitationType || (exports.OrganizationInvitationType = {}));
/** The possible roles within an organization for its members. */
var OrganizationMemberRole;
(function (OrganizationMemberRole) {
    /** The user is a member of the organization. */
    OrganizationMemberRole["Member"] = "MEMBER";
    /** The user is an administrator of the organization. */
    OrganizationMemberRole["Admin"] = "ADMIN";
})(OrganizationMemberRole = exports.OrganizationMemberRole || (exports.OrganizationMemberRole = {}));
/** The possible values for the members can create repositories setting on an organization. */
var OrganizationMembersCanCreateRepositoriesSettingValue;
(function (OrganizationMembersCanCreateRepositoriesSettingValue) {
    /** Members will be able to create public and private repositories. */
    OrganizationMembersCanCreateRepositoriesSettingValue["All"] = "ALL";
    /** Members will be able to create only private repositories. */
    OrganizationMembersCanCreateRepositoriesSettingValue["Private"] = "PRIVATE";
    /** Members will not be able to create public or private repositories. */
    OrganizationMembersCanCreateRepositoriesSettingValue["Disabled"] = "DISABLED";
})(OrganizationMembersCanCreateRepositoriesSettingValue = exports.OrganizationMembersCanCreateRepositoriesSettingValue || (exports.OrganizationMembersCanCreateRepositoriesSettingValue = {}));
/** Properties by which organization connections can be ordered. */
var OrganizationOrderField;
(function (OrganizationOrderField) {
    /** Order organizations by creation time */
    OrganizationOrderField["CreatedAt"] = "CREATED_AT";
    /** Order organizations by login */
    OrganizationOrderField["Login"] = "LOGIN";
})(OrganizationOrderField = exports.OrganizationOrderField || (exports.OrganizationOrderField = {}));
/** Properties by which package file connections can be ordered. */
var PackageFileOrderField;
(function (PackageFileOrderField) {
    /** Order package files by creation time */
    PackageFileOrderField["CreatedAt"] = "CREATED_AT";
})(PackageFileOrderField = exports.PackageFileOrderField || (exports.PackageFileOrderField = {}));
/** Properties by which package connections can be ordered. */
var PackageOrderField;
(function (PackageOrderField) {
    /** Order packages by creation time */
    PackageOrderField["CreatedAt"] = "CREATED_AT";
})(PackageOrderField = exports.PackageOrderField || (exports.PackageOrderField = {}));
/** The possible types of a package. */
var PackageType;
(function (PackageType) {
    /** An npm package. */
    PackageType["Npm"] = "NPM";
    /** A rubygems package. */
    PackageType["Rubygems"] = "RUBYGEMS";
    /** A maven package. */
    PackageType["Maven"] = "MAVEN";
    /** A docker image. */
    PackageType["Docker"] = "DOCKER";
    /** A debian package. */
    PackageType["Debian"] = "DEBIAN";
    /** A nuget package. */
    PackageType["Nuget"] = "NUGET";
    /** A python package. */
    PackageType["Pypi"] = "PYPI";
})(PackageType = exports.PackageType || (exports.PackageType = {}));
/** Properties by which package version connections can be ordered. */
var PackageVersionOrderField;
(function (PackageVersionOrderField) {
    /** Order package versions by creation time */
    PackageVersionOrderField["CreatedAt"] = "CREATED_AT";
})(PackageVersionOrderField = exports.PackageVersionOrderField || (exports.PackageVersionOrderField = {}));
/** Represents items that can be pinned to a profile page or dashboard. */
var PinnableItemType;
(function (PinnableItemType) {
    /** A repository. */
    PinnableItemType["Repository"] = "REPOSITORY";
    /** A gist. */
    PinnableItemType["Gist"] = "GIST";
    /** An issue. */
    PinnableItemType["Issue"] = "ISSUE";
    /** A project. */
    PinnableItemType["Project"] = "PROJECT";
    /** A pull request. */
    PinnableItemType["PullRequest"] = "PULL_REQUEST";
    /** A user. */
    PinnableItemType["User"] = "USER";
    /** An organization. */
    PinnableItemType["Organization"] = "ORGANIZATION";
    /** A team. */
    PinnableItemType["Team"] = "TEAM";
})(PinnableItemType = exports.PinnableItemType || (exports.PinnableItemType = {}));
/** The possible archived states of a project card. */
var ProjectCardArchivedState;
(function (ProjectCardArchivedState) {
    /** A project card that is archived */
    ProjectCardArchivedState["Archived"] = "ARCHIVED";
    /** A project card that is not archived */
    ProjectCardArchivedState["NotArchived"] = "NOT_ARCHIVED";
})(ProjectCardArchivedState = exports.ProjectCardArchivedState || (exports.ProjectCardArchivedState = {}));
/** Various content states of a ProjectCard */
var ProjectCardState;
(function (ProjectCardState) {
    /** The card has content only. */
    ProjectCardState["ContentOnly"] = "CONTENT_ONLY";
    /** The card has a note only. */
    ProjectCardState["NoteOnly"] = "NOTE_ONLY";
    /** The card is redacted. */
    ProjectCardState["Redacted"] = "REDACTED";
})(ProjectCardState = exports.ProjectCardState || (exports.ProjectCardState = {}));
/** The semantic purpose of the column - todo, in progress, or done. */
var ProjectColumnPurpose;
(function (ProjectColumnPurpose) {
    /** The column contains cards still to be worked on */
    ProjectColumnPurpose["Todo"] = "TODO";
    /** The column contains cards which are currently being worked on */
    ProjectColumnPurpose["InProgress"] = "IN_PROGRESS";
    /** The column contains cards which are complete */
    ProjectColumnPurpose["Done"] = "DONE";
})(ProjectColumnPurpose = exports.ProjectColumnPurpose || (exports.ProjectColumnPurpose = {}));
/** Properties by which project connections can be ordered. */
var ProjectOrderField;
(function (ProjectOrderField) {
    /** Order projects by creation time */
    ProjectOrderField["CreatedAt"] = "CREATED_AT";
    /** Order projects by update time */
    ProjectOrderField["UpdatedAt"] = "UPDATED_AT";
    /** Order projects by name */
    ProjectOrderField["Name"] = "NAME";
})(ProjectOrderField = exports.ProjectOrderField || (exports.ProjectOrderField = {}));
/** State of the project; either 'open' or 'closed' */
var ProjectState;
(function (ProjectState) {
    /** The project is open. */
    ProjectState["Open"] = "OPEN";
    /** The project is closed. */
    ProjectState["Closed"] = "CLOSED";
})(ProjectState = exports.ProjectState || (exports.ProjectState = {}));
/** GitHub-provided templates for Projects */
var ProjectTemplate;
(function (ProjectTemplate) {
    /** Create a board with columns for To do, In progress and Done. */
    ProjectTemplate["BasicKanban"] = "BASIC_KANBAN";
    /** Create a board with v2 triggers to automatically move cards across To do, In progress and Done columns. */
    ProjectTemplate["AutomatedKanbanV2"] = "AUTOMATED_KANBAN_V2";
    /** Create a board with triggers to automatically move cards across columns with review automation. */
    ProjectTemplate["AutomatedReviewsKanban"] = "AUTOMATED_REVIEWS_KANBAN";
    /** Create a board to triage and prioritize bugs with To do, priority, and Done columns. */
    ProjectTemplate["BugTriage"] = "BUG_TRIAGE";
})(ProjectTemplate = exports.ProjectTemplate || (exports.ProjectTemplate = {}));
/** Represents available types of methods to use when merging a pull request. */
var PullRequestMergeMethod;
(function (PullRequestMergeMethod) {
    /** Add all commits from the head branch to the base branch with a merge commit. */
    PullRequestMergeMethod["Merge"] = "MERGE";
    /** Combine all commits from the head branch into a single commit in the base branch. */
    PullRequestMergeMethod["Squash"] = "SQUASH";
    /** Add all commits from the head branch onto the base branch individually. */
    PullRequestMergeMethod["Rebase"] = "REBASE";
})(PullRequestMergeMethod = exports.PullRequestMergeMethod || (exports.PullRequestMergeMethod = {}));
/** Properties by which pull_requests connections can be ordered. */
var PullRequestOrderField;
(function (PullRequestOrderField) {
    /** Order pull_requests by creation time */
    PullRequestOrderField["CreatedAt"] = "CREATED_AT";
    /** Order pull_requests by update time */
    PullRequestOrderField["UpdatedAt"] = "UPDATED_AT";
})(PullRequestOrderField = exports.PullRequestOrderField || (exports.PullRequestOrderField = {}));
/** The possible states of a pull request review comment. */
var PullRequestReviewCommentState;
(function (PullRequestReviewCommentState) {
    /** A comment that is part of a pending review */
    PullRequestReviewCommentState["Pending"] = "PENDING";
    /** A comment that is part of a submitted review */
    PullRequestReviewCommentState["Submitted"] = "SUBMITTED";
})(PullRequestReviewCommentState = exports.PullRequestReviewCommentState || (exports.PullRequestReviewCommentState = {}));
/** The review status of a pull request. */
var PullRequestReviewDecision;
(function (PullRequestReviewDecision) {
    /** Changes have been requested on the pull request. */
    PullRequestReviewDecision["ChangesRequested"] = "CHANGES_REQUESTED";
    /** The pull request has received an approving review. */
    PullRequestReviewDecision["Approved"] = "APPROVED";
    /** A review is required before the pull request can be merged. */
    PullRequestReviewDecision["ReviewRequired"] = "REVIEW_REQUIRED";
})(PullRequestReviewDecision = exports.PullRequestReviewDecision || (exports.PullRequestReviewDecision = {}));
/** The possible events to perform on a pull request review. */
var PullRequestReviewEvent;
(function (PullRequestReviewEvent) {
    /** Submit general feedback without explicit approval. */
    PullRequestReviewEvent["Comment"] = "COMMENT";
    /** Submit feedback and approve merging these changes. */
    PullRequestReviewEvent["Approve"] = "APPROVE";
    /** Submit feedback that must be addressed before merging. */
    PullRequestReviewEvent["RequestChanges"] = "REQUEST_CHANGES";
    /** Dismiss review so it now longer effects merging. */
    PullRequestReviewEvent["Dismiss"] = "DISMISS";
})(PullRequestReviewEvent = exports.PullRequestReviewEvent || (exports.PullRequestReviewEvent = {}));
/** The possible states of a pull request review. */
var PullRequestReviewState;
(function (PullRequestReviewState) {
    /** A review that has not yet been submitted. */
    PullRequestReviewState["Pending"] = "PENDING";
    /** An informational review. */
    PullRequestReviewState["Commented"] = "COMMENTED";
    /** A review allowing the pull request to merge. */
    PullRequestReviewState["Approved"] = "APPROVED";
    /** A review blocking the pull request from merging. */
    PullRequestReviewState["ChangesRequested"] = "CHANGES_REQUESTED";
    /** A review that has been dismissed. */
    PullRequestReviewState["Dismissed"] = "DISMISSED";
})(PullRequestReviewState = exports.PullRequestReviewState || (exports.PullRequestReviewState = {}));
/** The possible states of a pull request. */
var PullRequestState;
(function (PullRequestState) {
    /** A pull request that is still open. */
    PullRequestState["Open"] = "OPEN";
    /** A pull request that has been closed without being merged. */
    PullRequestState["Closed"] = "CLOSED";
    /** A pull request that has been closed by being merged. */
    PullRequestState["Merged"] = "MERGED";
})(PullRequestState = exports.PullRequestState || (exports.PullRequestState = {}));
/** The possible item types found in a timeline. */
var PullRequestTimelineItemsItemType;
(function (PullRequestTimelineItemsItemType) {
    /** Represents a Git commit part of a pull request. */
    PullRequestTimelineItemsItemType["PullRequestCommit"] = "PULL_REQUEST_COMMIT";
    /** Represents a commit comment thread part of a pull request. */
    PullRequestTimelineItemsItemType["PullRequestCommitCommentThread"] = "PULL_REQUEST_COMMIT_COMMENT_THREAD";
    /** A review object for a given pull request. */
    PullRequestTimelineItemsItemType["PullRequestReview"] = "PULL_REQUEST_REVIEW";
    /** A threaded list of comments for a given pull request. */
    PullRequestTimelineItemsItemType["PullRequestReviewThread"] = "PULL_REQUEST_REVIEW_THREAD";
    /** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
    PullRequestTimelineItemsItemType["PullRequestRevisionMarker"] = "PULL_REQUEST_REVISION_MARKER";
    /** Represents a 'automatic_base_change_failed' event on a given pull request. */
    PullRequestTimelineItemsItemType["AutomaticBaseChangeFailedEvent"] = "AUTOMATIC_BASE_CHANGE_FAILED_EVENT";
    /** Represents a 'automatic_base_change_succeeded' event on a given pull request. */
    PullRequestTimelineItemsItemType["AutomaticBaseChangeSucceededEvent"] = "AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT";
    /** Represents a 'auto_merge_disabled' event on a given pull request. */
    PullRequestTimelineItemsItemType["AutoMergeDisabledEvent"] = "AUTO_MERGE_DISABLED_EVENT";
    /** Represents a 'auto_merge_enabled' event on a given pull request. */
    PullRequestTimelineItemsItemType["AutoMergeEnabledEvent"] = "AUTO_MERGE_ENABLED_EVENT";
    /** Represents a 'auto_rebase_enabled' event on a given pull request. */
    PullRequestTimelineItemsItemType["AutoRebaseEnabledEvent"] = "AUTO_REBASE_ENABLED_EVENT";
    /** Represents a 'auto_squash_enabled' event on a given pull request. */
    PullRequestTimelineItemsItemType["AutoSquashEnabledEvent"] = "AUTO_SQUASH_ENABLED_EVENT";
    /** Represents a 'base_ref_changed' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["BaseRefChangedEvent"] = "BASE_REF_CHANGED_EVENT";
    /** Represents a 'base_ref_force_pushed' event on a given pull request. */
    PullRequestTimelineItemsItemType["BaseRefForcePushedEvent"] = "BASE_REF_FORCE_PUSHED_EVENT";
    /** Represents a 'base_ref_deleted' event on a given pull request. */
    PullRequestTimelineItemsItemType["BaseRefDeletedEvent"] = "BASE_REF_DELETED_EVENT";
    /** Represents a 'deployed' event on a given pull request. */
    PullRequestTimelineItemsItemType["DeployedEvent"] = "DEPLOYED_EVENT";
    /** Represents a 'deployment_environment_changed' event on a given pull request. */
    PullRequestTimelineItemsItemType["DeploymentEnvironmentChangedEvent"] = "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT";
    /** Represents a 'head_ref_deleted' event on a given pull request. */
    PullRequestTimelineItemsItemType["HeadRefDeletedEvent"] = "HEAD_REF_DELETED_EVENT";
    /** Represents a 'head_ref_force_pushed' event on a given pull request. */
    PullRequestTimelineItemsItemType["HeadRefForcePushedEvent"] = "HEAD_REF_FORCE_PUSHED_EVENT";
    /** Represents a 'head_ref_restored' event on a given pull request. */
    PullRequestTimelineItemsItemType["HeadRefRestoredEvent"] = "HEAD_REF_RESTORED_EVENT";
    /** Represents a 'merged' event on a given pull request. */
    PullRequestTimelineItemsItemType["MergedEvent"] = "MERGED_EVENT";
    /** Represents a 'review_dismissed' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["ReviewDismissedEvent"] = "REVIEW_DISMISSED_EVENT";
    /** Represents an 'review_requested' event on a given pull request. */
    PullRequestTimelineItemsItemType["ReviewRequestedEvent"] = "REVIEW_REQUESTED_EVENT";
    /** Represents an 'review_request_removed' event on a given pull request. */
    PullRequestTimelineItemsItemType["ReviewRequestRemovedEvent"] = "REVIEW_REQUEST_REMOVED_EVENT";
    /** Represents a 'ready_for_review' event on a given pull request. */
    PullRequestTimelineItemsItemType["ReadyForReviewEvent"] = "READY_FOR_REVIEW_EVENT";
    /** Represents a 'convert_to_draft' event on a given pull request. */
    PullRequestTimelineItemsItemType["ConvertToDraftEvent"] = "CONVERT_TO_DRAFT_EVENT";
    /** Represents a comment on an Issue. */
    PullRequestTimelineItemsItemType["IssueComment"] = "ISSUE_COMMENT";
    /** Represents a mention made by one issue or pull request to another. */
    PullRequestTimelineItemsItemType["CrossReferencedEvent"] = "CROSS_REFERENCED_EVENT";
    /** Represents a 'added_to_project' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["AddedToProjectEvent"] = "ADDED_TO_PROJECT_EVENT";
    /** Represents an 'assigned' event on any assignable object. */
    PullRequestTimelineItemsItemType["AssignedEvent"] = "ASSIGNED_EVENT";
    /** Represents a 'closed' event on any `Closable`. */
    PullRequestTimelineItemsItemType["ClosedEvent"] = "CLOSED_EVENT";
    /** Represents a 'comment_deleted' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["CommentDeletedEvent"] = "COMMENT_DELETED_EVENT";
    /** Represents a 'connected' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["ConnectedEvent"] = "CONNECTED_EVENT";
    /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["ConvertedNoteToIssueEvent"] = "CONVERTED_NOTE_TO_ISSUE_EVENT";
    /** Represents a 'demilestoned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["DemilestonedEvent"] = "DEMILESTONED_EVENT";
    /** Represents a 'disconnected' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["DisconnectedEvent"] = "DISCONNECTED_EVENT";
    /** Represents a 'labeled' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["LabeledEvent"] = "LABELED_EVENT";
    /** Represents a 'locked' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["LockedEvent"] = "LOCKED_EVENT";
    /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["MarkedAsDuplicateEvent"] = "MARKED_AS_DUPLICATE_EVENT";
    /** Represents a 'mentioned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["MentionedEvent"] = "MENTIONED_EVENT";
    /** Represents a 'milestoned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["MilestonedEvent"] = "MILESTONED_EVENT";
    /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["MovedColumnsInProjectEvent"] = "MOVED_COLUMNS_IN_PROJECT_EVENT";
    /** Represents a 'pinned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["PinnedEvent"] = "PINNED_EVENT";
    /** Represents a 'referenced' event on a given `ReferencedSubject`. */
    PullRequestTimelineItemsItemType["ReferencedEvent"] = "REFERENCED_EVENT";
    /** Represents a 'removed_from_project' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["RemovedFromProjectEvent"] = "REMOVED_FROM_PROJECT_EVENT";
    /** Represents a 'renamed' event on a given issue or pull request */
    PullRequestTimelineItemsItemType["RenamedTitleEvent"] = "RENAMED_TITLE_EVENT";
    /** Represents a 'reopened' event on any `Closable`. */
    PullRequestTimelineItemsItemType["ReopenedEvent"] = "REOPENED_EVENT";
    /** Represents a 'subscribed' event on a given `Subscribable`. */
    PullRequestTimelineItemsItemType["SubscribedEvent"] = "SUBSCRIBED_EVENT";
    /** Represents a 'transferred' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["TransferredEvent"] = "TRANSFERRED_EVENT";
    /** Represents an 'unassigned' event on any assignable object. */
    PullRequestTimelineItemsItemType["UnassignedEvent"] = "UNASSIGNED_EVENT";
    /** Represents an 'unlabeled' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["UnlabeledEvent"] = "UNLABELED_EVENT";
    /** Represents an 'unlocked' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["UnlockedEvent"] = "UNLOCKED_EVENT";
    /** Represents a 'user_blocked' event on a given user. */
    PullRequestTimelineItemsItemType["UserBlockedEvent"] = "USER_BLOCKED_EVENT";
    /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["UnmarkedAsDuplicateEvent"] = "UNMARKED_AS_DUPLICATE_EVENT";
    /** Represents an 'unpinned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["UnpinnedEvent"] = "UNPINNED_EVENT";
    /** Represents an 'unsubscribed' event on a given `Subscribable`. */
    PullRequestTimelineItemsItemType["UnsubscribedEvent"] = "UNSUBSCRIBED_EVENT";
})(PullRequestTimelineItemsItemType = exports.PullRequestTimelineItemsItemType || (exports.PullRequestTimelineItemsItemType = {}));
/** The possible target states when updating a pull request. */
var PullRequestUpdateState;
(function (PullRequestUpdateState) {
    /** A pull request that is still open. */
    PullRequestUpdateState["Open"] = "OPEN";
    /** A pull request that has been closed without being merged. */
    PullRequestUpdateState["Closed"] = "CLOSED";
})(PullRequestUpdateState = exports.PullRequestUpdateState || (exports.PullRequestUpdateState = {}));
/** Emojis that can be attached to Issues, Pull Requests and Comments. */
var ReactionContent;
(function (ReactionContent) {
    /** Represents the `:+1:` emoji. */
    ReactionContent["ThumbsUp"] = "THUMBS_UP";
    /** Represents the `:-1:` emoji. */
    ReactionContent["ThumbsDown"] = "THUMBS_DOWN";
    /** Represents the `:laugh:` emoji. */
    ReactionContent["Laugh"] = "LAUGH";
    /** Represents the `:hooray:` emoji. */
    ReactionContent["Hooray"] = "HOORAY";
    /** Represents the `:confused:` emoji. */
    ReactionContent["Confused"] = "CONFUSED";
    /** Represents the `:heart:` emoji. */
    ReactionContent["Heart"] = "HEART";
    /** Represents the `:rocket:` emoji. */
    ReactionContent["Rocket"] = "ROCKET";
    /** Represents the `:eyes:` emoji. */
    ReactionContent["Eyes"] = "EYES";
})(ReactionContent = exports.ReactionContent || (exports.ReactionContent = {}));
/** A list of fields that reactions can be ordered by. */
var ReactionOrderField;
(function (ReactionOrderField) {
    /** Allows ordering a list of reactions by when they were created. */
    ReactionOrderField["CreatedAt"] = "CREATED_AT";
})(ReactionOrderField = exports.ReactionOrderField || (exports.ReactionOrderField = {}));
/** Properties by which ref connections can be ordered. */
var RefOrderField;
(function (RefOrderField) {
    /** Order refs by underlying commit date if the ref prefix is refs/tags/ */
    RefOrderField["TagCommitDate"] = "TAG_COMMIT_DATE";
    /** Order refs by their alphanumeric name */
    RefOrderField["Alphabetical"] = "ALPHABETICAL";
})(RefOrderField = exports.RefOrderField || (exports.RefOrderField = {}));
/** Properties by which release connections can be ordered. */
var ReleaseOrderField;
(function (ReleaseOrderField) {
    /** Order releases by creation time */
    ReleaseOrderField["CreatedAt"] = "CREATED_AT";
    /** Order releases alphabetically by name */
    ReleaseOrderField["Name"] = "NAME";
})(ReleaseOrderField = exports.ReleaseOrderField || (exports.ReleaseOrderField = {}));
/** The privacy of a repository */
var RepoAccessAuditEntryVisibility;
(function (RepoAccessAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoAccessAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoAccessAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoAccessAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoAccessAuditEntryVisibility = exports.RepoAccessAuditEntryVisibility || (exports.RepoAccessAuditEntryVisibility = {}));
/** The privacy of a repository */
var RepoAddMemberAuditEntryVisibility;
(function (RepoAddMemberAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoAddMemberAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoAddMemberAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoAddMemberAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoAddMemberAuditEntryVisibility = exports.RepoAddMemberAuditEntryVisibility || (exports.RepoAddMemberAuditEntryVisibility = {}));
/** The privacy of a repository */
var RepoArchivedAuditEntryVisibility;
(function (RepoArchivedAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoArchivedAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoArchivedAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoArchivedAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoArchivedAuditEntryVisibility = exports.RepoArchivedAuditEntryVisibility || (exports.RepoArchivedAuditEntryVisibility = {}));
/** The merge options available for pull requests to this repository. */
var RepoChangeMergeSettingAuditEntryMergeType;
(function (RepoChangeMergeSettingAuditEntryMergeType) {
    /** The pull request is added to the base branch in a merge commit. */
    RepoChangeMergeSettingAuditEntryMergeType["Merge"] = "MERGE";
    /** Commits from the pull request are added onto the base branch individually without a merge commit. */
    RepoChangeMergeSettingAuditEntryMergeType["Rebase"] = "REBASE";
    /** The pull request's commits are squashed into a single commit before they are merged to the base branch. */
    RepoChangeMergeSettingAuditEntryMergeType["Squash"] = "SQUASH";
})(RepoChangeMergeSettingAuditEntryMergeType = exports.RepoChangeMergeSettingAuditEntryMergeType || (exports.RepoChangeMergeSettingAuditEntryMergeType = {}));
/** The privacy of a repository */
var RepoCreateAuditEntryVisibility;
(function (RepoCreateAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoCreateAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoCreateAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoCreateAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoCreateAuditEntryVisibility = exports.RepoCreateAuditEntryVisibility || (exports.RepoCreateAuditEntryVisibility = {}));
/** The privacy of a repository */
var RepoDestroyAuditEntryVisibility;
(function (RepoDestroyAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoDestroyAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoDestroyAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoDestroyAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoDestroyAuditEntryVisibility = exports.RepoDestroyAuditEntryVisibility || (exports.RepoDestroyAuditEntryVisibility = {}));
/** The privacy of a repository */
var RepoRemoveMemberAuditEntryVisibility;
(function (RepoRemoveMemberAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoRemoveMemberAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoRemoveMemberAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoRemoveMemberAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoRemoveMemberAuditEntryVisibility = exports.RepoRemoveMemberAuditEntryVisibility || (exports.RepoRemoveMemberAuditEntryVisibility = {}));
/** The reasons a piece of content can be reported or minimized. */
var ReportedContentClassifiers;
(function (ReportedContentClassifiers) {
    /** A spammy piece of content */
    ReportedContentClassifiers["Spam"] = "SPAM";
    /** An abusive or harassing piece of content */
    ReportedContentClassifiers["Abuse"] = "ABUSE";
    /** An irrelevant piece of content */
    ReportedContentClassifiers["OffTopic"] = "OFF_TOPIC";
    /** An outdated piece of content */
    ReportedContentClassifiers["Outdated"] = "OUTDATED";
    /** A duplicated piece of content */
    ReportedContentClassifiers["Duplicate"] = "DUPLICATE";
    /** The content has been resolved */
    ReportedContentClassifiers["Resolved"] = "RESOLVED";
})(ReportedContentClassifiers = exports.ReportedContentClassifiers || (exports.ReportedContentClassifiers = {}));
/** The affiliation of a user to a repository */
var RepositoryAffiliation;
(function (RepositoryAffiliation) {
    /** Repositories that are owned by the authenticated user. */
    RepositoryAffiliation["Owner"] = "OWNER";
    /** Repositories that the user has been added to as a collaborator. */
    RepositoryAffiliation["Collaborator"] = "COLLABORATOR";
    /** Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on. */
    RepositoryAffiliation["OrganizationMember"] = "ORGANIZATION_MEMBER";
})(RepositoryAffiliation = exports.RepositoryAffiliation || (exports.RepositoryAffiliation = {}));
/** The reason a repository is listed as 'contributed'. */
var RepositoryContributionType;
(function (RepositoryContributionType) {
    /** Created a commit */
    RepositoryContributionType["Commit"] = "COMMIT";
    /** Created an issue */
    RepositoryContributionType["Issue"] = "ISSUE";
    /** Created a pull request */
    RepositoryContributionType["PullRequest"] = "PULL_REQUEST";
    /** Created the repository */
    RepositoryContributionType["Repository"] = "REPOSITORY";
    /** Reviewed a pull request */
    RepositoryContributionType["PullRequestReview"] = "PULL_REQUEST_REVIEW";
})(RepositoryContributionType = exports.RepositoryContributionType || (exports.RepositoryContributionType = {}));
/** A repository interaction limit. */
var RepositoryInteractionLimit;
(function (RepositoryInteractionLimit) {
    /** Users that have recently created their account will be unable to interact with the repository. */
    RepositoryInteractionLimit["ExistingUsers"] = "EXISTING_USERS";
    /** Users that have not previously committed to a repository???s default branch will be unable to interact with the repository. */
    RepositoryInteractionLimit["ContributorsOnly"] = "CONTRIBUTORS_ONLY";
    /** Users that are not collaborators will not be able to interact with the repository. */
    RepositoryInteractionLimit["CollaboratorsOnly"] = "COLLABORATORS_ONLY";
    /** No interaction limits are enabled. */
    RepositoryInteractionLimit["NoLimit"] = "NO_LIMIT";
})(RepositoryInteractionLimit = exports.RepositoryInteractionLimit || (exports.RepositoryInteractionLimit = {}));
/** The length for a repository interaction limit to be enabled for. */
var RepositoryInteractionLimitExpiry;
(function (RepositoryInteractionLimitExpiry) {
    /** The interaction limit will expire after 1 day. */
    RepositoryInteractionLimitExpiry["OneDay"] = "ONE_DAY";
    /** The interaction limit will expire after 3 days. */
    RepositoryInteractionLimitExpiry["ThreeDays"] = "THREE_DAYS";
    /** The interaction limit will expire after 1 week. */
    RepositoryInteractionLimitExpiry["OneWeek"] = "ONE_WEEK";
    /** The interaction limit will expire after 1 month. */
    RepositoryInteractionLimitExpiry["OneMonth"] = "ONE_MONTH";
    /** The interaction limit will expire after 6 months. */
    RepositoryInteractionLimitExpiry["SixMonths"] = "SIX_MONTHS";
})(RepositoryInteractionLimitExpiry = exports.RepositoryInteractionLimitExpiry || (exports.RepositoryInteractionLimitExpiry = {}));
/** Indicates where an interaction limit is configured. */
var RepositoryInteractionLimitOrigin;
(function (RepositoryInteractionLimitOrigin) {
    /** A limit that is configured at the repository level. */
    RepositoryInteractionLimitOrigin["Repository"] = "REPOSITORY";
    /** A limit that is configured at the organization level. */
    RepositoryInteractionLimitOrigin["Organization"] = "ORGANIZATION";
    /** A limit that is configured at the user-wide level. */
    RepositoryInteractionLimitOrigin["User"] = "USER";
})(RepositoryInteractionLimitOrigin = exports.RepositoryInteractionLimitOrigin || (exports.RepositoryInteractionLimitOrigin = {}));
/** Properties by which repository invitation connections can be ordered. */
var RepositoryInvitationOrderField;
(function (RepositoryInvitationOrderField) {
    /** Order repository invitations by creation time */
    RepositoryInvitationOrderField["CreatedAt"] = "CREATED_AT";
    /** Order repository invitations by invitee login */
    RepositoryInvitationOrderField["InviteeLogin"] = "INVITEE_LOGIN";
})(RepositoryInvitationOrderField = exports.RepositoryInvitationOrderField || (exports.RepositoryInvitationOrderField = {}));
/** The possible reasons a given repository could be in a locked state. */
var RepositoryLockReason;
(function (RepositoryLockReason) {
    /** The repository is locked due to a move. */
    RepositoryLockReason["Moving"] = "MOVING";
    /** The repository is locked due to a billing related reason. */
    RepositoryLockReason["Billing"] = "BILLING";
    /** The repository is locked due to a rename. */
    RepositoryLockReason["Rename"] = "RENAME";
    /** The repository is locked due to a migration. */
    RepositoryLockReason["Migrating"] = "MIGRATING";
})(RepositoryLockReason = exports.RepositoryLockReason || (exports.RepositoryLockReason = {}));
/** Properties by which repository connections can be ordered. */
var RepositoryOrderField;
(function (RepositoryOrderField) {
    /** Order repositories by creation time */
    RepositoryOrderField["CreatedAt"] = "CREATED_AT";
    /** Order repositories by update time */
    RepositoryOrderField["UpdatedAt"] = "UPDATED_AT";
    /** Order repositories by push time */
    RepositoryOrderField["PushedAt"] = "PUSHED_AT";
    /** Order repositories by name */
    RepositoryOrderField["Name"] = "NAME";
    /** Order repositories by number of stargazers */
    RepositoryOrderField["Stargazers"] = "STARGAZERS";
})(RepositoryOrderField = exports.RepositoryOrderField || (exports.RepositoryOrderField = {}));
/** The access level to a repository */
var RepositoryPermission;
(function (RepositoryPermission) {
    /** Can read, clone, and push to this repository. Can also manage issues, pull requests, and repository settings, including adding collaborators */
    RepositoryPermission["Admin"] = "ADMIN";
    /** Can read, clone, and push to this repository. They can also manage issues, pull requests, and some repository settings */
    RepositoryPermission["Maintain"] = "MAINTAIN";
    /** Can read, clone, and push to this repository. Can also manage issues and pull requests */
    RepositoryPermission["Write"] = "WRITE";
    /** Can read and clone this repository. Can also manage issues and pull requests */
    RepositoryPermission["Triage"] = "TRIAGE";
    /** Can read and clone this repository. Can also open and comment on issues and pull requests */
    RepositoryPermission["Read"] = "READ";
})(RepositoryPermission = exports.RepositoryPermission || (exports.RepositoryPermission = {}));
/** The privacy of a repository */
var RepositoryPrivacy;
(function (RepositoryPrivacy) {
    /** Public */
    RepositoryPrivacy["Public"] = "PUBLIC";
    /** Private */
    RepositoryPrivacy["Private"] = "PRIVATE";
})(RepositoryPrivacy = exports.RepositoryPrivacy || (exports.RepositoryPrivacy = {}));
/** The repository's visibility level. */
var RepositoryVisibility;
(function (RepositoryVisibility) {
    /** The repository is visible only to those with explicit access. */
    RepositoryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepositoryVisibility["Public"] = "PUBLIC";
    /** The repository is visible only to users in the same business. */
    RepositoryVisibility["Internal"] = "INTERNAL";
})(RepositoryVisibility = exports.RepositoryVisibility || (exports.RepositoryVisibility = {}));
/** The possible states that can be requested when creating a check run. */
var RequestableCheckStatusState;
(function (RequestableCheckStatusState) {
    /** The check suite or run has been queued. */
    RequestableCheckStatusState["Queued"] = "QUEUED";
    /** The check suite or run is in progress. */
    RequestableCheckStatusState["InProgress"] = "IN_PROGRESS";
    /** The check suite or run has been completed. */
    RequestableCheckStatusState["Completed"] = "COMPLETED";
    /** The check suite or run is in waiting state. */
    RequestableCheckStatusState["Waiting"] = "WAITING";
})(RequestableCheckStatusState = exports.RequestableCheckStatusState || (exports.RequestableCheckStatusState = {}));
/** The possible digest algorithms used to sign SAML requests for an identity provider. */
var SamlDigestAlgorithm;
(function (SamlDigestAlgorithm) {
    /** SHA1 */
    SamlDigestAlgorithm["Sha1"] = "SHA1";
    /** SHA256 */
    SamlDigestAlgorithm["Sha256"] = "SHA256";
    /** SHA384 */
    SamlDigestAlgorithm["Sha384"] = "SHA384";
    /** SHA512 */
    SamlDigestAlgorithm["Sha512"] = "SHA512";
})(SamlDigestAlgorithm = exports.SamlDigestAlgorithm || (exports.SamlDigestAlgorithm = {}));
/** The possible signature algorithms used to sign SAML requests for a Identity Provider. */
var SamlSignatureAlgorithm;
(function (SamlSignatureAlgorithm) {
    /** RSA-SHA1 */
    SamlSignatureAlgorithm["RsaSha1"] = "RSA_SHA1";
    /** RSA-SHA256 */
    SamlSignatureAlgorithm["RsaSha256"] = "RSA_SHA256";
    /** RSA-SHA384 */
    SamlSignatureAlgorithm["RsaSha384"] = "RSA_SHA384";
    /** RSA-SHA512 */
    SamlSignatureAlgorithm["RsaSha512"] = "RSA_SHA512";
})(SamlSignatureAlgorithm = exports.SamlSignatureAlgorithm || (exports.SamlSignatureAlgorithm = {}));
/** Properties by which saved reply connections can be ordered. */
var SavedReplyOrderField;
(function (SavedReplyOrderField) {
    /** Order saved reply by when they were updated. */
    SavedReplyOrderField["UpdatedAt"] = "UPDATED_AT";
})(SavedReplyOrderField = exports.SavedReplyOrderField || (exports.SavedReplyOrderField = {}));
/** Represents the individual results of a search. */
var SearchType;
(function (SearchType) {
    /** Returns results matching issues in repositories. */
    SearchType["Issue"] = "ISSUE";
    /** Returns results matching repositories. */
    SearchType["Repository"] = "REPOSITORY";
    /** Returns results matching users and organizations on GitHub. */
    SearchType["User"] = "USER";
})(SearchType = exports.SearchType || (exports.SearchType = {}));
/** The possible ecosystems of a security vulnerability's package. */
var SecurityAdvisoryEcosystem;
(function (SecurityAdvisoryEcosystem) {
    /** Ruby gems hosted at RubyGems.org */
    SecurityAdvisoryEcosystem["Rubygems"] = "RUBYGEMS";
    /** JavaScript packages hosted at npmjs.com */
    SecurityAdvisoryEcosystem["Npm"] = "NPM";
    /** Python packages hosted at PyPI.org */
    SecurityAdvisoryEcosystem["Pip"] = "PIP";
    /** Java artifacts hosted at the Maven central repository */
    SecurityAdvisoryEcosystem["Maven"] = "MAVEN";
    /** .NET packages hosted at the NuGet Gallery */
    SecurityAdvisoryEcosystem["Nuget"] = "NUGET";
    /** PHP packages hosted at packagist.org */
    SecurityAdvisoryEcosystem["Composer"] = "COMPOSER";
})(SecurityAdvisoryEcosystem = exports.SecurityAdvisoryEcosystem || (exports.SecurityAdvisoryEcosystem = {}));
/** Identifier formats available for advisories. */
var SecurityAdvisoryIdentifierType;
(function (SecurityAdvisoryIdentifierType) {
    /** Common Vulnerabilities and Exposures Identifier. */
    SecurityAdvisoryIdentifierType["Cve"] = "CVE";
    /** GitHub Security Advisory ID. */
    SecurityAdvisoryIdentifierType["Ghsa"] = "GHSA";
})(SecurityAdvisoryIdentifierType = exports.SecurityAdvisoryIdentifierType || (exports.SecurityAdvisoryIdentifierType = {}));
/** Properties by which security advisory connections can be ordered. */
var SecurityAdvisoryOrderField;
(function (SecurityAdvisoryOrderField) {
    /** Order advisories by publication time */
    SecurityAdvisoryOrderField["PublishedAt"] = "PUBLISHED_AT";
    /** Order advisories by update time */
    SecurityAdvisoryOrderField["UpdatedAt"] = "UPDATED_AT";
})(SecurityAdvisoryOrderField = exports.SecurityAdvisoryOrderField || (exports.SecurityAdvisoryOrderField = {}));
/** Severity of the vulnerability. */
var SecurityAdvisorySeverity;
(function (SecurityAdvisorySeverity) {
    /** Low. */
    SecurityAdvisorySeverity["Low"] = "LOW";
    /** Moderate. */
    SecurityAdvisorySeverity["Moderate"] = "MODERATE";
    /** High. */
    SecurityAdvisorySeverity["High"] = "HIGH";
    /** Critical. */
    SecurityAdvisorySeverity["Critical"] = "CRITICAL";
})(SecurityAdvisorySeverity = exports.SecurityAdvisorySeverity || (exports.SecurityAdvisorySeverity = {}));
/** Properties by which security vulnerability connections can be ordered. */
var SecurityVulnerabilityOrderField;
(function (SecurityVulnerabilityOrderField) {
    /** Order vulnerability by update time */
    SecurityVulnerabilityOrderField["UpdatedAt"] = "UPDATED_AT";
})(SecurityVulnerabilityOrderField = exports.SecurityVulnerabilityOrderField || (exports.SecurityVulnerabilityOrderField = {}));
/** Properties by which sponsorable connections can be ordered. */
var SponsorableOrderField;
(function (SponsorableOrderField) {
    /** Order sponsorable entities by login (username). */
    SponsorableOrderField["Login"] = "LOGIN";
})(SponsorableOrderField = exports.SponsorableOrderField || (exports.SponsorableOrderField = {}));
/** The different kinds of goals a GitHub Sponsors member can have. */
var SponsorsGoalKind;
(function (SponsorsGoalKind) {
    /** The goal is about reaching a certain number of sponsors. */
    SponsorsGoalKind["TotalSponsorsCount"] = "TOTAL_SPONSORS_COUNT";
    /** The goal is about getting a certain dollar amount from sponsorships each month. */
    SponsorsGoalKind["MonthlySponsorshipAmount"] = "MONTHLY_SPONSORSHIP_AMOUNT";
})(SponsorsGoalKind = exports.SponsorsGoalKind || (exports.SponsorsGoalKind = {}));
/** Properties by which Sponsors tiers connections can be ordered. */
var SponsorsTierOrderField;
(function (SponsorsTierOrderField) {
    /** Order tiers by creation time. */
    SponsorsTierOrderField["CreatedAt"] = "CREATED_AT";
    /** Order tiers by their monthly price in cents */
    SponsorsTierOrderField["MonthlyPriceInCents"] = "MONTHLY_PRICE_IN_CENTS";
})(SponsorsTierOrderField = exports.SponsorsTierOrderField || (exports.SponsorsTierOrderField = {}));
/** Properties by which sponsorship connections can be ordered. */
var SponsorshipOrderField;
(function (SponsorshipOrderField) {
    /** Order sponsorship by creation time. */
    SponsorshipOrderField["CreatedAt"] = "CREATED_AT";
})(SponsorshipOrderField = exports.SponsorshipOrderField || (exports.SponsorshipOrderField = {}));
/** The privacy of a sponsorship */
var SponsorshipPrivacy;
(function (SponsorshipPrivacy) {
    /** Public */
    SponsorshipPrivacy["Public"] = "PUBLIC";
    /** Private */
    SponsorshipPrivacy["Private"] = "PRIVATE";
})(SponsorshipPrivacy = exports.SponsorshipPrivacy || (exports.SponsorshipPrivacy = {}));
/** Properties by which star connections can be ordered. */
var StarOrderField;
(function (StarOrderField) {
    /** Allows ordering a list of stars by when they were created. */
    StarOrderField["StarredAt"] = "STARRED_AT";
})(StarOrderField = exports.StarOrderField || (exports.StarOrderField = {}));
/** The possible commit status states. */
var StatusState;
(function (StatusState) {
    /** Status is expected. */
    StatusState["Expected"] = "EXPECTED";
    /** Status is errored. */
    StatusState["Error"] = "ERROR";
    /** Status is failing. */
    StatusState["Failure"] = "FAILURE";
    /** Status is pending. */
    StatusState["Pending"] = "PENDING";
    /** Status is successful. */
    StatusState["Success"] = "SUCCESS";
})(StatusState = exports.StatusState || (exports.StatusState = {}));
/** The possible states of a subscription. */
var SubscriptionState;
(function (SubscriptionState) {
    /** The User is only notified when participating or @mentioned. */
    SubscriptionState["Unsubscribed"] = "UNSUBSCRIBED";
    /** The User is notified of all conversations. */
    SubscriptionState["Subscribed"] = "SUBSCRIBED";
    /** The User is never notified. */
    SubscriptionState["Ignored"] = "IGNORED";
})(SubscriptionState = exports.SubscriptionState || (exports.SubscriptionState = {}));
/** Properties by which team discussion comment connections can be ordered. */
var TeamDiscussionCommentOrderField;
(function (TeamDiscussionCommentOrderField) {
    /** Allows sequential ordering of team discussion comments (which is equivalent to chronological ordering). */
    TeamDiscussionCommentOrderField["Number"] = "NUMBER";
})(TeamDiscussionCommentOrderField = exports.TeamDiscussionCommentOrderField || (exports.TeamDiscussionCommentOrderField = {}));
/** Properties by which team discussion connections can be ordered. */
var TeamDiscussionOrderField;
(function (TeamDiscussionOrderField) {
    /** Allows chronological ordering of team discussions. */
    TeamDiscussionOrderField["CreatedAt"] = "CREATED_AT";
})(TeamDiscussionOrderField = exports.TeamDiscussionOrderField || (exports.TeamDiscussionOrderField = {}));
/** Properties by which team member connections can be ordered. */
var TeamMemberOrderField;
(function (TeamMemberOrderField) {
    /** Order team members by login */
    TeamMemberOrderField["Login"] = "LOGIN";
    /** Order team members by creation time */
    TeamMemberOrderField["CreatedAt"] = "CREATED_AT";
})(TeamMemberOrderField = exports.TeamMemberOrderField || (exports.TeamMemberOrderField = {}));
/** The possible team member roles; either 'maintainer' or 'member'. */
var TeamMemberRole;
(function (TeamMemberRole) {
    /** A team maintainer has permission to add and remove team members. */
    TeamMemberRole["Maintainer"] = "MAINTAINER";
    /** A team member has no administrative permissions on the team. */
    TeamMemberRole["Member"] = "MEMBER";
})(TeamMemberRole = exports.TeamMemberRole || (exports.TeamMemberRole = {}));
/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
var TeamMembershipType;
(function (TeamMembershipType) {
    /** Includes only immediate members of the team. */
    TeamMembershipType["Immediate"] = "IMMEDIATE";
    /** Includes only child team members for the team. */
    TeamMembershipType["ChildTeam"] = "CHILD_TEAM";
    /** Includes immediate and child team members for the team. */
    TeamMembershipType["All"] = "ALL";
})(TeamMembershipType = exports.TeamMembershipType || (exports.TeamMembershipType = {}));
/** Properties by which team connections can be ordered. */
var TeamOrderField;
(function (TeamOrderField) {
    /** Allows ordering a list of teams by name. */
    TeamOrderField["Name"] = "NAME";
})(TeamOrderField = exports.TeamOrderField || (exports.TeamOrderField = {}));
/** The possible team privacy values. */
var TeamPrivacy;
(function (TeamPrivacy) {
    /** A secret team can only be seen by its members. */
    TeamPrivacy["Secret"] = "SECRET";
    /** A visible team can be seen and @mentioned by every member of the organization. */
    TeamPrivacy["Visible"] = "VISIBLE";
})(TeamPrivacy = exports.TeamPrivacy || (exports.TeamPrivacy = {}));
/** Properties by which team repository connections can be ordered. */
var TeamRepositoryOrderField;
(function (TeamRepositoryOrderField) {
    /** Order repositories by creation time */
    TeamRepositoryOrderField["CreatedAt"] = "CREATED_AT";
    /** Order repositories by update time */
    TeamRepositoryOrderField["UpdatedAt"] = "UPDATED_AT";
    /** Order repositories by push time */
    TeamRepositoryOrderField["PushedAt"] = "PUSHED_AT";
    /** Order repositories by name */
    TeamRepositoryOrderField["Name"] = "NAME";
    /** Order repositories by permission */
    TeamRepositoryOrderField["Permission"] = "PERMISSION";
    /** Order repositories by number of stargazers */
    TeamRepositoryOrderField["Stargazers"] = "STARGAZERS";
})(TeamRepositoryOrderField = exports.TeamRepositoryOrderField || (exports.TeamRepositoryOrderField = {}));
/** The role of a user on a team. */
var TeamRole;
(function (TeamRole) {
    /** User has admin rights on the team. */
    TeamRole["Admin"] = "ADMIN";
    /** User is a member of the team. */
    TeamRole["Member"] = "MEMBER";
})(TeamRole = exports.TeamRole || (exports.TeamRole = {}));
/** Reason that the suggested topic is declined. */
var TopicSuggestionDeclineReason;
(function (TopicSuggestionDeclineReason) {
    /** The suggested topic is not relevant to the repository. */
    TopicSuggestionDeclineReason["NotRelevant"] = "NOT_RELEVANT";
    /** The suggested topic is too specific for the repository (e.g. #ruby-on-rails-version-4-2-1). */
    TopicSuggestionDeclineReason["TooSpecific"] = "TOO_SPECIFIC";
    /** The viewer does not like the suggested topic. */
    TopicSuggestionDeclineReason["PersonalPreference"] = "PERSONAL_PREFERENCE";
    /** The suggested topic is too general for the repository. */
    TopicSuggestionDeclineReason["TooGeneral"] = "TOO_GENERAL";
})(TopicSuggestionDeclineReason = exports.TopicSuggestionDeclineReason || (exports.TopicSuggestionDeclineReason = {}));
/** The possible durations that a user can be blocked for. */
var UserBlockDuration;
(function (UserBlockDuration) {
    /** The user was blocked for 1 day */
    UserBlockDuration["OneDay"] = "ONE_DAY";
    /** The user was blocked for 3 days */
    UserBlockDuration["ThreeDays"] = "THREE_DAYS";
    /** The user was blocked for 7 days */
    UserBlockDuration["OneWeek"] = "ONE_WEEK";
    /** The user was blocked for 30 days */
    UserBlockDuration["OneMonth"] = "ONE_MONTH";
    /** The user was blocked permanently */
    UserBlockDuration["Permanent"] = "PERMANENT";
})(UserBlockDuration = exports.UserBlockDuration || (exports.UserBlockDuration = {}));
/** Properties by which user status connections can be ordered. */
var UserStatusOrderField;
(function (UserStatusOrderField) {
    /** Order user statuses by when they were updated. */
    UserStatusOrderField["UpdatedAt"] = "UPDATED_AT";
})(UserStatusOrderField = exports.UserStatusOrderField || (exports.UserStatusOrderField = {}));
/** Properties by which verifiable domain connections can be ordered. */
var VerifiableDomainOrderField;
(function (VerifiableDomainOrderField) {
    /** Order verifiable domains by the domain name. */
    VerifiableDomainOrderField["Domain"] = "DOMAIN";
    /** Order verifiable domains by their creation date. */
    VerifiableDomainOrderField["CreatedAt"] = "CREATED_AT";
})(VerifiableDomainOrderField = exports.VerifiableDomainOrderField || (exports.VerifiableDomainOrderField = {}));
exports.AddComment = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation AddComment($id: ID!, $body: String!) {\n  addComment(input: {subjectId: $id, body: $body}) {\n    clientMutationId\n  }\n}\n    "], ["\n    mutation AddComment($id: ID!, $body: String!) {\n  addComment(input: {subjectId: $id, body: $body}) {\n    clientMutationId\n  }\n}\n    "])));
exports.AddPullRequestReviewDraft = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    mutation AddPullRequestReviewDraft($pullRequestId: ID!, $commitSha: GitObjectID) {\n  addPullRequestReview(\n    input: {pullRequestId: $pullRequestId, commitOID: $commitSha}\n  ) {\n    pullRequestReview {\n      id\n    }\n  }\n}\n    "], ["\n    mutation AddPullRequestReviewDraft($pullRequestId: ID!, $commitSha: GitObjectID) {\n  addPullRequestReview(\n    input: {pullRequestId: $pullRequestId, commitOID: $commitSha}\n  ) {\n    pullRequestReview {\n      id\n    }\n  }\n}\n    "])));
exports.AddPullRequestReviewThread = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    mutation AddPullRequestReviewThread($pullRequestId: ID!, $pullRequestReviewId: ID!, $body: String!, $path: String!, $line: Int!, $startLine: Int) {\n  addPullRequestReviewThread(\n    input: {pullRequestId: $pullRequestId, pullRequestReviewId: $pullRequestReviewId, body: $body, path: $path, line: $line, startLine: $startLine}\n  ) {\n    thread {\n      id\n    }\n  }\n}\n    "], ["\n    mutation AddPullRequestReviewThread($pullRequestId: ID!, $pullRequestReviewId: ID!, $body: String!, $path: String!, $line: Int!, $startLine: Int) {\n  addPullRequestReviewThread(\n    input: {pullRequestId: $pullRequestId, pullRequestReviewId: $pullRequestReviewId, body: $body, path: $path, line: $line, startLine: $startLine}\n  ) {\n    thread {\n      id\n    }\n  }\n}\n    "])));
exports.CreateCheckRun = graphql_tag_1.default(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    mutation CreateCheckRun($repositoryId: ID!, $headSha: GitObjectID!, $name: String!, $startedAt: DateTime, $completedAt: DateTime, $conclusion: CheckConclusionState, $status: RequestableCheckStatusState, $output: CheckRunOutput) {\n  createCheckRun(\n    input: {repositoryId: $repositoryId, headSha: $headSha, name: $name, startedAt: $startedAt, completedAt: $completedAt, conclusion: $conclusion, status: $status, output: $output}\n  ) {\n    checkRun {\n      id\n    }\n  }\n}\n    "], ["\n    mutation CreateCheckRun($repositoryId: ID!, $headSha: GitObjectID!, $name: String!, $startedAt: DateTime, $completedAt: DateTime, $conclusion: CheckConclusionState, $status: RequestableCheckStatusState, $output: CheckRunOutput) {\n  createCheckRun(\n    input: {repositoryId: $repositoryId, headSha: $headSha, name: $name, startedAt: $startedAt, completedAt: $completedAt, conclusion: $conclusion, status: $status, output: $output}\n  ) {\n    checkRun {\n      id\n    }\n  }\n}\n    "])));
exports.DeleteComment = graphql_tag_1.default(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    mutation DeleteComment($id: ID!) {\n  deleteIssueComment(input: {id: $id}) {\n    clientMutationId\n  }\n}\n    "], ["\n    mutation DeleteComment($id: ID!) {\n  deleteIssueComment(input: {id: $id}) {\n    clientMutationId\n  }\n}\n    "])));
exports.DeletePullRequestReviewComment = graphql_tag_1.default(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    mutation DeletePullRequestReviewComment($pullRequestReviewCommentId: ID!) {\n  deletePullRequestReviewComment(input: {id: $pullRequestReviewCommentId}) {\n    clientMutationId\n  }\n}\n    "], ["\n    mutation DeletePullRequestReviewComment($pullRequestReviewCommentId: ID!) {\n  deletePullRequestReviewComment(input: {id: $pullRequestReviewCommentId}) {\n    clientMutationId\n  }\n}\n    "])));
exports.DeletePullRequestReview = graphql_tag_1.default(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    mutation DeletePullRequestReview($pullRequestReviewId: ID!) {\n  deletePullRequestReview(input: {pullRequestReviewId: $pullRequestReviewId}) {\n    clientMutationId\n  }\n}\n    "], ["\n    mutation DeletePullRequestReview($pullRequestReviewId: ID!) {\n  deletePullRequestReview(input: {pullRequestReviewId: $pullRequestReviewId}) {\n    clientMutationId\n  }\n}\n    "])));
exports.GetCheckRunAnnotations = graphql_tag_1.default(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    query GetCheckRunAnnotations($checkRunId: ID!, $after: String) {\n  node(id: $checkRunId) {\n    __typename\n    ... on CheckRun {\n      id\n      annotations(first: 100, after: $after) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        nodes {\n          path\n          message\n          title\n          annotationLevel\n          location {\n            start {\n              line\n              column\n            }\n            end {\n              line\n              column\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query GetCheckRunAnnotations($checkRunId: ID!, $after: String) {\n  node(id: $checkRunId) {\n    __typename\n    ... on CheckRun {\n      id\n      annotations(first: 100, after: $after) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        nodes {\n          path\n          message\n          title\n          annotationLevel\n          location {\n            start {\n              line\n              column\n            }\n            end {\n              line\n              column\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    "])));
exports.GetCommitStatusAndCheckRun = graphql_tag_1.default(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    query GetCommitStatusAndCheckRun($owner: String!, $name: String!, $commitSha: GitObjectID!, $after: String) {\n  repository(owner: $owner, name: $name) {\n    object(oid: $commitSha) {\n      ... on Commit {\n        statusCheckRollup {\n          contexts(first: 100, after: $after) {\n            pageInfo {\n              hasNextPage\n              endCursor\n            }\n            nodes {\n              __typename\n              ... on StatusContext {\n                id\n                state\n                context\n              }\n              ... on CheckRun {\n                id\n                name\n                status\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query GetCommitStatusAndCheckRun($owner: String!, $name: String!, $commitSha: GitObjectID!, $after: String) {\n  repository(owner: $owner, name: $name) {\n    object(oid: $commitSha) {\n      ... on Commit {\n        statusCheckRollup {\n          contexts(first: 100, after: $after) {\n            pageInfo {\n              hasNextPage\n              endCursor\n            }\n            nodes {\n              __typename\n              ... on StatusContext {\n                id\n                state\n                context\n              }\n              ... on CheckRun {\n                id\n                name\n                status\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    "])));
exports.GetLoginUser = graphql_tag_1.default(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    query GetLoginUser {\n  viewer {\n    login\n  }\n}\n    "], ["\n    query GetLoginUser {\n  viewer {\n    login\n  }\n}\n    "])));
exports.GetPullRequestChangedFile = graphql_tag_1.default(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    query GetPullRequestChangedFile($owner: String!, $name: String!, $pull_request: Int!, $after: String) {\n  repository(owner: $owner, name: $name) {\n    pullRequest(number: $pull_request) {\n      files(first: 100, after: $after) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        nodes {\n          path\n          additions\n          deletions\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query GetPullRequestChangedFile($owner: String!, $name: String!, $pull_request: Int!, $after: String) {\n  repository(owner: $owner, name: $name) {\n    pullRequest(number: $pull_request) {\n      files(first: 100, after: $after) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        nodes {\n          path\n          additions\n          deletions\n        }\n      }\n    }\n  }\n}\n    "])));
exports.GetPullRequestComment = graphql_tag_1.default(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    query GetPullRequestComment($owner: String!, $name: String!, $pull_request: Int!, $after: String) {\n  repository(owner: $owner, name: $name) {\n    pullRequest(number: $pull_request) {\n      id\n      comments(first: 100, after: $after) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        nodes {\n          author {\n            login\n          }\n          id\n          body\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query GetPullRequestComment($owner: String!, $name: String!, $pull_request: Int!, $after: String) {\n  repository(owner: $owner, name: $name) {\n    pullRequest(number: $pull_request) {\n      id\n      comments(first: 100, after: $after) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        nodes {\n          author {\n            login\n          }\n          id\n          body\n        }\n      }\n    }\n  }\n}\n    "])));
exports.GetPullRequestReviewThreads = graphql_tag_1.default(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    query GetPullRequestReviewThreads($owner: String!, $name: String!, $number: Int!, $after: String) {\n  repository(owner: $owner, name: $name) {\n    pullRequest(number: $number) {\n      reviewThreads(first: 100, after: $after) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        nodes {\n          id\n          path\n          line\n          startLine\n          isOutdated\n          isResolved\n          comments(first: 1) {\n            pageInfo {\n              hasNextPage\n            }\n            nodes {\n              id\n              body\n              author {\n                login\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query GetPullRequestReviewThreads($owner: String!, $name: String!, $number: Int!, $after: String) {\n  repository(owner: $owner, name: $name) {\n    pullRequest(number: $number) {\n      reviewThreads(first: 100, after: $after) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        nodes {\n          id\n          path\n          line\n          startLine\n          isOutdated\n          isResolved\n          comments(first: 1) {\n            pageInfo {\n              hasNextPage\n            }\n            nodes {\n              id\n              body\n              author {\n                login\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    "])));
exports.GetPullRequest = graphql_tag_1.default(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    query GetPullRequest($owner: String!, $name: String!, $number: Int!) {\n  repository(owner: $owner, name: $name) {\n    pullRequest(number: $number) {\n      id\n    }\n  }\n}\n    "], ["\n    query GetPullRequest($owner: String!, $name: String!, $number: Int!) {\n  repository(owner: $owner, name: $name) {\n    pullRequest(number: $number) {\n      id\n    }\n  }\n}\n    "])));
exports.GetRepositoryId = graphql_tag_1.default(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    query GetRepositoryId($owner: String!, $name: String!) {\n  repository(owner: $owner, name: $name) {\n    id\n  }\n}\n    "], ["\n    query GetRepositoryId($owner: String!, $name: String!) {\n  repository(owner: $owner, name: $name) {\n    id\n  }\n}\n    "])));
exports.ResolvePullRequestReviewThread = graphql_tag_1.default(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    mutation ResolvePullRequestReviewThread($pullRequestThreadId: ID!) {\n  resolveReviewThread(input: {threadId: $pullRequestThreadId}) {\n    clientMutationId\n  }\n}\n    "], ["\n    mutation ResolvePullRequestReviewThread($pullRequestThreadId: ID!) {\n  resolveReviewThread(input: {threadId: $pullRequestThreadId}) {\n    clientMutationId\n  }\n}\n    "])));
exports.SubmitPullRequestReview = graphql_tag_1.default(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    mutation SubmitPullRequestReview($pullRequestId: ID!, $pullRequestReviewId: ID!) {\n  submitPullRequestReview(\n    input: {pullRequestId: $pullRequestId, pullRequestReviewId: $pullRequestReviewId, event: COMMENT}\n  ) {\n    pullRequestReview {\n      id\n    }\n  }\n}\n    "], ["\n    mutation SubmitPullRequestReview($pullRequestId: ID!, $pullRequestReviewId: ID!) {\n  submitPullRequestReview(\n    input: {pullRequestId: $pullRequestId, pullRequestReviewId: $pullRequestReviewId, event: COMMENT}\n  ) {\n    pullRequestReview {\n      id\n    }\n  }\n}\n    "])));
exports.UpdateCheckRun = graphql_tag_1.default(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    mutation UpdateCheckRun($repositoryId: ID!, $checkRunId: ID!, $completedAt: DateTime, $conclusion: CheckConclusionState, $status: RequestableCheckStatusState, $output: CheckRunOutput) {\n  updateCheckRun(\n    input: {repositoryId: $repositoryId, checkRunId: $checkRunId, completedAt: $completedAt, conclusion: $conclusion, status: $status, output: $output}\n  ) {\n    clientMutationId\n  }\n}\n    "], ["\n    mutation UpdateCheckRun($repositoryId: ID!, $checkRunId: ID!, $completedAt: DateTime, $conclusion: CheckConclusionState, $status: RequestableCheckStatusState, $output: CheckRunOutput) {\n  updateCheckRun(\n    input: {repositoryId: $repositoryId, checkRunId: $checkRunId, completedAt: $completedAt, conclusion: $conclusion, status: $status, output: $output}\n  ) {\n    clientMutationId\n  }\n}\n    "])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;


/***/ })

};
;