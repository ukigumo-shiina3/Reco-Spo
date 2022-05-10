/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
import { ChangeEventHandler, useMemo } from 'react';
import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import { Dropzone, DropzoneStatus, MIME_TYPES } from '@mantine/dropzone';
import { Upload, Camera, X, Icon as TablerIcon, Loader } from 'tabler-icons-react';

export type SpotUploadButtonProps = {
  onUpload: ChangeEventHandler<HTMLInputElement>;
  loading: boolean;
};

const getIconColor = (status: DropzoneStatus, theme: MantineTheme) => {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
    : status.rejected
    ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.colors.gray[7];
};

const ImageUploadIcon = ({
  status,
  ...props
}: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) => {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <Loader {...props} />;
  }

  return <Camera {...props} />;
};

const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
  <Group
    position='center'
    spacing='sm'
    direction='column'
    style={{ minHeight: 120, pointerEvents: 'none' }}
  >
    <div className='flex border-2 border-red-600 rounded-lg p-2 mt-6'>
      <ImageUploadIcon
        status={status}
        style={{ color: getIconColor(status, theme) }}
        size={20}
        color='red'
      />
      <Text size='sm' color='red' weight={700} inline mt={3} ml={3}>
        画像を選択する
      </Text>
    </div>
    {console.log(status)}
    <div>
      <Text size='sm' color='blue' weight={700} inline>
        またはドラッグ&ドロップ
      </Text>
    </div>
  </Group>
);

export default function SpotUploadButton({ loading, onUpload }: SpotUploadButtonProps) {
  const theme = useMantineTheme();
  useMemo(
    () => (
      <div>
        <label className='ml-3' htmlFor='single'>
          {loading ? (
            '.......'
          ) : (
            <div className='mt-5'>
              <Dropzone
                onDrop={(files) => console.log('accepted files', files)}
                onReject={(files) => console.log('rejected files', files)}
                accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg, MIME_TYPES.gif]}
                multiple={true}
              >
                {(status) => dropzoneChildren(status, theme)}
                {/* {console.log('status', status)} */}
                onChange={onUpload}
                disabled={loading}
              </Dropzone>
            </div>
          )}
        </label>
        {/* <input
        style={{
          visibility: 'hidden',
        }}
        type='file'
        id='single'
        multiple
        onChange={props.onUpload}
        onClick={(e) => e.stopPropagation()}
        disabled={props.loading}
      /> */}
      </div>
    ),
    [loading, onUpload],
  );
}
