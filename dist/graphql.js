"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 1973:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GistPrivacy = exports.GistOrderField = exports.FundingPlatform = exports.FileViewedState = exports.EnvironmentOrderField = exports.EnterpriseUserDeployment = exports.EnterpriseUserAccountMembershipRole = exports.EnterpriseServerUserAccountsUploadSyncState = exports.EnterpriseServerUserAccountsUploadOrderField = exports.EnterpriseServerUserAccountOrderField = exports.EnterpriseServerUserAccountEmailOrderField = exports.EnterpriseServerInstallationOrderField = exports.EnterpriseOrderField = exports.EnterpriseMembershipType = exports.EnterpriseMembersCanMakePurchasesSettingValue = exports.EnterpriseMembersCanCreateRepositoriesSettingValue = exports.EnterpriseMemberOrderField = exports.EnterpriseEnabledSettingValue = exports.EnterpriseEnabledDisabledSettingValue = exports.EnterpriseDefaultRepositoryPermissionSettingValue = exports.EnterpriseAllowPrivateRepositoryForkingPolicyValue = exports.EnterpriseAdministratorRole = exports.EnterpriseAdministratorInvitationOrderField = exports.DismissReason = exports.DiscussionStateReason = exports.DiscussionState = exports.DiscussionPollOptionOrderField = exports.DiscussionOrderField = exports.DiscussionCloseReason = exports.DiffSide = exports.DeploymentStatusState = exports.DeploymentState = exports.DeploymentReviewState = exports.DeploymentProtectionRuleType = exports.DeploymentOrderField = exports.DependencyGraphEcosystem = exports.DefaultRepositoryPermissionField = exports.ContributionLevel = exports.ComparisonStatus = exports.CommitContributionOrderField = exports.CommentCannotUpdateReason = exports.CommentAuthorAssociation = exports.CollaboratorAffiliation = exports.CheckStatusState = exports.CheckRunType = exports.CheckRunState = exports.CheckConclusionState = exports.CheckAnnotationLevel = exports.AuditLogOrderField = exports.ActorType = void 0;
exports.PackageType = exports.PackageOrderField = exports.PackageFileOrderField = exports.OrganizationOrderField = exports.OrganizationMigrationState = exports.OrganizationMembersCanCreateRepositoriesSettingValue = exports.OrganizationMemberRole = exports.OrganizationInvitationType = exports.OrganizationInvitationSource = exports.OrganizationInvitationRole = exports.OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = exports.OrgUpdateMemberAuditEntryPermission = exports.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = exports.OrgRemoveOutsideCollaboratorAuditEntryReason = exports.OrgRemoveOutsideCollaboratorAuditEntryMembershipType = exports.OrgRemoveMemberAuditEntryReason = exports.OrgRemoveMemberAuditEntryMembershipType = exports.OrgRemoveBillingManagerAuditEntryReason = exports.OrgEnterpriseOwnerOrderField = exports.OrgCreateAuditEntryBillingPlan = exports.OrgAddMemberAuditEntryPermission = exports.OrderDirection = exports.OperationType = exports.OauthApplicationCreateAuditEntryState = exports.OidcProviderType = exports.NotificationRestrictionSettingValue = exports.MilestoneState = exports.MilestoneOrderField = exports.MigrationState = exports.MigrationSourceType = exports.MergeableState = exports.MergeQueueMergingStrategy = exports.MergeQueueEntryState = exports.MergeCommitTitle = exports.MergeCommitMessage = exports.MannequinOrderField = exports.LockReason = exports.LanguageOrderField = exports.LabelOrderField = exports.IssueTimelineItemsItemType = exports.IssueStateReason = exports.IssueState = exports.IssueOrderField = exports.IssueCommentOrderField = exports.IssueClosedStateReason = exports.IpAllowListForInstalledAppsEnabledSettingValue = exports.IpAllowListEntryOrderField = exports.IpAllowListEnabledSettingValue = exports.IdentityProviderConfigurationState = exports.GitSignatureState = void 0;
exports.RepositoryInteractionLimit = exports.RepositoryContributionType = exports.RepositoryAffiliation = exports.ReportedContentClassifiers = exports.RepoRemoveMemberAuditEntryVisibility = exports.RepoDestroyAuditEntryVisibility = exports.RepoCreateAuditEntryVisibility = exports.RepoChangeMergeSettingAuditEntryMergeType = exports.RepoArchivedAuditEntryVisibility = exports.RepoAddMemberAuditEntryVisibility = exports.RepoAccessAuditEntryVisibility = exports.ReleaseOrderField = exports.RefOrderField = exports.ReactionOrderField = exports.ReactionContent = exports.PullRequestUpdateState = exports.PullRequestTimelineItemsItemType = exports.PullRequestState = exports.PullRequestReviewThreadSubjectType = exports.PullRequestReviewState = exports.PullRequestReviewEvent = exports.PullRequestReviewDecision = exports.PullRequestReviewCommentState = exports.PullRequestOrderField = exports.PullRequestMergeMethod = exports.PullRequestBranchUpdateMethod = exports.ProjectV2WorkflowsOrderField = exports.ProjectV2ViewOrderField = exports.ProjectV2ViewLayout = exports.ProjectV2State = exports.ProjectV2SingleSelectFieldOptionColor = exports.ProjectV2Roles = exports.ProjectV2OrderField = exports.ProjectV2ItemType = exports.ProjectV2ItemOrderField = exports.ProjectV2ItemFieldValueOrderField = exports.ProjectV2FieldType = exports.ProjectV2FieldOrderField = exports.ProjectV2CustomFieldType = exports.ProjectTemplate = exports.ProjectState = exports.ProjectOrderField = exports.ProjectColumnPurpose = exports.ProjectCardState = exports.ProjectCardArchivedState = exports.PinnedDiscussionPattern = exports.PinnedDiscussionGradient = exports.PinnableItemType = exports.PatchStatus = exports.PackageVersionOrderField = void 0;
exports.TeamMemberRole = exports.TeamMemberOrderField = exports.TeamDiscussionOrderField = exports.TeamDiscussionCommentOrderField = exports.SubscriptionState = exports.StatusState = exports.StarOrderField = exports.SquashMergeCommitTitle = exports.SquashMergeCommitMessage = exports.SponsorshipPrivacy = exports.SponsorshipOrderField = exports.SponsorshipNewsletterOrderField = exports.SponsorsTierOrderField = exports.SponsorsListingFeaturedItemFeatureableType = exports.SponsorsGoalKind = exports.SponsorsCountryOrRegionCode = exports.SponsorsActivityPeriod = exports.SponsorsActivityOrderField = exports.SponsorsActivityAction = exports.SponsorableOrderField = exports.SponsorOrderField = exports.SocialAccountProvider = exports.SecurityVulnerabilityOrderField = exports.SecurityAdvisorySeverity = exports.SecurityAdvisoryOrderField = exports.SecurityAdvisoryIdentifierType = exports.SecurityAdvisoryEcosystem = exports.SecurityAdvisoryClassification = exports.SearchType = exports.SavedReplyOrderField = exports.SamlSignatureAlgorithm = exports.SamlDigestAlgorithm = exports.RuleEnforcement = exports.RoleInOrganization = exports.RequestableCheckStatusState = exports.RepositoryVulnerabilityAlertState = exports.RepositoryVulnerabilityAlertDependencyScope = exports.RepositoryVisibility = exports.RepositoryRulesetTarget = exports.RepositoryRulesetBypassActorBypassMode = exports.RepositoryRuleType = exports.RepositoryPrivacy = exports.RepositoryPermission = exports.RepositoryOrderField = exports.RepositoryMigrationOrderField = exports.RepositoryMigrationOrderDirection = exports.RepositoryLockReason = exports.RepositoryInvitationOrderField = exports.RepositoryInteractionLimitOrigin = exports.RepositoryInteractionLimitExpiry = void 0;
exports.UpdateCheckRun = exports.SubmitPullRequestReview = exports.ResolvePullRequestReviewThread = exports.GetRepositoryId = exports.GetPullRequest = exports.GetPullRequestReviewThreads = exports.GetPullRequestComment = exports.GetPullRequestChangedFile = exports.GetLoginUser = exports.GetCommitStatusAndCheckRun = exports.GetCheckRunAnnotations = exports.DeletePullRequestReview = exports.DeletePullRequestReviewComment = exports.DeleteComment = exports.CreateCheckRun = exports.AddPullRequestReviewThread = exports.AddPullRequestReviewDraft = exports.AddComment = exports.WorkflowState = exports.WorkflowRunOrderField = exports.VerifiableDomainOrderField = exports.UserStatusOrderField = exports.UserBlockDuration = exports.TrackedIssueStates = exports.TopicSuggestionDeclineReason = exports.ThreadSubscriptionState = exports.ThreadSubscriptionFormAction = exports.TeamRole = exports.TeamRepositoryOrderField = exports.TeamPrivacy = exports.TeamOrderField = exports.TeamNotificationSetting = exports.TeamMembershipType = void 0;
const graphql_tag_1 = __importDefault(__webpack_require__(5584));
/** The actor's type. */
var ActorType;
(function (ActorType) {
    /** Indicates a team actor. */
    ActorType["Team"] = "TEAM";
    /** Indicates a user actor. */
    ActorType["User"] = "USER";
})(ActorType || (exports.ActorType = ActorType = {}));
/** Properties by which Audit Log connections can be ordered. */
var AuditLogOrderField;
(function (AuditLogOrderField) {
    /** Order audit log entries by timestamp */
    AuditLogOrderField["CreatedAt"] = "CREATED_AT";
})(AuditLogOrderField || (exports.AuditLogOrderField = AuditLogOrderField = {}));
/** Represents an annotation's information level. */
var CheckAnnotationLevel;
(function (CheckAnnotationLevel) {
    /** An annotation indicating an inescapable error. */
    CheckAnnotationLevel["Failure"] = "FAILURE";
    /** An annotation indicating some information. */
    CheckAnnotationLevel["Notice"] = "NOTICE";
    /** An annotation indicating an ignorable error. */
    CheckAnnotationLevel["Warning"] = "WARNING";
})(CheckAnnotationLevel || (exports.CheckAnnotationLevel = CheckAnnotationLevel = {}));
/** The possible states for a check suite or run conclusion. */
var CheckConclusionState;
(function (CheckConclusionState) {
    /** The check suite or run requires action. */
    CheckConclusionState["ActionRequired"] = "ACTION_REQUIRED";
    /** The check suite or run has been cancelled. */
    CheckConclusionState["Cancelled"] = "CANCELLED";
    /** The check suite or run has failed. */
    CheckConclusionState["Failure"] = "FAILURE";
    /** The check suite or run was neutral. */
    CheckConclusionState["Neutral"] = "NEUTRAL";
    /** The check suite or run was skipped. */
    CheckConclusionState["Skipped"] = "SKIPPED";
    /** The check suite or run was marked stale by GitHub. Only GitHub can use this conclusion. */
    CheckConclusionState["Stale"] = "STALE";
    /** The check suite or run has failed at startup. */
    CheckConclusionState["StartupFailure"] = "STARTUP_FAILURE";
    /** The check suite or run has succeeded. */
    CheckConclusionState["Success"] = "SUCCESS";
    /** The check suite or run has timed out. */
    CheckConclusionState["TimedOut"] = "TIMED_OUT";
})(CheckConclusionState || (exports.CheckConclusionState = CheckConclusionState = {}));
/** The possible states of a check run in a status rollup. */
var CheckRunState;
(function (CheckRunState) {
    /** The check run requires action. */
    CheckRunState["ActionRequired"] = "ACTION_REQUIRED";
    /** The check run has been cancelled. */
    CheckRunState["Cancelled"] = "CANCELLED";
    /** The check run has been completed. */
    CheckRunState["Completed"] = "COMPLETED";
    /** The check run has failed. */
    CheckRunState["Failure"] = "FAILURE";
    /** The check run is in progress. */
    CheckRunState["InProgress"] = "IN_PROGRESS";
    /** The check run was neutral. */
    CheckRunState["Neutral"] = "NEUTRAL";
    /** The check run is in pending state. */
    CheckRunState["Pending"] = "PENDING";
    /** The check run has been queued. */
    CheckRunState["Queued"] = "QUEUED";
    /** The check run was skipped. */
    CheckRunState["Skipped"] = "SKIPPED";
    /** The check run was marked stale by GitHub. Only GitHub can use this conclusion. */
    CheckRunState["Stale"] = "STALE";
    /** The check run has failed at startup. */
    CheckRunState["StartupFailure"] = "STARTUP_FAILURE";
    /** The check run has succeeded. */
    CheckRunState["Success"] = "SUCCESS";
    /** The check run has timed out. */
    CheckRunState["TimedOut"] = "TIMED_OUT";
    /** The check run is in waiting state. */
    CheckRunState["Waiting"] = "WAITING";
})(CheckRunState || (exports.CheckRunState = CheckRunState = {}));
/** The possible types of check runs. */
var CheckRunType;
(function (CheckRunType) {
    /** Every check run available. */
    CheckRunType["All"] = "ALL";
    /** The latest check run. */
    CheckRunType["Latest"] = "LATEST";
})(CheckRunType || (exports.CheckRunType = CheckRunType = {}));
/** The possible states for a check suite or run status. */
var CheckStatusState;
(function (CheckStatusState) {
    /** The check suite or run has been completed. */
    CheckStatusState["Completed"] = "COMPLETED";
    /** The check suite or run is in progress. */
    CheckStatusState["InProgress"] = "IN_PROGRESS";
    /** The check suite or run is in pending state. */
    CheckStatusState["Pending"] = "PENDING";
    /** The check suite or run has been queued. */
    CheckStatusState["Queued"] = "QUEUED";
    /** The check suite or run has been requested. */
    CheckStatusState["Requested"] = "REQUESTED";
    /** The check suite or run is in waiting state. */
    CheckStatusState["Waiting"] = "WAITING";
})(CheckStatusState || (exports.CheckStatusState = CheckStatusState = {}));
/** Collaborators affiliation level with a subject. */
var CollaboratorAffiliation;
(function (CollaboratorAffiliation) {
    /** All collaborators the authenticated user can see. */
    CollaboratorAffiliation["All"] = "ALL";
    /** All collaborators with permissions to an organization-owned subject, regardless of organization membership status. */
    CollaboratorAffiliation["Direct"] = "DIRECT";
    /** All outside collaborators of an organization-owned subject. */
    CollaboratorAffiliation["Outside"] = "OUTSIDE";
})(CollaboratorAffiliation || (exports.CollaboratorAffiliation = CollaboratorAffiliation = {}));
/** A comment author association with repository. */
var CommentAuthorAssociation;
(function (CommentAuthorAssociation) {
    /** Author has been invited to collaborate on the repository. */
    CommentAuthorAssociation["Collaborator"] = "COLLABORATOR";
    /** Author has previously committed to the repository. */
    CommentAuthorAssociation["Contributor"] = "CONTRIBUTOR";
    /** Author has not previously committed to GitHub. */
    CommentAuthorAssociation["FirstTimer"] = "FIRST_TIMER";
    /** Author has not previously committed to the repository. */
    CommentAuthorAssociation["FirstTimeContributor"] = "FIRST_TIME_CONTRIBUTOR";
    /** Author is a placeholder for an unclaimed user. */
    CommentAuthorAssociation["Mannequin"] = "MANNEQUIN";
    /** Author is a member of the organization that owns the repository. */
    CommentAuthorAssociation["Member"] = "MEMBER";
    /** Author has no association with the repository. */
    CommentAuthorAssociation["None"] = "NONE";
    /** Author is the owner of the repository. */
    CommentAuthorAssociation["Owner"] = "OWNER";
})(CommentAuthorAssociation || (exports.CommentAuthorAssociation = CommentAuthorAssociation = {}));
/** The possible errors that will prevent a user from updating a comment. */
var CommentCannotUpdateReason;
(function (CommentCannotUpdateReason) {
    /** Unable to create comment because repository is archived. */
    CommentCannotUpdateReason["Archived"] = "ARCHIVED";
    /** You cannot update this comment */
    CommentCannotUpdateReason["Denied"] = "DENIED";
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
})(CommentCannotUpdateReason || (exports.CommentCannotUpdateReason = CommentCannotUpdateReason = {}));
/** Properties by which commit contribution connections can be ordered. */
var CommitContributionOrderField;
(function (CommitContributionOrderField) {
    /** Order commit contributions by how many commits they represent. */
    CommitContributionOrderField["CommitCount"] = "COMMIT_COUNT";
    /** Order commit contributions by when they were made. */
    CommitContributionOrderField["OccurredAt"] = "OCCURRED_AT";
})(CommitContributionOrderField || (exports.CommitContributionOrderField = CommitContributionOrderField = {}));
/** The status of a git comparison between two refs. */
var ComparisonStatus;
(function (ComparisonStatus) {
    /** The head ref is ahead of the base ref. */
    ComparisonStatus["Ahead"] = "AHEAD";
    /** The head ref is behind the base ref. */
    ComparisonStatus["Behind"] = "BEHIND";
    /** The head ref is both ahead and behind of the base ref, indicating git history has diverged. */
    ComparisonStatus["Diverged"] = "DIVERGED";
    /** The head ref and base ref are identical. */
    ComparisonStatus["Identical"] = "IDENTICAL";
})(ComparisonStatus || (exports.ComparisonStatus = ComparisonStatus = {}));
/** Varying levels of contributions from none to many. */
var ContributionLevel;
(function (ContributionLevel) {
    /** Lowest 25% of days of contributions. */
    ContributionLevel["FirstQuartile"] = "FIRST_QUARTILE";
    /** Highest 25% of days of contributions. More contributions than the third quartile. */
    ContributionLevel["FourthQuartile"] = "FOURTH_QUARTILE";
    /** No contributions occurred. */
    ContributionLevel["None"] = "NONE";
    /** Second lowest 25% of days of contributions. More contributions than the first quartile. */
    ContributionLevel["SecondQuartile"] = "SECOND_QUARTILE";
    /** Second highest 25% of days of contributions. More contributions than second quartile, less than the fourth quartile. */
    ContributionLevel["ThirdQuartile"] = "THIRD_QUARTILE";
})(ContributionLevel || (exports.ContributionLevel = ContributionLevel = {}));
/** The possible base permissions for repositories. */
var DefaultRepositoryPermissionField;
(function (DefaultRepositoryPermissionField) {
    /** Can read, write, and administrate repos by default */
    DefaultRepositoryPermissionField["Admin"] = "ADMIN";
    /** No access */
    DefaultRepositoryPermissionField["None"] = "NONE";
    /** Can read repos by default */
    DefaultRepositoryPermissionField["Read"] = "READ";
    /** Can read and write repos by default */
    DefaultRepositoryPermissionField["Write"] = "WRITE";
})(DefaultRepositoryPermissionField || (exports.DefaultRepositoryPermissionField = DefaultRepositoryPermissionField = {}));
/** The possible ecosystems of a dependency graph package. */
var DependencyGraphEcosystem;
(function (DependencyGraphEcosystem) {
    /** GitHub Actions */
    DependencyGraphEcosystem["Actions"] = "ACTIONS";
    /** PHP packages hosted at packagist.org */
    DependencyGraphEcosystem["Composer"] = "COMPOSER";
    /** Go modules */
    DependencyGraphEcosystem["Go"] = "GO";
    /** Java artifacts hosted at the Maven central repository */
    DependencyGraphEcosystem["Maven"] = "MAVEN";
    /** JavaScript packages hosted at npmjs.com */
    DependencyGraphEcosystem["Npm"] = "NPM";
    /** .NET packages hosted at the NuGet Gallery */
    DependencyGraphEcosystem["Nuget"] = "NUGET";
    /** Python packages hosted at PyPI.org */
    DependencyGraphEcosystem["Pip"] = "PIP";
    /** Dart packages hosted at pub.dev */
    DependencyGraphEcosystem["Pub"] = "PUB";
    /** Ruby gems hosted at RubyGems.org */
    DependencyGraphEcosystem["Rubygems"] = "RUBYGEMS";
    /** Rust crates */
    DependencyGraphEcosystem["Rust"] = "RUST";
    /** Swift packages */
    DependencyGraphEcosystem["Swift"] = "SWIFT";
})(DependencyGraphEcosystem || (exports.DependencyGraphEcosystem = DependencyGraphEcosystem = {}));
/** Properties by which deployment connections can be ordered. */
var DeploymentOrderField;
(function (DeploymentOrderField) {
    /** Order collection by creation time */
    DeploymentOrderField["CreatedAt"] = "CREATED_AT";
})(DeploymentOrderField || (exports.DeploymentOrderField = DeploymentOrderField = {}));
/** The possible protection rule types. */
var DeploymentProtectionRuleType;
(function (DeploymentProtectionRuleType) {
    /** Required reviewers */
    DeploymentProtectionRuleType["RequiredReviewers"] = "REQUIRED_REVIEWERS";
    /** Wait timer */
    DeploymentProtectionRuleType["WaitTimer"] = "WAIT_TIMER";
})(DeploymentProtectionRuleType || (exports.DeploymentProtectionRuleType = DeploymentProtectionRuleType = {}));
/** The possible states for a deployment review. */
var DeploymentReviewState;
(function (DeploymentReviewState) {
    /** The deployment was approved. */
    DeploymentReviewState["Approved"] = "APPROVED";
    /** The deployment was rejected. */
    DeploymentReviewState["Rejected"] = "REJECTED";
})(DeploymentReviewState || (exports.DeploymentReviewState = DeploymentReviewState = {}));
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
    /** The deployment is in progress. */
    DeploymentState["InProgress"] = "IN_PROGRESS";
    /** The deployment is pending. */
    DeploymentState["Pending"] = "PENDING";
    /** The deployment has queued */
    DeploymentState["Queued"] = "QUEUED";
    /** The deployment was successful. */
    DeploymentState["Success"] = "SUCCESS";
    /** The deployment is waiting. */
    DeploymentState["Waiting"] = "WAITING";
})(DeploymentState || (exports.DeploymentState = DeploymentState = {}));
/** The possible states for a deployment status. */
var DeploymentStatusState;
(function (DeploymentStatusState) {
    /** The deployment experienced an error. */
    DeploymentStatusState["Error"] = "ERROR";
    /** The deployment has failed. */
    DeploymentStatusState["Failure"] = "FAILURE";
    /** The deployment is inactive. */
    DeploymentStatusState["Inactive"] = "INACTIVE";
    /** The deployment is in progress. */
    DeploymentStatusState["InProgress"] = "IN_PROGRESS";
    /** The deployment is pending. */
    DeploymentStatusState["Pending"] = "PENDING";
    /** The deployment is queued */
    DeploymentStatusState["Queued"] = "QUEUED";
    /** The deployment was successful. */
    DeploymentStatusState["Success"] = "SUCCESS";
    /** The deployment is waiting. */
    DeploymentStatusState["Waiting"] = "WAITING";
})(DeploymentStatusState || (exports.DeploymentStatusState = DeploymentStatusState = {}));
/** The possible sides of a diff. */
var DiffSide;
(function (DiffSide) {
    /** The left side of the diff. */
    DiffSide["Left"] = "LEFT";
    /** The right side of the diff. */
    DiffSide["Right"] = "RIGHT";
})(DiffSide || (exports.DiffSide = DiffSide = {}));
/** The possible reasons for closing a discussion. */
var DiscussionCloseReason;
(function (DiscussionCloseReason) {
    /** The discussion is a duplicate of another */
    DiscussionCloseReason["Duplicate"] = "DUPLICATE";
    /** The discussion is no longer relevant */
    DiscussionCloseReason["Outdated"] = "OUTDATED";
    /** The discussion has been resolved */
    DiscussionCloseReason["Resolved"] = "RESOLVED";
})(DiscussionCloseReason || (exports.DiscussionCloseReason = DiscussionCloseReason = {}));
/** Properties by which discussion connections can be ordered. */
var DiscussionOrderField;
(function (DiscussionOrderField) {
    /** Order discussions by creation time. */
    DiscussionOrderField["CreatedAt"] = "CREATED_AT";
    /** Order discussions by most recent modification time. */
    DiscussionOrderField["UpdatedAt"] = "UPDATED_AT";
})(DiscussionOrderField || (exports.DiscussionOrderField = DiscussionOrderField = {}));
/** Properties by which discussion poll option connections can be ordered. */
var DiscussionPollOptionOrderField;
(function (DiscussionPollOptionOrderField) {
    /** Order poll options by the order that the poll author specified when creating the poll. */
    DiscussionPollOptionOrderField["AuthoredOrder"] = "AUTHORED_ORDER";
    /** Order poll options by the number of votes it has. */
    DiscussionPollOptionOrderField["VoteCount"] = "VOTE_COUNT";
})(DiscussionPollOptionOrderField || (exports.DiscussionPollOptionOrderField = DiscussionPollOptionOrderField = {}));
/** The possible states of a discussion. */
var DiscussionState;
(function (DiscussionState) {
    /** A discussion that has been closed */
    DiscussionState["Closed"] = "CLOSED";
    /** A discussion that is open */
    DiscussionState["Open"] = "OPEN";
})(DiscussionState || (exports.DiscussionState = DiscussionState = {}));
/** The possible state reasons of a discussion. */
var DiscussionStateReason;
(function (DiscussionStateReason) {
    /** The discussion is a duplicate of another */
    DiscussionStateReason["Duplicate"] = "DUPLICATE";
    /** The discussion is no longer relevant */
    DiscussionStateReason["Outdated"] = "OUTDATED";
    /** The discussion was reopened */
    DiscussionStateReason["Reopened"] = "REOPENED";
    /** The discussion has been resolved */
    DiscussionStateReason["Resolved"] = "RESOLVED";
})(DiscussionStateReason || (exports.DiscussionStateReason = DiscussionStateReason = {}));
/** The possible reasons that a Dependabot alert was dismissed. */
var DismissReason;
(function (DismissReason) {
    /** A fix has already been started */
    DismissReason["FixStarted"] = "FIX_STARTED";
    /** This alert is inaccurate or incorrect */
    DismissReason["Inaccurate"] = "INACCURATE";
    /** Vulnerable code is not actually used */
    DismissReason["NotUsed"] = "NOT_USED";
    /** No bandwidth to fix this */
    DismissReason["NoBandwidth"] = "NO_BANDWIDTH";
    /** Risk is tolerable to this project */
    DismissReason["TolerableRisk"] = "TOLERABLE_RISK";
})(DismissReason || (exports.DismissReason = DismissReason = {}));
/** Properties by which enterprise administrator invitation connections can be ordered. */
var EnterpriseAdministratorInvitationOrderField;
(function (EnterpriseAdministratorInvitationOrderField) {
    /** Order enterprise administrator member invitations by creation time */
    EnterpriseAdministratorInvitationOrderField["CreatedAt"] = "CREATED_AT";
})(EnterpriseAdministratorInvitationOrderField || (exports.EnterpriseAdministratorInvitationOrderField = EnterpriseAdministratorInvitationOrderField = {}));
/** The possible administrator roles in an enterprise account. */
var EnterpriseAdministratorRole;
(function (EnterpriseAdministratorRole) {
    /** Represents a billing manager of the enterprise account. */
    EnterpriseAdministratorRole["BillingManager"] = "BILLING_MANAGER";
    /** Represents an owner of the enterprise account. */
    EnterpriseAdministratorRole["Owner"] = "OWNER";
})(EnterpriseAdministratorRole || (exports.EnterpriseAdministratorRole = EnterpriseAdministratorRole = {}));
/** The possible values for the enterprise allow private repository forking policy value. */
var EnterpriseAllowPrivateRepositoryForkingPolicyValue;
(function (EnterpriseAllowPrivateRepositoryForkingPolicyValue) {
    /** Members can fork a repository to an organization within this enterprise. */
    EnterpriseAllowPrivateRepositoryForkingPolicyValue["EnterpriseOrganizations"] = "ENTERPRISE_ORGANIZATIONS";
    /** Members can fork a repository to their enterprise-managed user account or an organization inside this enterprise. */
    EnterpriseAllowPrivateRepositoryForkingPolicyValue["EnterpriseOrganizationsUserAccounts"] = "ENTERPRISE_ORGANIZATIONS_USER_ACCOUNTS";
    /** Members can fork a repository to their user account or an organization, either inside or outside of this enterprise. */
    EnterpriseAllowPrivateRepositoryForkingPolicyValue["Everywhere"] = "EVERYWHERE";
    /** Members can fork a repository only within the same organization (intra-org). */
    EnterpriseAllowPrivateRepositoryForkingPolicyValue["SameOrganization"] = "SAME_ORGANIZATION";
    /** Members can fork a repository to their user account or within the same organization. */
    EnterpriseAllowPrivateRepositoryForkingPolicyValue["SameOrganizationUserAccounts"] = "SAME_ORGANIZATION_USER_ACCOUNTS";
    /** Members can fork a repository to their user account. */
    EnterpriseAllowPrivateRepositoryForkingPolicyValue["UserAccounts"] = "USER_ACCOUNTS";
})(EnterpriseAllowPrivateRepositoryForkingPolicyValue || (exports.EnterpriseAllowPrivateRepositoryForkingPolicyValue = EnterpriseAllowPrivateRepositoryForkingPolicyValue = {}));
/** The possible values for the enterprise base repository permission setting. */
var EnterpriseDefaultRepositoryPermissionSettingValue;
(function (EnterpriseDefaultRepositoryPermissionSettingValue) {
    /** Organization members will be able to clone, pull, push, and add new collaborators to all organization repositories. */
    EnterpriseDefaultRepositoryPermissionSettingValue["Admin"] = "ADMIN";
    /** Organization members will only be able to clone and pull public repositories. */
    EnterpriseDefaultRepositoryPermissionSettingValue["None"] = "NONE";
    /** Organizations in the enterprise choose base repository permissions for their members. */
    EnterpriseDefaultRepositoryPermissionSettingValue["NoPolicy"] = "NO_POLICY";
    /** Organization members will be able to clone and pull all organization repositories. */
    EnterpriseDefaultRepositoryPermissionSettingValue["Read"] = "READ";
    /** Organization members will be able to clone, pull, and push all organization repositories. */
    EnterpriseDefaultRepositoryPermissionSettingValue["Write"] = "WRITE";
})(EnterpriseDefaultRepositoryPermissionSettingValue || (exports.EnterpriseDefaultRepositoryPermissionSettingValue = EnterpriseDefaultRepositoryPermissionSettingValue = {}));
/** The possible values for an enabled/disabled enterprise setting. */
var EnterpriseEnabledDisabledSettingValue;
(function (EnterpriseEnabledDisabledSettingValue) {
    /** The setting is disabled for organizations in the enterprise. */
    EnterpriseEnabledDisabledSettingValue["Disabled"] = "DISABLED";
    /** The setting is enabled for organizations in the enterprise. */
    EnterpriseEnabledDisabledSettingValue["Enabled"] = "ENABLED";
    /** There is no policy set for organizations in the enterprise. */
    EnterpriseEnabledDisabledSettingValue["NoPolicy"] = "NO_POLICY";
})(EnterpriseEnabledDisabledSettingValue || (exports.EnterpriseEnabledDisabledSettingValue = EnterpriseEnabledDisabledSettingValue = {}));
/** The possible values for an enabled/no policy enterprise setting. */
var EnterpriseEnabledSettingValue;
(function (EnterpriseEnabledSettingValue) {
    /** The setting is enabled for organizations in the enterprise. */
    EnterpriseEnabledSettingValue["Enabled"] = "ENABLED";
    /** There is no policy set for organizations in the enterprise. */
    EnterpriseEnabledSettingValue["NoPolicy"] = "NO_POLICY";
})(EnterpriseEnabledSettingValue || (exports.EnterpriseEnabledSettingValue = EnterpriseEnabledSettingValue = {}));
/** Properties by which enterprise member connections can be ordered. */
var EnterpriseMemberOrderField;
(function (EnterpriseMemberOrderField) {
    /** Order enterprise members by creation time */
    EnterpriseMemberOrderField["CreatedAt"] = "CREATED_AT";
    /** Order enterprise members by login */
    EnterpriseMemberOrderField["Login"] = "LOGIN";
})(EnterpriseMemberOrderField || (exports.EnterpriseMemberOrderField = EnterpriseMemberOrderField = {}));
/** The possible values for the enterprise members can create repositories setting. */
var EnterpriseMembersCanCreateRepositoriesSettingValue;
(function (EnterpriseMembersCanCreateRepositoriesSettingValue) {
    /** Members will be able to create public and private repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["All"] = "ALL";
    /** Members will not be able to create public or private repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["Disabled"] = "DISABLED";
    /** Organization administrators choose whether to allow members to create repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["NoPolicy"] = "NO_POLICY";
    /** Members will be able to create only private repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["Private"] = "PRIVATE";
    /** Members will be able to create only public repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["Public"] = "PUBLIC";
})(EnterpriseMembersCanCreateRepositoriesSettingValue || (exports.EnterpriseMembersCanCreateRepositoriesSettingValue = EnterpriseMembersCanCreateRepositoriesSettingValue = {}));
/** The possible values for the members can make purchases setting. */
var EnterpriseMembersCanMakePurchasesSettingValue;
(function (EnterpriseMembersCanMakePurchasesSettingValue) {
    /** The setting is disabled for organizations in the enterprise. */
    EnterpriseMembersCanMakePurchasesSettingValue["Disabled"] = "DISABLED";
    /** The setting is enabled for organizations in the enterprise. */
    EnterpriseMembersCanMakePurchasesSettingValue["Enabled"] = "ENABLED";
})(EnterpriseMembersCanMakePurchasesSettingValue || (exports.EnterpriseMembersCanMakePurchasesSettingValue = EnterpriseMembersCanMakePurchasesSettingValue = {}));
/** The possible values we have for filtering Platform::Objects::User#enterprises. */
var EnterpriseMembershipType;
(function (EnterpriseMembershipType) {
    /** Returns all enterprises in which the user is an admin. */
    EnterpriseMembershipType["Admin"] = "ADMIN";
    /** Returns all enterprises in which the user is a member, admin, or billing manager. */
    EnterpriseMembershipType["All"] = "ALL";
    /** Returns all enterprises in which the user is a billing manager. */
    EnterpriseMembershipType["BillingManager"] = "BILLING_MANAGER";
    /** Returns all enterprises in which the user is a member of an org that is owned by the enterprise. */
    EnterpriseMembershipType["OrgMembership"] = "ORG_MEMBERSHIP";
})(EnterpriseMembershipType || (exports.EnterpriseMembershipType = EnterpriseMembershipType = {}));
/** Properties by which enterprise connections can be ordered. */
var EnterpriseOrderField;
(function (EnterpriseOrderField) {
    /** Order enterprises by name */
    EnterpriseOrderField["Name"] = "NAME";
})(EnterpriseOrderField || (exports.EnterpriseOrderField = EnterpriseOrderField = {}));
/** Properties by which Enterprise Server installation connections can be ordered. */
var EnterpriseServerInstallationOrderField;
(function (EnterpriseServerInstallationOrderField) {
    /** Order Enterprise Server installations by creation time */
    EnterpriseServerInstallationOrderField["CreatedAt"] = "CREATED_AT";
    /** Order Enterprise Server installations by customer name */
    EnterpriseServerInstallationOrderField["CustomerName"] = "CUSTOMER_NAME";
    /** Order Enterprise Server installations by host name */
    EnterpriseServerInstallationOrderField["HostName"] = "HOST_NAME";
})(EnterpriseServerInstallationOrderField || (exports.EnterpriseServerInstallationOrderField = EnterpriseServerInstallationOrderField = {}));
/** Properties by which Enterprise Server user account email connections can be ordered. */
var EnterpriseServerUserAccountEmailOrderField;
(function (EnterpriseServerUserAccountEmailOrderField) {
    /** Order emails by email */
    EnterpriseServerUserAccountEmailOrderField["Email"] = "EMAIL";
})(EnterpriseServerUserAccountEmailOrderField || (exports.EnterpriseServerUserAccountEmailOrderField = EnterpriseServerUserAccountEmailOrderField = {}));
/** Properties by which Enterprise Server user account connections can be ordered. */
var EnterpriseServerUserAccountOrderField;
(function (EnterpriseServerUserAccountOrderField) {
    /** Order user accounts by login */
    EnterpriseServerUserAccountOrderField["Login"] = "LOGIN";
    /** Order user accounts by creation time on the Enterprise Server installation */
    EnterpriseServerUserAccountOrderField["RemoteCreatedAt"] = "REMOTE_CREATED_AT";
})(EnterpriseServerUserAccountOrderField || (exports.EnterpriseServerUserAccountOrderField = EnterpriseServerUserAccountOrderField = {}));
/** Properties by which Enterprise Server user accounts upload connections can be ordered. */
var EnterpriseServerUserAccountsUploadOrderField;
(function (EnterpriseServerUserAccountsUploadOrderField) {
    /** Order user accounts uploads by creation time */
    EnterpriseServerUserAccountsUploadOrderField["CreatedAt"] = "CREATED_AT";
})(EnterpriseServerUserAccountsUploadOrderField || (exports.EnterpriseServerUserAccountsUploadOrderField = EnterpriseServerUserAccountsUploadOrderField = {}));
/** Synchronization state of the Enterprise Server user accounts upload */
var EnterpriseServerUserAccountsUploadSyncState;
(function (EnterpriseServerUserAccountsUploadSyncState) {
    /** The synchronization of the upload failed. */
    EnterpriseServerUserAccountsUploadSyncState["Failure"] = "FAILURE";
    /** The synchronization of the upload is pending. */
    EnterpriseServerUserAccountsUploadSyncState["Pending"] = "PENDING";
    /** The synchronization of the upload succeeded. */
    EnterpriseServerUserAccountsUploadSyncState["Success"] = "SUCCESS";
})(EnterpriseServerUserAccountsUploadSyncState || (exports.EnterpriseServerUserAccountsUploadSyncState = EnterpriseServerUserAccountsUploadSyncState = {}));
/** The possible roles for enterprise membership. */
var EnterpriseUserAccountMembershipRole;
(function (EnterpriseUserAccountMembershipRole) {
    /** The user is a member of an organization in the enterprise. */
    EnterpriseUserAccountMembershipRole["Member"] = "MEMBER";
    /** The user is an owner of an organization in the enterprise. */
    EnterpriseUserAccountMembershipRole["Owner"] = "OWNER";
    /** The user is not an owner of the enterprise, and not a member or owner of any organizations in the enterprise; only for EMU-enabled enterprises. */
    EnterpriseUserAccountMembershipRole["Unaffiliated"] = "UNAFFILIATED";
})(EnterpriseUserAccountMembershipRole || (exports.EnterpriseUserAccountMembershipRole = EnterpriseUserAccountMembershipRole = {}));
/** The possible GitHub Enterprise deployments where this user can exist. */
var EnterpriseUserDeployment;
(function (EnterpriseUserDeployment) {
    /** The user is part of a GitHub Enterprise Cloud deployment. */
    EnterpriseUserDeployment["Cloud"] = "CLOUD";
    /** The user is part of a GitHub Enterprise Server deployment. */
    EnterpriseUserDeployment["Server"] = "SERVER";
})(EnterpriseUserDeployment || (exports.EnterpriseUserDeployment = EnterpriseUserDeployment = {}));
/** Properties by which environments connections can be ordered */
var EnvironmentOrderField;
(function (EnvironmentOrderField) {
    /** Order environments by name. */
    EnvironmentOrderField["Name"] = "NAME";
})(EnvironmentOrderField || (exports.EnvironmentOrderField = EnvironmentOrderField = {}));
/** The possible viewed states of a file . */
var FileViewedState;
(function (FileViewedState) {
    /** The file has new changes since last viewed. */
    FileViewedState["Dismissed"] = "DISMISSED";
    /** The file has not been marked as viewed. */
    FileViewedState["Unviewed"] = "UNVIEWED";
    /** The file has been marked as viewed. */
    FileViewedState["Viewed"] = "VIEWED";
})(FileViewedState || (exports.FileViewedState = FileViewedState = {}));
/** The possible funding platforms for repository funding links. */
var FundingPlatform;
(function (FundingPlatform) {
    /** Community Bridge funding platform. */
    FundingPlatform["CommunityBridge"] = "COMMUNITY_BRIDGE";
    /** Custom funding platform. */
    FundingPlatform["Custom"] = "CUSTOM";
    /** GitHub funding platform. */
    FundingPlatform["Github"] = "GITHUB";
    /** IssueHunt funding platform. */
    FundingPlatform["Issuehunt"] = "ISSUEHUNT";
    /** Ko-fi funding platform. */
    FundingPlatform["KoFi"] = "KO_FI";
    /** LFX Crowdfunding funding platform. */
    FundingPlatform["LfxCrowdfunding"] = "LFX_CROWDFUNDING";
    /** Liberapay funding platform. */
    FundingPlatform["Liberapay"] = "LIBERAPAY";
    /** Open Collective funding platform. */
    FundingPlatform["OpenCollective"] = "OPEN_COLLECTIVE";
    /** Otechie funding platform. */
    FundingPlatform["Otechie"] = "OTECHIE";
    /** Patreon funding platform. */
    FundingPlatform["Patreon"] = "PATREON";
    /** Tidelift funding platform. */
    FundingPlatform["Tidelift"] = "TIDELIFT";
})(FundingPlatform || (exports.FundingPlatform = FundingPlatform = {}));
/** Properties by which gist connections can be ordered. */
var GistOrderField;
(function (GistOrderField) {
    /** Order gists by creation time */
    GistOrderField["CreatedAt"] = "CREATED_AT";
    /** Order gists by push time */
    GistOrderField["PushedAt"] = "PUSHED_AT";
    /** Order gists by update time */
    GistOrderField["UpdatedAt"] = "UPDATED_AT";
})(GistOrderField || (exports.GistOrderField = GistOrderField = {}));
/** The privacy of a Gist */
var GistPrivacy;
(function (GistPrivacy) {
    /** Gists that are public and secret */
    GistPrivacy["All"] = "ALL";
    /** Public */
    GistPrivacy["Public"] = "PUBLIC";
    /** Secret */
    GistPrivacy["Secret"] = "SECRET";
})(GistPrivacy || (exports.GistPrivacy = GistPrivacy = {}));
/** The state of a Git signature. */
var GitSignatureState;
(function (GitSignatureState) {
    /** The signing certificate or its chain could not be verified */
    GitSignatureState["BadCert"] = "BAD_CERT";
    /** Invalid email used for signing */
    GitSignatureState["BadEmail"] = "BAD_EMAIL";
    /** Signing key expired */
    GitSignatureState["ExpiredKey"] = "EXPIRED_KEY";
    /** Internal error - the GPG verification service misbehaved */
    GitSignatureState["GpgverifyError"] = "GPGVERIFY_ERROR";
    /** Internal error - the GPG verification service is unavailable at the moment */
    GitSignatureState["GpgverifyUnavailable"] = "GPGVERIFY_UNAVAILABLE";
    /** Invalid signature */
    GitSignatureState["Invalid"] = "INVALID";
    /** Malformed signature */
    GitSignatureState["MalformedSig"] = "MALFORMED_SIG";
    /** The usage flags for the key that signed this don't allow signing */
    GitSignatureState["NotSigningKey"] = "NOT_SIGNING_KEY";
    /** Email used for signing not known to GitHub */
    GitSignatureState["NoUser"] = "NO_USER";
    /** Valid signature, though certificate revocation check failed */
    GitSignatureState["OcspError"] = "OCSP_ERROR";
    /** Valid signature, pending certificate revocation checking */
    GitSignatureState["OcspPending"] = "OCSP_PENDING";
    /** One or more certificates in chain has been revoked */
    GitSignatureState["OcspRevoked"] = "OCSP_REVOKED";
    /** Key used for signing not known to GitHub */
    GitSignatureState["UnknownKey"] = "UNKNOWN_KEY";
    /** Unknown signature type */
    GitSignatureState["UnknownSigType"] = "UNKNOWN_SIG_TYPE";
    /** Unsigned */
    GitSignatureState["Unsigned"] = "UNSIGNED";
    /** Email used for signing unverified on GitHub */
    GitSignatureState["UnverifiedEmail"] = "UNVERIFIED_EMAIL";
    /** Valid signature and verified by GitHub */
    GitSignatureState["Valid"] = "VALID";
})(GitSignatureState || (exports.GitSignatureState = GitSignatureState = {}));
/** The possible states in which authentication can be configured with an identity provider. */
var IdentityProviderConfigurationState;
(function (IdentityProviderConfigurationState) {
    /** Authentication with an identity provider is configured but not enforced. */
    IdentityProviderConfigurationState["Configured"] = "CONFIGURED";
    /** Authentication with an identity provider is configured and enforced. */
    IdentityProviderConfigurationState["Enforced"] = "ENFORCED";
    /** Authentication with an identity provider is not configured. */
    IdentityProviderConfigurationState["Unconfigured"] = "UNCONFIGURED";
})(IdentityProviderConfigurationState || (exports.IdentityProviderConfigurationState = IdentityProviderConfigurationState = {}));
/** The possible values for the IP allow list enabled setting. */
var IpAllowListEnabledSettingValue;
(function (IpAllowListEnabledSettingValue) {
    /** The setting is disabled for the owner. */
    IpAllowListEnabledSettingValue["Disabled"] = "DISABLED";
    /** The setting is enabled for the owner. */
    IpAllowListEnabledSettingValue["Enabled"] = "ENABLED";
})(IpAllowListEnabledSettingValue || (exports.IpAllowListEnabledSettingValue = IpAllowListEnabledSettingValue = {}));
/** Properties by which IP allow list entry connections can be ordered. */
var IpAllowListEntryOrderField;
(function (IpAllowListEntryOrderField) {
    /** Order IP allow list entries by the allow list value. */
    IpAllowListEntryOrderField["AllowListValue"] = "ALLOW_LIST_VALUE";
    /** Order IP allow list entries by creation time. */
    IpAllowListEntryOrderField["CreatedAt"] = "CREATED_AT";
})(IpAllowListEntryOrderField || (exports.IpAllowListEntryOrderField = IpAllowListEntryOrderField = {}));
/** The possible values for the IP allow list configuration for installed GitHub Apps setting. */
var IpAllowListForInstalledAppsEnabledSettingValue;
(function (IpAllowListForInstalledAppsEnabledSettingValue) {
    /** The setting is disabled for the owner. */
    IpAllowListForInstalledAppsEnabledSettingValue["Disabled"] = "DISABLED";
    /** The setting is enabled for the owner. */
    IpAllowListForInstalledAppsEnabledSettingValue["Enabled"] = "ENABLED";
})(IpAllowListForInstalledAppsEnabledSettingValue || (exports.IpAllowListForInstalledAppsEnabledSettingValue = IpAllowListForInstalledAppsEnabledSettingValue = {}));
/** The possible state reasons of a closed issue. */
var IssueClosedStateReason;
(function (IssueClosedStateReason) {
    /** An issue that has been closed as completed */
    IssueClosedStateReason["Completed"] = "COMPLETED";
    /** An issue that has been closed as not planned */
    IssueClosedStateReason["NotPlanned"] = "NOT_PLANNED";
})(IssueClosedStateReason || (exports.IssueClosedStateReason = IssueClosedStateReason = {}));
/** Properties by which issue comment connections can be ordered. */
var IssueCommentOrderField;
(function (IssueCommentOrderField) {
    /** Order issue comments by update time */
    IssueCommentOrderField["UpdatedAt"] = "UPDATED_AT";
})(IssueCommentOrderField || (exports.IssueCommentOrderField = IssueCommentOrderField = {}));
/** Properties by which issue connections can be ordered. */
var IssueOrderField;
(function (IssueOrderField) {
    /** Order issues by comment count */
    IssueOrderField["Comments"] = "COMMENTS";
    /** Order issues by creation time */
    IssueOrderField["CreatedAt"] = "CREATED_AT";
    /** Order issues by update time */
    IssueOrderField["UpdatedAt"] = "UPDATED_AT";
})(IssueOrderField || (exports.IssueOrderField = IssueOrderField = {}));
/** The possible states of an issue. */
var IssueState;
(function (IssueState) {
    /** An issue that has been closed */
    IssueState["Closed"] = "CLOSED";
    /** An issue that is still open */
    IssueState["Open"] = "OPEN";
})(IssueState || (exports.IssueState = IssueState = {}));
/** The possible state reasons of an issue. */
var IssueStateReason;
(function (IssueStateReason) {
    /** An issue that has been closed as completed */
    IssueStateReason["Completed"] = "COMPLETED";
    /** An issue that has been closed as not planned */
    IssueStateReason["NotPlanned"] = "NOT_PLANNED";
    /** An issue that has been reopened */
    IssueStateReason["Reopened"] = "REOPENED";
})(IssueStateReason || (exports.IssueStateReason = IssueStateReason = {}));
/** The possible item types found in a timeline. */
var IssueTimelineItemsItemType;
(function (IssueTimelineItemsItemType) {
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
    /** Represents a 'converted_to_discussion' event on a given issue. */
    IssueTimelineItemsItemType["ConvertedToDiscussionEvent"] = "CONVERTED_TO_DISCUSSION_EVENT";
    /** Represents a mention made by one issue or pull request to another. */
    IssueTimelineItemsItemType["CrossReferencedEvent"] = "CROSS_REFERENCED_EVENT";
    /** Represents a 'demilestoned' event on a given issue or pull request. */
    IssueTimelineItemsItemType["DemilestonedEvent"] = "DEMILESTONED_EVENT";
    /** Represents a 'disconnected' event on a given issue or pull request. */
    IssueTimelineItemsItemType["DisconnectedEvent"] = "DISCONNECTED_EVENT";
    /** Represents a comment on an Issue. */
    IssueTimelineItemsItemType["IssueComment"] = "ISSUE_COMMENT";
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
    /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
    IssueTimelineItemsItemType["UnmarkedAsDuplicateEvent"] = "UNMARKED_AS_DUPLICATE_EVENT";
    /** Represents an 'unpinned' event on a given issue or pull request. */
    IssueTimelineItemsItemType["UnpinnedEvent"] = "UNPINNED_EVENT";
    /** Represents an 'unsubscribed' event on a given `Subscribable`. */
    IssueTimelineItemsItemType["UnsubscribedEvent"] = "UNSUBSCRIBED_EVENT";
    /** Represents a 'user_blocked' event on a given user. */
    IssueTimelineItemsItemType["UserBlockedEvent"] = "USER_BLOCKED_EVENT";
})(IssueTimelineItemsItemType || (exports.IssueTimelineItemsItemType = IssueTimelineItemsItemType = {}));
/** Properties by which label connections can be ordered. */
var LabelOrderField;
(function (LabelOrderField) {
    /** Order labels by creation time */
    LabelOrderField["CreatedAt"] = "CREATED_AT";
    /** Order labels by name  */
    LabelOrderField["Name"] = "NAME";
})(LabelOrderField || (exports.LabelOrderField = LabelOrderField = {}));
/** Properties by which language connections can be ordered. */
var LanguageOrderField;
(function (LanguageOrderField) {
    /** Order languages by the size of all files containing the language */
    LanguageOrderField["Size"] = "SIZE";
})(LanguageOrderField || (exports.LanguageOrderField = LanguageOrderField = {}));
/** The possible reasons that an issue or pull request was locked. */
var LockReason;
(function (LockReason) {
    /** The issue or pull request was locked because the conversation was off-topic. */
    LockReason["OffTopic"] = "OFF_TOPIC";
    /** The issue or pull request was locked because the conversation was resolved. */
    LockReason["Resolved"] = "RESOLVED";
    /** The issue or pull request was locked because the conversation was spam. */
    LockReason["Spam"] = "SPAM";
    /** The issue or pull request was locked because the conversation was too heated. */
    LockReason["TooHeated"] = "TOO_HEATED";
})(LockReason || (exports.LockReason = LockReason = {}));
/** Properties by which mannequins can be ordered. */
var MannequinOrderField;
(function (MannequinOrderField) {
    /** Order mannequins why when they were created. */
    MannequinOrderField["CreatedAt"] = "CREATED_AT";
    /** Order mannequins alphabetically by their source login. */
    MannequinOrderField["Login"] = "LOGIN";
})(MannequinOrderField || (exports.MannequinOrderField = MannequinOrderField = {}));
/** The possible default commit messages for merges. */
var MergeCommitMessage;
(function (MergeCommitMessage) {
    /** Default to a blank commit message. */
    MergeCommitMessage["Blank"] = "BLANK";
    /** Default to the pull request's body. */
    MergeCommitMessage["PrBody"] = "PR_BODY";
    /** Default to the pull request's title. */
    MergeCommitMessage["PrTitle"] = "PR_TITLE";
})(MergeCommitMessage || (exports.MergeCommitMessage = MergeCommitMessage = {}));
/** The possible default commit titles for merges. */
var MergeCommitTitle;
(function (MergeCommitTitle) {
    /** Default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name). */
    MergeCommitTitle["MergeMessage"] = "MERGE_MESSAGE";
    /** Default to the pull request's title. */
    MergeCommitTitle["PrTitle"] = "PR_TITLE";
})(MergeCommitTitle || (exports.MergeCommitTitle = MergeCommitTitle = {}));
/** The possible states for a merge queue entry. */
var MergeQueueEntryState;
(function (MergeQueueEntryState) {
    /** The entry is currently waiting for checks to pass. */
    MergeQueueEntryState["AwaitingChecks"] = "AWAITING_CHECKS";
    /** The entry is currently locked. */
    MergeQueueEntryState["Locked"] = "LOCKED";
    /** The entry is currently mergeable. */
    MergeQueueEntryState["Mergeable"] = "MERGEABLE";
    /** The entry is currently queued. */
    MergeQueueEntryState["Queued"] = "QUEUED";
    /** The entry is currently unmergeable. */
    MergeQueueEntryState["Unmergeable"] = "UNMERGEABLE";
})(MergeQueueEntryState || (exports.MergeQueueEntryState = MergeQueueEntryState = {}));
/** The possible merging strategies for a merge queue. */
var MergeQueueMergingStrategy;
(function (MergeQueueMergingStrategy) {
    /** Entries only allowed to merge if they are passing. */
    MergeQueueMergingStrategy["Allgreen"] = "ALLGREEN";
    /** Failing Entires are allowed to merge if they are with a passing entry. */
    MergeQueueMergingStrategy["Headgreen"] = "HEADGREEN";
})(MergeQueueMergingStrategy || (exports.MergeQueueMergingStrategy = MergeQueueMergingStrategy = {}));
/** Whether or not a PullRequest can be merged. */
var MergeableState;
(function (MergeableState) {
    /** The pull request cannot be merged due to merge conflicts. */
    MergeableState["Conflicting"] = "CONFLICTING";
    /** The pull request can be merged. */
    MergeableState["Mergeable"] = "MERGEABLE";
    /** The mergeability of the pull request is still being calculated. */
    MergeableState["Unknown"] = "UNKNOWN";
})(MergeableState || (exports.MergeableState = MergeableState = {}));
/** Represents the different GitHub Enterprise Importer (GEI) migration sources. */
var MigrationSourceType;
(function (MigrationSourceType) {
    /** An Azure DevOps migration source. */
    MigrationSourceType["AzureDevops"] = "AZURE_DEVOPS";
    /** A Bitbucket Server migration source. */
    MigrationSourceType["BitbucketServer"] = "BITBUCKET_SERVER";
    /** A GitHub Migration API source. */
    MigrationSourceType["GithubArchive"] = "GITHUB_ARCHIVE";
})(MigrationSourceType || (exports.MigrationSourceType = MigrationSourceType = {}));
/** The GitHub Enterprise Importer (GEI) migration state. */
var MigrationState;
(function (MigrationState) {
    /** The migration has failed. */
    MigrationState["Failed"] = "FAILED";
    /** The migration has invalid credentials. */
    MigrationState["FailedValidation"] = "FAILED_VALIDATION";
    /** The migration is in progress. */
    MigrationState["InProgress"] = "IN_PROGRESS";
    /** The migration has not started. */
    MigrationState["NotStarted"] = "NOT_STARTED";
    /** The migration needs to have its credentials validated. */
    MigrationState["PendingValidation"] = "PENDING_VALIDATION";
    /** The migration has been queued. */
    MigrationState["Queued"] = "QUEUED";
    /** The migration has succeeded. */
    MigrationState["Succeeded"] = "SUCCEEDED";
})(MigrationState || (exports.MigrationState = MigrationState = {}));
/** Properties by which milestone connections can be ordered. */
var MilestoneOrderField;
(function (MilestoneOrderField) {
    /** Order milestones by when they were created. */
    MilestoneOrderField["CreatedAt"] = "CREATED_AT";
    /** Order milestones by when they are due. */
    MilestoneOrderField["DueDate"] = "DUE_DATE";
    /** Order milestones by their number. */
    MilestoneOrderField["Number"] = "NUMBER";
    /** Order milestones by when they were last updated. */
    MilestoneOrderField["UpdatedAt"] = "UPDATED_AT";
})(MilestoneOrderField || (exports.MilestoneOrderField = MilestoneOrderField = {}));
/** The possible states of a milestone. */
var MilestoneState;
(function (MilestoneState) {
    /** A milestone that has been closed. */
    MilestoneState["Closed"] = "CLOSED";
    /** A milestone that is still open. */
    MilestoneState["Open"] = "OPEN";
})(MilestoneState || (exports.MilestoneState = MilestoneState = {}));
/** The possible values for the notification restriction setting. */
var NotificationRestrictionSettingValue;
(function (NotificationRestrictionSettingValue) {
    /** The setting is disabled for the owner. */
    NotificationRestrictionSettingValue["Disabled"] = "DISABLED";
    /** The setting is enabled for the owner. */
    NotificationRestrictionSettingValue["Enabled"] = "ENABLED";
})(NotificationRestrictionSettingValue || (exports.NotificationRestrictionSettingValue = NotificationRestrictionSettingValue = {}));
/** The OIDC identity provider type */
var OidcProviderType;
(function (OidcProviderType) {
    /** Azure Active Directory */
    OidcProviderType["Aad"] = "AAD";
})(OidcProviderType || (exports.OidcProviderType = OidcProviderType = {}));
/** The state of an OAuth application when it was created. */
var OauthApplicationCreateAuditEntryState;
(function (OauthApplicationCreateAuditEntryState) {
    /** The OAuth application was active and allowed to have OAuth Accesses. */
    OauthApplicationCreateAuditEntryState["Active"] = "ACTIVE";
    /** The OAuth application was in the process of being deleted. */
    OauthApplicationCreateAuditEntryState["PendingDeletion"] = "PENDING_DELETION";
    /** The OAuth application was suspended from generating OAuth Accesses due to abuse or security concerns. */
    OauthApplicationCreateAuditEntryState["Suspended"] = "SUSPENDED";
})(OauthApplicationCreateAuditEntryState || (exports.OauthApplicationCreateAuditEntryState = OauthApplicationCreateAuditEntryState = {}));
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
})(OperationType || (exports.OperationType = OperationType = {}));
/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
var OrderDirection;
(function (OrderDirection) {
    /** Specifies an ascending order for a given `orderBy` argument. */
    OrderDirection["Asc"] = "ASC";
    /** Specifies a descending order for a given `orderBy` argument. */
    OrderDirection["Desc"] = "DESC";
})(OrderDirection || (exports.OrderDirection = OrderDirection = {}));
/** The permissions available to members on an Organization. */
var OrgAddMemberAuditEntryPermission;
(function (OrgAddMemberAuditEntryPermission) {
    /** Can read, clone, push, and add collaborators to repositories. */
    OrgAddMemberAuditEntryPermission["Admin"] = "ADMIN";
    /** Can read and clone repositories. */
    OrgAddMemberAuditEntryPermission["Read"] = "READ";
})(OrgAddMemberAuditEntryPermission || (exports.OrgAddMemberAuditEntryPermission = OrgAddMemberAuditEntryPermission = {}));
/** The billing plans available for organizations. */
var OrgCreateAuditEntryBillingPlan;
(function (OrgCreateAuditEntryBillingPlan) {
    /** Team Plan */
    OrgCreateAuditEntryBillingPlan["Business"] = "BUSINESS";
    /** Enterprise Cloud Plan */
    OrgCreateAuditEntryBillingPlan["BusinessPlus"] = "BUSINESS_PLUS";
    /** Free Plan */
    OrgCreateAuditEntryBillingPlan["Free"] = "FREE";
    /** Tiered Per Seat Plan */
    OrgCreateAuditEntryBillingPlan["TieredPerSeat"] = "TIERED_PER_SEAT";
    /** Legacy Unlimited Plan */
    OrgCreateAuditEntryBillingPlan["Unlimited"] = "UNLIMITED";
})(OrgCreateAuditEntryBillingPlan || (exports.OrgCreateAuditEntryBillingPlan = OrgCreateAuditEntryBillingPlan = {}));
/** Properties by which enterprise owners can be ordered. */
var OrgEnterpriseOwnerOrderField;
(function (OrgEnterpriseOwnerOrderField) {
    /** Order enterprise owners by login. */
    OrgEnterpriseOwnerOrderField["Login"] = "LOGIN";
})(OrgEnterpriseOwnerOrderField || (exports.OrgEnterpriseOwnerOrderField = OrgEnterpriseOwnerOrderField = {}));
/** The reason a billing manager was removed from an Organization. */
var OrgRemoveBillingManagerAuditEntryReason;
(function (OrgRemoveBillingManagerAuditEntryReason) {
    /** SAML external identity missing */
    OrgRemoveBillingManagerAuditEntryReason["SamlExternalIdentityMissing"] = "SAML_EXTERNAL_IDENTITY_MISSING";
    /** SAML SSO enforcement requires an external identity */
    OrgRemoveBillingManagerAuditEntryReason["SamlSsoEnforcementRequiresExternalIdentity"] = "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY";
    /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
    OrgRemoveBillingManagerAuditEntryReason["TwoFactorRequirementNonCompliance"] = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";
})(OrgRemoveBillingManagerAuditEntryReason || (exports.OrgRemoveBillingManagerAuditEntryReason = OrgRemoveBillingManagerAuditEntryReason = {}));
/** The type of membership a user has with an Organization. */
var OrgRemoveMemberAuditEntryMembershipType;
(function (OrgRemoveMemberAuditEntryMembershipType) {
    /** Organization administrators have full access and can change several settings, including the names of repositories that belong to the Organization and Owners team membership. In addition, organization admins can delete the organization and all of its repositories. */
    OrgRemoveMemberAuditEntryMembershipType["Admin"] = "ADMIN";
    /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
    OrgRemoveMemberAuditEntryMembershipType["BillingManager"] = "BILLING_MANAGER";
    /** A direct member is a user that is a member of the Organization. */
    OrgRemoveMemberAuditEntryMembershipType["DirectMember"] = "DIRECT_MEMBER";
    /** An outside collaborator is a person who isn't explicitly a member of the Organization, but who has Read, Write, or Admin permissions to one or more repositories in the organization. */
    OrgRemoveMemberAuditEntryMembershipType["OutsideCollaborator"] = "OUTSIDE_COLLABORATOR";
    /** A suspended member. */
    OrgRemoveMemberAuditEntryMembershipType["Suspended"] = "SUSPENDED";
    /** An unaffiliated collaborator is a person who is not a member of the Organization and does not have access to any repositories in the Organization. */
    OrgRemoveMemberAuditEntryMembershipType["Unaffiliated"] = "UNAFFILIATED";
})(OrgRemoveMemberAuditEntryMembershipType || (exports.OrgRemoveMemberAuditEntryMembershipType = OrgRemoveMemberAuditEntryMembershipType = {}));
/** The reason a member was removed from an Organization. */
var OrgRemoveMemberAuditEntryReason;
(function (OrgRemoveMemberAuditEntryReason) {
    /** SAML external identity missing */
    OrgRemoveMemberAuditEntryReason["SamlExternalIdentityMissing"] = "SAML_EXTERNAL_IDENTITY_MISSING";
    /** SAML SSO enforcement requires an external identity */
    OrgRemoveMemberAuditEntryReason["SamlSsoEnforcementRequiresExternalIdentity"] = "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY";
    /** User was removed from organization during account recovery */
    OrgRemoveMemberAuditEntryReason["TwoFactorAccountRecovery"] = "TWO_FACTOR_ACCOUNT_RECOVERY";
    /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
    OrgRemoveMemberAuditEntryReason["TwoFactorRequirementNonCompliance"] = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";
    /** User account has been deleted */
    OrgRemoveMemberAuditEntryReason["UserAccountDeleted"] = "USER_ACCOUNT_DELETED";
})(OrgRemoveMemberAuditEntryReason || (exports.OrgRemoveMemberAuditEntryReason = OrgRemoveMemberAuditEntryReason = {}));
/** The type of membership a user has with an Organization. */
var OrgRemoveOutsideCollaboratorAuditEntryMembershipType;
(function (OrgRemoveOutsideCollaboratorAuditEntryMembershipType) {
    /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
    OrgRemoveOutsideCollaboratorAuditEntryMembershipType["BillingManager"] = "BILLING_MANAGER";
    /** An outside collaborator is a person who isn't explicitly a member of the Organization, but who has Read, Write, or Admin permissions to one or more repositories in the organization. */
    OrgRemoveOutsideCollaboratorAuditEntryMembershipType["OutsideCollaborator"] = "OUTSIDE_COLLABORATOR";
    /** An unaffiliated collaborator is a person who is not a member of the Organization and does not have access to any repositories in the organization. */
    OrgRemoveOutsideCollaboratorAuditEntryMembershipType["Unaffiliated"] = "UNAFFILIATED";
})(OrgRemoveOutsideCollaboratorAuditEntryMembershipType || (exports.OrgRemoveOutsideCollaboratorAuditEntryMembershipType = OrgRemoveOutsideCollaboratorAuditEntryMembershipType = {}));
/** The reason an outside collaborator was removed from an Organization. */
var OrgRemoveOutsideCollaboratorAuditEntryReason;
(function (OrgRemoveOutsideCollaboratorAuditEntryReason) {
    /** SAML external identity missing */
    OrgRemoveOutsideCollaboratorAuditEntryReason["SamlExternalIdentityMissing"] = "SAML_EXTERNAL_IDENTITY_MISSING";
    /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
    OrgRemoveOutsideCollaboratorAuditEntryReason["TwoFactorRequirementNonCompliance"] = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";
})(OrgRemoveOutsideCollaboratorAuditEntryReason || (exports.OrgRemoveOutsideCollaboratorAuditEntryReason = OrgRemoveOutsideCollaboratorAuditEntryReason = {}));
/** The default permission a repository can have in an Organization. */
var OrgUpdateDefaultRepositoryPermissionAuditEntryPermission;
(function (OrgUpdateDefaultRepositoryPermissionAuditEntryPermission) {
    /** Can read, clone, push, and add collaborators to repositories. */
    OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["Admin"] = "ADMIN";
    /** No default permission value. */
    OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["None"] = "NONE";
    /** Can read and clone repositories. */
    OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["Read"] = "READ";
    /** Can read, clone and push to repositories. */
    OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["Write"] = "WRITE";
})(OrgUpdateDefaultRepositoryPermissionAuditEntryPermission || (exports.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = {}));
/** The permissions available to members on an Organization. */
var OrgUpdateMemberAuditEntryPermission;
(function (OrgUpdateMemberAuditEntryPermission) {
    /** Can read, clone, push, and add collaborators to repositories. */
    OrgUpdateMemberAuditEntryPermission["Admin"] = "ADMIN";
    /** Can read and clone repositories. */
    OrgUpdateMemberAuditEntryPermission["Read"] = "READ";
})(OrgUpdateMemberAuditEntryPermission || (exports.OrgUpdateMemberAuditEntryPermission = OrgUpdateMemberAuditEntryPermission = {}));
/** The permissions available for repository creation on an Organization. */
var OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility;
(function (OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility) {
    /** All organization members are restricted from creating any repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["All"] = "ALL";
    /** All organization members are restricted from creating internal repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["Internal"] = "INTERNAL";
    /** All organization members are allowed to create any repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["None"] = "NONE";
    /** All organization members are restricted from creating private repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["Private"] = "PRIVATE";
    /** All organization members are restricted from creating private or internal repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["PrivateInternal"] = "PRIVATE_INTERNAL";
    /** All organization members are restricted from creating public repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["Public"] = "PUBLIC";
    /** All organization members are restricted from creating public or internal repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["PublicInternal"] = "PUBLIC_INTERNAL";
    /** All organization members are restricted from creating public or private repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["PublicPrivate"] = "PUBLIC_PRIVATE";
})(OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility || (exports.OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = {}));
/** The possible organization invitation roles. */
var OrganizationInvitationRole;
(function (OrganizationInvitationRole) {
    /** The user is invited to be an admin of the organization. */
    OrganizationInvitationRole["Admin"] = "ADMIN";
    /** The user is invited to be a billing manager of the organization. */
    OrganizationInvitationRole["BillingManager"] = "BILLING_MANAGER";
    /** The user is invited to be a direct member of the organization. */
    OrganizationInvitationRole["DirectMember"] = "DIRECT_MEMBER";
    /** The user's previous role will be reinstated. */
    OrganizationInvitationRole["Reinstate"] = "REINSTATE";
})(OrganizationInvitationRole || (exports.OrganizationInvitationRole = OrganizationInvitationRole = {}));
/** The possible organization invitation sources. */
var OrganizationInvitationSource;
(function (OrganizationInvitationSource) {
    /** The invitation was created from the web interface or from API */
    OrganizationInvitationSource["Member"] = "MEMBER";
    /** The invitation was created from SCIM */
    OrganizationInvitationSource["Scim"] = "SCIM";
    /** The invitation was sent before this feature was added */
    OrganizationInvitationSource["Unknown"] = "UNKNOWN";
})(OrganizationInvitationSource || (exports.OrganizationInvitationSource = OrganizationInvitationSource = {}));
/** The possible organization invitation types. */
var OrganizationInvitationType;
(function (OrganizationInvitationType) {
    /** The invitation was to an email address. */
    OrganizationInvitationType["Email"] = "EMAIL";
    /** The invitation was to an existing user. */
    OrganizationInvitationType["User"] = "USER";
})(OrganizationInvitationType || (exports.OrganizationInvitationType = OrganizationInvitationType = {}));
/** The possible roles within an organization for its members. */
var OrganizationMemberRole;
(function (OrganizationMemberRole) {
    /** The user is an administrator of the organization. */
    OrganizationMemberRole["Admin"] = "ADMIN";
    /** The user is a member of the organization. */
    OrganizationMemberRole["Member"] = "MEMBER";
})(OrganizationMemberRole || (exports.OrganizationMemberRole = OrganizationMemberRole = {}));
/** The possible values for the members can create repositories setting on an organization. */
var OrganizationMembersCanCreateRepositoriesSettingValue;
(function (OrganizationMembersCanCreateRepositoriesSettingValue) {
    /** Members will be able to create public and private repositories. */
    OrganizationMembersCanCreateRepositoriesSettingValue["All"] = "ALL";
    /** Members will not be able to create public or private repositories. */
    OrganizationMembersCanCreateRepositoriesSettingValue["Disabled"] = "DISABLED";
    /** Members will be able to create only internal repositories. */
    OrganizationMembersCanCreateRepositoriesSettingValue["Internal"] = "INTERNAL";
    /** Members will be able to create only private repositories. */
    OrganizationMembersCanCreateRepositoriesSettingValue["Private"] = "PRIVATE";
})(OrganizationMembersCanCreateRepositoriesSettingValue || (exports.OrganizationMembersCanCreateRepositoriesSettingValue = OrganizationMembersCanCreateRepositoriesSettingValue = {}));
/** The Octoshift Organization migration state. */
var OrganizationMigrationState;
(function (OrganizationMigrationState) {
    /** The Octoshift migration has failed. */
    OrganizationMigrationState["Failed"] = "FAILED";
    /** The Octoshift migration has invalid credentials. */
    OrganizationMigrationState["FailedValidation"] = "FAILED_VALIDATION";
    /** The Octoshift migration is in progress. */
    OrganizationMigrationState["InProgress"] = "IN_PROGRESS";
    /** The Octoshift migration has not started. */
    OrganizationMigrationState["NotStarted"] = "NOT_STARTED";
    /** The Octoshift migration needs to have its credentials validated. */
    OrganizationMigrationState["PendingValidation"] = "PENDING_VALIDATION";
    /** The Octoshift migration is performing post repository migrations. */
    OrganizationMigrationState["PostRepoMigration"] = "POST_REPO_MIGRATION";
    /** The Octoshift migration is performing pre repository migrations. */
    OrganizationMigrationState["PreRepoMigration"] = "PRE_REPO_MIGRATION";
    /** The Octoshift migration has been queued. */
    OrganizationMigrationState["Queued"] = "QUEUED";
    /** The Octoshift org migration is performing repository migrations. */
    OrganizationMigrationState["RepoMigration"] = "REPO_MIGRATION";
    /** The Octoshift migration has succeeded. */
    OrganizationMigrationState["Succeeded"] = "SUCCEEDED";
})(OrganizationMigrationState || (exports.OrganizationMigrationState = OrganizationMigrationState = {}));
/** Properties by which organization connections can be ordered. */
var OrganizationOrderField;
(function (OrganizationOrderField) {
    /** Order organizations by creation time */
    OrganizationOrderField["CreatedAt"] = "CREATED_AT";
    /** Order organizations by login */
    OrganizationOrderField["Login"] = "LOGIN";
})(OrganizationOrderField || (exports.OrganizationOrderField = OrganizationOrderField = {}));
/** Properties by which package file connections can be ordered. */
var PackageFileOrderField;
(function (PackageFileOrderField) {
    /** Order package files by creation time */
    PackageFileOrderField["CreatedAt"] = "CREATED_AT";
})(PackageFileOrderField || (exports.PackageFileOrderField = PackageFileOrderField = {}));
/** Properties by which package connections can be ordered. */
var PackageOrderField;
(function (PackageOrderField) {
    /** Order packages by creation time */
    PackageOrderField["CreatedAt"] = "CREATED_AT";
})(PackageOrderField || (exports.PackageOrderField = PackageOrderField = {}));
/** The possible types of a package. */
var PackageType;
(function (PackageType) {
    /** A debian package. */
    PackageType["Debian"] = "DEBIAN";
    /**
     * A docker image.
     * @deprecated DOCKER will be removed from this enum as this type will be migrated to only be used by the Packages REST API. Removal on 2021-06-21 UTC.
     */
    PackageType["Docker"] = "DOCKER";
    /**
     * A maven package.
     * @deprecated MAVEN will be removed from this enum as this type will be migrated to only be used by the Packages REST API. Removal on 2023-02-10 UTC.
     */
    PackageType["Maven"] = "MAVEN";
    /**
     * An npm package.
     * @deprecated NPM will be removed from this enum as this type will be migrated to only be used by the Packages REST API. Removal on 2022-11-21 UTC.
     */
    PackageType["Npm"] = "NPM";
    /**
     * A nuget package.
     * @deprecated NUGET will be removed from this enum as this type will be migrated to only be used by the Packages REST API. Removal on 2022-11-21 UTC.
     */
    PackageType["Nuget"] = "NUGET";
    /** A python package. */
    PackageType["Pypi"] = "PYPI";
    /**
     * A rubygems package.
     * @deprecated RUBYGEMS will be removed from this enum as this type will be migrated to only be used by the Packages REST API. Removal on 2022-12-28 UTC.
     */
    PackageType["Rubygems"] = "RUBYGEMS";
})(PackageType || (exports.PackageType = PackageType = {}));
/** Properties by which package version connections can be ordered. */
var PackageVersionOrderField;
(function (PackageVersionOrderField) {
    /** Order package versions by creation time */
    PackageVersionOrderField["CreatedAt"] = "CREATED_AT";
})(PackageVersionOrderField || (exports.PackageVersionOrderField = PackageVersionOrderField = {}));
/** The possible types of patch statuses. */
var PatchStatus;
(function (PatchStatus) {
    /** The file was added. Git status 'A'. */
    PatchStatus["Added"] = "ADDED";
    /** The file's type was changed. Git status 'T'. */
    PatchStatus["Changed"] = "CHANGED";
    /** The file was copied. Git status 'C'. */
    PatchStatus["Copied"] = "COPIED";
    /** The file was deleted. Git status 'D'. */
    PatchStatus["Deleted"] = "DELETED";
    /** The file's contents were changed. Git status 'M'. */
    PatchStatus["Modified"] = "MODIFIED";
    /** The file was renamed. Git status 'R'. */
    PatchStatus["Renamed"] = "RENAMED";
})(PatchStatus || (exports.PatchStatus = PatchStatus = {}));
/** Represents items that can be pinned to a profile page or dashboard. */
var PinnableItemType;
(function (PinnableItemType) {
    /** A gist. */
    PinnableItemType["Gist"] = "GIST";
    /** An issue. */
    PinnableItemType["Issue"] = "ISSUE";
    /** An organization. */
    PinnableItemType["Organization"] = "ORGANIZATION";
    /** A project. */
    PinnableItemType["Project"] = "PROJECT";
    /** A pull request. */
    PinnableItemType["PullRequest"] = "PULL_REQUEST";
    /** A repository. */
    PinnableItemType["Repository"] = "REPOSITORY";
    /** A team. */
    PinnableItemType["Team"] = "TEAM";
    /** A user. */
    PinnableItemType["User"] = "USER";
})(PinnableItemType || (exports.PinnableItemType = PinnableItemType = {}));
/** Preconfigured gradients that may be used to style discussions pinned within a repository. */
var PinnedDiscussionGradient;
(function (PinnedDiscussionGradient) {
    /** A gradient of blue to mint */
    PinnedDiscussionGradient["BlueMint"] = "BLUE_MINT";
    /** A gradient of blue to purple */
    PinnedDiscussionGradient["BluePurple"] = "BLUE_PURPLE";
    /** A gradient of pink to blue */
    PinnedDiscussionGradient["PinkBlue"] = "PINK_BLUE";
    /** A gradient of purple to coral */
    PinnedDiscussionGradient["PurpleCoral"] = "PURPLE_CORAL";
    /** A gradient of red to orange */
    PinnedDiscussionGradient["RedOrange"] = "RED_ORANGE";
})(PinnedDiscussionGradient || (exports.PinnedDiscussionGradient = PinnedDiscussionGradient = {}));
/** Preconfigured background patterns that may be used to style discussions pinned within a repository. */
var PinnedDiscussionPattern;
(function (PinnedDiscussionPattern) {
    /** An upward-facing chevron pattern */
    PinnedDiscussionPattern["ChevronUp"] = "CHEVRON_UP";
    /** A hollow dot pattern */
    PinnedDiscussionPattern["Dot"] = "DOT";
    /** A solid dot pattern */
    PinnedDiscussionPattern["DotFill"] = "DOT_FILL";
    /** A heart pattern */
    PinnedDiscussionPattern["HeartFill"] = "HEART_FILL";
    /** A plus sign pattern */
    PinnedDiscussionPattern["Plus"] = "PLUS";
    /** A lightning bolt pattern */
    PinnedDiscussionPattern["Zap"] = "ZAP";
})(PinnedDiscussionPattern || (exports.PinnedDiscussionPattern = PinnedDiscussionPattern = {}));
/** The possible archived states of a project card. */
var ProjectCardArchivedState;
(function (ProjectCardArchivedState) {
    /** A project card that is archived */
    ProjectCardArchivedState["Archived"] = "ARCHIVED";
    /** A project card that is not archived */
    ProjectCardArchivedState["NotArchived"] = "NOT_ARCHIVED";
})(ProjectCardArchivedState || (exports.ProjectCardArchivedState = ProjectCardArchivedState = {}));
/** Various content states of a ProjectCard */
var ProjectCardState;
(function (ProjectCardState) {
    /** The card has content only. */
    ProjectCardState["ContentOnly"] = "CONTENT_ONLY";
    /** The card has a note only. */
    ProjectCardState["NoteOnly"] = "NOTE_ONLY";
    /** The card is redacted. */
    ProjectCardState["Redacted"] = "REDACTED";
})(ProjectCardState || (exports.ProjectCardState = ProjectCardState = {}));
/** The semantic purpose of the column - todo, in progress, or done. */
var ProjectColumnPurpose;
(function (ProjectColumnPurpose) {
    /** The column contains cards which are complete */
    ProjectColumnPurpose["Done"] = "DONE";
    /** The column contains cards which are currently being worked on */
    ProjectColumnPurpose["InProgress"] = "IN_PROGRESS";
    /** The column contains cards still to be worked on */
    ProjectColumnPurpose["Todo"] = "TODO";
})(ProjectColumnPurpose || (exports.ProjectColumnPurpose = ProjectColumnPurpose = {}));
/** Properties by which project connections can be ordered. */
var ProjectOrderField;
(function (ProjectOrderField) {
    /** Order projects by creation time */
    ProjectOrderField["CreatedAt"] = "CREATED_AT";
    /** Order projects by name */
    ProjectOrderField["Name"] = "NAME";
    /** Order projects by update time */
    ProjectOrderField["UpdatedAt"] = "UPDATED_AT";
})(ProjectOrderField || (exports.ProjectOrderField = ProjectOrderField = {}));
/** State of the project; either 'open' or 'closed' */
var ProjectState;
(function (ProjectState) {
    /** The project is closed. */
    ProjectState["Closed"] = "CLOSED";
    /** The project is open. */
    ProjectState["Open"] = "OPEN";
})(ProjectState || (exports.ProjectState = ProjectState = {}));
/** GitHub-provided templates for Projects */
var ProjectTemplate;
(function (ProjectTemplate) {
    /** Create a board with v2 triggers to automatically move cards across To do, In progress and Done columns. */
    ProjectTemplate["AutomatedKanbanV2"] = "AUTOMATED_KANBAN_V2";
    /** Create a board with triggers to automatically move cards across columns with review automation. */
    ProjectTemplate["AutomatedReviewsKanban"] = "AUTOMATED_REVIEWS_KANBAN";
    /** Create a board with columns for To do, In progress and Done. */
    ProjectTemplate["BasicKanban"] = "BASIC_KANBAN";
    /** Create a board to triage and prioritize bugs with To do, priority, and Done columns. */
    ProjectTemplate["BugTriage"] = "BUG_TRIAGE";
})(ProjectTemplate || (exports.ProjectTemplate = ProjectTemplate = {}));
/** The type of a project field. */
var ProjectV2CustomFieldType;
(function (ProjectV2CustomFieldType) {
    /** Date */
    ProjectV2CustomFieldType["Date"] = "DATE";
    /** Number */
    ProjectV2CustomFieldType["Number"] = "NUMBER";
    /** Single Select */
    ProjectV2CustomFieldType["SingleSelect"] = "SINGLE_SELECT";
    /** Text */
    ProjectV2CustomFieldType["Text"] = "TEXT";
})(ProjectV2CustomFieldType || (exports.ProjectV2CustomFieldType = ProjectV2CustomFieldType = {}));
/** Properties by which project v2 field connections can be ordered. */
var ProjectV2FieldOrderField;
(function (ProjectV2FieldOrderField) {
    /** Order project v2 fields by creation time */
    ProjectV2FieldOrderField["CreatedAt"] = "CREATED_AT";
    /** Order project v2 fields by name */
    ProjectV2FieldOrderField["Name"] = "NAME";
    /** Order project v2 fields by position */
    ProjectV2FieldOrderField["Position"] = "POSITION";
})(ProjectV2FieldOrderField || (exports.ProjectV2FieldOrderField = ProjectV2FieldOrderField = {}));
/** The type of a project field. */
var ProjectV2FieldType;
(function (ProjectV2FieldType) {
    /** Assignees */
    ProjectV2FieldType["Assignees"] = "ASSIGNEES";
    /** Date */
    ProjectV2FieldType["Date"] = "DATE";
    /** Iteration */
    ProjectV2FieldType["Iteration"] = "ITERATION";
    /** Labels */
    ProjectV2FieldType["Labels"] = "LABELS";
    /** Linked Pull Requests */
    ProjectV2FieldType["LinkedPullRequests"] = "LINKED_PULL_REQUESTS";
    /** Milestone */
    ProjectV2FieldType["Milestone"] = "MILESTONE";
    /** Number */
    ProjectV2FieldType["Number"] = "NUMBER";
    /** Repository */
    ProjectV2FieldType["Repository"] = "REPOSITORY";
    /** Reviewers */
    ProjectV2FieldType["Reviewers"] = "REVIEWERS";
    /** Single Select */
    ProjectV2FieldType["SingleSelect"] = "SINGLE_SELECT";
    /** Text */
    ProjectV2FieldType["Text"] = "TEXT";
    /** Title */
    ProjectV2FieldType["Title"] = "TITLE";
    /** Tracked by */
    ProjectV2FieldType["TrackedBy"] = "TRACKED_BY";
    /** Tracks */
    ProjectV2FieldType["Tracks"] = "TRACKS";
})(ProjectV2FieldType || (exports.ProjectV2FieldType = ProjectV2FieldType = {}));
/** Properties by which project v2 item field value connections can be ordered. */
var ProjectV2ItemFieldValueOrderField;
(function (ProjectV2ItemFieldValueOrderField) {
    /** Order project v2 item field values by the their position in the project */
    ProjectV2ItemFieldValueOrderField["Position"] = "POSITION";
})(ProjectV2ItemFieldValueOrderField || (exports.ProjectV2ItemFieldValueOrderField = ProjectV2ItemFieldValueOrderField = {}));
/** Properties by which project v2 item connections can be ordered. */
var ProjectV2ItemOrderField;
(function (ProjectV2ItemOrderField) {
    /** Order project v2 items by the their position in the project */
    ProjectV2ItemOrderField["Position"] = "POSITION";
})(ProjectV2ItemOrderField || (exports.ProjectV2ItemOrderField = ProjectV2ItemOrderField = {}));
/** The type of a project item. */
var ProjectV2ItemType;
(function (ProjectV2ItemType) {
    /** Draft Issue */
    ProjectV2ItemType["DraftIssue"] = "DRAFT_ISSUE";
    /** Issue */
    ProjectV2ItemType["Issue"] = "ISSUE";
    /** Pull Request */
    ProjectV2ItemType["PullRequest"] = "PULL_REQUEST";
    /** Redacted Item */
    ProjectV2ItemType["Redacted"] = "REDACTED";
})(ProjectV2ItemType || (exports.ProjectV2ItemType = ProjectV2ItemType = {}));
/** Properties by which projects can be ordered. */
var ProjectV2OrderField;
(function (ProjectV2OrderField) {
    /** The project's date and time of creation */
    ProjectV2OrderField["CreatedAt"] = "CREATED_AT";
    /** The project's number */
    ProjectV2OrderField["Number"] = "NUMBER";
    /** The project's title */
    ProjectV2OrderField["Title"] = "TITLE";
    /** The project's date and time of update */
    ProjectV2OrderField["UpdatedAt"] = "UPDATED_AT";
})(ProjectV2OrderField || (exports.ProjectV2OrderField = ProjectV2OrderField = {}));
/** The possible roles of a collaborator on a project. */
var ProjectV2Roles;
(function (ProjectV2Roles) {
    /** The collaborator can view, edit, and maange the settings of the project */
    ProjectV2Roles["Admin"] = "ADMIN";
    /** The collaborator has no direct access to the project */
    ProjectV2Roles["None"] = "NONE";
    /** The collaborator can view the project */
    ProjectV2Roles["Reader"] = "READER";
    /** The collaborator can view and edit the project */
    ProjectV2Roles["Writer"] = "WRITER";
})(ProjectV2Roles || (exports.ProjectV2Roles = ProjectV2Roles = {}));
/** The display color of a single-select field option. */
var ProjectV2SingleSelectFieldOptionColor;
(function (ProjectV2SingleSelectFieldOptionColor) {
    /** BLUE */
    ProjectV2SingleSelectFieldOptionColor["Blue"] = "BLUE";
    /** GRAY */
    ProjectV2SingleSelectFieldOptionColor["Gray"] = "GRAY";
    /** GREEN */
    ProjectV2SingleSelectFieldOptionColor["Green"] = "GREEN";
    /** ORANGE */
    ProjectV2SingleSelectFieldOptionColor["Orange"] = "ORANGE";
    /** PINK */
    ProjectV2SingleSelectFieldOptionColor["Pink"] = "PINK";
    /** PURPLE */
    ProjectV2SingleSelectFieldOptionColor["Purple"] = "PURPLE";
    /** RED */
    ProjectV2SingleSelectFieldOptionColor["Red"] = "RED";
    /** YELLOW */
    ProjectV2SingleSelectFieldOptionColor["Yellow"] = "YELLOW";
})(ProjectV2SingleSelectFieldOptionColor || (exports.ProjectV2SingleSelectFieldOptionColor = ProjectV2SingleSelectFieldOptionColor = {}));
/** The possible states of a project v2. */
var ProjectV2State;
(function (ProjectV2State) {
    /** A project v2 that has been closed */
    ProjectV2State["Closed"] = "CLOSED";
    /** A project v2 that is still open */
    ProjectV2State["Open"] = "OPEN";
})(ProjectV2State || (exports.ProjectV2State = ProjectV2State = {}));
/** The layout of a project v2 view. */
var ProjectV2ViewLayout;
(function (ProjectV2ViewLayout) {
    /** Board layout */
    ProjectV2ViewLayout["BoardLayout"] = "BOARD_LAYOUT";
    /** Roadmap layout */
    ProjectV2ViewLayout["RoadmapLayout"] = "ROADMAP_LAYOUT";
    /** Table layout */
    ProjectV2ViewLayout["TableLayout"] = "TABLE_LAYOUT";
})(ProjectV2ViewLayout || (exports.ProjectV2ViewLayout = ProjectV2ViewLayout = {}));
/** Properties by which project v2 view connections can be ordered. */
var ProjectV2ViewOrderField;
(function (ProjectV2ViewOrderField) {
    /** Order project v2 views by creation time */
    ProjectV2ViewOrderField["CreatedAt"] = "CREATED_AT";
    /** Order project v2 views by name */
    ProjectV2ViewOrderField["Name"] = "NAME";
    /** Order project v2 views by position */
    ProjectV2ViewOrderField["Position"] = "POSITION";
})(ProjectV2ViewOrderField || (exports.ProjectV2ViewOrderField = ProjectV2ViewOrderField = {}));
/** Properties by which project workflows can be ordered. */
var ProjectV2WorkflowsOrderField;
(function (ProjectV2WorkflowsOrderField) {
    /** The workflows' date and time of creation */
    ProjectV2WorkflowsOrderField["CreatedAt"] = "CREATED_AT";
    /** The workflows' name */
    ProjectV2WorkflowsOrderField["Name"] = "NAME";
    /** The workflows' number */
    ProjectV2WorkflowsOrderField["Number"] = "NUMBER";
    /** The workflows' date and time of update */
    ProjectV2WorkflowsOrderField["UpdatedAt"] = "UPDATED_AT";
})(ProjectV2WorkflowsOrderField || (exports.ProjectV2WorkflowsOrderField = ProjectV2WorkflowsOrderField = {}));
/** The possible methods for updating a pull request's head branch with the base branch. */
var PullRequestBranchUpdateMethod;
(function (PullRequestBranchUpdateMethod) {
    /** Update branch via merge */
    PullRequestBranchUpdateMethod["Merge"] = "MERGE";
    /** Update branch via rebase */
    PullRequestBranchUpdateMethod["Rebase"] = "REBASE";
})(PullRequestBranchUpdateMethod || (exports.PullRequestBranchUpdateMethod = PullRequestBranchUpdateMethod = {}));
/** Represents available types of methods to use when merging a pull request. */
var PullRequestMergeMethod;
(function (PullRequestMergeMethod) {
    /** Add all commits from the head branch to the base branch with a merge commit. */
    PullRequestMergeMethod["Merge"] = "MERGE";
    /** Add all commits from the head branch onto the base branch individually. */
    PullRequestMergeMethod["Rebase"] = "REBASE";
    /** Combine all commits from the head branch into a single commit in the base branch. */
    PullRequestMergeMethod["Squash"] = "SQUASH";
})(PullRequestMergeMethod || (exports.PullRequestMergeMethod = PullRequestMergeMethod = {}));
/** Properties by which pull_requests connections can be ordered. */
var PullRequestOrderField;
(function (PullRequestOrderField) {
    /** Order pull_requests by creation time */
    PullRequestOrderField["CreatedAt"] = "CREATED_AT";
    /** Order pull_requests by update time */
    PullRequestOrderField["UpdatedAt"] = "UPDATED_AT";
})(PullRequestOrderField || (exports.PullRequestOrderField = PullRequestOrderField = {}));
/** The possible states of a pull request review comment. */
var PullRequestReviewCommentState;
(function (PullRequestReviewCommentState) {
    /** A comment that is part of a pending review */
    PullRequestReviewCommentState["Pending"] = "PENDING";
    /** A comment that is part of a submitted review */
    PullRequestReviewCommentState["Submitted"] = "SUBMITTED";
})(PullRequestReviewCommentState || (exports.PullRequestReviewCommentState = PullRequestReviewCommentState = {}));
/** The review status of a pull request. */
var PullRequestReviewDecision;
(function (PullRequestReviewDecision) {
    /** The pull request has received an approving review. */
    PullRequestReviewDecision["Approved"] = "APPROVED";
    /** Changes have been requested on the pull request. */
    PullRequestReviewDecision["ChangesRequested"] = "CHANGES_REQUESTED";
    /** A review is required before the pull request can be merged. */
    PullRequestReviewDecision["ReviewRequired"] = "REVIEW_REQUIRED";
})(PullRequestReviewDecision || (exports.PullRequestReviewDecision = PullRequestReviewDecision = {}));
/** The possible events to perform on a pull request review. */
var PullRequestReviewEvent;
(function (PullRequestReviewEvent) {
    /** Submit feedback and approve merging these changes. */
    PullRequestReviewEvent["Approve"] = "APPROVE";
    /** Submit general feedback without explicit approval. */
    PullRequestReviewEvent["Comment"] = "COMMENT";
    /** Dismiss review so it now longer effects merging. */
    PullRequestReviewEvent["Dismiss"] = "DISMISS";
    /** Submit feedback that must be addressed before merging. */
    PullRequestReviewEvent["RequestChanges"] = "REQUEST_CHANGES";
})(PullRequestReviewEvent || (exports.PullRequestReviewEvent = PullRequestReviewEvent = {}));
/** The possible states of a pull request review. */
var PullRequestReviewState;
(function (PullRequestReviewState) {
    /** A review allowing the pull request to merge. */
    PullRequestReviewState["Approved"] = "APPROVED";
    /** A review blocking the pull request from merging. */
    PullRequestReviewState["ChangesRequested"] = "CHANGES_REQUESTED";
    /** An informational review. */
    PullRequestReviewState["Commented"] = "COMMENTED";
    /** A review that has been dismissed. */
    PullRequestReviewState["Dismissed"] = "DISMISSED";
    /** A review that has not yet been submitted. */
    PullRequestReviewState["Pending"] = "PENDING";
})(PullRequestReviewState || (exports.PullRequestReviewState = PullRequestReviewState = {}));
/** The possible subject types of a pull request review comment. */
var PullRequestReviewThreadSubjectType;
(function (PullRequestReviewThreadSubjectType) {
    /** A comment that has been made against the file of a pull request */
    PullRequestReviewThreadSubjectType["File"] = "FILE";
    /** A comment that has been made against the line of a pull request */
    PullRequestReviewThreadSubjectType["Line"] = "LINE";
})(PullRequestReviewThreadSubjectType || (exports.PullRequestReviewThreadSubjectType = PullRequestReviewThreadSubjectType = {}));
/** The possible states of a pull request. */
var PullRequestState;
(function (PullRequestState) {
    /** A pull request that has been closed without being merged. */
    PullRequestState["Closed"] = "CLOSED";
    /** A pull request that has been closed by being merged. */
    PullRequestState["Merged"] = "MERGED";
    /** A pull request that is still open. */
    PullRequestState["Open"] = "OPEN";
})(PullRequestState || (exports.PullRequestState = PullRequestState = {}));
/** The possible item types found in a timeline. */
var PullRequestTimelineItemsItemType;
(function (PullRequestTimelineItemsItemType) {
    /** Represents an 'added_to_merge_queue' event on a given pull request. */
    PullRequestTimelineItemsItemType["AddedToMergeQueueEvent"] = "ADDED_TO_MERGE_QUEUE_EVENT";
    /** Represents a 'added_to_project' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["AddedToProjectEvent"] = "ADDED_TO_PROJECT_EVENT";
    /** Represents an 'assigned' event on any assignable object. */
    PullRequestTimelineItemsItemType["AssignedEvent"] = "ASSIGNED_EVENT";
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
    /** Represents a 'base_ref_deleted' event on a given pull request. */
    PullRequestTimelineItemsItemType["BaseRefDeletedEvent"] = "BASE_REF_DELETED_EVENT";
    /** Represents a 'base_ref_force_pushed' event on a given pull request. */
    PullRequestTimelineItemsItemType["BaseRefForcePushedEvent"] = "BASE_REF_FORCE_PUSHED_EVENT";
    /** Represents a 'closed' event on any `Closable`. */
    PullRequestTimelineItemsItemType["ClosedEvent"] = "CLOSED_EVENT";
    /** Represents a 'comment_deleted' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["CommentDeletedEvent"] = "COMMENT_DELETED_EVENT";
    /** Represents a 'connected' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["ConnectedEvent"] = "CONNECTED_EVENT";
    /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["ConvertedNoteToIssueEvent"] = "CONVERTED_NOTE_TO_ISSUE_EVENT";
    /** Represents a 'converted_to_discussion' event on a given issue. */
    PullRequestTimelineItemsItemType["ConvertedToDiscussionEvent"] = "CONVERTED_TO_DISCUSSION_EVENT";
    /** Represents a 'convert_to_draft' event on a given pull request. */
    PullRequestTimelineItemsItemType["ConvertToDraftEvent"] = "CONVERT_TO_DRAFT_EVENT";
    /** Represents a mention made by one issue or pull request to another. */
    PullRequestTimelineItemsItemType["CrossReferencedEvent"] = "CROSS_REFERENCED_EVENT";
    /** Represents a 'demilestoned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["DemilestonedEvent"] = "DEMILESTONED_EVENT";
    /** Represents a 'deployed' event on a given pull request. */
    PullRequestTimelineItemsItemType["DeployedEvent"] = "DEPLOYED_EVENT";
    /** Represents a 'deployment_environment_changed' event on a given pull request. */
    PullRequestTimelineItemsItemType["DeploymentEnvironmentChangedEvent"] = "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT";
    /** Represents a 'disconnected' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["DisconnectedEvent"] = "DISCONNECTED_EVENT";
    /** Represents a 'head_ref_deleted' event on a given pull request. */
    PullRequestTimelineItemsItemType["HeadRefDeletedEvent"] = "HEAD_REF_DELETED_EVENT";
    /** Represents a 'head_ref_force_pushed' event on a given pull request. */
    PullRequestTimelineItemsItemType["HeadRefForcePushedEvent"] = "HEAD_REF_FORCE_PUSHED_EVENT";
    /** Represents a 'head_ref_restored' event on a given pull request. */
    PullRequestTimelineItemsItemType["HeadRefRestoredEvent"] = "HEAD_REF_RESTORED_EVENT";
    /** Represents a comment on an Issue. */
    PullRequestTimelineItemsItemType["IssueComment"] = "ISSUE_COMMENT";
    /** Represents a 'labeled' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["LabeledEvent"] = "LABELED_EVENT";
    /** Represents a 'locked' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["LockedEvent"] = "LOCKED_EVENT";
    /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["MarkedAsDuplicateEvent"] = "MARKED_AS_DUPLICATE_EVENT";
    /** Represents a 'mentioned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["MentionedEvent"] = "MENTIONED_EVENT";
    /** Represents a 'merged' event on a given pull request. */
    PullRequestTimelineItemsItemType["MergedEvent"] = "MERGED_EVENT";
    /** Represents a 'milestoned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["MilestonedEvent"] = "MILESTONED_EVENT";
    /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["MovedColumnsInProjectEvent"] = "MOVED_COLUMNS_IN_PROJECT_EVENT";
    /** Represents a 'pinned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["PinnedEvent"] = "PINNED_EVENT";
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
    /** Represents a 'ready_for_review' event on a given pull request. */
    PullRequestTimelineItemsItemType["ReadyForReviewEvent"] = "READY_FOR_REVIEW_EVENT";
    /** Represents a 'referenced' event on a given `ReferencedSubject`. */
    PullRequestTimelineItemsItemType["ReferencedEvent"] = "REFERENCED_EVENT";
    /** Represents a 'removed_from_merge_queue' event on a given pull request. */
    PullRequestTimelineItemsItemType["RemovedFromMergeQueueEvent"] = "REMOVED_FROM_MERGE_QUEUE_EVENT";
    /** Represents a 'removed_from_project' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["RemovedFromProjectEvent"] = "REMOVED_FROM_PROJECT_EVENT";
    /** Represents a 'renamed' event on a given issue or pull request */
    PullRequestTimelineItemsItemType["RenamedTitleEvent"] = "RENAMED_TITLE_EVENT";
    /** Represents a 'reopened' event on any `Closable`. */
    PullRequestTimelineItemsItemType["ReopenedEvent"] = "REOPENED_EVENT";
    /** Represents a 'review_dismissed' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["ReviewDismissedEvent"] = "REVIEW_DISMISSED_EVENT";
    /** Represents an 'review_requested' event on a given pull request. */
    PullRequestTimelineItemsItemType["ReviewRequestedEvent"] = "REVIEW_REQUESTED_EVENT";
    /** Represents an 'review_request_removed' event on a given pull request. */
    PullRequestTimelineItemsItemType["ReviewRequestRemovedEvent"] = "REVIEW_REQUEST_REMOVED_EVENT";
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
    /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["UnmarkedAsDuplicateEvent"] = "UNMARKED_AS_DUPLICATE_EVENT";
    /** Represents an 'unpinned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["UnpinnedEvent"] = "UNPINNED_EVENT";
    /** Represents an 'unsubscribed' event on a given `Subscribable`. */
    PullRequestTimelineItemsItemType["UnsubscribedEvent"] = "UNSUBSCRIBED_EVENT";
    /** Represents a 'user_blocked' event on a given user. */
    PullRequestTimelineItemsItemType["UserBlockedEvent"] = "USER_BLOCKED_EVENT";
})(PullRequestTimelineItemsItemType || (exports.PullRequestTimelineItemsItemType = PullRequestTimelineItemsItemType = {}));
/** The possible target states when updating a pull request. */
var PullRequestUpdateState;
(function (PullRequestUpdateState) {
    /** A pull request that has been closed without being merged. */
    PullRequestUpdateState["Closed"] = "CLOSED";
    /** A pull request that is still open. */
    PullRequestUpdateState["Open"] = "OPEN";
})(PullRequestUpdateState || (exports.PullRequestUpdateState = PullRequestUpdateState = {}));
/** Emojis that can be attached to Issues, Pull Requests and Comments. */
var ReactionContent;
(function (ReactionContent) {
    /** Represents the `:confused:` emoji. */
    ReactionContent["Confused"] = "CONFUSED";
    /** Represents the `:eyes:` emoji. */
    ReactionContent["Eyes"] = "EYES";
    /** Represents the `:heart:` emoji. */
    ReactionContent["Heart"] = "HEART";
    /** Represents the `:hooray:` emoji. */
    ReactionContent["Hooray"] = "HOORAY";
    /** Represents the `:laugh:` emoji. */
    ReactionContent["Laugh"] = "LAUGH";
    /** Represents the `:rocket:` emoji. */
    ReactionContent["Rocket"] = "ROCKET";
    /** Represents the `:-1:` emoji. */
    ReactionContent["ThumbsDown"] = "THUMBS_DOWN";
    /** Represents the `:+1:` emoji. */
    ReactionContent["ThumbsUp"] = "THUMBS_UP";
})(ReactionContent || (exports.ReactionContent = ReactionContent = {}));
/** A list of fields that reactions can be ordered by. */
var ReactionOrderField;
(function (ReactionOrderField) {
    /** Allows ordering a list of reactions by when they were created. */
    ReactionOrderField["CreatedAt"] = "CREATED_AT";
})(ReactionOrderField || (exports.ReactionOrderField = ReactionOrderField = {}));
/** Properties by which ref connections can be ordered. */
var RefOrderField;
(function (RefOrderField) {
    /** Order refs by their alphanumeric name */
    RefOrderField["Alphabetical"] = "ALPHABETICAL";
    /** Order refs by underlying commit date if the ref prefix is refs/tags/ */
    RefOrderField["TagCommitDate"] = "TAG_COMMIT_DATE";
})(RefOrderField || (exports.RefOrderField = RefOrderField = {}));
/** Properties by which release connections can be ordered. */
var ReleaseOrderField;
(function (ReleaseOrderField) {
    /** Order releases by creation time */
    ReleaseOrderField["CreatedAt"] = "CREATED_AT";
    /** Order releases alphabetically by name */
    ReleaseOrderField["Name"] = "NAME";
})(ReleaseOrderField || (exports.ReleaseOrderField = ReleaseOrderField = {}));
/** The privacy of a repository */
var RepoAccessAuditEntryVisibility;
(function (RepoAccessAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoAccessAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoAccessAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoAccessAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoAccessAuditEntryVisibility || (exports.RepoAccessAuditEntryVisibility = RepoAccessAuditEntryVisibility = {}));
/** The privacy of a repository */
var RepoAddMemberAuditEntryVisibility;
(function (RepoAddMemberAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoAddMemberAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoAddMemberAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoAddMemberAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoAddMemberAuditEntryVisibility || (exports.RepoAddMemberAuditEntryVisibility = RepoAddMemberAuditEntryVisibility = {}));
/** The privacy of a repository */
var RepoArchivedAuditEntryVisibility;
(function (RepoArchivedAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoArchivedAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoArchivedAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoArchivedAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoArchivedAuditEntryVisibility || (exports.RepoArchivedAuditEntryVisibility = RepoArchivedAuditEntryVisibility = {}));
/** The merge options available for pull requests to this repository. */
var RepoChangeMergeSettingAuditEntryMergeType;
(function (RepoChangeMergeSettingAuditEntryMergeType) {
    /** The pull request is added to the base branch in a merge commit. */
    RepoChangeMergeSettingAuditEntryMergeType["Merge"] = "MERGE";
    /** Commits from the pull request are added onto the base branch individually without a merge commit. */
    RepoChangeMergeSettingAuditEntryMergeType["Rebase"] = "REBASE";
    /** The pull request's commits are squashed into a single commit before they are merged to the base branch. */
    RepoChangeMergeSettingAuditEntryMergeType["Squash"] = "SQUASH";
})(RepoChangeMergeSettingAuditEntryMergeType || (exports.RepoChangeMergeSettingAuditEntryMergeType = RepoChangeMergeSettingAuditEntryMergeType = {}));
/** The privacy of a repository */
var RepoCreateAuditEntryVisibility;
(function (RepoCreateAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoCreateAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoCreateAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoCreateAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoCreateAuditEntryVisibility || (exports.RepoCreateAuditEntryVisibility = RepoCreateAuditEntryVisibility = {}));
/** The privacy of a repository */
var RepoDestroyAuditEntryVisibility;
(function (RepoDestroyAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoDestroyAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoDestroyAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoDestroyAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoDestroyAuditEntryVisibility || (exports.RepoDestroyAuditEntryVisibility = RepoDestroyAuditEntryVisibility = {}));
/** The privacy of a repository */
var RepoRemoveMemberAuditEntryVisibility;
(function (RepoRemoveMemberAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoRemoveMemberAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoRemoveMemberAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoRemoveMemberAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoRemoveMemberAuditEntryVisibility || (exports.RepoRemoveMemberAuditEntryVisibility = RepoRemoveMemberAuditEntryVisibility = {}));
/** The reasons a piece of content can be reported or minimized. */
var ReportedContentClassifiers;
(function (ReportedContentClassifiers) {
    /** An abusive or harassing piece of content */
    ReportedContentClassifiers["Abuse"] = "ABUSE";
    /** A duplicated piece of content */
    ReportedContentClassifiers["Duplicate"] = "DUPLICATE";
    /** An irrelevant piece of content */
    ReportedContentClassifiers["OffTopic"] = "OFF_TOPIC";
    /** An outdated piece of content */
    ReportedContentClassifiers["Outdated"] = "OUTDATED";
    /** The content has been resolved */
    ReportedContentClassifiers["Resolved"] = "RESOLVED";
    /** A spammy piece of content */
    ReportedContentClassifiers["Spam"] = "SPAM";
})(ReportedContentClassifiers || (exports.ReportedContentClassifiers = ReportedContentClassifiers = {}));
/** The affiliation of a user to a repository */
var RepositoryAffiliation;
(function (RepositoryAffiliation) {
    /** Repositories that the user has been added to as a collaborator. */
    RepositoryAffiliation["Collaborator"] = "COLLABORATOR";
    /** Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on. */
    RepositoryAffiliation["OrganizationMember"] = "ORGANIZATION_MEMBER";
    /** Repositories that are owned by the authenticated user. */
    RepositoryAffiliation["Owner"] = "OWNER";
})(RepositoryAffiliation || (exports.RepositoryAffiliation = RepositoryAffiliation = {}));
/** The reason a repository is listed as 'contributed'. */
var RepositoryContributionType;
(function (RepositoryContributionType) {
    /** Created a commit */
    RepositoryContributionType["Commit"] = "COMMIT";
    /** Created an issue */
    RepositoryContributionType["Issue"] = "ISSUE";
    /** Created a pull request */
    RepositoryContributionType["PullRequest"] = "PULL_REQUEST";
    /** Reviewed a pull request */
    RepositoryContributionType["PullRequestReview"] = "PULL_REQUEST_REVIEW";
    /** Created the repository */
    RepositoryContributionType["Repository"] = "REPOSITORY";
})(RepositoryContributionType || (exports.RepositoryContributionType = RepositoryContributionType = {}));
/** A repository interaction limit. */
var RepositoryInteractionLimit;
(function (RepositoryInteractionLimit) {
    /** Users that are not collaborators will not be able to interact with the repository. */
    RepositoryInteractionLimit["CollaboratorsOnly"] = "COLLABORATORS_ONLY";
    /** Users that have not previously committed to a repository’s default branch will be unable to interact with the repository. */
    RepositoryInteractionLimit["ContributorsOnly"] = "CONTRIBUTORS_ONLY";
    /** Users that have recently created their account will be unable to interact with the repository. */
    RepositoryInteractionLimit["ExistingUsers"] = "EXISTING_USERS";
    /** No interaction limits are enabled. */
    RepositoryInteractionLimit["NoLimit"] = "NO_LIMIT";
})(RepositoryInteractionLimit || (exports.RepositoryInteractionLimit = RepositoryInteractionLimit = {}));
/** The length for a repository interaction limit to be enabled for. */
var RepositoryInteractionLimitExpiry;
(function (RepositoryInteractionLimitExpiry) {
    /** The interaction limit will expire after 1 day. */
    RepositoryInteractionLimitExpiry["OneDay"] = "ONE_DAY";
    /** The interaction limit will expire after 1 month. */
    RepositoryInteractionLimitExpiry["OneMonth"] = "ONE_MONTH";
    /** The interaction limit will expire after 1 week. */
    RepositoryInteractionLimitExpiry["OneWeek"] = "ONE_WEEK";
    /** The interaction limit will expire after 6 months. */
    RepositoryInteractionLimitExpiry["SixMonths"] = "SIX_MONTHS";
    /** The interaction limit will expire after 3 days. */
    RepositoryInteractionLimitExpiry["ThreeDays"] = "THREE_DAYS";
})(RepositoryInteractionLimitExpiry || (exports.RepositoryInteractionLimitExpiry = RepositoryInteractionLimitExpiry = {}));
/** Indicates where an interaction limit is configured. */
var RepositoryInteractionLimitOrigin;
(function (RepositoryInteractionLimitOrigin) {
    /** A limit that is configured at the organization level. */
    RepositoryInteractionLimitOrigin["Organization"] = "ORGANIZATION";
    /** A limit that is configured at the repository level. */
    RepositoryInteractionLimitOrigin["Repository"] = "REPOSITORY";
    /** A limit that is configured at the user-wide level. */
    RepositoryInteractionLimitOrigin["User"] = "USER";
})(RepositoryInteractionLimitOrigin || (exports.RepositoryInteractionLimitOrigin = RepositoryInteractionLimitOrigin = {}));
/** Properties by which repository invitation connections can be ordered. */
var RepositoryInvitationOrderField;
(function (RepositoryInvitationOrderField) {
    /** Order repository invitations by creation time */
    RepositoryInvitationOrderField["CreatedAt"] = "CREATED_AT";
})(RepositoryInvitationOrderField || (exports.RepositoryInvitationOrderField = RepositoryInvitationOrderField = {}));
/** The possible reasons a given repository could be in a locked state. */
var RepositoryLockReason;
(function (RepositoryLockReason) {
    /** The repository is locked due to a billing related reason. */
    RepositoryLockReason["Billing"] = "BILLING";
    /** The repository is locked due to a migration. */
    RepositoryLockReason["Migrating"] = "MIGRATING";
    /** The repository is locked due to a move. */
    RepositoryLockReason["Moving"] = "MOVING";
    /** The repository is locked due to a rename. */
    RepositoryLockReason["Rename"] = "RENAME";
    /** The repository is locked due to a trade controls related reason. */
    RepositoryLockReason["TradeRestriction"] = "TRADE_RESTRICTION";
})(RepositoryLockReason || (exports.RepositoryLockReason = RepositoryLockReason = {}));
/** Possible directions in which to order a list of repository migrations when provided an `orderBy` argument. */
var RepositoryMigrationOrderDirection;
(function (RepositoryMigrationOrderDirection) {
    /** Specifies an ascending order for a given `orderBy` argument. */
    RepositoryMigrationOrderDirection["Asc"] = "ASC";
    /** Specifies a descending order for a given `orderBy` argument. */
    RepositoryMigrationOrderDirection["Desc"] = "DESC";
})(RepositoryMigrationOrderDirection || (exports.RepositoryMigrationOrderDirection = RepositoryMigrationOrderDirection = {}));
/** Properties by which repository migrations can be ordered. */
var RepositoryMigrationOrderField;
(function (RepositoryMigrationOrderField) {
    /** Order mannequins why when they were created. */
    RepositoryMigrationOrderField["CreatedAt"] = "CREATED_AT";
})(RepositoryMigrationOrderField || (exports.RepositoryMigrationOrderField = RepositoryMigrationOrderField = {}));
/** Properties by which repository connections can be ordered. */
var RepositoryOrderField;
(function (RepositoryOrderField) {
    /** Order repositories by creation time */
    RepositoryOrderField["CreatedAt"] = "CREATED_AT";
    /** Order repositories by name */
    RepositoryOrderField["Name"] = "NAME";
    /** Order repositories by push time */
    RepositoryOrderField["PushedAt"] = "PUSHED_AT";
    /** Order repositories by number of stargazers */
    RepositoryOrderField["Stargazers"] = "STARGAZERS";
    /** Order repositories by update time */
    RepositoryOrderField["UpdatedAt"] = "UPDATED_AT";
})(RepositoryOrderField || (exports.RepositoryOrderField = RepositoryOrderField = {}));
/** The access level to a repository */
var RepositoryPermission;
(function (RepositoryPermission) {
    /** Can read, clone, and push to this repository. Can also manage issues, pull requests, and repository settings, including adding collaborators */
    RepositoryPermission["Admin"] = "ADMIN";
    /** Can read, clone, and push to this repository. They can also manage issues, pull requests, and some repository settings */
    RepositoryPermission["Maintain"] = "MAINTAIN";
    /** Can read and clone this repository. Can also open and comment on issues and pull requests */
    RepositoryPermission["Read"] = "READ";
    /** Can read and clone this repository. Can also manage issues and pull requests */
    RepositoryPermission["Triage"] = "TRIAGE";
    /** Can read, clone, and push to this repository. Can also manage issues and pull requests */
    RepositoryPermission["Write"] = "WRITE";
})(RepositoryPermission || (exports.RepositoryPermission = RepositoryPermission = {}));
/** The privacy of a repository */
var RepositoryPrivacy;
(function (RepositoryPrivacy) {
    /** Private */
    RepositoryPrivacy["Private"] = "PRIVATE";
    /** Public */
    RepositoryPrivacy["Public"] = "PUBLIC";
})(RepositoryPrivacy || (exports.RepositoryPrivacy = RepositoryPrivacy = {}));
/** The rule types supported in rulesets */
var RepositoryRuleType;
(function (RepositoryRuleType) {
    /** Branch name pattern */
    RepositoryRuleType["BranchNamePattern"] = "BRANCH_NAME_PATTERN";
    /** Committer email pattern */
    RepositoryRuleType["CommitterEmailPattern"] = "COMMITTER_EMAIL_PATTERN";
    /** Commit author email pattern */
    RepositoryRuleType["CommitAuthorEmailPattern"] = "COMMIT_AUTHOR_EMAIL_PATTERN";
    /** Commit message pattern */
    RepositoryRuleType["CommitMessagePattern"] = "COMMIT_MESSAGE_PATTERN";
    /** Only allow users with bypass permission to create matching refs. */
    RepositoryRuleType["Creation"] = "CREATION";
    /** Only allow users with bypass permissions to delete matching refs. */
    RepositoryRuleType["Deletion"] = "DELETION";
    /** Prevent users with push access from force pushing to refs. */
    RepositoryRuleType["NonFastForward"] = "NON_FAST_FORWARD";
    /** Require all commits be made to a non-target branch and submitted via a pull request before they can be merged. */
    RepositoryRuleType["PullRequest"] = "PULL_REQUEST";
    /** Choose which environments must be successfully deployed to before refs can be merged into a branch that matches this rule. */
    RepositoryRuleType["RequiredDeployments"] = "REQUIRED_DEPLOYMENTS";
    /** Prevent merge commits from being pushed to matching refs. */
    RepositoryRuleType["RequiredLinearHistory"] = "REQUIRED_LINEAR_HISTORY";
    /** Commits pushed to matching refs must have verified signatures. */
    RepositoryRuleType["RequiredSignatures"] = "REQUIRED_SIGNATURES";
    /** Choose which status checks must pass before branches can be merged into a branch that matches this rule. When enabled, commits must first be pushed to another branch, then merged or pushed directly to a ref that matches this rule after status checks have passed. */
    RepositoryRuleType["RequiredStatusChecks"] = "REQUIRED_STATUS_CHECKS";
    /** Tag name pattern */
    RepositoryRuleType["TagNamePattern"] = "TAG_NAME_PATTERN";
    /** Only allow users with bypass permission to update matching refs. */
    RepositoryRuleType["Update"] = "UPDATE";
})(RepositoryRuleType || (exports.RepositoryRuleType = RepositoryRuleType = {}));
/** The bypass mode for a specific actor on a ruleset. */
var RepositoryRulesetBypassActorBypassMode;
(function (RepositoryRulesetBypassActorBypassMode) {
    /** The actor can always bypass rules */
    RepositoryRulesetBypassActorBypassMode["Always"] = "ALWAYS";
    /** The actor can only bypass rules via a pull request */
    RepositoryRulesetBypassActorBypassMode["PullRequest"] = "PULL_REQUEST";
})(RepositoryRulesetBypassActorBypassMode || (exports.RepositoryRulesetBypassActorBypassMode = RepositoryRulesetBypassActorBypassMode = {}));
/** The targets supported for rulesets */
var RepositoryRulesetTarget;
(function (RepositoryRulesetTarget) {
    /** Branch */
    RepositoryRulesetTarget["Branch"] = "BRANCH";
    /** Tag */
    RepositoryRulesetTarget["Tag"] = "TAG";
})(RepositoryRulesetTarget || (exports.RepositoryRulesetTarget = RepositoryRulesetTarget = {}));
/** The repository's visibility level. */
var RepositoryVisibility;
(function (RepositoryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepositoryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepositoryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepositoryVisibility["Public"] = "PUBLIC";
})(RepositoryVisibility || (exports.RepositoryVisibility = RepositoryVisibility = {}));
/** The possible scopes of an alert's dependency. */
var RepositoryVulnerabilityAlertDependencyScope;
(function (RepositoryVulnerabilityAlertDependencyScope) {
    /** A dependency that is only used in development */
    RepositoryVulnerabilityAlertDependencyScope["Development"] = "DEVELOPMENT";
    /** A dependency that is leveraged during application runtime */
    RepositoryVulnerabilityAlertDependencyScope["Runtime"] = "RUNTIME";
})(RepositoryVulnerabilityAlertDependencyScope || (exports.RepositoryVulnerabilityAlertDependencyScope = RepositoryVulnerabilityAlertDependencyScope = {}));
/** The possible states of an alert */
var RepositoryVulnerabilityAlertState;
(function (RepositoryVulnerabilityAlertState) {
    /** An alert that has been automatically closed by Dependabot. */
    RepositoryVulnerabilityAlertState["AutoDismissed"] = "AUTO_DISMISSED";
    /** An alert that has been manually closed by a user. */
    RepositoryVulnerabilityAlertState["Dismissed"] = "DISMISSED";
    /** An alert that has been resolved by a code change. */
    RepositoryVulnerabilityAlertState["Fixed"] = "FIXED";
    /** An alert that is still open. */
    RepositoryVulnerabilityAlertState["Open"] = "OPEN";
})(RepositoryVulnerabilityAlertState || (exports.RepositoryVulnerabilityAlertState = RepositoryVulnerabilityAlertState = {}));
/** The possible states that can be requested when creating a check run. */
var RequestableCheckStatusState;
(function (RequestableCheckStatusState) {
    /** The check suite or run has been completed. */
    RequestableCheckStatusState["Completed"] = "COMPLETED";
    /** The check suite or run is in progress. */
    RequestableCheckStatusState["InProgress"] = "IN_PROGRESS";
    /** The check suite or run is in pending state. */
    RequestableCheckStatusState["Pending"] = "PENDING";
    /** The check suite or run has been queued. */
    RequestableCheckStatusState["Queued"] = "QUEUED";
    /** The check suite or run is in waiting state. */
    RequestableCheckStatusState["Waiting"] = "WAITING";
})(RequestableCheckStatusState || (exports.RequestableCheckStatusState = RequestableCheckStatusState = {}));
/** Possible roles a user may have in relation to an organization. */
var RoleInOrganization;
(function (RoleInOrganization) {
    /** A user who is a direct member of the organization. */
    RoleInOrganization["DirectMember"] = "DIRECT_MEMBER";
    /** A user with full administrative access to the organization. */
    RoleInOrganization["Owner"] = "OWNER";
    /** A user who is unaffiliated with the organization. */
    RoleInOrganization["Unaffiliated"] = "UNAFFILIATED";
})(RoleInOrganization || (exports.RoleInOrganization = RoleInOrganization = {}));
/** The level of enforcement for a rule or ruleset. */
var RuleEnforcement;
(function (RuleEnforcement) {
    /** Rules will be enforced */
    RuleEnforcement["Active"] = "ACTIVE";
    /** Do not evaluate or enforce rules */
    RuleEnforcement["Disabled"] = "DISABLED";
    /** Allow admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (`evaluate` is only available with GitHub Enterprise). */
    RuleEnforcement["Evaluate"] = "EVALUATE";
})(RuleEnforcement || (exports.RuleEnforcement = RuleEnforcement = {}));
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
})(SamlDigestAlgorithm || (exports.SamlDigestAlgorithm = SamlDigestAlgorithm = {}));
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
})(SamlSignatureAlgorithm || (exports.SamlSignatureAlgorithm = SamlSignatureAlgorithm = {}));
/** Properties by which saved reply connections can be ordered. */
var SavedReplyOrderField;
(function (SavedReplyOrderField) {
    /** Order saved reply by when they were updated. */
    SavedReplyOrderField["UpdatedAt"] = "UPDATED_AT";
})(SavedReplyOrderField || (exports.SavedReplyOrderField = SavedReplyOrderField = {}));
/** Represents the individual results of a search. */
var SearchType;
(function (SearchType) {
    /** Returns matching discussions in repositories. */
    SearchType["Discussion"] = "DISCUSSION";
    /** Returns results matching issues in repositories. */
    SearchType["Issue"] = "ISSUE";
    /** Returns results matching repositories. */
    SearchType["Repository"] = "REPOSITORY";
    /** Returns results matching users and organizations on GitHub. */
    SearchType["User"] = "USER";
})(SearchType || (exports.SearchType = SearchType = {}));
/** Classification of the advisory. */
var SecurityAdvisoryClassification;
(function (SecurityAdvisoryClassification) {
    /** Classification of general advisories. */
    SecurityAdvisoryClassification["General"] = "GENERAL";
    /** Classification of malware advisories. */
    SecurityAdvisoryClassification["Malware"] = "MALWARE";
})(SecurityAdvisoryClassification || (exports.SecurityAdvisoryClassification = SecurityAdvisoryClassification = {}));
/** The possible ecosystems of a security vulnerability's package. */
var SecurityAdvisoryEcosystem;
(function (SecurityAdvisoryEcosystem) {
    /** GitHub Actions */
    SecurityAdvisoryEcosystem["Actions"] = "ACTIONS";
    /** PHP packages hosted at packagist.org */
    SecurityAdvisoryEcosystem["Composer"] = "COMPOSER";
    /** Erlang/Elixir packages hosted at hex.pm */
    SecurityAdvisoryEcosystem["Erlang"] = "ERLANG";
    /** Go modules */
    SecurityAdvisoryEcosystem["Go"] = "GO";
    /** Java artifacts hosted at the Maven central repository */
    SecurityAdvisoryEcosystem["Maven"] = "MAVEN";
    /** JavaScript packages hosted at npmjs.com */
    SecurityAdvisoryEcosystem["Npm"] = "NPM";
    /** .NET packages hosted at the NuGet Gallery */
    SecurityAdvisoryEcosystem["Nuget"] = "NUGET";
    /** Python packages hosted at PyPI.org */
    SecurityAdvisoryEcosystem["Pip"] = "PIP";
    /** Dart packages hosted at pub.dev */
    SecurityAdvisoryEcosystem["Pub"] = "PUB";
    /** Ruby gems hosted at RubyGems.org */
    SecurityAdvisoryEcosystem["Rubygems"] = "RUBYGEMS";
    /** Rust crates */
    SecurityAdvisoryEcosystem["Rust"] = "RUST";
    /** Swift packages */
    SecurityAdvisoryEcosystem["Swift"] = "SWIFT";
})(SecurityAdvisoryEcosystem || (exports.SecurityAdvisoryEcosystem = SecurityAdvisoryEcosystem = {}));
/** Identifier formats available for advisories. */
var SecurityAdvisoryIdentifierType;
(function (SecurityAdvisoryIdentifierType) {
    /** Common Vulnerabilities and Exposures Identifier. */
    SecurityAdvisoryIdentifierType["Cve"] = "CVE";
    /** GitHub Security Advisory ID. */
    SecurityAdvisoryIdentifierType["Ghsa"] = "GHSA";
})(SecurityAdvisoryIdentifierType || (exports.SecurityAdvisoryIdentifierType = SecurityAdvisoryIdentifierType = {}));
/** Properties by which security advisory connections can be ordered. */
var SecurityAdvisoryOrderField;
(function (SecurityAdvisoryOrderField) {
    /** Order advisories by publication time */
    SecurityAdvisoryOrderField["PublishedAt"] = "PUBLISHED_AT";
    /** Order advisories by update time */
    SecurityAdvisoryOrderField["UpdatedAt"] = "UPDATED_AT";
})(SecurityAdvisoryOrderField || (exports.SecurityAdvisoryOrderField = SecurityAdvisoryOrderField = {}));
/** Severity of the vulnerability. */
var SecurityAdvisorySeverity;
(function (SecurityAdvisorySeverity) {
    /** Critical. */
    SecurityAdvisorySeverity["Critical"] = "CRITICAL";
    /** High. */
    SecurityAdvisorySeverity["High"] = "HIGH";
    /** Low. */
    SecurityAdvisorySeverity["Low"] = "LOW";
    /** Moderate. */
    SecurityAdvisorySeverity["Moderate"] = "MODERATE";
})(SecurityAdvisorySeverity || (exports.SecurityAdvisorySeverity = SecurityAdvisorySeverity = {}));
/** Properties by which security vulnerability connections can be ordered. */
var SecurityVulnerabilityOrderField;
(function (SecurityVulnerabilityOrderField) {
    /** Order vulnerability by update time */
    SecurityVulnerabilityOrderField["UpdatedAt"] = "UPDATED_AT";
})(SecurityVulnerabilityOrderField || (exports.SecurityVulnerabilityOrderField = SecurityVulnerabilityOrderField = {}));
/** Software or company that hosts social media accounts. */
var SocialAccountProvider;
(function (SocialAccountProvider) {
    /** Social media and networking website. */
    SocialAccountProvider["Facebook"] = "FACEBOOK";
    /** Catch-all for social media providers that do not yet have specific handling. */
    SocialAccountProvider["Generic"] = "GENERIC";
    /** Fork of Mastodon with a greater focus on local posting. */
    SocialAccountProvider["Hometown"] = "HOMETOWN";
    /** Social media website with a focus on photo and video sharing. */
    SocialAccountProvider["Instagram"] = "INSTAGRAM";
    /** Professional networking website. */
    SocialAccountProvider["Linkedin"] = "LINKEDIN";
    /** Open-source federated microblogging service. */
    SocialAccountProvider["Mastodon"] = "MASTODON";
    /** Social news aggregation and discussion website. */
    SocialAccountProvider["Reddit"] = "REDDIT";
    /** Live-streaming service. */
    SocialAccountProvider["Twitch"] = "TWITCH";
    /** Microblogging website. */
    SocialAccountProvider["Twitter"] = "TWITTER";
    /** Online video platform. */
    SocialAccountProvider["Youtube"] = "YOUTUBE";
})(SocialAccountProvider || (exports.SocialAccountProvider = SocialAccountProvider = {}));
/** Properties by which sponsor connections can be ordered. */
var SponsorOrderField;
(function (SponsorOrderField) {
    /** Order sponsorable entities by login (username). */
    SponsorOrderField["Login"] = "LOGIN";
    /** Order sponsors by their relevance to the viewer. */
    SponsorOrderField["Relevance"] = "RELEVANCE";
})(SponsorOrderField || (exports.SponsorOrderField = SponsorOrderField = {}));
/** Properties by which sponsorable connections can be ordered. */
var SponsorableOrderField;
(function (SponsorableOrderField) {
    /** Order sponsorable entities by login (username). */
    SponsorableOrderField["Login"] = "LOGIN";
})(SponsorableOrderField || (exports.SponsorableOrderField = SponsorableOrderField = {}));
/** The possible actions that GitHub Sponsors activities can represent. */
var SponsorsActivityAction;
(function (SponsorsActivityAction) {
    /** The activity was cancelling a sponsorship. */
    SponsorsActivityAction["CancelledSponsorship"] = "CANCELLED_SPONSORSHIP";
    /** The activity was starting a sponsorship. */
    SponsorsActivityAction["NewSponsorship"] = "NEW_SPONSORSHIP";
    /** The activity was scheduling a downgrade or cancellation. */
    SponsorsActivityAction["PendingChange"] = "PENDING_CHANGE";
    /** The activity was funds being refunded to the sponsor or GitHub. */
    SponsorsActivityAction["Refund"] = "REFUND";
    /** The activity was disabling matching for a previously matched sponsorship. */
    SponsorsActivityAction["SponsorMatchDisabled"] = "SPONSOR_MATCH_DISABLED";
    /** The activity was changing the sponsorship tier, either directly by the sponsor or by a scheduled/pending change. */
    SponsorsActivityAction["TierChange"] = "TIER_CHANGE";
})(SponsorsActivityAction || (exports.SponsorsActivityAction = SponsorsActivityAction = {}));
/** Properties by which GitHub Sponsors activity connections can be ordered. */
var SponsorsActivityOrderField;
(function (SponsorsActivityOrderField) {
    /** Order activities by when they happened. */
    SponsorsActivityOrderField["Timestamp"] = "TIMESTAMP";
})(SponsorsActivityOrderField || (exports.SponsorsActivityOrderField = SponsorsActivityOrderField = {}));
/** The possible time periods for which Sponsors activities can be requested. */
var SponsorsActivityPeriod;
(function (SponsorsActivityPeriod) {
    /** Don't restrict the activity to any date range, include all activity. */
    SponsorsActivityPeriod["All"] = "ALL";
    /** The previous calendar day. */
    SponsorsActivityPeriod["Day"] = "DAY";
    /** The previous thirty days. */
    SponsorsActivityPeriod["Month"] = "MONTH";
    /** The previous seven days. */
    SponsorsActivityPeriod["Week"] = "WEEK";
})(SponsorsActivityPeriod || (exports.SponsorsActivityPeriod = SponsorsActivityPeriod = {}));
/** Represents countries or regions for billing and residence for a GitHub Sponsors profile. */
var SponsorsCountryOrRegionCode;
(function (SponsorsCountryOrRegionCode) {
    /** Andorra */
    SponsorsCountryOrRegionCode["Ad"] = "AD";
    /** United Arab Emirates */
    SponsorsCountryOrRegionCode["Ae"] = "AE";
    /** Afghanistan */
    SponsorsCountryOrRegionCode["Af"] = "AF";
    /** Antigua and Barbuda */
    SponsorsCountryOrRegionCode["Ag"] = "AG";
    /** Anguilla */
    SponsorsCountryOrRegionCode["Ai"] = "AI";
    /** Albania */
    SponsorsCountryOrRegionCode["Al"] = "AL";
    /** Armenia */
    SponsorsCountryOrRegionCode["Am"] = "AM";
    /** Angola */
    SponsorsCountryOrRegionCode["Ao"] = "AO";
    /** Antarctica */
    SponsorsCountryOrRegionCode["Aq"] = "AQ";
    /** Argentina */
    SponsorsCountryOrRegionCode["Ar"] = "AR";
    /** American Samoa */
    SponsorsCountryOrRegionCode["As"] = "AS";
    /** Austria */
    SponsorsCountryOrRegionCode["At"] = "AT";
    /** Australia */
    SponsorsCountryOrRegionCode["Au"] = "AU";
    /** Aruba */
    SponsorsCountryOrRegionCode["Aw"] = "AW";
    /** Åland */
    SponsorsCountryOrRegionCode["Ax"] = "AX";
    /** Azerbaijan */
    SponsorsCountryOrRegionCode["Az"] = "AZ";
    /** Bosnia and Herzegovina */
    SponsorsCountryOrRegionCode["Ba"] = "BA";
    /** Barbados */
    SponsorsCountryOrRegionCode["Bb"] = "BB";
    /** Bangladesh */
    SponsorsCountryOrRegionCode["Bd"] = "BD";
    /** Belgium */
    SponsorsCountryOrRegionCode["Be"] = "BE";
    /** Burkina Faso */
    SponsorsCountryOrRegionCode["Bf"] = "BF";
    /** Bulgaria */
    SponsorsCountryOrRegionCode["Bg"] = "BG";
    /** Bahrain */
    SponsorsCountryOrRegionCode["Bh"] = "BH";
    /** Burundi */
    SponsorsCountryOrRegionCode["Bi"] = "BI";
    /** Benin */
    SponsorsCountryOrRegionCode["Bj"] = "BJ";
    /** Saint Barthélemy */
    SponsorsCountryOrRegionCode["Bl"] = "BL";
    /** Bermuda */
    SponsorsCountryOrRegionCode["Bm"] = "BM";
    /** Brunei Darussalam */
    SponsorsCountryOrRegionCode["Bn"] = "BN";
    /** Bolivia */
    SponsorsCountryOrRegionCode["Bo"] = "BO";
    /** Bonaire, Sint Eustatius and Saba */
    SponsorsCountryOrRegionCode["Bq"] = "BQ";
    /** Brazil */
    SponsorsCountryOrRegionCode["Br"] = "BR";
    /** Bahamas */
    SponsorsCountryOrRegionCode["Bs"] = "BS";
    /** Bhutan */
    SponsorsCountryOrRegionCode["Bt"] = "BT";
    /** Bouvet Island */
    SponsorsCountryOrRegionCode["Bv"] = "BV";
    /** Botswana */
    SponsorsCountryOrRegionCode["Bw"] = "BW";
    /** Belarus */
    SponsorsCountryOrRegionCode["By"] = "BY";
    /** Belize */
    SponsorsCountryOrRegionCode["Bz"] = "BZ";
    /** Canada */
    SponsorsCountryOrRegionCode["Ca"] = "CA";
    /** Cocos (Keeling) Islands */
    SponsorsCountryOrRegionCode["Cc"] = "CC";
    /** Congo (Kinshasa) */
    SponsorsCountryOrRegionCode["Cd"] = "CD";
    /** Central African Republic */
    SponsorsCountryOrRegionCode["Cf"] = "CF";
    /** Congo (Brazzaville) */
    SponsorsCountryOrRegionCode["Cg"] = "CG";
    /** Switzerland */
    SponsorsCountryOrRegionCode["Ch"] = "CH";
    /** Côte d'Ivoire */
    SponsorsCountryOrRegionCode["Ci"] = "CI";
    /** Cook Islands */
    SponsorsCountryOrRegionCode["Ck"] = "CK";
    /** Chile */
    SponsorsCountryOrRegionCode["Cl"] = "CL";
    /** Cameroon */
    SponsorsCountryOrRegionCode["Cm"] = "CM";
    /** China */
    SponsorsCountryOrRegionCode["Cn"] = "CN";
    /** Colombia */
    SponsorsCountryOrRegionCode["Co"] = "CO";
    /** Costa Rica */
    SponsorsCountryOrRegionCode["Cr"] = "CR";
    /** Cape Verde */
    SponsorsCountryOrRegionCode["Cv"] = "CV";
    /** Curaçao */
    SponsorsCountryOrRegionCode["Cw"] = "CW";
    /** Christmas Island */
    SponsorsCountryOrRegionCode["Cx"] = "CX";
    /** Cyprus */
    SponsorsCountryOrRegionCode["Cy"] = "CY";
    /** Czech Republic */
    SponsorsCountryOrRegionCode["Cz"] = "CZ";
    /** Germany */
    SponsorsCountryOrRegionCode["De"] = "DE";
    /** Djibouti */
    SponsorsCountryOrRegionCode["Dj"] = "DJ";
    /** Denmark */
    SponsorsCountryOrRegionCode["Dk"] = "DK";
    /** Dominica */
    SponsorsCountryOrRegionCode["Dm"] = "DM";
    /** Dominican Republic */
    SponsorsCountryOrRegionCode["Do"] = "DO";
    /** Algeria */
    SponsorsCountryOrRegionCode["Dz"] = "DZ";
    /** Ecuador */
    SponsorsCountryOrRegionCode["Ec"] = "EC";
    /** Estonia */
    SponsorsCountryOrRegionCode["Ee"] = "EE";
    /** Egypt */
    SponsorsCountryOrRegionCode["Eg"] = "EG";
    /** Western Sahara */
    SponsorsCountryOrRegionCode["Eh"] = "EH";
    /** Eritrea */
    SponsorsCountryOrRegionCode["Er"] = "ER";
    /** Spain */
    SponsorsCountryOrRegionCode["Es"] = "ES";
    /** Ethiopia */
    SponsorsCountryOrRegionCode["Et"] = "ET";
    /** Finland */
    SponsorsCountryOrRegionCode["Fi"] = "FI";
    /** Fiji */
    SponsorsCountryOrRegionCode["Fj"] = "FJ";
    /** Falkland Islands */
    SponsorsCountryOrRegionCode["Fk"] = "FK";
    /** Micronesia */
    SponsorsCountryOrRegionCode["Fm"] = "FM";
    /** Faroe Islands */
    SponsorsCountryOrRegionCode["Fo"] = "FO";
    /** France */
    SponsorsCountryOrRegionCode["Fr"] = "FR";
    /** Gabon */
    SponsorsCountryOrRegionCode["Ga"] = "GA";
    /** United Kingdom */
    SponsorsCountryOrRegionCode["Gb"] = "GB";
    /** Grenada */
    SponsorsCountryOrRegionCode["Gd"] = "GD";
    /** Georgia */
    SponsorsCountryOrRegionCode["Ge"] = "GE";
    /** French Guiana */
    SponsorsCountryOrRegionCode["Gf"] = "GF";
    /** Guernsey */
    SponsorsCountryOrRegionCode["Gg"] = "GG";
    /** Ghana */
    SponsorsCountryOrRegionCode["Gh"] = "GH";
    /** Gibraltar */
    SponsorsCountryOrRegionCode["Gi"] = "GI";
    /** Greenland */
    SponsorsCountryOrRegionCode["Gl"] = "GL";
    /** Gambia */
    SponsorsCountryOrRegionCode["Gm"] = "GM";
    /** Guinea */
    SponsorsCountryOrRegionCode["Gn"] = "GN";
    /** Guadeloupe */
    SponsorsCountryOrRegionCode["Gp"] = "GP";
    /** Equatorial Guinea */
    SponsorsCountryOrRegionCode["Gq"] = "GQ";
    /** Greece */
    SponsorsCountryOrRegionCode["Gr"] = "GR";
    /** South Georgia and South Sandwich Islands */
    SponsorsCountryOrRegionCode["Gs"] = "GS";
    /** Guatemala */
    SponsorsCountryOrRegionCode["Gt"] = "GT";
    /** Guam */
    SponsorsCountryOrRegionCode["Gu"] = "GU";
    /** Guinea-Bissau */
    SponsorsCountryOrRegionCode["Gw"] = "GW";
    /** Guyana */
    SponsorsCountryOrRegionCode["Gy"] = "GY";
    /** Hong Kong */
    SponsorsCountryOrRegionCode["Hk"] = "HK";
    /** Heard and McDonald Islands */
    SponsorsCountryOrRegionCode["Hm"] = "HM";
    /** Honduras */
    SponsorsCountryOrRegionCode["Hn"] = "HN";
    /** Croatia */
    SponsorsCountryOrRegionCode["Hr"] = "HR";
    /** Haiti */
    SponsorsCountryOrRegionCode["Ht"] = "HT";
    /** Hungary */
    SponsorsCountryOrRegionCode["Hu"] = "HU";
    /** Indonesia */
    SponsorsCountryOrRegionCode["Id"] = "ID";
    /** Ireland */
    SponsorsCountryOrRegionCode["Ie"] = "IE";
    /** Israel */
    SponsorsCountryOrRegionCode["Il"] = "IL";
    /** Isle of Man */
    SponsorsCountryOrRegionCode["Im"] = "IM";
    /** India */
    SponsorsCountryOrRegionCode["In"] = "IN";
    /** British Indian Ocean Territory */
    SponsorsCountryOrRegionCode["Io"] = "IO";
    /** Iraq */
    SponsorsCountryOrRegionCode["Iq"] = "IQ";
    /** Iran */
    SponsorsCountryOrRegionCode["Ir"] = "IR";
    /** Iceland */
    SponsorsCountryOrRegionCode["Is"] = "IS";
    /** Italy */
    SponsorsCountryOrRegionCode["It"] = "IT";
    /** Jersey */
    SponsorsCountryOrRegionCode["Je"] = "JE";
    /** Jamaica */
    SponsorsCountryOrRegionCode["Jm"] = "JM";
    /** Jordan */
    SponsorsCountryOrRegionCode["Jo"] = "JO";
    /** Japan */
    SponsorsCountryOrRegionCode["Jp"] = "JP";
    /** Kenya */
    SponsorsCountryOrRegionCode["Ke"] = "KE";
    /** Kyrgyzstan */
    SponsorsCountryOrRegionCode["Kg"] = "KG";
    /** Cambodia */
    SponsorsCountryOrRegionCode["Kh"] = "KH";
    /** Kiribati */
    SponsorsCountryOrRegionCode["Ki"] = "KI";
    /** Comoros */
    SponsorsCountryOrRegionCode["Km"] = "KM";
    /** Saint Kitts and Nevis */
    SponsorsCountryOrRegionCode["Kn"] = "KN";
    /** Korea, South */
    SponsorsCountryOrRegionCode["Kr"] = "KR";
    /** Kuwait */
    SponsorsCountryOrRegionCode["Kw"] = "KW";
    /** Cayman Islands */
    SponsorsCountryOrRegionCode["Ky"] = "KY";
    /** Kazakhstan */
    SponsorsCountryOrRegionCode["Kz"] = "KZ";
    /** Laos */
    SponsorsCountryOrRegionCode["La"] = "LA";
    /** Lebanon */
    SponsorsCountryOrRegionCode["Lb"] = "LB";
    /** Saint Lucia */
    SponsorsCountryOrRegionCode["Lc"] = "LC";
    /** Liechtenstein */
    SponsorsCountryOrRegionCode["Li"] = "LI";
    /** Sri Lanka */
    SponsorsCountryOrRegionCode["Lk"] = "LK";
    /** Liberia */
    SponsorsCountryOrRegionCode["Lr"] = "LR";
    /** Lesotho */
    SponsorsCountryOrRegionCode["Ls"] = "LS";
    /** Lithuania */
    SponsorsCountryOrRegionCode["Lt"] = "LT";
    /** Luxembourg */
    SponsorsCountryOrRegionCode["Lu"] = "LU";
    /** Latvia */
    SponsorsCountryOrRegionCode["Lv"] = "LV";
    /** Libya */
    SponsorsCountryOrRegionCode["Ly"] = "LY";
    /** Morocco */
    SponsorsCountryOrRegionCode["Ma"] = "MA";
    /** Monaco */
    SponsorsCountryOrRegionCode["Mc"] = "MC";
    /** Moldova */
    SponsorsCountryOrRegionCode["Md"] = "MD";
    /** Montenegro */
    SponsorsCountryOrRegionCode["Me"] = "ME";
    /** Saint Martin (French part) */
    SponsorsCountryOrRegionCode["Mf"] = "MF";
    /** Madagascar */
    SponsorsCountryOrRegionCode["Mg"] = "MG";
    /** Marshall Islands */
    SponsorsCountryOrRegionCode["Mh"] = "MH";
    /** Macedonia */
    SponsorsCountryOrRegionCode["Mk"] = "MK";
    /** Mali */
    SponsorsCountryOrRegionCode["Ml"] = "ML";
    /** Myanmar */
    SponsorsCountryOrRegionCode["Mm"] = "MM";
    /** Mongolia */
    SponsorsCountryOrRegionCode["Mn"] = "MN";
    /** Macau */
    SponsorsCountryOrRegionCode["Mo"] = "MO";
    /** Northern Mariana Islands */
    SponsorsCountryOrRegionCode["Mp"] = "MP";
    /** Martinique */
    SponsorsCountryOrRegionCode["Mq"] = "MQ";
    /** Mauritania */
    SponsorsCountryOrRegionCode["Mr"] = "MR";
    /** Montserrat */
    SponsorsCountryOrRegionCode["Ms"] = "MS";
    /** Malta */
    SponsorsCountryOrRegionCode["Mt"] = "MT";
    /** Mauritius */
    SponsorsCountryOrRegionCode["Mu"] = "MU";
    /** Maldives */
    SponsorsCountryOrRegionCode["Mv"] = "MV";
    /** Malawi */
    SponsorsCountryOrRegionCode["Mw"] = "MW";
    /** Mexico */
    SponsorsCountryOrRegionCode["Mx"] = "MX";
    /** Malaysia */
    SponsorsCountryOrRegionCode["My"] = "MY";
    /** Mozambique */
    SponsorsCountryOrRegionCode["Mz"] = "MZ";
    /** Namibia */
    SponsorsCountryOrRegionCode["Na"] = "NA";
    /** New Caledonia */
    SponsorsCountryOrRegionCode["Nc"] = "NC";
    /** Niger */
    SponsorsCountryOrRegionCode["Ne"] = "NE";
    /** Norfolk Island */
    SponsorsCountryOrRegionCode["Nf"] = "NF";
    /** Nigeria */
    SponsorsCountryOrRegionCode["Ng"] = "NG";
    /** Nicaragua */
    SponsorsCountryOrRegionCode["Ni"] = "NI";
    /** Netherlands */
    SponsorsCountryOrRegionCode["Nl"] = "NL";
    /** Norway */
    SponsorsCountryOrRegionCode["No"] = "NO";
    /** Nepal */
    SponsorsCountryOrRegionCode["Np"] = "NP";
    /** Nauru */
    SponsorsCountryOrRegionCode["Nr"] = "NR";
    /** Niue */
    SponsorsCountryOrRegionCode["Nu"] = "NU";
    /** New Zealand */
    SponsorsCountryOrRegionCode["Nz"] = "NZ";
    /** Oman */
    SponsorsCountryOrRegionCode["Om"] = "OM";
    /** Panama */
    SponsorsCountryOrRegionCode["Pa"] = "PA";
    /** Peru */
    SponsorsCountryOrRegionCode["Pe"] = "PE";
    /** French Polynesia */
    SponsorsCountryOrRegionCode["Pf"] = "PF";
    /** Papua New Guinea */
    SponsorsCountryOrRegionCode["Pg"] = "PG";
    /** Philippines */
    SponsorsCountryOrRegionCode["Ph"] = "PH";
    /** Pakistan */
    SponsorsCountryOrRegionCode["Pk"] = "PK";
    /** Poland */
    SponsorsCountryOrRegionCode["Pl"] = "PL";
    /** Saint Pierre and Miquelon */
    SponsorsCountryOrRegionCode["Pm"] = "PM";
    /** Pitcairn */
    SponsorsCountryOrRegionCode["Pn"] = "PN";
    /** Puerto Rico */
    SponsorsCountryOrRegionCode["Pr"] = "PR";
    /** Palestine */
    SponsorsCountryOrRegionCode["Ps"] = "PS";
    /** Portugal */
    SponsorsCountryOrRegionCode["Pt"] = "PT";
    /** Palau */
    SponsorsCountryOrRegionCode["Pw"] = "PW";
    /** Paraguay */
    SponsorsCountryOrRegionCode["Py"] = "PY";
    /** Qatar */
    SponsorsCountryOrRegionCode["Qa"] = "QA";
    /** Reunion */
    SponsorsCountryOrRegionCode["Re"] = "RE";
    /** Romania */
    SponsorsCountryOrRegionCode["Ro"] = "RO";
    /** Serbia */
    SponsorsCountryOrRegionCode["Rs"] = "RS";
    /** Russian Federation */
    SponsorsCountryOrRegionCode["Ru"] = "RU";
    /** Rwanda */
    SponsorsCountryOrRegionCode["Rw"] = "RW";
    /** Saudi Arabia */
    SponsorsCountryOrRegionCode["Sa"] = "SA";
    /** Solomon Islands */
    SponsorsCountryOrRegionCode["Sb"] = "SB";
    /** Seychelles */
    SponsorsCountryOrRegionCode["Sc"] = "SC";
    /** Sudan */
    SponsorsCountryOrRegionCode["Sd"] = "SD";
    /** Sweden */
    SponsorsCountryOrRegionCode["Se"] = "SE";
    /** Singapore */
    SponsorsCountryOrRegionCode["Sg"] = "SG";
    /** Saint Helena */
    SponsorsCountryOrRegionCode["Sh"] = "SH";
    /** Slovenia */
    SponsorsCountryOrRegionCode["Si"] = "SI";
    /** Svalbard and Jan Mayen Islands */
    SponsorsCountryOrRegionCode["Sj"] = "SJ";
    /** Slovakia */
    SponsorsCountryOrRegionCode["Sk"] = "SK";
    /** Sierra Leone */
    SponsorsCountryOrRegionCode["Sl"] = "SL";
    /** San Marino */
    SponsorsCountryOrRegionCode["Sm"] = "SM";
    /** Senegal */
    SponsorsCountryOrRegionCode["Sn"] = "SN";
    /** Somalia */
    SponsorsCountryOrRegionCode["So"] = "SO";
    /** Suriname */
    SponsorsCountryOrRegionCode["Sr"] = "SR";
    /** South Sudan */
    SponsorsCountryOrRegionCode["Ss"] = "SS";
    /** Sao Tome and Principe */
    SponsorsCountryOrRegionCode["St"] = "ST";
    /** El Salvador */
    SponsorsCountryOrRegionCode["Sv"] = "SV";
    /** Sint Maarten (Dutch part) */
    SponsorsCountryOrRegionCode["Sx"] = "SX";
    /** Swaziland */
    SponsorsCountryOrRegionCode["Sz"] = "SZ";
    /** Turks and Caicos Islands */
    SponsorsCountryOrRegionCode["Tc"] = "TC";
    /** Chad */
    SponsorsCountryOrRegionCode["Td"] = "TD";
    /** French Southern Lands */
    SponsorsCountryOrRegionCode["Tf"] = "TF";
    /** Togo */
    SponsorsCountryOrRegionCode["Tg"] = "TG";
    /** Thailand */
    SponsorsCountryOrRegionCode["Th"] = "TH";
    /** Tajikistan */
    SponsorsCountryOrRegionCode["Tj"] = "TJ";
    /** Tokelau */
    SponsorsCountryOrRegionCode["Tk"] = "TK";
    /** Timor-Leste */
    SponsorsCountryOrRegionCode["Tl"] = "TL";
    /** Turkmenistan */
    SponsorsCountryOrRegionCode["Tm"] = "TM";
    /** Tunisia */
    SponsorsCountryOrRegionCode["Tn"] = "TN";
    /** Tonga */
    SponsorsCountryOrRegionCode["To"] = "TO";
    /** Türkiye */
    SponsorsCountryOrRegionCode["Tr"] = "TR";
    /** Trinidad and Tobago */
    SponsorsCountryOrRegionCode["Tt"] = "TT";
    /** Tuvalu */
    SponsorsCountryOrRegionCode["Tv"] = "TV";
    /** Taiwan */
    SponsorsCountryOrRegionCode["Tw"] = "TW";
    /** Tanzania */
    SponsorsCountryOrRegionCode["Tz"] = "TZ";
    /** Ukraine */
    SponsorsCountryOrRegionCode["Ua"] = "UA";
    /** Uganda */
    SponsorsCountryOrRegionCode["Ug"] = "UG";
    /** United States Minor Outlying Islands */
    SponsorsCountryOrRegionCode["Um"] = "UM";
    /** United States of America */
    SponsorsCountryOrRegionCode["Us"] = "US";
    /** Uruguay */
    SponsorsCountryOrRegionCode["Uy"] = "UY";
    /** Uzbekistan */
    SponsorsCountryOrRegionCode["Uz"] = "UZ";
    /** Vatican City */
    SponsorsCountryOrRegionCode["Va"] = "VA";
    /** Saint Vincent and the Grenadines */
    SponsorsCountryOrRegionCode["Vc"] = "VC";
    /** Venezuela */
    SponsorsCountryOrRegionCode["Ve"] = "VE";
    /** Virgin Islands, British */
    SponsorsCountryOrRegionCode["Vg"] = "VG";
    /** Virgin Islands, U.S. */
    SponsorsCountryOrRegionCode["Vi"] = "VI";
    /** Vietnam */
    SponsorsCountryOrRegionCode["Vn"] = "VN";
    /** Vanuatu */
    SponsorsCountryOrRegionCode["Vu"] = "VU";
    /** Wallis and Futuna Islands */
    SponsorsCountryOrRegionCode["Wf"] = "WF";
    /** Samoa */
    SponsorsCountryOrRegionCode["Ws"] = "WS";
    /** Yemen */
    SponsorsCountryOrRegionCode["Ye"] = "YE";
    /** Mayotte */
    SponsorsCountryOrRegionCode["Yt"] = "YT";
    /** South Africa */
    SponsorsCountryOrRegionCode["Za"] = "ZA";
    /** Zambia */
    SponsorsCountryOrRegionCode["Zm"] = "ZM";
    /** Zimbabwe */
    SponsorsCountryOrRegionCode["Zw"] = "ZW";
})(SponsorsCountryOrRegionCode || (exports.SponsorsCountryOrRegionCode = SponsorsCountryOrRegionCode = {}));
/** The different kinds of goals a GitHub Sponsors member can have. */
var SponsorsGoalKind;
(function (SponsorsGoalKind) {
    /** The goal is about getting a certain amount in USD from sponsorships each month. */
    SponsorsGoalKind["MonthlySponsorshipAmount"] = "MONTHLY_SPONSORSHIP_AMOUNT";
    /** The goal is about reaching a certain number of sponsors. */
    SponsorsGoalKind["TotalSponsorsCount"] = "TOTAL_SPONSORS_COUNT";
})(SponsorsGoalKind || (exports.SponsorsGoalKind = SponsorsGoalKind = {}));
/** The different kinds of records that can be featured on a GitHub Sponsors profile page. */
var SponsorsListingFeaturedItemFeatureableType;
(function (SponsorsListingFeaturedItemFeatureableType) {
    /** A repository owned by the user or organization with the GitHub Sponsors profile. */
    SponsorsListingFeaturedItemFeatureableType["Repository"] = "REPOSITORY";
    /** A user who belongs to the organization with the GitHub Sponsors profile. */
    SponsorsListingFeaturedItemFeatureableType["User"] = "USER";
})(SponsorsListingFeaturedItemFeatureableType || (exports.SponsorsListingFeaturedItemFeatureableType = SponsorsListingFeaturedItemFeatureableType = {}));
/** Properties by which Sponsors tiers connections can be ordered. */
var SponsorsTierOrderField;
(function (SponsorsTierOrderField) {
    /** Order tiers by creation time. */
    SponsorsTierOrderField["CreatedAt"] = "CREATED_AT";
    /** Order tiers by their monthly price in cents */
    SponsorsTierOrderField["MonthlyPriceInCents"] = "MONTHLY_PRICE_IN_CENTS";
})(SponsorsTierOrderField || (exports.SponsorsTierOrderField = SponsorsTierOrderField = {}));
/** Properties by which sponsorship update connections can be ordered. */
var SponsorshipNewsletterOrderField;
(function (SponsorshipNewsletterOrderField) {
    /** Order sponsorship newsletters by when they were created. */
    SponsorshipNewsletterOrderField["CreatedAt"] = "CREATED_AT";
})(SponsorshipNewsletterOrderField || (exports.SponsorshipNewsletterOrderField = SponsorshipNewsletterOrderField = {}));
/** Properties by which sponsorship connections can be ordered. */
var SponsorshipOrderField;
(function (SponsorshipOrderField) {
    /** Order sponsorship by creation time. */
    SponsorshipOrderField["CreatedAt"] = "CREATED_AT";
})(SponsorshipOrderField || (exports.SponsorshipOrderField = SponsorshipOrderField = {}));
/** The privacy of a sponsorship */
var SponsorshipPrivacy;
(function (SponsorshipPrivacy) {
    /** Private */
    SponsorshipPrivacy["Private"] = "PRIVATE";
    /** Public */
    SponsorshipPrivacy["Public"] = "PUBLIC";
})(SponsorshipPrivacy || (exports.SponsorshipPrivacy = SponsorshipPrivacy = {}));
/** The possible default commit messages for squash merges. */
var SquashMergeCommitMessage;
(function (SquashMergeCommitMessage) {
    /** Default to a blank commit message. */
    SquashMergeCommitMessage["Blank"] = "BLANK";
    /** Default to the branch's commit messages. */
    SquashMergeCommitMessage["CommitMessages"] = "COMMIT_MESSAGES";
    /** Default to the pull request's body. */
    SquashMergeCommitMessage["PrBody"] = "PR_BODY";
})(SquashMergeCommitMessage || (exports.SquashMergeCommitMessage = SquashMergeCommitMessage = {}));
/** The possible default commit titles for squash merges. */
var SquashMergeCommitTitle;
(function (SquashMergeCommitTitle) {
    /** Default to the commit's title (if only one commit) or the pull request's title (when more than one commit). */
    SquashMergeCommitTitle["CommitOrPrTitle"] = "COMMIT_OR_PR_TITLE";
    /** Default to the pull request's title. */
    SquashMergeCommitTitle["PrTitle"] = "PR_TITLE";
})(SquashMergeCommitTitle || (exports.SquashMergeCommitTitle = SquashMergeCommitTitle = {}));
/** Properties by which star connections can be ordered. */
var StarOrderField;
(function (StarOrderField) {
    /** Allows ordering a list of stars by when they were created. */
    StarOrderField["StarredAt"] = "STARRED_AT";
})(StarOrderField || (exports.StarOrderField = StarOrderField = {}));
/** The possible commit status states. */
var StatusState;
(function (StatusState) {
    /** Status is errored. */
    StatusState["Error"] = "ERROR";
    /** Status is expected. */
    StatusState["Expected"] = "EXPECTED";
    /** Status is failing. */
    StatusState["Failure"] = "FAILURE";
    /** Status is pending. */
    StatusState["Pending"] = "PENDING";
    /** Status is successful. */
    StatusState["Success"] = "SUCCESS";
})(StatusState || (exports.StatusState = StatusState = {}));
/** The possible states of a subscription. */
var SubscriptionState;
(function (SubscriptionState) {
    /** The User is never notified. */
    SubscriptionState["Ignored"] = "IGNORED";
    /** The User is notified of all conversations. */
    SubscriptionState["Subscribed"] = "SUBSCRIBED";
    /** The User is only notified when participating or @mentioned. */
    SubscriptionState["Unsubscribed"] = "UNSUBSCRIBED";
})(SubscriptionState || (exports.SubscriptionState = SubscriptionState = {}));
/** Properties by which team discussion comment connections can be ordered. */
var TeamDiscussionCommentOrderField;
(function (TeamDiscussionCommentOrderField) {
    /** Allows sequential ordering of team discussion comments (which is equivalent to chronological ordering). */
    TeamDiscussionCommentOrderField["Number"] = "NUMBER";
})(TeamDiscussionCommentOrderField || (exports.TeamDiscussionCommentOrderField = TeamDiscussionCommentOrderField = {}));
/** Properties by which team discussion connections can be ordered. */
var TeamDiscussionOrderField;
(function (TeamDiscussionOrderField) {
    /** Allows chronological ordering of team discussions. */
    TeamDiscussionOrderField["CreatedAt"] = "CREATED_AT";
})(TeamDiscussionOrderField || (exports.TeamDiscussionOrderField = TeamDiscussionOrderField = {}));
/** Properties by which team member connections can be ordered. */
var TeamMemberOrderField;
(function (TeamMemberOrderField) {
    /** Order team members by creation time */
    TeamMemberOrderField["CreatedAt"] = "CREATED_AT";
    /** Order team members by login */
    TeamMemberOrderField["Login"] = "LOGIN";
})(TeamMemberOrderField || (exports.TeamMemberOrderField = TeamMemberOrderField = {}));
/** The possible team member roles; either 'maintainer' or 'member'. */
var TeamMemberRole;
(function (TeamMemberRole) {
    /** A team maintainer has permission to add and remove team members. */
    TeamMemberRole["Maintainer"] = "MAINTAINER";
    /** A team member has no administrative permissions on the team. */
    TeamMemberRole["Member"] = "MEMBER";
})(TeamMemberRole || (exports.TeamMemberRole = TeamMemberRole = {}));
/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
var TeamMembershipType;
(function (TeamMembershipType) {
    /** Includes immediate and child team members for the team. */
    TeamMembershipType["All"] = "ALL";
    /** Includes only child team members for the team. */
    TeamMembershipType["ChildTeam"] = "CHILD_TEAM";
    /** Includes only immediate members of the team. */
    TeamMembershipType["Immediate"] = "IMMEDIATE";
})(TeamMembershipType || (exports.TeamMembershipType = TeamMembershipType = {}));
/** The possible team notification values. */
var TeamNotificationSetting;
(function (TeamNotificationSetting) {
    /** No one will receive notifications. */
    TeamNotificationSetting["NotificationsDisabled"] = "NOTIFICATIONS_DISABLED";
    /** Everyone will receive notifications when the team is @mentioned. */
    TeamNotificationSetting["NotificationsEnabled"] = "NOTIFICATIONS_ENABLED";
})(TeamNotificationSetting || (exports.TeamNotificationSetting = TeamNotificationSetting = {}));
/** Properties by which team connections can be ordered. */
var TeamOrderField;
(function (TeamOrderField) {
    /** Allows ordering a list of teams by name. */
    TeamOrderField["Name"] = "NAME";
})(TeamOrderField || (exports.TeamOrderField = TeamOrderField = {}));
/** The possible team privacy values. */
var TeamPrivacy;
(function (TeamPrivacy) {
    /** A secret team can only be seen by its members. */
    TeamPrivacy["Secret"] = "SECRET";
    /** A visible team can be seen and @mentioned by every member of the organization. */
    TeamPrivacy["Visible"] = "VISIBLE";
})(TeamPrivacy || (exports.TeamPrivacy = TeamPrivacy = {}));
/** Properties by which team repository connections can be ordered. */
var TeamRepositoryOrderField;
(function (TeamRepositoryOrderField) {
    /** Order repositories by creation time */
    TeamRepositoryOrderField["CreatedAt"] = "CREATED_AT";
    /** Order repositories by name */
    TeamRepositoryOrderField["Name"] = "NAME";
    /** Order repositories by permission */
    TeamRepositoryOrderField["Permission"] = "PERMISSION";
    /** Order repositories by push time */
    TeamRepositoryOrderField["PushedAt"] = "PUSHED_AT";
    /** Order repositories by number of stargazers */
    TeamRepositoryOrderField["Stargazers"] = "STARGAZERS";
    /** Order repositories by update time */
    TeamRepositoryOrderField["UpdatedAt"] = "UPDATED_AT";
})(TeamRepositoryOrderField || (exports.TeamRepositoryOrderField = TeamRepositoryOrderField = {}));
/** The role of a user on a team. */
var TeamRole;
(function (TeamRole) {
    /** User has admin rights on the team. */
    TeamRole["Admin"] = "ADMIN";
    /** User is a member of the team. */
    TeamRole["Member"] = "MEMBER";
})(TeamRole || (exports.TeamRole = TeamRole = {}));
/** The possible states of a thread subscription form action */
var ThreadSubscriptionFormAction;
(function (ThreadSubscriptionFormAction) {
    /** The User cannot subscribe or unsubscribe to the thread */
    ThreadSubscriptionFormAction["None"] = "NONE";
    /** The User can subscribe to the thread */
    ThreadSubscriptionFormAction["Subscribe"] = "SUBSCRIBE";
    /** The User can unsubscribe to the thread */
    ThreadSubscriptionFormAction["Unsubscribe"] = "UNSUBSCRIBE";
})(ThreadSubscriptionFormAction || (exports.ThreadSubscriptionFormAction = ThreadSubscriptionFormAction = {}));
/** The possible states of a subscription. */
var ThreadSubscriptionState;
(function (ThreadSubscriptionState) {
    /** The subscription status is currently disabled. */
    ThreadSubscriptionState["Disabled"] = "DISABLED";
    /** The User is never notified because they are ignoring the list */
    ThreadSubscriptionState["IgnoringList"] = "IGNORING_LIST";
    /** The User is never notified because they are ignoring the thread */
    ThreadSubscriptionState["IgnoringThread"] = "IGNORING_THREAD";
    /** The User is not recieving notifications from this thread */
    ThreadSubscriptionState["None"] = "NONE";
    /** The User is notified becuase they are watching the list */
    ThreadSubscriptionState["SubscribedToList"] = "SUBSCRIBED_TO_LIST";
    /** The User is notified because they are subscribed to the thread */
    ThreadSubscriptionState["SubscribedToThread"] = "SUBSCRIBED_TO_THREAD";
    /** The User is notified because they chose custom settings for this thread. */
    ThreadSubscriptionState["SubscribedToThreadEvents"] = "SUBSCRIBED_TO_THREAD_EVENTS";
    /** The User is notified because they chose custom settings for this thread. */
    ThreadSubscriptionState["SubscribedToThreadType"] = "SUBSCRIBED_TO_THREAD_TYPE";
    /** The subscription status is currently unavailable. */
    ThreadSubscriptionState["Unavailable"] = "UNAVAILABLE";
})(ThreadSubscriptionState || (exports.ThreadSubscriptionState = ThreadSubscriptionState = {}));
/** Reason that the suggested topic is declined. */
var TopicSuggestionDeclineReason;
(function (TopicSuggestionDeclineReason) {
    /** The suggested topic is not relevant to the repository. */
    TopicSuggestionDeclineReason["NotRelevant"] = "NOT_RELEVANT";
    /** The viewer does not like the suggested topic. */
    TopicSuggestionDeclineReason["PersonalPreference"] = "PERSONAL_PREFERENCE";
    /** The suggested topic is too general for the repository. */
    TopicSuggestionDeclineReason["TooGeneral"] = "TOO_GENERAL";
    /** The suggested topic is too specific for the repository (e.g. #ruby-on-rails-version-4-2-1). */
    TopicSuggestionDeclineReason["TooSpecific"] = "TOO_SPECIFIC";
})(TopicSuggestionDeclineReason || (exports.TopicSuggestionDeclineReason = TopicSuggestionDeclineReason = {}));
/** The possible states of a tracked issue. */
var TrackedIssueStates;
(function (TrackedIssueStates) {
    /** The tracked issue is closed */
    TrackedIssueStates["Closed"] = "CLOSED";
    /** The tracked issue is open */
    TrackedIssueStates["Open"] = "OPEN";
})(TrackedIssueStates || (exports.TrackedIssueStates = TrackedIssueStates = {}));
/** The possible durations that a user can be blocked for. */
var UserBlockDuration;
(function (UserBlockDuration) {
    /** The user was blocked for 1 day */
    UserBlockDuration["OneDay"] = "ONE_DAY";
    /** The user was blocked for 30 days */
    UserBlockDuration["OneMonth"] = "ONE_MONTH";
    /** The user was blocked for 7 days */
    UserBlockDuration["OneWeek"] = "ONE_WEEK";
    /** The user was blocked permanently */
    UserBlockDuration["Permanent"] = "PERMANENT";
    /** The user was blocked for 3 days */
    UserBlockDuration["ThreeDays"] = "THREE_DAYS";
})(UserBlockDuration || (exports.UserBlockDuration = UserBlockDuration = {}));
/** Properties by which user status connections can be ordered. */
var UserStatusOrderField;
(function (UserStatusOrderField) {
    /** Order user statuses by when they were updated. */
    UserStatusOrderField["UpdatedAt"] = "UPDATED_AT";
})(UserStatusOrderField || (exports.UserStatusOrderField = UserStatusOrderField = {}));
/** Properties by which verifiable domain connections can be ordered. */
var VerifiableDomainOrderField;
(function (VerifiableDomainOrderField) {
    /** Order verifiable domains by their creation date. */
    VerifiableDomainOrderField["CreatedAt"] = "CREATED_AT";
    /** Order verifiable domains by the domain name. */
    VerifiableDomainOrderField["Domain"] = "DOMAIN";
})(VerifiableDomainOrderField || (exports.VerifiableDomainOrderField = VerifiableDomainOrderField = {}));
/** Properties by which workflow run connections can be ordered. */
var WorkflowRunOrderField;
(function (WorkflowRunOrderField) {
    /** Order workflow runs by most recently created */
    WorkflowRunOrderField["CreatedAt"] = "CREATED_AT";
})(WorkflowRunOrderField || (exports.WorkflowRunOrderField = WorkflowRunOrderField = {}));
/** The possible states for a workflow. */
var WorkflowState;
(function (WorkflowState) {
    /** The workflow is active. */
    WorkflowState["Active"] = "ACTIVE";
    /** The workflow was deleted from the git repository. */
    WorkflowState["Deleted"] = "DELETED";
    /** The workflow was disabled by default on a fork. */
    WorkflowState["DisabledFork"] = "DISABLED_FORK";
    /** The workflow was disabled for inactivity in the repository. */
    WorkflowState["DisabledInactivity"] = "DISABLED_INACTIVITY";
    /** The workflow was disabled manually. */
    WorkflowState["DisabledManually"] = "DISABLED_MANUALLY";
})(WorkflowState || (exports.WorkflowState = WorkflowState = {}));
exports.AddComment = (0, graphql_tag_1.default) `
    mutation AddComment($id: ID!, $body: String!) {
  addComment(input: {subjectId: $id, body: $body}) {
    clientMutationId
  }
}
    `;
exports.AddPullRequestReviewDraft = (0, graphql_tag_1.default) `
    mutation AddPullRequestReviewDraft($pullRequestId: ID!, $commitSha: GitObjectID) {
  addPullRequestReview(
    input: {pullRequestId: $pullRequestId, commitOID: $commitSha}
  ) {
    pullRequestReview {
      id
    }
  }
}
    `;
exports.AddPullRequestReviewThread = (0, graphql_tag_1.default) `
    mutation AddPullRequestReviewThread($pullRequestId: ID!, $pullRequestReviewId: ID!, $body: String!, $path: String!, $line: Int!, $startLine: Int) {
  addPullRequestReviewThread(
    input: {pullRequestId: $pullRequestId, pullRequestReviewId: $pullRequestReviewId, body: $body, path: $path, line: $line, startLine: $startLine}
  ) {
    thread {
      id
    }
  }
}
    `;
exports.CreateCheckRun = (0, graphql_tag_1.default) `
    mutation CreateCheckRun($repositoryId: ID!, $headSha: GitObjectID!, $name: String!, $startedAt: DateTime, $completedAt: DateTime, $conclusion: CheckConclusionState, $status: RequestableCheckStatusState, $output: CheckRunOutput) {
  createCheckRun(
    input: {repositoryId: $repositoryId, headSha: $headSha, name: $name, startedAt: $startedAt, completedAt: $completedAt, conclusion: $conclusion, status: $status, output: $output}
  ) {
    checkRun {
      id
    }
  }
}
    `;
exports.DeleteComment = (0, graphql_tag_1.default) `
    mutation DeleteComment($id: ID!) {
  deleteIssueComment(input: {id: $id}) {
    clientMutationId
  }
}
    `;
exports.DeletePullRequestReviewComment = (0, graphql_tag_1.default) `
    mutation DeletePullRequestReviewComment($pullRequestReviewCommentId: ID!) {
  deletePullRequestReviewComment(input: {id: $pullRequestReviewCommentId}) {
    clientMutationId
  }
}
    `;
exports.DeletePullRequestReview = (0, graphql_tag_1.default) `
    mutation DeletePullRequestReview($pullRequestReviewId: ID!) {
  deletePullRequestReview(input: {pullRequestReviewId: $pullRequestReviewId}) {
    clientMutationId
  }
}
    `;
exports.GetCheckRunAnnotations = (0, graphql_tag_1.default) `
    query GetCheckRunAnnotations($checkRunId: ID!, $after: String) {
  node(id: $checkRunId) {
    __typename
    ... on CheckRun {
      id
      annotations(first: 100, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          path
          message
          title
          annotationLevel
          location {
            start {
              line
              column
            }
            end {
              line
              column
            }
          }
        }
      }
    }
  }
}
    `;
exports.GetCommitStatusAndCheckRun = (0, graphql_tag_1.default) `
    query GetCommitStatusAndCheckRun($owner: String!, $name: String!, $commitSha: GitObjectID!, $after: String) {
  repository(owner: $owner, name: $name) {
    object(oid: $commitSha) {
      ... on Commit {
        statusCheckRollup {
          contexts(first: 100, after: $after) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              __typename
              ... on StatusContext {
                id
                state
                context
              }
              ... on CheckRun {
                id
                name
                status
              }
            }
          }
        }
      }
    }
  }
}
    `;
exports.GetLoginUser = (0, graphql_tag_1.default) `
    query GetLoginUser {
  viewer {
    login
  }
}
    `;
exports.GetPullRequestChangedFile = (0, graphql_tag_1.default) `
    query GetPullRequestChangedFile($owner: String!, $name: String!, $pull_request: Int!, $after: String) {
  repository(owner: $owner, name: $name) {
    pullRequest(number: $pull_request) {
      files(first: 100, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          path
          additions
          deletions
        }
      }
    }
  }
}
    `;
exports.GetPullRequestComment = (0, graphql_tag_1.default) `
    query GetPullRequestComment($owner: String!, $name: String!, $pull_request: Int!, $after: String) {
  repository(owner: $owner, name: $name) {
    pullRequest(number: $pull_request) {
      id
      comments(first: 100, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          author {
            login
          }
          id
          body
        }
      }
    }
  }
}
    `;
exports.GetPullRequestReviewThreads = (0, graphql_tag_1.default) `
    query GetPullRequestReviewThreads($owner: String!, $name: String!, $number: Int!, $after: String) {
  repository(owner: $owner, name: $name) {
    pullRequest(number: $number) {
      reviewThreads(first: 100, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          path
          line
          startLine
          isOutdated
          isResolved
          comments(first: 1) {
            pageInfo {
              hasNextPage
            }
            nodes {
              id
              body
              author {
                login
              }
            }
          }
        }
      }
    }
  }
}
    `;
exports.GetPullRequest = (0, graphql_tag_1.default) `
    query GetPullRequest($owner: String!, $name: String!, $number: Int!) {
  repository(owner: $owner, name: $name) {
    pullRequest(number: $number) {
      id
    }
  }
}
    `;
exports.GetRepositoryId = (0, graphql_tag_1.default) `
    query GetRepositoryId($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    id
  }
}
    `;
exports.ResolvePullRequestReviewThread = (0, graphql_tag_1.default) `
    mutation ResolvePullRequestReviewThread($pullRequestThreadId: ID!) {
  resolveReviewThread(input: {threadId: $pullRequestThreadId}) {
    clientMutationId
  }
}
    `;
exports.SubmitPullRequestReview = (0, graphql_tag_1.default) `
    mutation SubmitPullRequestReview($pullRequestId: ID!, $pullRequestReviewId: ID!) {
  submitPullRequestReview(
    input: {pullRequestId: $pullRequestId, pullRequestReviewId: $pullRequestReviewId, event: COMMENT}
  ) {
    pullRequestReview {
      id
    }
  }
}
    `;
exports.UpdateCheckRun = (0, graphql_tag_1.default) `
    mutation UpdateCheckRun($repositoryId: ID!, $checkRunId: ID!, $completedAt: DateTime, $conclusion: CheckConclusionState, $status: RequestableCheckStatusState, $output: CheckRunOutput) {
  updateCheckRun(
    input: {repositoryId: $repositoryId, checkRunId: $checkRunId, completedAt: $completedAt, conclusion: $conclusion, status: $status, output: $output}
  ) {
    clientMutationId
  }
}
    `;


/***/ })

};
;