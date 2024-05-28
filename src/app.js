  const express = require('express')
  const path = require('path')
  const hbs = require('hbs')
  const app = express();
const port = 3000;
const collection = require("./conn")
const admincoll = require("./admin");
const user_contact = require('./user_contact');
const join_us = require("./join_us")
const trainers = require("./trainers")

const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set('view engine', 'hbs')
app.set('views', templatePath)
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath))
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.render('index')
})

app.get("/fitcalc", (req, res) => {
    res.render('fitcalc')
})
app.get("/home", (req, res) => {
    res.render('home')
})
app.get("/contact", (req, res) => {
    res.render('contact')
})
app.get("/signup", (req, res) => {
    res.render('signup')
})
app.get("/joinus", (req, res) => {
    res.render('joinus')
})

app.get("/adminpage", (req, res) => {
    res.render('adminpage')
})



app.post("/login", async (req, res) => {

    try {
        const check = await collection.findOne({ email: req.body.email })

        if (check.password === req.body.password) {
            res.render("home")
        }
        else {
            res.send("wrong credentails")
        }
    }
    catch {
        res.send("wrong details")
    }
})
app.post("/signup", async (req, res) => {
    const data = {
        email: req.body.email,
        phone: req.body.phone,
        name: req.body.name,
        password: req.body.password
    }
    await collection.insertMany([data])

    res.render("home")
})


app.post("/admin", async (req, res) => {

    try {
        const check = await admincoll.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.render("addash")
        }
        else {
            res.send("wrong credentail")
        }
    }
    catch {
        res.send("wrong detail about admin")
    }
})

app.post("/usercontact", async (req, res) => {
    const data = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone, 
        message: req.body.message
    }
    await user_contact.insertMany([data])
    res.redirect("/")
})

app.get('/usertrainers', async (req, res) => {
  try {
    const data = await trainers.find({});
    res.render('usertrainers', { data });
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});


app.post("/joinus", async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone, 
        age: req.body.age, 
        height: req.body.height, 
        currweight: req.body.currweight,
        tarweight: req.body.tarweight,
    }
    await join_us.insertMany([data])
})

app.post("/addtrainers", async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone, 
        age: req.body.age, 
        experience: req.body.experience, 
        qualification: req.body.qualification,
    }
    await trainers.insertMany([data])
    res.redirect("/trainers")
})




// admin page dyanmic

app.get('/active_users', async (req, res) => {
    try {
      const data = await collection.find({});
      res.render('active_users', { data });
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });
app.get('/usercon', async (req, res) => {
    try {
      const data = await user_contact.find({});
      res.render('usercon', { data });
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });

app.get('/joined_user', async (req, res) => {
    try {
      const data = await join_us.find({});
      res.render('joined_user', { data });
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });


app.get('/trainers', async (req, res) => {
    try {
      const data = await trainers.find({});
      res.render('trainers', { data });
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });

  app.post('/deletemes/:id', async (req, res) => {
    try {
      const id = req.params.id;
      await user_contact.findByIdAndDelete(id);
      res.redirect('/usercon');
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });




app.listen(port, () => {
    console.log(`listening on ${port}`)
})