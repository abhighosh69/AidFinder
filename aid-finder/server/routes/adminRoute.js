import express from 'express';
import { addDoctor, adminLogin, allDoctors } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import { changeAvailability } from '../controllers/doctorController.js';

const adminRouter = express.Router();

// for add doctor
adminRouter.post('/add-doctor', authAdmin,upload.single('image'), addDoctor);

// for admin login
adminRouter.post('/login', adminLogin);

// for get all doctors
adminRouter.post('/all-doctors',authAdmin, allDoctors);

// for change availability of doctor
adminRouter.post('/change-availability',authAdmin,changeAvailability)

export default adminRouter;