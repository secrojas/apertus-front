import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



export const MyEditor = ({descLarge, setDescLarge}:{descLarge:string,setDescLarge:React.Dispatch<React.SetStateAction<string>>})=> {
  
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        
      [{ 'header': 1 }, { 'header': 2 }],            
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],    
      [{ 'indent': '-1'}, { 'indent': '+1' }],          
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],         
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['link'],
       ['clean']            
    ],
  }
  
  const formats = ['header', 'bold', 'italic', 'underline', 'strike', 
    'list', 'bullet', 'indent', 'color','font','background','align','link' ]
  
    

  return <ReactQuill 
             
              theme="snow"
              value={descLarge} 
              onChange={setDescLarge}
              modules={modules}
              formats={formats}
              style={{width:'100%'}}
              />;
}