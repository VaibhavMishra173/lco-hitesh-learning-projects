const express = require("express");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const app = express();

cloudinary.config({
  // cloud_name: processs.env.CLOUD_NAME
//   cloud_name: "dk92l1yoc",
//   api_key: "769888332458168",
//   api_secret: "7Kh-q81hHRdyDNiBxISrouGEFCo"
  cloud_name: "dhznbut3j",
  api_key: "282627517278256",
  api_secret: "ApN-PuPHSfwC3-HC9c2nUxY1USw"
});

app.set("view engine", "ejs");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
  })
);

app.get("/", (req, res) => {
  res.send("<h1>Hello from LCO</h1>");
});

app.get("/myget", (req, res) => {
  console.log(req.body);

  res.send(req.body);
});

app.post("/mypost", async (req, res) => {
  console.log(req.body);
  console.log(req.files);

  let result;
  let imageArray = [];

  // case - multiple images

  if (req.files) {
    for (let index = 0; index < req.files.samplefile.length; index++) {
      let result = await cloudinary.uploader.upload(
        req.files.samplefile[index].tempFilePath,
        {
          folder: "users"
        }
      );
    
      imageArray.push({
        public_id: result.public_id,
        secure_url: result.secure_url
      });
    }
  }

  // ### use case for single image
  // let file = req.files.samplefile;
  // result = await cloudinary.uploader.upload(file.tempFilePath, {
  //   folder: "users",
  // });

  console.log(result);

  let details = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    result,
    imageArray
  };
  console.log(details);

  res.send(details);
});

// just to render the forms
app.get("/mygetform", (req, res) => {
  res.render("getform");
});
app.get("/mypostform", (req, res) => {
  res.render("postform");
});

app.listen(4000, () => console.log(`Server is runnning at port 4000`));



