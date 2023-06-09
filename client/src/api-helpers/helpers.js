import axios from 'axios';

export const getAllPosts = async () => {
    try {
        const res = await axios.get("http://localhost:5000/post");

        if (res.status !== 200) {
            return console.log("error");
        }

        const data = res.data;
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const sendAuthRequest = async(signup, data)=>{
    const res = await axios.post("http://localhost:5000/signup")
}