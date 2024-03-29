import {
  createJob,
  deleteJob,
  updateJob,
  getAllJobs,
  showStats,
} from '../controllers/jobsController.js';

import express from 'express';
const router = express.Router();

router.route('/').post(createJob).get(getAllJobs);
//id needed to get stats
router.route('/stats').get(showStats);
router.route('/:id').delete(deleteJob).patch(updateJob);

export default router;
