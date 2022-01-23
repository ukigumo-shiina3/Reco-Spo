// import { useState, useEffect, ChangeEvent } from 'react';
// import { supabase } from 'src/libs/supabase';
// import { AuthSession } from '@supabase/supabase-js';
// import { DEFAULT_AVATARS_BUCKET, Post } from 'src/libs/constants';
// import Avatar from '../Avatar';
// import UploadButton from '../Button/UploadButton';

export {};

// export default function Account({ session }: { session: AuthSession }) {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [uploading, setUploading] = useState<boolean>(false);
//   const [avatar, setAvatar] = useState<string | null>(null);

//   useEffect(() => {
//     getPost();
//   }, [session]);

//   async function uploadAvatar(event: ChangeEvent<HTMLInputElement>) {
//     try {
//       setUploading(true);

//       if (!event.target.files || event.target.files.length == 0) {
//         throw '画像をアップロードしてください';
//       }

//       const user = supabase.auth.user();
//       const file = event.target.files[0];
//       const fileExt = file.name.split('.').pop();
//       const fileName = `${session?.user.id}${Math.random()}.${fileExt}`;
//       const filePath = `${fileName}`;

//       let { error: uploadError } = await supabase.storage
//         .from(DEFAULT_AVATARS_BUCKET)
//         .upload(filePath, file);

//       if (uploadError) {
//         throw uploadError;
//       }

//       let { error: updateError } = await supabase.from('admins').upsert({
//         id: user!.id,
//         avatar_url: filePath,
//       });

//       if (updateError) {
//         throw updateError;
//       }
//       setAvatar(null);
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setUploading(false);
//     }
//   }

//   function setProfile(profile: Post) {
//     setAvatar(profile.avatar_url);
//   }

//   async function getPost() {
//     try {
//       setLoading(true);
//       const user = supabase.auth.user();

//       let { data, error } = await supabase
//         .from('admins')
//         .select(`avatar_url`)
//         .eq('id', user!.id)
//         .single();

//       if (error) {
//         throw error;
//       }

//       setProfile(data);
//     } catch (error) {
//       console.log('error', error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function updateProfile() {
//     try {
//       setLoading(true);
//       const user = supabase.auth.user();

//       const updates = {
//         id: user!.id,
//         updated_at: new Date(),
//       };

//       let { error } = await supabase.from('admins').upsert(updates, {
//         returning: 'minimal', // Don't return the value after inserting
//       });

//       if (error) {
//         throw error;
//       }
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className='account'>
//       <div>
//         <label htmlFor='avatar'>Avatar image</label>
//         <div className='avatarField'>
//           <div className='avatarContainer'>
//             {avatar ? (
//               <Avatar url={avatar} size={35} />
//             ) : (
//               <div className='avatarPlaceholder'>?</div>
//             )}
//           </div>
//           <UploadButton onUpload={uploadAvatar} loading={uploading} />
//         </div>
//       </div>
//       <div>
//         <button className='button block primary' onClick={() => updateProfile()} disabled={loading}>
//           {loading ? 'Loading ...' : 'Update'}
//         </button>
//       </div>
//     </div>
//   );
// }
