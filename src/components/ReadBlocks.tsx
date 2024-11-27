import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export function ReadBlocks ({ content }) {
  return (
    <BlocksRenderer content={content} />
  )
}