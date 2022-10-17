import { HomePage, SendMail, HomePage1, Login, User, CreateUser, deleteUser, updateUser, UpdateFormUser, UploadFile, handleUploadFile } from "../controller";

import Router from "router";
import { connection } from "../configs/connectDB";
import multer from 'multer';
import path from 'path';
var appRoot = require('app-root-path');
const router = Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/image/");
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });
const initRouter = (router) => {
    router.get('/', HomePage)
    router.get('/home', HomePage1)
    router.get('/upload-file', UploadFile);
    router.get('/user/:userID', User)
    // router.post('/create-new-user', CreateUser)
    router.post('/delete-user/:id', deleteUser);
    router.get('/update-user/:id', updateUser);
    router.post('/form-fix-user/:id', UpdateFormUser);
    router.post('/sendMail', SendMail);
    router.post('/upload-profile-pic', upload.single('profile_pic'), handleUploadFile)

}
export default initRouter;