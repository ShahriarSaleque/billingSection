import axios  from 'axios';

export const saveInformation = (values: any) => {
    axios.post('http://localhost:8000/api/data', values).then((res) => console.log('res', res.data));
};