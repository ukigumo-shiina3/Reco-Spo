import { Input } from '@mantine/core';
import { ChangeEventHandler, useMemo } from 'react';

export type UploadButtonProps = {
  onUpload: ChangeEventHandler<HTMLInputElement>;
  loading: boolean;
};

export default function UploadButton({ loading, onUpload }: UploadButtonProps) {
  return useMemo(() => (
    <div className="flex flex-col justify-center items-center">
      <label className="w-full py-1" htmlFor='single'>
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
        className="hidden"
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
