import React from 'react'
import {CategoryItemStyles} from '../../styles/category/CategoryItemStyles'
import { Title } from '../TypoGraphy/Title'
import Button from '../buttons/Button'
import { buttonTypes } from '../../constants/buttonTypes'
import MyPortableText from '../TypoGraphy/MyPortableText'
function CategoryItem({title, description, slug}) {
  return (
    <CategoryItemStyles>
        <Title className="title">{title}</Title>
        <div className="text">
            <MyPortableText value={description}/>
        </div>
        <Button to={`/categories/${slug.current}`} variant={buttonTypes.outline}>Explore Category</Button>
    </CategoryItemStyles>
  )
}

export default CategoryItem