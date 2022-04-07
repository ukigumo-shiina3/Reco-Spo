import { ChangeEventHandler } from 'react';

export type UploadButtonProps = {
  onUpload: ChangeEventHandler<HTMLInputElement>;
  loading: boolean;
};

export default function UploadButton(props: UploadButtonProps) {
  return (
    <div>
      <label className='ml-3' htmlFor='single'>
        {props.loading ? '.......' : '変更'}
      </label>
      <input
        style={{
          visibility: 'hidden',
          position: 'absolute',
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
