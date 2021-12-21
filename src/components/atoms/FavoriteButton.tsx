import clsx from 'clsx'
import { VFC } from 'react'
const FavoriteButton: VFC<{ layoutStyle: string }> = ({ layoutStyle }) => (
  <div
    className={clsx(
      layoutStyle,
      'bg-white h-5 w-32 rounded shadow-md text-xs flex items-center justify-center'
    )}
  >
    ★お気に入り
  </div>
)

export default FavoriteButton
