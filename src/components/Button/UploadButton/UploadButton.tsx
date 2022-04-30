import { Input } from '@mantine/core';
import { ChangeEventHandler, useMemo } from 'react';

export type UploadButtonProps = {
  onUpload: ChangeEventHandler<HTMLInputElement>;
  loading: boolean;
};

export default function UploadButton({ loading, onUpload }: UploadButtonProps) {
  return useMemo(() => (
    <div>
      <label className='ml-3' htmlFor='single'>
        {loading ? '.......' : '変更'}
      </label>
      {/* <input
        style={{
          visibility: 'hidden',
        }}
        type='file'
        id='single'
        {...props.inputProps}
        accept='image/*'
        onChange={props.onUpload}
        disabled={props.loading}
      /> */}
      <Input
        type='file'
        id='single'
        style={{
          visibility: 'hidden',
        }}
        accept='image/*'
        onChange={onUpload}
        disabled={loading}
      />
    </div>
  ), [loading, onUpload]);
}
