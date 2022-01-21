import type { VFC } from 'react';
import { Category } from 'src/types/Category';

type CategoryProps = {
  category: Category;
};

export const PrefectureButton: VFC<CategoryProps> = (props) => {
  // console.log(props.category);

  return (
    <button className=' bg-red-400 text-white text-xs font-bold py-2 px-5 rounded '>
      {props.category.prefecture_id}
      {console.log(props.category.prefecture_id)}

      {/* {props.category.prefecture_id['prefectures_name']} */}
      {/* {props.category.prefecture_id.prefectures_name} */}
      {/* {props.category.prefectures_name} */}
      {/* {props.category} */}
    </button>
  );
};
