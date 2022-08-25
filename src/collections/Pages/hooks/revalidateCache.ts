import fetch from 'node-fetch';
import { FieldHook } from 'payload/types';

export const revalidateCache: FieldHook = async ({ data, originalDoc }) =>{
  const theSlug = data.slug;

  // TODO: put this in .env
  // TODO: add a secret key
  const theApiUrl = 'https://g0.wtf/api/revalidate?revalidatePath=/' + theSlug;
  
  const response = fetch(theApiUrl);
  
  // return fetch(theApiUrl); 
}
  



export const populateAuthor: FieldHook = async ({ req: { user }, value, operation}) => {
//   // using this hook only the original creator of the document can be the author
  if (operation === 'create') {
    return user?.id;
  }

//   // when the operation is "update", return the original value so as not to change it
  return value;
};
