import express from 'express';
import { addDoctor, adminLogin, allDoctors, allUsers, allAppointmentsAdmin, cancelAppointmentByAdmin, adminDashboard } from '../controllers/adminController.js';
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

// for get all users
adminRouter.post('/all-users', authAdmin, allUsers);

// for change availability of doctor
adminRouter.post('/change-availability',authAdmin,changeAvailability)

// for get all appointments
adminRouter.get('/all-appointments', authAdmin, allAppointmentsAdmin);

// for cancel appointment by admin
adminRouter.post('/cancel-appointment', authAdmin, cancelAppointmentByAdmin);

// for get admin dashboard data
adminRouter.get('/admin-dashboard', authAdmin, adminDashboard);

export default adminRouter;