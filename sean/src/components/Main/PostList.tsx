import React, { FunctionComponent, useMemo } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

// const POST_ITEM_DATA = {
//   title: 'Post Item Title',
//   date: '2022.02.28.',
//   categories: ['Web', 'Frontend', 'Testing'],
//   summary:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
//   thumbnail:
//     'https://i.pinimg.com/originals/f2/5b/8a/f25b8a942c9151cd67bef6ed4ac0050b.jpg',
//   link: '<https://www.google.co.kr/>',
// }

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )
  // hooks/useInfiniteScroll.tsx로 이동
  // const postListData = useMemo(
  //   () =>
  //     posts.filter(
  //       ({
  //         node: {
  //           frontmatter: { categories },
  //         },
  //       }: PostListItemType) =>
  //         selectedCategory !== 'All'
  //           ? categories.includes(selectedCategory)
  //           : true,
  //     ),
  //   [selectedCategory],
  // )

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
