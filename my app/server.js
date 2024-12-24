import express from 'express';  
const app = express();  
const port = 3000;  

app.get('/api/users', (req, res) => {  
    res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);  
});  

app.listen(port, () => {  
    console.log(`Server running at http://localhost:${port}`);  
});