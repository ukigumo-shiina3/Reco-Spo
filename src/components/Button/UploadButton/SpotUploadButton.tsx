import { ChangeEventHandler } from 'react';

export type SpotUploadButtonProps = {
  onUpload: ChangeEventHandler<HTMLInputElement>;
  loading: boolean;
};

export default function SpotUploadButton(props: SpotUploadButtonProps) {
  return (
    <div>
      <label className='ml-3' htmlFor='single'>
        {props.loading ? '.......' : '変更'}
      </label>
      <input
        style={{
          visibility: 'hidden',
        }}
        type='file'
        id='single'
        accept='image/*'
        onChange={props.onUpload}
        disabled={props.loading}
      />
    </div>
  );
}
