import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
    [key: string]: number
  }
}

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 248px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    margin-top: 195px;
  }
`

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  margin-bottom: 10px;
  padding: 5px 0.75rem;
  border-radius: 0.75rem;
  font-size: 18px;
  background-color: ${({ active }) => (active ? '#2f86a6' : '#f8f9fa')};
  color: ${({ active }) => (active ? '#fff' : '#212529')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  & span {
    color: ${({ active }) => (active ? '#fff' : '#868e96')};
  }

  &:hover {
    color: ${({ active }) => (active ? '#fff' : '#212529')};
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {name} <span>({count})</span>
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
