require("./db/db");
const Image = require("./db/model/image")
const path = require('path');
const fs = require('fs');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();
const multer = require("multer");


// app.use(express.static(`${__dirname}/public`));

// app.use('/uploads', express.static(path.join('uploads')))    


app.use('/images', express.static(path.join('images')));    


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });
// app.use(bodyParser.urlencoded({ extended: true }));



// const storage = multer.memoryStorage()


// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "images");
//     },
//     filename: (req, file, cb) => {
//       cb(
//         null,
//         new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
//       );
//     },
//   });

// const multerStorage = multer.diskStorage(
    
//     {
//         destination: (req, file, cb) => {
//             cb(null, 'image');
//         },
//         filename: (req, file, cb) => {
//             // const mimetype = file.mimetype.split('/');
//             // const filetype = mimetype[1];
//             // const fileName = file.originalname + '.' + filetype;
//             // const fileName = Math.random().toString(36).slice(2, 15)+ '.'+ filetype;
//             cb(null, Date.now() + path.extname(file.originalname))
//         }
//     }
// )

// const multerFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith("image")) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }




// const upload = multer({ storage: fileStorage });



// const upload = multer({
//     storage: storage,
//     fileFilter: multerFilter
// })

app.post('/images',upload.single('image'),async(req,res)=>{
    console.log(req);
    // const img = req.body.image
    // console.log(req.file.buffer)
    var img =req.body.image;
    var encode_img = img.toString("base64");
    const image = {
        data: new Buffer.from(encode_img, "base64"),
        // contentType: req.file.mimetype,
      };
      const savedImage = await Image.create({
        image: image,
      });
    //   console.log(savedImage)
     return  res.status(201).send(savedImage);

})


app.get('/images',async(req,res)=>{
    const images = await Image.find({});
    // const images = imagess[0]
    res.status(200).json({images})
 
  })

app.listen(port, () => console.log(`CONNECTION IS SETUP AT ${port}`));


