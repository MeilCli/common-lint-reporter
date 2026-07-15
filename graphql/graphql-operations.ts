/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type * as Types from './graphql-types.js';

import { DocumentNode } from 'graphql';

export const AddComment = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subjectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode;
export const AddPullRequestReviewDraft = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPullRequestReviewDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commitSha"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GitObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPullRequestReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"commitOID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commitSha"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode;
export const AddPullRequestReviewThread = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPullRequestReviewThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestReviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"line"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startLine"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPullRequestReviewThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestReviewId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestReviewId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"line"},"value":{"kind":"Variable","name":{"kind":"Name","value":"line"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"startLine"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startLine"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode;
export const CreateCheckRun = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCheckRun"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repositoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"headSha"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GitObjectID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"completedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"conclusion"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckConclusionState"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RequestableCheckStatusState"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"output"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckRunOutput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCheckRun"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"repositoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repositoryId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"headSha"},"value":{"kind":"Variable","name":{"kind":"Name","value":"headSha"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"startedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startedAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"completedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"completedAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"conclusion"},"value":{"kind":"Variable","name":{"kind":"Name","value":"conclusion"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"Variable","name":{"kind":"Name","value":"output"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkRun"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode;
export const DeleteComment = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteIssueComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode;
export const DeletePullRequestReviewComment = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePullRequestReviewComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestReviewCommentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePullRequestReviewComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestReviewCommentId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode;
export const DeletePullRequestReview = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePullRequestReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestReviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePullRequestReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestReviewId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestReviewId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode;
export const GetCheckRunAnnotations = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCheckRunAnnotations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkRunId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkRunId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CheckRun"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"annotations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"annotationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"line"}},{"kind":"Field","name":{"kind":"Name","value":"column"}}]}},{"kind":"Field","name":{"kind":"Name","value":"end"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"line"}},{"kind":"Field","name":{"kind":"Name","value":"column"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetCommitStatusAndCheckRun = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommitStatusAndCheckRun"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commitSha"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GitObjectID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"object"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commitSha"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Commit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusCheckRollup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contexts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StatusContext"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"context"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CheckRun"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetLoginUser = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLoginUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}}]}}]}}]} as unknown as DocumentNode;
export const GetPullRequestChangedFile = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPullRequestChangedFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pull_request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pull_request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"additions"}},{"kind":"Field","name":{"kind":"Name","value":"deletions"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetPullRequestComment = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPullRequestComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pull_request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pull_request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetPullRequestReviewThreads = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPullRequestReviewThreads"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reviewThreads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"line"}},{"kind":"Field","name":{"kind":"Name","value":"startLine"}},{"kind":"Field","name":{"kind":"Name","value":"isOutdated"}},{"kind":"Field","name":{"kind":"Name","value":"isResolved"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetPullRequest = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPullRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetRepositoryId = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRepositoryId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode;
export const ResolvePullRequestReviewThread = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResolvePullRequestReviewThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestThreadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolveReviewThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"threadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestThreadId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode;
export const SubmitPullRequestReview = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitPullRequestReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestReviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitPullRequestReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestReviewId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pullRequestReviewId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"event"},"value":{"kind":"EnumValue","value":"COMMENT"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode;
export const UpdateCheckRun = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCheckRun"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repositoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkRunId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"completedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"conclusion"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckConclusionState"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RequestableCheckStatusState"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"output"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckRunOutput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCheckRun"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"repositoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repositoryId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"checkRunId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkRunId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"completedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"completedAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"conclusion"},"value":{"kind":"Variable","name":{"kind":"Name","value":"conclusion"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"Variable","name":{"kind":"Name","value":"output"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode;
export type AddCommentMutationVariables = Exact<{
  id: string | number;
  body: string;
}>;


export type AddCommentMutation = { addComment: { clientMutationId: string | null } | null };

export type AddPullRequestReviewDraftMutationVariables = Exact<{
  pullRequestId: string | number;
  commitSha?: unknown;
}>;


export type AddPullRequestReviewDraftMutation = { addPullRequestReview: { pullRequestReview: { id: string } | null } | null };

export type AddPullRequestReviewThreadMutationVariables = Exact<{
  pullRequestId: string | number;
  pullRequestReviewId: string | number;
  body: string;
  path: string;
  line: number;
  startLine?: number | null | undefined;
}>;


export type AddPullRequestReviewThreadMutation = { addPullRequestReviewThread: { thread: { id: string } | null } | null };

export type CreateCheckRunMutationVariables = Exact<{
  repositoryId: string | number;
  headSha: unknown;
  name: string;
  startedAt?: unknown;
  completedAt?: unknown;
  conclusion?: Types.CheckConclusionState | null | undefined;
  status?: Types.RequestableCheckStatusState | null | undefined;
  output?: Types.CheckRunOutput | null | undefined;
}>;


export type CreateCheckRunMutation = { createCheckRun: { checkRun: { id: string } | null } | null };

export type DeleteCommentMutationVariables = Exact<{
  id: string | number;
}>;


export type DeleteCommentMutation = { deleteIssueComment: { clientMutationId: string | null } | null };

export type DeletePullRequestReviewCommentMutationVariables = Exact<{
  pullRequestReviewCommentId: string | number;
}>;


export type DeletePullRequestReviewCommentMutation = { deletePullRequestReviewComment: { clientMutationId: string | null } | null };

export type DeletePullRequestReviewMutationVariables = Exact<{
  pullRequestReviewId: string | number;
}>;


export type DeletePullRequestReviewMutation = { deletePullRequestReview: { clientMutationId: string | null } | null };

export type GetCheckRunAnnotationsQueryVariables = Exact<{
  checkRunId: string | number;
  after?: string | null | undefined;
}>;


export type GetCheckRunAnnotationsQuery = { node:
    | { __typename: 'AddedToMergeQueueEvent' }
    | { __typename: 'AddedToProjectEvent' }
    | { __typename: 'App' }
    | { __typename: 'AssignedEvent' }
    | { __typename: 'AutoMergeDisabledEvent' }
    | { __typename: 'AutoMergeEnabledEvent' }
    | { __typename: 'AutoRebaseEnabledEvent' }
    | { __typename: 'AutoSquashEnabledEvent' }
    | { __typename: 'AutomaticBaseChangeFailedEvent' }
    | { __typename: 'AutomaticBaseChangeSucceededEvent' }
    | { __typename: 'BaseRefChangedEvent' }
    | { __typename: 'BaseRefDeletedEvent' }
    | { __typename: 'BaseRefForcePushedEvent' }
    | { __typename: 'Blob' }
    | { __typename: 'Bot' }
    | { __typename: 'BranchProtectionRule' }
    | { __typename: 'BypassForcePushAllowance' }
    | { __typename: 'BypassPullRequestAllowance' }
    | { __typename: 'CWE' }
    | { __typename: 'CheckRun', id: string, annotations: { pageInfo: { hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ path: string, message: string, title: string | null, annotationLevel: Types.CheckAnnotationLevel | null, location: { start: { line: number, column: number | null }, end: { line: number, column: number | null } } } | null> | null } | null }
    | { __typename: 'CheckSuite' }
    | { __typename: 'ClosedEvent' }
    | { __typename: 'CodeOfConduct' }
    | { __typename: 'CommentDeletedEvent' }
    | { __typename: 'Commit' }
    | { __typename: 'CommitComment' }
    | { __typename: 'CommitCommentThread' }
    | { __typename: 'Comparison' }
    | { __typename: 'ConnectedEvent' }
    | { __typename: 'ConvertToDraftEvent' }
    | { __typename: 'ConvertedNoteToIssueEvent' }
    | { __typename: 'ConvertedToDiscussionEvent' }
    | { __typename: 'CrossReferencedEvent' }
    | { __typename: 'DemilestonedEvent' }
    | { __typename: 'DependencyGraphManifest' }
    | { __typename: 'DeployKey' }
    | { __typename: 'DeployedEvent' }
    | { __typename: 'Deployment' }
    | { __typename: 'DeploymentEnvironmentChangedEvent' }
    | { __typename: 'DeploymentReview' }
    | { __typename: 'DeploymentStatus' }
    | { __typename: 'DisconnectedEvent' }
    | { __typename: 'Discussion' }
    | { __typename: 'DiscussionCategory' }
    | { __typename: 'DiscussionComment' }
    | { __typename: 'DiscussionPoll' }
    | { __typename: 'DiscussionPollOption' }
    | { __typename: 'DraftIssue' }
    | { __typename: 'Enterprise' }
    | { __typename: 'EnterpriseAdministratorInvitation' }
    | { __typename: 'EnterpriseIdentityProvider' }
    | { __typename: 'EnterpriseMemberInvitation' }
    | { __typename: 'EnterpriseRepositoryInfo' }
    | { __typename: 'EnterpriseServerInstallation' }
    | { __typename: 'EnterpriseServerUserAccount' }
    | { __typename: 'EnterpriseServerUserAccountEmail' }
    | { __typename: 'EnterpriseServerUserAccountsUpload' }
    | { __typename: 'EnterpriseUserAccount' }
    | { __typename: 'Environment' }
    | { __typename: 'ExternalIdentity' }
    | { __typename: 'Gist' }
    | { __typename: 'GistComment' }
    | { __typename: 'HeadRefDeletedEvent' }
    | { __typename: 'HeadRefForcePushedEvent' }
    | { __typename: 'HeadRefRestoredEvent' }
    | { __typename: 'IpAllowListEntry' }
    | { __typename: 'Issue' }
    | { __typename: 'IssueComment' }
    | { __typename: 'Label' }
    | { __typename: 'LabeledEvent' }
    | { __typename: 'Language' }
    | { __typename: 'License' }
    | { __typename: 'LinkedBranch' }
    | { __typename: 'LockedEvent' }
    | { __typename: 'Mannequin' }
    | { __typename: 'MarkedAsDuplicateEvent' }
    | { __typename: 'MarketplaceCategory' }
    | { __typename: 'MarketplaceListing' }
    | { __typename: 'MemberFeatureRequestNotification' }
    | { __typename: 'MembersCanDeleteReposClearAuditEntry' }
    | { __typename: 'MembersCanDeleteReposDisableAuditEntry' }
    | { __typename: 'MembersCanDeleteReposEnableAuditEntry' }
    | { __typename: 'MentionedEvent' }
    | { __typename: 'MergeQueue' }
    | { __typename: 'MergeQueueEntry' }
    | { __typename: 'MergedEvent' }
    | { __typename: 'MigrationSource' }
    | { __typename: 'Milestone' }
    | { __typename: 'MilestonedEvent' }
    | { __typename: 'MovedColumnsInProjectEvent' }
    | { __typename: 'OIDCProvider' }
    | { __typename: 'OauthApplicationCreateAuditEntry' }
    | { __typename: 'OrgAddBillingManagerAuditEntry' }
    | { __typename: 'OrgAddMemberAuditEntry' }
    | { __typename: 'OrgBlockUserAuditEntry' }
    | { __typename: 'OrgConfigDisableCollaboratorsOnlyAuditEntry' }
    | { __typename: 'OrgConfigEnableCollaboratorsOnlyAuditEntry' }
    | { __typename: 'OrgCreateAuditEntry' }
    | { __typename: 'OrgDisableOauthAppRestrictionsAuditEntry' }
    | { __typename: 'OrgDisableSamlAuditEntry' }
    | { __typename: 'OrgDisableTwoFactorRequirementAuditEntry' }
    | { __typename: 'OrgEnableOauthAppRestrictionsAuditEntry' }
    | { __typename: 'OrgEnableSamlAuditEntry' }
    | { __typename: 'OrgEnableTwoFactorRequirementAuditEntry' }
    | { __typename: 'OrgInviteMemberAuditEntry' }
    | { __typename: 'OrgInviteToBusinessAuditEntry' }
    | { __typename: 'OrgOauthAppAccessApprovedAuditEntry' }
    | { __typename: 'OrgOauthAppAccessBlockedAuditEntry' }
    | { __typename: 'OrgOauthAppAccessDeniedAuditEntry' }
    | { __typename: 'OrgOauthAppAccessRequestedAuditEntry' }
    | { __typename: 'OrgOauthAppAccessUnblockedAuditEntry' }
    | { __typename: 'OrgRemoveBillingManagerAuditEntry' }
    | { __typename: 'OrgRemoveMemberAuditEntry' }
    | { __typename: 'OrgRemoveOutsideCollaboratorAuditEntry' }
    | { __typename: 'OrgRestoreMemberAuditEntry' }
    | { __typename: 'OrgUnblockUserAuditEntry' }
    | { __typename: 'OrgUpdateDefaultRepositoryPermissionAuditEntry' }
    | { __typename: 'OrgUpdateMemberAuditEntry' }
    | { __typename: 'OrgUpdateMemberRepositoryCreationPermissionAuditEntry' }
    | { __typename: 'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry' }
    | { __typename: 'Organization' }
    | { __typename: 'OrganizationIdentityProvider' }
    | { __typename: 'OrganizationInvitation' }
    | { __typename: 'OrganizationMigration' }
    | { __typename: 'Package' }
    | { __typename: 'PackageFile' }
    | { __typename: 'PackageTag' }
    | { __typename: 'PackageVersion' }
    | { __typename: 'ParentIssueAddedEvent' }
    | { __typename: 'ParentIssueRemovedEvent' }
    | { __typename: 'PinnedDiscussion' }
    | { __typename: 'PinnedEnvironment' }
    | { __typename: 'PinnedEvent' }
    | { __typename: 'PinnedIssue' }
    | { __typename: 'PrivateRepositoryForkingDisableAuditEntry' }
    | { __typename: 'PrivateRepositoryForkingEnableAuditEntry' }
    | { __typename: 'Project' }
    | { __typename: 'ProjectCard' }
    | { __typename: 'ProjectColumn' }
    | { __typename: 'ProjectV2' }
    | { __typename: 'ProjectV2Field' }
    | { __typename: 'ProjectV2Item' }
    | { __typename: 'ProjectV2ItemFieldDateValue' }
    | { __typename: 'ProjectV2ItemFieldIterationValue' }
    | { __typename: 'ProjectV2ItemFieldNumberValue' }
    | { __typename: 'ProjectV2ItemFieldSingleSelectValue' }
    | { __typename: 'ProjectV2ItemFieldTextValue' }
    | { __typename: 'ProjectV2IterationField' }
    | { __typename: 'ProjectV2SingleSelectField' }
    | { __typename: 'ProjectV2StatusUpdate' }
    | { __typename: 'ProjectV2View' }
    | { __typename: 'ProjectV2Workflow' }
    | { __typename: 'PublicKey' }
    | { __typename: 'PullRequest' }
    | { __typename: 'PullRequestCommit' }
    | { __typename: 'PullRequestCommitCommentThread' }
    | { __typename: 'PullRequestReview' }
    | { __typename: 'PullRequestReviewComment' }
    | { __typename: 'PullRequestReviewThread' }
    | { __typename: 'PullRequestThread' }
    | { __typename: 'Push' }
    | { __typename: 'PushAllowance' }
    | { __typename: 'Query' }
    | { __typename: 'Reaction' }
    | { __typename: 'ReadyForReviewEvent' }
    | { __typename: 'Ref' }
    | { __typename: 'ReferencedEvent' }
    | { __typename: 'Release' }
    | { __typename: 'ReleaseAsset' }
    | { __typename: 'RemovedFromMergeQueueEvent' }
    | { __typename: 'RemovedFromProjectEvent' }
    | { __typename: 'RenamedTitleEvent' }
    | { __typename: 'ReopenedEvent' }
    | { __typename: 'RepoAccessAuditEntry' }
    | { __typename: 'RepoAddMemberAuditEntry' }
    | { __typename: 'RepoAddTopicAuditEntry' }
    | { __typename: 'RepoArchivedAuditEntry' }
    | { __typename: 'RepoChangeMergeSettingAuditEntry' }
    | { __typename: 'RepoConfigDisableAnonymousGitAccessAuditEntry' }
    | { __typename: 'RepoConfigDisableCollaboratorsOnlyAuditEntry' }
    | { __typename: 'RepoConfigDisableContributorsOnlyAuditEntry' }
    | { __typename: 'RepoConfigDisableSockpuppetDisallowedAuditEntry' }
    | { __typename: 'RepoConfigEnableAnonymousGitAccessAuditEntry' }
    | { __typename: 'RepoConfigEnableCollaboratorsOnlyAuditEntry' }
    | { __typename: 'RepoConfigEnableContributorsOnlyAuditEntry' }
    | { __typename: 'RepoConfigEnableSockpuppetDisallowedAuditEntry' }
    | { __typename: 'RepoConfigLockAnonymousGitAccessAuditEntry' }
    | { __typename: 'RepoConfigUnlockAnonymousGitAccessAuditEntry' }
    | { __typename: 'RepoCreateAuditEntry' }
    | { __typename: 'RepoDestroyAuditEntry' }
    | { __typename: 'RepoRemoveMemberAuditEntry' }
    | { __typename: 'RepoRemoveTopicAuditEntry' }
    | { __typename: 'Repository' }
    | { __typename: 'RepositoryInvitation' }
    | { __typename: 'RepositoryMigration' }
    | { __typename: 'RepositoryRule' }
    | { __typename: 'RepositoryRuleset' }
    | { __typename: 'RepositoryRulesetBypassActor' }
    | { __typename: 'RepositoryTopic' }
    | { __typename: 'RepositoryVisibilityChangeDisableAuditEntry' }
    | { __typename: 'RepositoryVisibilityChangeEnableAuditEntry' }
    | { __typename: 'RepositoryVulnerabilityAlert' }
    | { __typename: 'ReviewDismissalAllowance' }
    | { __typename: 'ReviewDismissedEvent' }
    | { __typename: 'ReviewRequest' }
    | { __typename: 'ReviewRequestRemovedEvent' }
    | { __typename: 'ReviewRequestedEvent' }
    | { __typename: 'SavedReply' }
    | { __typename: 'SecurityAdvisory' }
    | { __typename: 'SponsorsActivity' }
    | { __typename: 'SponsorsListing' }
    | { __typename: 'SponsorsListingFeaturedItem' }
    | { __typename: 'SponsorsTier' }
    | { __typename: 'Sponsorship' }
    | { __typename: 'SponsorshipNewsletter' }
    | { __typename: 'Status' }
    | { __typename: 'StatusCheckRollup' }
    | { __typename: 'StatusContext' }
    | { __typename: 'SubIssueAddedEvent' }
    | { __typename: 'SubIssueRemovedEvent' }
    | { __typename: 'SubscribedEvent' }
    | { __typename: 'Tag' }
    | { __typename: 'Team' }
    | { __typename: 'TeamAddMemberAuditEntry' }
    | { __typename: 'TeamAddRepositoryAuditEntry' }
    | { __typename: 'TeamChangeParentTeamAuditEntry' }
    | { __typename: 'TeamDiscussion' }
    | { __typename: 'TeamDiscussionComment' }
    | { __typename: 'TeamRemoveMemberAuditEntry' }
    | { __typename: 'TeamRemoveRepositoryAuditEntry' }
    | { __typename: 'Topic' }
    | { __typename: 'TransferredEvent' }
    | { __typename: 'Tree' }
    | { __typename: 'UnassignedEvent' }
    | { __typename: 'UnlabeledEvent' }
    | { __typename: 'UnlockedEvent' }
    | { __typename: 'UnmarkedAsDuplicateEvent' }
    | { __typename: 'UnpinnedEvent' }
    | { __typename: 'UnsubscribedEvent' }
    | { __typename: 'User' }
    | { __typename: 'UserBlockedEvent' }
    | { __typename: 'UserContentEdit' }
    | { __typename: 'UserList' }
    | { __typename: 'UserNamespaceRepository' }
    | { __typename: 'UserStatus' }
    | { __typename: 'VerifiableDomain' }
    | { __typename: 'Workflow' }
    | { __typename: 'WorkflowRun' }
    | { __typename: 'WorkflowRunFile' }
   | null };

export type GetCommitStatusAndCheckRunQueryVariables = Exact<{
  owner: string;
  name: string;
  commitSha: unknown;
  after?: string | null | undefined;
}>;


export type GetCommitStatusAndCheckRunQuery = { repository: { object:
      | { __typename: 'Blob' }
      | { __typename: 'Commit', statusCheckRollup: { contexts: { pageInfo: { hasNextPage: boolean, endCursor: string | null }, nodes: Array<
              | { __typename: 'CheckRun', id: string, name: string, status: Types.CheckStatusState }
              | { __typename: 'StatusContext', id: string, state: Types.StatusState, context: string }
             | null> | null } } | null }
      | { __typename: 'Tag' }
      | { __typename: 'Tree' }
     | null } | null };

export type GetLoginUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoginUserQuery = { viewer: { login: string } };

export type GetPullRequestChangedFileQueryVariables = Exact<{
  owner: string;
  name: string;
  pull_request: number;
  after?: string | null | undefined;
}>;


export type GetPullRequestChangedFileQuery = { repository: { pullRequest: { files: { pageInfo: { hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ path: string, additions: number, deletions: number } | null> | null } | null } | null } | null };

export type GetPullRequestCommentQueryVariables = Exact<{
  owner: string;
  name: string;
  pull_request: number;
  after?: string | null | undefined;
}>;


export type GetPullRequestCommentQuery = { repository: { pullRequest: { id: string, comments: { pageInfo: { hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ id: string, body: string, author:
            | { login: string }
            | { login: string }
            | { login: string }
            | { login: string }
            | { login: string }
           | null } | null> | null } } | null } | null };

export type GetPullRequestReviewThreadsQueryVariables = Exact<{
  owner: string;
  name: string;
  number: number;
  after?: string | null | undefined;
}>;


export type GetPullRequestReviewThreadsQuery = { repository: { pullRequest: { reviewThreads: { pageInfo: { hasNextPage: boolean, endCursor: string | null }, nodes: Array<{ id: string, path: string, line: number | null, startLine: number | null, isOutdated: boolean, isResolved: boolean, comments: { pageInfo: { hasNextPage: boolean }, nodes: Array<{ id: string, body: string, author:
                | { login: string }
                | { login: string }
                | { login: string }
                | { login: string }
                | { login: string }
               | null } | null> | null } } | null> | null } } | null } | null };

export type GetPullRequestQueryVariables = Exact<{
  owner: string;
  name: string;
  number: number;
}>;


export type GetPullRequestQuery = { repository: { pullRequest: { id: string } | null } | null };

export type GetRepositoryIdQueryVariables = Exact<{
  owner: string;
  name: string;
}>;


export type GetRepositoryIdQuery = { repository: { id: string } | null };

export type ResolvePullRequestReviewThreadMutationVariables = Exact<{
  pullRequestThreadId: string | number;
}>;


export type ResolvePullRequestReviewThreadMutation = { resolveReviewThread: { clientMutationId: string | null } | null };

export type SubmitPullRequestReviewMutationVariables = Exact<{
  pullRequestId: string | number;
  pullRequestReviewId: string | number;
}>;


export type SubmitPullRequestReviewMutation = { submitPullRequestReview: { pullRequestReview: { id: string } | null } | null };

export type UpdateCheckRunMutationVariables = Exact<{
  repositoryId: string | number;
  checkRunId: string | number;
  completedAt?: unknown;
  conclusion?: Types.CheckConclusionState | null | undefined;
  status?: Types.RequestableCheckStatusState | null | undefined;
  output?: Types.CheckRunOutput | null | undefined;
}>;


export type UpdateCheckRunMutation = { updateCheckRun: { clientMutationId: string | null } | null };
