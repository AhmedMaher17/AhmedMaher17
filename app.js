import express from 'express'
import bcrypt from 'bcrypt'
//import mongoose from 'mongoose';
//mongoose.connect ('mongodb://UserName:pesorad@localhost:27017')
const app = express();
const port = 3000;
app.use (express.json());
const list = []

app.post ('/us',async (req,res) => {
    try {
        const {email,pasword} = req.body
        const em = list.find ((data) => email === data.email)
        if (em){
            res.status(400).send(`Wrong email or pasword`)
        }
        const pa = await bcrypt.hash (pasword,10)   
        list.push ({email,pasword: pa})
        res.status (201).send (`User added...`)


    }catch  (err) {
        res.status (500).send ({message: err.message});
    }
})

app.get (`/u`,(req,res) => {
    console.log (req.body.email.req.body.pasword)
    res.send (`Created User Ahmed...`)
})

app.post ("/uss",async (req,res) => {
    try {
        const {email,pasword} = req.body
        const em = list.find ((u) => email === u.email)
        if (!em) {
            res.status(400).send (`Wrong email or pasword...`)
        }
        const pa = await bcrypt.compare (pasword,em.pasword)
        if (pa){
            res.status (200).send (`Logged Ni successfully...`)

        }else {
            res.status (400).send (`Wrong email or pasword...`)
        }

        app.get ('/us', (req,res) => {
            const map = list.map (us => ({email : us.email }))
            res.json(map) 
        })
        
    }catch (err) {
        res.status(500).send ({message: err.message})
    }
})



app.listen (port, () => {
    console.log (`Created User Ahmed...3000`)

})

// 🎯 الخلاصة

// required: لازم يتبعت.

// default: قيمة افتراضية.

// unique: مفيش تكرار.

// min/max: أقل وأقصى قيمة.

// enum: قيم محدودة.

// match: تحقق بالـ Regex.

// validate: شرط مخصص.

// select: يظهر/يختفي.

// immutable: مينفعش يتغير.

// get/set: تعديل القيمة عند القراءة/الكتابة.

// timestamps: يضيف createdAt + updatedAt.

// ref: علاقة مع جدول تاني.

// index: تحسين البحث.










