// @ts-nocheck
import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client/react';
import * as ApolloReactHooks from '@apollo/client/react';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  body: Scalars['String']['output'];
  category: Category;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Float']['output'];
  mainPictureUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Category = {
  __typename?: 'Category';
  articles?: Maybe<Array<Article>>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type CreateArticleInput = {
  body: Scalars['String']['input'];
  category: ObjectId;
  mainPictureUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
  deleteArticle: Scalars['Boolean']['output'];
};


export type MutationCreateArticleArgs = {
  data: CreateArticleInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['Float']['input'];
};

export type ObjectId = {
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles: Array<Article>;
  categories: Array<Category>;
};


export type QueryArticleArgs = {
  id: Scalars['Float']['input'];
};


export type QueryArticlesArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: number, name: string }> };

export type CreateArticleMutationVariables = Exact<{
  data: CreateArticleInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'Article', id: number } };

export type DeleteArticleMutationVariables = Exact<{
  deleteArticleId: Scalars['Float']['input'];
}>;


export type DeleteArticleMutation = { __typename?: 'Mutation', deleteArticle: boolean };

export type ArticleQueryVariables = Exact<{
  articleId: Scalars['Float']['input'];
}>;


export type ArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', id: number, createdAt: any, body: string, mainPictureUrl: string, title: string, updatedAt: any, category: { __typename?: 'Category', name: string, id: number } } | null };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', id: number, mainPictureUrl: string, title: string }> };

export type RecentPostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Float']['input']>;
}>;


export type RecentPostsQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', id: number, mainPictureUrl: string, title: string }> };


export const CategoriesDocument = gql`
    query Categories {
  categories {
    id
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = ApolloReactCommon.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CreateArticleDocument = gql`
    mutation CreateArticle($data: CreateArticleInput!) {
  createArticle(data: $data) {
    id
  }
}
    `;
export type CreateArticleMutationFn = ApolloReactCommon.MutationFunction<CreateArticleMutation, CreateArticleMutationVariables>;

/**
 * __useCreateArticleMutation__
 *
 * To run a mutation, you first call `useCreateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArticleMutation, { data, loading, error }] = useCreateArticleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateArticleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateArticleMutation, CreateArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateArticleMutation, CreateArticleMutationVariables>(CreateArticleDocument, options);
      }
export type CreateArticleMutationHookResult = ReturnType<typeof useCreateArticleMutation>;
export type CreateArticleMutationResult = ApolloReactCommon.MutationResult<CreateArticleMutation>;
export type CreateArticleMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateArticleMutation, CreateArticleMutationVariables>;
export const DeleteArticleDocument = gql`
    mutation DeleteArticle($deleteArticleId: Float!) {
  deleteArticle(id: $deleteArticleId)
}
    `;
export type DeleteArticleMutationFn = ApolloReactCommon.MutationFunction<DeleteArticleMutation, DeleteArticleMutationVariables>;

/**
 * __useDeleteArticleMutation__
 *
 * To run a mutation, you first call `useDeleteArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteArticleMutation, { data, loading, error }] = useDeleteArticleMutation({
 *   variables: {
 *      deleteArticleId: // value for 'deleteArticleId'
 *   },
 * });
 */
export function useDeleteArticleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteArticleMutation, DeleteArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteArticleMutation, DeleteArticleMutationVariables>(DeleteArticleDocument, options);
      }
export type DeleteArticleMutationHookResult = ReturnType<typeof useDeleteArticleMutation>;
export type DeleteArticleMutationResult = ApolloReactCommon.MutationResult<DeleteArticleMutation>;
export type DeleteArticleMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteArticleMutation, DeleteArticleMutationVariables>;
export const ArticleDocument = gql`
    query Article($articleId: Float!) {
  article(id: $articleId) {
    id
    createdAt
    body
    category {
      name
      id
    }
    mainPictureUrl
    title
    updatedAt
  }
}
    `;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      articleId: // value for 'articleId'
 *   },
 * });
 */
export function useArticleQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ArticleQuery, ArticleQueryVariables> & ({ variables: ArticleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export function useArticleSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleSuspenseQueryHookResult = ReturnType<typeof useArticleSuspenseQuery>;
export type ArticleQueryResult = ApolloReactCommon.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const PostsDocument = gql`
    query Posts {
  articles {
    id
    mainPictureUrl
    title
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export function usePostsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsSuspenseQueryHookResult = ReturnType<typeof usePostsSuspenseQuery>;
export type PostsQueryResult = ApolloReactCommon.QueryResult<PostsQuery, PostsQueryVariables>;
export const RecentPostsDocument = gql`
    query recentPosts($limit: Float) {
  articles(limit: $limit) {
    id
    mainPictureUrl
    title
  }
}
    `;

/**
 * __useRecentPostsQuery__
 *
 * To run a query within a React component, call `useRecentPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentPostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useRecentPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RecentPostsQuery, RecentPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<RecentPostsQuery, RecentPostsQueryVariables>(RecentPostsDocument, options);
      }
export function useRecentPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecentPostsQuery, RecentPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<RecentPostsQuery, RecentPostsQueryVariables>(RecentPostsDocument, options);
        }
export function useRecentPostsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<RecentPostsQuery, RecentPostsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<RecentPostsQuery, RecentPostsQueryVariables>(RecentPostsDocument, options);
        }
export type RecentPostsQueryHookResult = ReturnType<typeof useRecentPostsQuery>;
export type RecentPostsLazyQueryHookResult = ReturnType<typeof useRecentPostsLazyQuery>;
export type RecentPostsSuspenseQueryHookResult = ReturnType<typeof useRecentPostsSuspenseQuery>;
export type RecentPostsQueryResult = ApolloReactCommon.QueryResult<RecentPostsQuery, RecentPostsQueryVariables>;