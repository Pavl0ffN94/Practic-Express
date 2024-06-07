const express = require('express')
const booksRouter = express.Router()

const app = express();
const prodacts =['Apple', 'Pen', 'Computer'];

// app.use((req,res,next)=>{
//     console.log('Date', new Date(), 'Method', req.method, 'Url', req.originalUrl, 'IP', req.ip);
//     next()
// })
// PUG
// app.set('view engine', 'pug');
// EJS
// app.set('view engine', 'ejs');
//HBS
 app.set('view engine', 'hbs');

app.set('views', './views')




app.get('/', (req,res,next)=>{
    res.send('Its working')
})


app.get('/products', (req, res,next)=>{
    console.log('Page', req.query.page);
    res.json({prodacts})
})

booksRouter.get('/', (req, res)=>{
    res.send('Books')
})

booksRouter.get('/about', (req, res)=>{
    res.send('About books')
})
// PUG
// app.get('/main', (req,res,next)=>{
//     res.render('main', {
//         title: 'Products',
//         message: 'Products list',
//         products: prodacts
//     })
// })


//EGS
// app.get('/main', (req,res,next)=>{
//     res.render('main', {
//         title: 'Products',
//         message: 'Products list',
//         products: prodacts
//     })
// })

//HBS
app.get('/hbs', (req,res,next)=>{
    res.render('main.hbs', {
        title: 'Products',
        message: 'Products list',
        products: prodacts
    })
})

app.get('/products/:id', (req, res,next)=>{
    if(prodacts[req.params.id]){
        res.send(prodacts[req.params.id])
    } else {
        res.status(403).send('Prodacts not found')
    }
})

app.get('/blog', (req,res,next)=>{
    res.redirect(301,'/')
})

app.get('/download', (req,res,next)=>{
    res.download('./public/books.html', 'Other-name-books', (err)=>{
        console.log('File sent');
    })
})

app.use('/books', booksRouter)


app.use((err, req,res,next)=>{
    console.log(err.stack);
    res.status(500).send(err.stack);
})
app.listen(5000, ()=>{
    console.log('Its started', new Date());
})