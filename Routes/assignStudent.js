
import express from 'express'
import {clients} from "../index.js"



var apps=express.Router()

apps.post("/", async (req, res) => {
 
  
    const mentorData = await mentor.findById(req.body.mentorId);
    mentors.assignStudent = [
      ...mentors.assignStudent, ...req.body.student,
    ];
    mentorData.save();
    
    req.body.student.forEach(async (stud) => {
      const temp = await student.findById(stud);
      temp.mentorAssigned = req.body.mentorId;
      temp.save();
    });

  });
export var assignStudent=apps