
import pool from "../configs/connectDB";
import multer from 'multer';
var appRoot = require('app-root-path');
const HomePage = (req, res) => {
    res.send('Hello World!')
}
const HomePage1 = async (req, res) => {
    let data = [];
    const [rows, fields] = await pool.execute('SELECT * FROM `users`')
    res.render('View.ejs', { dataUser: rows });


}
const User = async (req, res) => {
    let id;
    if (req.params.userID != 'style.css' && req.params.userID) {
        id = req.params.userID
    }
    console.log(id);
    const [rows, fields] = await pool.execute(`SELECT * FROM users where id=${id}`);
    console.log(rows);
    res.render('User.ejs', { dataUser: rows })

}
const SendMail = async (req, res) => {
    console.log(123);
    const from = req.body.from
    const to = req.body.to
    const subject = req.body.subject
    const message = req.body.message
    // const transporter = nodemailer.createTranspoter({
    //     service: 'gmail',
    //     auth: {
    //         user: '20130254@st.hcmuaf.edu.vn',
    //         pass: "hauvip9a8"
    //     }
    // }
    // )
    const mailOption = {
        from,
        to,
        subject,
        text: message,
    }
    // transporter.sendMail(mailOption, function (err, info) {
    //     if (err) {
    //         return res.send(err)
    //     } else {
    //         return res.send(info.response)
    //     }
    // })
    return res.json(mailOption)

}
const deleteUser = async (req, res) => {
    console.log(req.params);
    await pool.execute(`DELETE FROM users WHERE id=${req.params.id}`);
    return res.redirect('/home');

}
const updateUser = async (req, res) => {
    let id = 0;
    console.log(req.params);
    if (req.params.id != 'style.css' && req.params.id) {
        id = req.params.id
    }
    console.log(`select * from users where id=${id}`);
    const [rows, fields] = await pool.execute(`select * from users where id=${id}`);

    return res.render('UpdateUser.ejs', { dataUser: rows })
}
const UpdateFormUser = async (req, res) => {
    const data = req.body;
    console.log(`UPDATE users SET lastname=${data.lastname}, firstname=${data.firstname}, email=${data.email}, address=${data.address} WHERE id=${req.params.id}`);
    await pool.execute("UPDATE users SET lastname=?, firstname=?, email=?, address=? WHERE id=?", [data.lastname, data.firstname, data.email, data.address, req.params.id]);
    return res.redirect('/home');

}

const upload = multer().single('profile_pic');

let handleUploadFile = async (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form

    upload(req, res, function (err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any
        console.log(">>>>" + req.file.filename);
        res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" alt="ERR" width="500"><hr /><a href="/upload">Upload another image</a>`);
        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        // Display uploaded image for user validation

    });
}
const UploadFile = (req, res) => {
    return res.render('uploadFile.ejs')

}
const Login = (req, res) => {


}


export { HomePage, HomePage1, User, SendMail, deleteUser, updateUser, UpdateFormUser, UploadFile, handleUploadFile }