const experss = require('express');
const router = experss.Router();
const { v4: uuidv4 } = require('uuid')

let books = [{
    id:1,
    autor: 'Jon Doe',
    title: 'Javascript Book'
}]

router.get('/', (req,res)=>{
    res.json(books);
})

router.get('/:id', (req,res)=>{
    const bookId = parseInt(req.params.id, 10)
    const book =books.find(book=> book.id === bookId)
    if(book){

       return res.json(book)
    } 
    return res.status(404).json({
        status: `Book with ${bookId} Not fund`
    })
})

router.put('/:id', (req, res)=>{
    const bookId = parseInt(req.params.id, 10);
    const book = books.find(book=> book.id === bookId);
    books.forEach(book=>{
        if(book.id === bookId){
            book.title= req.body.title;
            book.autor= req.body.author;
        };
    })
    const newBook= books.find(book=> book.id === bookId);

    return res.json(newBook)
})

router.delete('/:id', (req,res)=>{
    const bookId = parseInt(req.params.id, 10);
    books = books.filter(book=> book.id !== bookId);
    const existBook= books.find(book=> book.id === bookId);
    if(!existBook){
        return res.send(`Book with ${bookId} was deleted`).status(200)
    } else {
        return res.send('Something wrong').status(400)
    }
})

router.post('/', (req,res)=>{
    const book = {
        title: req.body.title || 'Default title',
        author: req.body.author || 'Default author',
        id: uuidv4()
    }
    books.push(book)
    return res.json(book)
})
module.exports= router;