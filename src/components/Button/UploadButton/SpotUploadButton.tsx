import { useMemo } from 'react';
import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import { Dropzone, DropzoneStatus, MIME_TYPES } from '@mantine/dropzone';
import { Upload, Camera, Icon as TablerIcon, Loader } from 'tabler-icons-react';

export type SpotUploadButtonProps = {
  onUpload: (files: File[]) => void;
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

export default function SpotUploadButton(props: SpotUploadButtonProps) {
  const theme = useMantineTheme();
  return useMemo(
    () => (
      <div>
        <label className='ml-3' htmlFor='single'>
          {props.loading ? (
            '.......'
          ) : (
            <div className='mt-5'>
              <Dropzone
                onDrop={props.onUpload}
                onReject={(files) => console.log('rejected files', files)}
                accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg, MIME_TYPES.gif]}
                multiple={true}
                disabled={props.loading}
              >
                {(status) => dropzoneChildren(status, theme)}
              </Dropzone>
            </div>
          )}
        </label>
      </div>
    ),
    [props.onUpload, props.loading, theme],
  );
}
