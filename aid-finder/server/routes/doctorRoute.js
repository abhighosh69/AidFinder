import express from 'express';
import { doctorList, doctorLogin, getDocAppointments, appointmentCanceled, appointmentCompleted, doctorDashboard } from '../controllers/doctorController.js';
import authDoctor from '../middlewares/authDoctor.js';
const doctorRouter = express.Router();

doctorRouter.get('/list',doctorList);

doctorRouter.post('/login', doctorLogin);   

doctorRouter.get('/appointments', authDoctor,getDocAppointments);

doctorRouter.post('/appointment-completed', authDoctor, appointmentCompleted);

doctorRouter.post('/appointment-cancelled', authDoctor, appointmentCanceled);

doctorRouter.get('/dashboard', authDoctor, doctorDashboard);


export default doctorRouter;