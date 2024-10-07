import express from "express";

const app = express()

const port = 3001

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/contact', (req, res) => {
    res.render("contact")
})

// Handle form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Logic to handle form data, e.g., send an email or save to a database
    // For demonstration, let's just log it for now
    console.log(`Received contact form:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Redirect or render a success page
    res.send('Thank you for your message!');
});

app.listen(port, () => {
    console.log("listening on the port", port);

})