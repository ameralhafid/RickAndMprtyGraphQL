
import gql from 'graphql-tag';

export const GET_PAGES = gql`

{characters{info{
  count
  pages
  prev
  next
} 
}}`
