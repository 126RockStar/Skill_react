import React, {useState} from 'react'
import { storage } from '../../../../stores/firebase'


const ImageUpload = () =>{

    const [ image, setImage ] = useState();
    const [ url, setUrl ] = useState();
    const [ progress, setProgress ] = useState('0');

    const handleChange = (e) =>{
        if(e.target.files[0]){        
            setImage(e.target.files[0])
        }        
    }
    // console.log('image', image)
    const handleUpload = () =>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot)=>{
            //progress function
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(progress)
        },
        (error)=>{
            //error function
            console.log(error)
        },
        ()=>{
            //complete function
            storage.ref('images').child(image.name).getDownloadURL().then(url=>{
                console.log(url);
                setUrl(url);
            })
        })
    }

    return(
        <div>
            <progress value={progress} max='100'/>
            {image&&(<div>{image.name}</div>)}
            <input type='file' onChange={handleChange}/>
            <button onClick={handleUpload}>Upload</button>
            <image src={'http://via.placeholder.com/300x400' || url} alt='Uploaded Images' width='100px' height='200px'/>
        </div>
    )
}

export default ImageUpload;